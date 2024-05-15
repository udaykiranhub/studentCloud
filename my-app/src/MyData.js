import React  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from "react-router-dom";
import {Person,PencilSquare,Trash} from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import "./App.css";



function MyData(){
    const location=useLocation();
    const user = location.state?.data;
    const navigate=useNavigate();
  
    console.log("user is:",user);
    const date=new Date(user.data.dob);


const handleClick=(userId)=>{

navigate("/editmyaccount",{state:{EditData:userId}});

alert("Edit Now!"); 

}



//LogOut
const handleLogOut=(userId)=>{
    navigate("/logout", { state:{userId} }); 

}

//profile Changing

const handleProfile=(userId)=>{
    navigate("/ProfileChange",{state:{userId}})
}
return (
        <center>
 <div className="row">
    <div className="col-xs-8 col-sm-10 col-lg-12">
  
<div id="mydata">  
<h1 ><i><Person/></i> My Account.. </h1>
<br/>

<img src={user.data.image} alt="my profile" />
<br/>
profile:<button className="btn btn-sm" style={{border:"2px solid black"}} onClick={()=>handleProfile(user.data._id)}><i><PencilSquare/></i></button>
<br/>
<br/>
<br/>
<div className="user-details-container">

{/*zero setting  box*/}
<div className="user-details-zero">
<h2>Settings:</h2>
Edit:<button className="btn btn-sm" style={{border:"2px solid black"}} onClick={()=>handleClick(user.data._id)}><i><PencilSquare/></i></button>
<br/>
<br/>
<br/>
LogOut:<button className="btn btn-sm" style={{border:"2px solid black"}} onClick={()=>handleLogOut(user.data._id)}><i><Trash/></i></button>


</div>


{/*second box*/}
<div className="user-details-one">
<p><span>Name:</span>{user.data.name}</p>
<p><span>DOB</span>{date.getDay()}-{date.getMonth()}-{date.getFullYear()}</p>
<p><span>Address:</span>{user.data.address}</p>

</div>
{/*third box*/}
<div className="user-details-two">
<p><span>Email:</span>{user.data.email}</p>
<p><span>Bio:</span>{user.data.bio}</p>
<p><span>Skills:</span>{user.data.skill}</p>
<p><span>Experience:</span>{user.data.exp}</p>
</div>

</div>

</div>

</div>

 </div>
 </center>
    );
};

export default MyData;