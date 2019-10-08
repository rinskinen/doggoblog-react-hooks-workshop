using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Microsoft.WindowsAzure.Storage.Blob;
using System.Collections.Generic;

namespace Mimmit
{
    public class GetImages
    {
        public CloudBlobClient _blobClient { get; set; }
        public GetImages(BlobUtils blobUtils)
        {
            _blobClient = blobUtils.ConfigureClient();
        }

        [FunctionName("GetImages")]
        public async Task<ActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = null)] HttpRequest req, ILogger log)
        {
            try
            {
                log.LogInformation("Get all blobs from container...");

                var container = _blobClient.GetContainerReference("files");
                var blobs = await container.ListBlobsSegmentedAsync(null);

                var blobNames = new List<string>();

                foreach (var item in blobs.Results)
                {
                    var blob = (CloudBlockBlob)item;
                    await blob.FetchAttributesAsync();
                    blobNames.Add(blob.Name);
                }

                log.LogInformation($"returning {blobNames.Count} blob filenames...");

                return new OkObjectResult(blobNames);
            }
            catch (System.Exception)
            {
                log.LogError($"Blob listing failed");
                return new OkObjectResult(new List<string>());
            }
        }
    }
}
