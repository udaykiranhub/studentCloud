const express=require("express");

const router=express.Router();

const signupSchema=require("../schemas/signupschema.js");

router.post("/logout",async function(req,res){
    try{

const id=req.body.userId;

console.log("id is:",id);

let data=await signupSchema.findOneAndDelete({_id:id});
if(data){
    res.status(200).json({message:true});
}
else{
    res.status(200).json({message:false});
}
 
    }
    catch(err){
        console.log("Erro in the log out method!"+err);
    }
})

module.exports=router;