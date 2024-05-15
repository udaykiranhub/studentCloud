var mongoose=require("mongoose");
var schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    exp:{
        type:String
    },
    bio:{
        type:String
    },
    skill:{
        type:String
    },
    address:{
        type:String
    },
    dob:{
        type:Date
    }
})

module.exports=mongoose.model("signup",schema);
console.log("singup schema imported!");