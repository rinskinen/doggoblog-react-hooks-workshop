using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;
using Microsoft.WindowsAzure.Storage.Blob;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;

namespace Mimmit
{
    public class PostImages
    {
        public CloudBlobClient _blobClient { get; set; }
        public PostImages(BlobUtils blobUtils)
        {
            _blobClient = blobUtils.ConfigureClient();
        }

        [FunctionName("PostImages")]
        public async Task<ActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = null)] HttpRequestMessage req, ILogger log)
        {
            try
            {
                var provider = new MultipartMemoryStreamProvider();
                await req.Content.ReadAsMultipartAsync(provider);
                var files = provider.Contents;
                var uploadUrls = new List<string>();

                foreach (var file in files)
                {
                    var fileInfo = file.Headers.ContentDisposition;
                    var fileContentType = file.Headers.ContentType;
                    var fileName = fileInfo.FileName.Trim('\"');
                    var fileData = await file.ReadAsByteArrayAsync();

                    uploadUrls.Add(await UploadFileToStorage(fileData, fileContentType, fileName));
                }

                return new OkObjectResult(uploadUrls);
            }
            catch (System.Exception e)
            {
                log.LogError($"Image upload failed: {e.Message}");
                return new BadRequestResult();
            }
        }

        private async Task<string> UploadFileToStorage(byte[] fileStream, MediaTypeHeaderValue contentType, string fileName)
        {
            CloudBlobContainer container = _blobClient.GetContainerReference("files");
            
            await container.CreateIfNotExistsAsync();

            CloudBlockBlob blockBlob = container.GetBlockBlobReference(fileName);

            await blockBlob.UploadFromByteArrayAsync(fileStream, 0, fileStream.Length);

            blockBlob.Properties.ContentType = contentType.ToString();

            await blockBlob.SetPropertiesAsync();

            return blockBlob.Uri.ToString();
        }
    }
}
