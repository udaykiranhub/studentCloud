import React from "react";
import { useState,useEffect } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import SingleUserDetails from "./singleUser.js";
import { useNavigate } from "react-router-dom"; // Import for programmatic navigation
function Data(){
    const [users,setData]=useState([]);
    //const [selectedUserId, setSelectedUserId] = useState(null);// User ID to show details
    const [selectedUser, setSelectedUser] = useState(null); // Specific user object

    const navigate = useNavigate();


    const url="http://localhost:5000/user";
   
    const fetechData=async (apiUrl)=>{
       
        try {
            const response = await fetch(apiUrl);
            if (response.message) {
             return alert("No Data Found!");
            }
            const fetchedData = await response.json();
            setData(JSON.stringify(fetchedData.data)); // Update state directly

            console.log(fetchedData.data);
            console.log("users data is:",users);

      return fetchedData.data;
          } catch (error) {
            console.error('Error fetching data:', error); // Handle errors
          }

    }

    useEffect(()=>{
        fetechData(url)
        .then(data =>
             setData(data) 
  ) // Update state after data is fetched
        .catch(error => console.error('Error fetching data:', error)); // Handle errors
    
 } ,[])


const fetchSingleUser = async (userId) => {
  try {
    console.log("user id is:",userId)
    const response = await fetch(`${url}/${userId}`); // Construct URL with user ID
    if (response.message) {
      return alert("User not found!"); // Handle user not found case
    }
    const user = await response.json();
    console.log("user is:",user);
    setSelectedUser(user);
    return user;


  } catch (error) {
    console.error("Error fetching user details:", error);
  }
};
/*
const handleUserClick = (userId) => {
 // setSelectedUserId(userId);
  fetchSingleUser(userId); // Fetch details for the selected user
};
console.log("component data is:",selectedUser);
*/
/*
const handleUserClick = (userId) => {
const selectedUserObject = users.find((user) => user._id === userId);
 //const data=fetchSingleUser(userId);
  navigate(`/users/${userId}`, { state: { selectedUser: selectedUserObject } }); // Pass user in state
};*/
const handleUserClick = async (userId) => {

    // Fetch data from server if not available locally
    try {

      const selectedUserObject = users.find((user) => user._id === userId);
      if (selectedUserObject) { // Check if user exists locally
        // Directly navigate with local data (if available)
        
        navigate(`/users/${userId}`, { state: { selectedUser: selectedUserObject } });
      } 
  else{
      const fetchedUser = await fetchSingleUser(userId);
      navigate(`/users/${userId}`, { state: { selectedUser: fetchedUser } });
  }
    } catch (error) {
      console.error("Error fetching user details:", error);
      // Handle errors (e.g., display error message to user)
    }
  
};
    return (
    
      <div className="row">
        <div className="col-xs-8 col-sm-10  col-lg-12">
<div id="user_heading">   <center > <h1>Users</h1></center></div>
<div className="data-container">
<div className="data-item1">

{users.length > 0 ? (
       
    <div id="users">

    {users.map((user) => (
              
             
<div id="user" >

<img src={user.image} alt="user Profile" width="300px" />
<h2>Name: {user.name}</h2>
<button onClick={() => handleUserClick(user._id)}>Details</button>
</div>

))}
         
         </div> ) : (
         <center> <p>Loading data..................</p></center>
        )}


</div>



<div className="data-item2">


<h1>Adds</h1>

</div>

</div>


    



      </div>
        </div>
  
          
    )
}

export default Data;