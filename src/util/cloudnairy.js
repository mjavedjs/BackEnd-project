import { compareSync } from 'bcryptjs';
import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs' // file system of node it's help to read update and path show
// unlink and link path 

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KE, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudniary = async (localFilePath)=>{
    try {
       if(!localFilePath) return null;
        // resource_type: "video" // important for videos
       const response = await   cloudinary.uploader 
          .upload("my_image.jpg");
          console.log(response.url);
          return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove localy saved temporilay file as to opertion faild;
         return null

    }
}


export {uploadOnCloudniary}