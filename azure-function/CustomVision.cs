using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System.Net;
using System.Net.Http.Headers;
using System.Net.Http;
using System.Text;
using Newtonsoft.Json;
using System.Web;
using System;
using Microsoft.WindowsAzure.Storage.Blob;
using Microsoft.Azure.CognitiveServices.Vision.ComputerVision.Models;

namespace Mimmit
{
    public class CustomVisionCategories
    {

        public CloudBlobClient _blobClient { get; set; }
        public CustomVisionCategories(BlobUtils blobUtils)
        {
            _blobClient = blobUtils.ConfigureClient();
        }
        [FunctionName("CustomVisionCategories")]
        public async Task<ActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = null)] HttpRequest req,
            ILogger log)
        {
            try
            {
                var imageUrl = req.Query["url"];
                var cloudBlobContainer = _blobClient.GetContainerReference("files");
                var blockBlob = cloudBlobContainer.GetBlockBlobReference(imageUrl);
                await blockBlob.FetchAttributesAsync();

                using (var wb = new HttpClient())
                {
                    if (string.IsNullOrEmpty(req.Query["url"]))
                    {
                        throw new System.Exception("image url is missing");
                    }

                    wb.DefaultRequestHeaders.Add("Ocp-Apim-Subscription-Key", Environment.GetEnvironmentVariable("CUSTOM_VISION_API_KEY"));

                    byte[] bytes = new byte[blockBlob.Properties.Length];
                    await blockBlob.DownloadToByteArrayAsync(bytes, 0);

                    using (var byteContent = new ByteArrayContent(bytes))
                    {
                        byteContent.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");
                        var response = await wb.PostAsync(Environment.GetEnvironmentVariable("CUSTOM_VISION_API_CATEGORIES"), byteContent);
                        var responseInString = await response.Content.ReadAsStringAsync();
                        var result = JsonConvert.DeserializeObject<ImageAnalysis>(responseInString);
                        return new OkObjectResult(result.Tags);
                    }
                }
            }
            catch (System.Exception e)
            {
                log.LogError($"Failed, error: {e.Message}");
                return new BadRequestResult();
            }
        }
    }
}
