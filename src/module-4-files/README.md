# Module 4 - File Upload

Uploading files is to server is quite popular feature in web applications. Modern browsers can easily preview files after form upload and even persist the files to browser's storage such as localStorage.

But what if you wanted to see the file or image on some other device, like your phone? In that case the file needs to be saved to a server from where your application will download it. Dropbox and Google Drive are examples of such scenario.

For simplicity we won't go in too much detail about the technical side of the upload progress, yet.

However, we need to find out some details about the files we are about to upload in the next module...

## Excercise

- Finish table component in `File.js`:
  - Add table headers
  - Add table row for each of the uploaded file - Add table cells for file name, size (kb), type & last modified date
  - Display "No files yet" text above the table if there are no uploaded files

## Bonus

- CSS: Add borders around the table with CSS
- CSS: Add background color of your choice for all odd/even rows and header of the table
- React: Add button that deletes a single row from the files table
- React: Add button that deletes all the rows of the files table
