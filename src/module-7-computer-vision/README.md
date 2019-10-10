# Module 6 - Analyze image with Azure Computer Vision

Analyzing images is nothing new, but it has never been as easy as with Azure Computer Vision. Basically you create account for using Computer Vision and start sending images. You can use raw REST-based API or use SDK available in multiple languages.

## Excercise

As you already have some images uploaded to Azure Storage, implement file table used in previous modules and populate it when exercise module mounts the first time. For each row representing image file, create a button which, when clicked, sends the image file name to backend (URI provided in constants). Backend will return list of tags associated with analyzed image. Display these tags in some way.

## Bonus

Create component for image tag which has dynamic background color based on confidence of said tag.
