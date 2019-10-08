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
using System.IO;

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
                if (string.IsNullOrEmpty(req.Query["url"]))
                {
                    throw new System.Exception("image url is missing");
                }
                var visionApiKey = Environment.GetEnvironmentVariable("CUSTOM_VISION_API_KEY");
                var visionApiBaseUrl = Environment.GetEnvironmentVariable("CUSTOM_VISION_API_CATEGORIES");

                var queryString = HttpUtility.ParseQueryString(string.Empty);
                queryString["visualFeatures"] = "Categories,Tags";
                var requestURI = $"{visionApiBaseUrl}{queryString}";
                var imageUrl = req.Query["url"];
                var cloudBlobContainer = _blobClient.GetContainerReference("files");
                var blockBlob = cloudBlobContainer.GetBlockBlobReference(imageUrl);
                await blockBlob.FetchAttributesAsync();
                byte[] imageBytes;
                using(var imageStream = await blockBlob.OpenReadAsync()) {
                    var binaryReader = new BinaryReader(imageStream);
                    imageBytes = binaryReader.ReadBytes((int)imageStream.Length);
                }

                using (var client = new HttpClient())
                using (var byteContent = new ByteArrayContent(imageBytes))
                {
                    client.DefaultRequestHeaders.Add("Ocp-Apim-Subscription-Key", visionApiKey);
                    byteContent.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");
                    var response = await client.PostAsync(requestURI, byteContent);
                    response.EnsureSuccessStatusCode();
                    var responseInString = await response.Content.ReadAsStringAsync();
                    var result = JsonConvert.DeserializeObject<ImageAnalysis>(responseInString);
                    return new OkObjectResult(result.Tags);
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
