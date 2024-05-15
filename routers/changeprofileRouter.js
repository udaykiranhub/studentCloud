const express=require("express");
const router=express.Router();
const signUpSchema=require("../schemas/signupschema.js");
var multer=require("multer");
const cloudinary=require("cloudinary").v2;
require("dotenv").config();
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET

});


var ds=multer.diskStorage({

    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
});

var upload = multer({ storage: ds }).single("image");


router.post("/changeProfile",async function(req,res){
console.log("changeProfile data is:",req.body);
    
    upload(req, res, async function (err) {
        if (err) {
          // Handle Multer error
         
          return res.status(500).json({
            success: false,
            message: "Error uploading file",
          })
        }
    
        // Continue with Cloudinary upload
        try {
        var imageUrl;

        //if Error
          await cloudinary.uploader.upload(req.file.path, function (err, result) {
            if (err) {
              console.log(err);
              console.log("no file found!");
              return res.status(500).json({
                success: false,
                message: "Error uploading to Cloudinary",
              });
            }
    
           imageUrl = result.secure_url;
            console.log("image url is:",imageUrl)
          });

 
    var image=imageUrl;
    console.log("image is:",image);
    var check=await signUpSchema.findByIdAndUpdate({_id:req.body.id},{image:image});



check.save()
.then(function(data){
    res.status(200).json({message:true});

})
.catch(function(err){
 res.status(200).json({message:false});
})



}
catch(err){
   console.log("Error in the ChangeProfile method!"+err);
    res.status(500).json({message:false});

  }


})
})
console.log("changeProfile!");
module.exports=router;