# Module 5 - Upload files to Azure blob storage

Saving files to the cloud is not that much different than saving them to your own computer or device. In the latter cases your devices operating system provides access to the storage media (hard drive, USB stick, memory card etc.) in the former case the interface is usually external API. Unlike in the case of local devices, cloud environment requires some kind of authentication before files can be saved.

In our demo we have provided file upload API through Azure Function. The function has access to Azure Blob storage which is, among many other things, service for storing binary files. Required connection information has already been added to the function application.

## Excercise

Your assignment is to in some way send files you have added to your application through DropZone-component to API endpoint reponsible for persisting files to Azure Storage.

The assignment can be divided into three steps:

1. Create an AJAX request to file upload endpoint (URI is available from constant FileUploadUri)
1. Remove the files from component state
1. Display alert message to inform user that the files have been uploaded

## Bonus

Uploading files can take a long time. Basic user experience requirement is to provide some kind of indicator of progress to user. If the files generally uploaded are large, several megabytes or larger, you should consider providing a progress bar with real time updates. Otherwise simple loading indicator is fine.

Add loading indicator which shows up when upload starts and dissappears when upload is completed (regardless of if it succeeded or not).

On upload complete, clear only those files that had been uploaded successfully.

Showing default alert boxes is generally frowned upon. Modify loading indicator component so that it shows either nothing, "Upload in progress", "Upload finished" or "Upload failed".
