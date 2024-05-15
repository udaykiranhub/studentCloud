import React from "react";
import { useLocation } from "react-router-dom";
import {PersonFill}  from "react-bootstrap-icons";
function SingleUserDetails() {
  const location = useLocation(); // Access data passed through navigation state

  const user = location.state?.selectedUser;
  const date=new Date();
  return (
<center>
<div className="single-user-details">
  <h1><PersonFill/></h1>
      <h2>User Details......</h2>
      <img src={user.image} alt="user Profile" style={{border:"2px solid blue"}} />
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Skills:{user.skill}</p>
      <p>Experience:{user.exp}</p>
      <p>Address:{user.address}</p>
      <p>DOB:{date.getDay()}-{date.getMonth()}-{date.getFullYear()}</p>
    
      {/* Add other user details as needed */}

    </div>
</center>
  );
}

export default SingleUserDetails;
