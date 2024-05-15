import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function MyAccount(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();

  async  function handleSubmit(event){

    event.preventDefault();

    if ( !email || !password ) {
        alert('Please fill in all fields !!!');
        return;
      }



console.log("email is:",email);
console.log("password is:",password);

let data={
  password,email
}
try{
 const response=await fetch("http://localhost:5000/login",{
    method:'POST',
    body: JSON.stringify(data),
  headers: { 'Content-Type': 'application/json' }
})

const responseData=await response.json();
console.log("response data is:",responseData);
const MyId=responseData.data._id;
if(responseData.message){
    alert("login sucessful!");
    
    navigate(`/:${MyId}`,{state:{data:responseData}});

}

}
catch(err){
alert("InValid Credentials!!");
}


    }
    

    return (

<center>
<div className="row">
    <div className="col-xs-8 col-sm-10 col-lg-12">

    <div id="login">
<h1>Login To Your Account!</h1>
</div>
<form onSubmit={handleSubmit}>
<label>Email:</label>
<input type="email" name="email" className="form-control" placeholder="Enter Your Email!" onChange={(event)=>{setEmail(event.target.value)}}/>
<br/>
<br/>
<br/>
<label>Password:</label>
<input type="text" name="password" className="form-control" placeholder="Enter your Password!" onChange={(event)=>{setPassword(event.target.value)}}/>
<br/>
<br/>
<br/>
<button type="submit" className="btn btn-dark"  >Login</button>
</form>

    </div>
</div>
</center>
  );
}

export default MyAccount;