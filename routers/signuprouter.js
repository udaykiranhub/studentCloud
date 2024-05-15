var signup=require("../schemas/signupschema.js");
var express=require("express");
var router=express.Router();
var multer=require("multer");
const cloudinary=require("cloudinary").v2;
require("dotenv").config();

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET

})

var ds=multer.diskStorage({

    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
});

var upload = multer({ storage: ds }).single("image");


router.post("/signup",async function(req,res){
  
console.log(req.body);
  
upload(req, res, async function (err) {
    if (err) {
      // Handle Multer error
      return res.status(500).json({
        success: false,
        message: "Error uploading file",
      })
      //we can write normal res.send() like res.send("Error on image uploading with cloudinary!")
    }

    // Continue with Cloudinary upload
    try {
    var imageUrl;
    //if Error
      await cloudinary.uploader.upload(req.file.path, function (err, result) {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: false,
            message: "Error uploading to Cloudinary",
          });
        }

       imageUrl = result.secure_url;
        console.log("image url is:",imageUrl)
      });



var {name,email,password}=req.body;
console.log("name is:",req.body.name);
console.log("emai is:",req.body.email);
var image=imageUrl;

let check=await signup.findOne({email:req.body.email});
console.log("check data is:",check);

if(check){

return res.status(200).json({success:false,message:"user already Registered!"});
}
else{
let data=new signup({
name:name,email:email,password:password,image:image
})
data.save()
.then(function(data){
  console.log("data saved"+data);
return res.status(200).json({success:true,message:"Registerd Sucessfully!"})

})
.catch(function(err){
console.log("error in the singup data saving"+err);
})
}

}

catch(err){
  console.log("Error is :",err);
return res.status(500).json({sucess:false,message:"internal server Error"});

}


})

})
module.exports=router;
/*

*/