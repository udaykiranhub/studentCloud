import React, { useEffect } from "react";
import { useLocation ,useNavigate} from "react-router-dom";

function LogOut() {
  const location = useLocation();
  const userId = location.state?.userId;
const navigate=useNavigate();
  

  useEffect(() => {
    async function logout() {
    
      try {
     
        const req = await fetch("http://localhost:5000/logout", {
          method: "POST",
          body:JSON.stringify({userId}),
          headers: { "Content-Type": "application/json" }
        });
    
        const res = await req.json();
     
  
        if (res.message) {

          alert("Log Out successful!");
         navigate("/");

        } 
        else {
          alert("Failed to log out!");
          navigate("/login");
     
      
        }
      } 
      catch (error) {
        console.error("Logout error:", error);
        alert("An error occurred during logout. Please try again.");
      }
    }

    logout();
  }, []); // Empty dependency array to run only once after mount

  return (
    <center>
      <h1>Log Out! {userId ? `User ID: ${userId}` : "No user ID provided."}</h1>
    </center>
  );
}

export default LogOut;
