using Microsoft.WindowsAzure.Storage.Blob;
using Microsoft.WindowsAzure.Storage;
using System;

namespace Mimmit
{
    public class BlobUtils
    {
        public CloudBlobClient ConfigureClient()
        {
            var storageAccount = CloudStorageAccount.Parse(Environment.GetEnvironmentVariable("STORAGE_CONNECTION_STRING"));
            Client = storageAccount.CreateCloudBlobClient();
            return Client;
        }

        public CloudBlobClient Client { get; set; }
    }
}
