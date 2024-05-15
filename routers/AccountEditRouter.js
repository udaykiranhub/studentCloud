const express=require("express");
const router=express.Router();
const signUpSchema=require("../schemas/signupschema.js");

router.post("/Edit",async function(req,res){

try{

  console.log("Body is:",req.body);

  var {name,bio,skill,address,dob,exp,id}=req.body;

  console.log("id is:",id);

  var find=await signUpSchema.findOne({_id:id});
  console.log("find data is:",find)
  console.log(bio==="");
    console.log(dob===null);

  if(name===undefined || name===""){
    name=find["name"];
  }

  if(bio===undefined || bio===""){
    bio=find["bio"];
  
  }

  if(skill===undefined || skill===""){
    skill=find["skill"];
    console.log("skilll is:",find["skill"])
  }

  if(address===undefined || address===""){
    address=find["address"];
  }
  if(dob===undefined || dob===""){
    dob=find["dob"];
  }

  if(exp===undefined || exp===""){
    exp=find["exp"];
  }
  console.log("only updated data is:",name ,bio,exp,dob,skill,address);
var check=await signUpSchema.findByIdAndUpdate({_id:id},{name:name,bio:bio,exp:exp,dob:dob,address:address,skill:skill});


check.save()
.then(function(data){
    res.status(200).json({message:true});

})
.catch(function(err){
 res.status(200).json({message:false});
})


}
    catch(err){
        console.log("error in the edit Account method"+err);
        res.status(500).json({message:false});
    }
});

module.exports=router;