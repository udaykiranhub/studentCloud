var express=require("express");
const app=express();
var mongoose=require("mongoose");
var cors=require("cors");
app.use(cors({origin:"*"}));
const bodyparser=require("body-parser");
app.use(express.json());
app.use(express.urlencoded());


app.use(express.urlencoded({ extended: true }));
require("dotenv").config();
 mongoose.connect(process.env.MONGODB_URL)
 .then(function(){
    console.log("Database Connected!");
 })
 .catch(function(err){
    console.log("Error in the Database Connection!");
 })

//Routers
const signup=require("./routers/signuprouter.js");
const signupSchema=require("./schemas/signupschema.js");
const loginDetails=require('./routers/MyaccountRouter');

const logout=require("./routers/LogOutRouter.js");

const Edit=require("./routers/AccountEditRouter.js");
 const profileChange=require("./routers/changeprofileRouter.js");
app.get("/user",async function(req,res){
    try{
   // var data=[{"name":"uday","id":100},{"name":"kiran","id":101},{"name":"jon","id":102},{"name":"Don","id":103}];
  var data=await signupSchema.find();
  console.log("check data is:",data);
if(data){
    return  res.status(200).json({data:data,message:true});
     
}
else{
    return  res.status(200).json({message:false});
     
}
    }
    catch(err){
     return    res.status(500).send("Error in express"+err);
    }
})

////

app.get('/user/:id',async  (req, res) => {
try{
    const userId = req.params.id; // Access parameter from URL
  var user=await signupSchema.findOne({_id:userId});
  console.log("data is:"+user);
    if (user) {
      res.json(user); // Send user data as JSON response
    } else {
      res.status(404).send('User not found'); // Handle user not found case
    }
}
catch(err){
    res.status(500).send("internal server error!");
    console.log("Error in the  users is method:"+err);
}

  });
  







3
////
app.use("/",signup);
app.use("/",loginDetails);

app.use("/",Edit);
app.use("/",logout);

app.use("/",profileChange);


app.listen(5000,function(err){
    if(err){
        console.log("Error in the Server Running!");
    }
    else{
        console.log("Server is Running!");
    }
})