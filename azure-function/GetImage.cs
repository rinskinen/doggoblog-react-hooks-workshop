using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System.Net.Http.Headers;
using System.Net.Http;
using Microsoft.WindowsAzure.Storage.Blob;

namespace Mimmit
{
    public class GetImage
    {
        public CloudBlobClient _blobClient { get; set; }
        public GetImage(BlobUtils blobUtils)
        {
            _blobClient = blobUtils.ConfigureClient();
        }

        [FunctionName("GetImage")]
        public async Task<HttpResponseMessage> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = null)] HttpRequest req,
            ILogger log)
        {
            try
            {
                var fileName = req.Query["id"];
                var cloudBlobContainer = _blobClient.GetContainerReference("files");
                var blockBlob = cloudBlobContainer.GetBlockBlobReference(fileName);

                await blockBlob.FetchAttributesAsync();

                log.LogInformation("Blob found, downloading...");

                using (var stream = new MemoryStream())
                {
                    await blockBlob.DownloadToStreamAsync(stream);
                    var fileData = stream.ToArray();

                    log.LogInformation("Returning the blob...");

                    var requestM = new HttpRequestMessage();

                    HttpResponseMessage response = new HttpResponseMessage(System.Net.HttpStatusCode.OK);
                    response.Content = new ByteArrayContent(fileData);
                    response.Content.Headers.ContentDisposition = new System.Net.Http.Headers.ContentDispositionHeaderValue("attachment");
                    response.Content.Headers.ContentDisposition.FileName = fileName;
                    response.Content.Headers.ContentType = new MediaTypeHeaderValue(blockBlob.Properties.ContentType);
                    response.Headers.CacheControl = new CacheControlHeaderValue()
                    {
                        Public = true,
                        MaxAge = new TimeSpan(30, 0, 0, 0)
                    };

                    return response;
                }
            }
            catch (System.Exception)
            {
                log.LogError($"Blob not found: {req.Query["id"]}");

                return new HttpResponseMessage(System.Net.HttpStatusCode.BadRequest);
            }
        }
    }
}
