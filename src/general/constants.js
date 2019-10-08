import { baseUrl } from './config';

// URI for azure function handling image uploads. Accepts POST requests.
export const FileUploadUri = `${baseUrl}postImages`;
// URI for azure function returning list of saved images
export const FileListUri = `${baseUrl}getImages`;
// URI for azure function returning single image
export const FileByIdUri = `${baseUrl}getimage?id=`;
// URI for azure function for analyzing saved image with Cognitive services
export const CustomVisionUri = `${baseUrl}CustomVisionCategories`;
