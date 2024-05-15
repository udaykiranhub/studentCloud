const express=require("express")
const router=express.Router()
const signupschema=require("../schemas/signupschema.js");
router.post("/login",async (req,res)=>{
    try{
        // Access raw request body
    const rawData = req.raw;

    // Assuming you know the structure of your FormData (adjust based on your setup)

console.log("body data is:", req.body);
let {email,password}=await req.body;
let data=await signupschema.findOne({email:email,password:password});
console.log("data is:",data);
if(data){
    res.status(200).json({message:true,data:data});
}
else{
    res.status(200).json({message:false});
}

    }
    catch(err){
        console.log("Error in the login method!"+err);
    }

})
module.exports=router;