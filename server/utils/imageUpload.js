const cloudinary = require('cloudinary').v2;

exports.cloudinaryImageUpload = async (File, folder, quality, height) => {

    try{
    const options = { folder };
    if(quality){
        options.quality = quality;
    }
    if(height){
        options.height = height;
    }
    options.resourceType = 'auto';

    const imgUploaded = await cloudinary.v2.uploader.upload(File.tempFilePath, options);

    return imgUploaded.secureUrl;

    }catch(error){
        console.error(error.message)
    }

}