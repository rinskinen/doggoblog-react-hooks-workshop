# Module 6 - Fetch images from Azure blob storage

Downloading files from blob storage is easy. You can configure storage to treat certain files or containers as public, then you can download files just by using the blob storage address. This is common scenario for example when providing web application resources such as javascript bundle or images.

You can also require downloader to have authenticated link that includes generated token which expires after specified time.

## Excercise

Get list of files from API using URI provided. Generate img tags from API results. Each tag should have src-attribute consisting of constant FileByIdUri appended with id of the image.

## Bonus

Generate list of files where each item is download link to file
