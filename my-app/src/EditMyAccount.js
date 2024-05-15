import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
function Edit(){
    const [bio,setBio]=useState("");
    const  [name,setName]=useState("");
    const [skill,setSkill]=useState("");
    const [address,setAddress]=useState("");
    const [dob,setDob]=useState("");
    const [exp,setExp]=useState("");

    const navigate=useNavigate();

 const location=useLocation();


const user=location.state?.EditData;
console.log("Edit user id is:",user);

const handleSubmit=async (event)=>{
    event.preventDefault();
    console.log("details",name,bio,skill);
const formData=new FormData();
formData.append("name",name);
formData.append("bio",bio);
formData.append("skill",skill);
formData.append("dob",dob);
formData.append("address",address);
formData.append("exp",exp);
formData.append("id",user);
console.log("form data is:",formData);
const id=user;
const data={name,bio,skill,dob,exp,user,address,id};

try{
    const response=await fetch("http://localhost:5000/edit",{
    method:"POST",
    headers: { "Content-Type": "application/json" }, // Explicitly set header
    body: JSON.stringify(data),
})
const Data=await response.json();
if(Data.message){
    alert("Saved Sucessfully!");
    navigate("/login");

}
else{
    alert("not Saved!");
}
}
catch(err){
    alert("try after some Time!");

}


}

    return (
      
      <center>
        <div className="row">
            <div className="col-xs-8 col-sm-10 col-lg-12">
            <h1> Edit Your Details</h1>
            <br/>
            <br/>
<form onSubmit={(event)=>{handleSubmit(event)}}>
Name:<input type="text" name="name" placeholder="Enter Your Name" className="form-control" onChange={(event)=>{setName(event.target.value)}}/>
    <br/>
    <br/>
Bio:<input type="text" name="bio"  placeholder="fill Bio" className="form-control" onChange={(event)=>setBio(event.target.value)}/>
<br/>
<br/>
Skill:<input type="text" name="skill" placeholder="Enter Your Skills" className="form-control" onChange={(event)=>{setSkill(event.target.value)}}/>
<br/>
<br/>
Address:<input type="text" name="address" placeholder="Enter Your Address" className="form-control" onChange={(event)=>{setAddress(event.target.value)}}/>
<br/>
<br/>
Experience:<input type="text" name="exp" placeholder="Enter Your Experience" className="form-control" onChange={(event)=>{setExp(event.target.value)}}/>
<br/>
<br/>
DOB:<input type="date" name="dob" className="form-control" placeholder="Enter Data of Birth" onChange={(event)=>setDob(event.target.value)}/>
<br/>

<br/>
<br/>
<button type="submit" className="btn btn-dark">Submit</button>
</form>
    </div>
    </div>
      </center>
     
    )
}
export default Edit;