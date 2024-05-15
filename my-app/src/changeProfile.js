import { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation} from "react-router-dom";

import { useNavigate } from "react-router-dom";

function ChangeProfile(){
const navigate=useNavigate();
 const [id, setId] = useState(useLocation()?.state.userId || "");
 const [count,setCount]=useState(0);
 const [profile,setProfile]=useState(); // Set initial id using userId from location



 console.log("user id is:", id);
 const formData=new FormData();
const handleProfileSubmit=(event)=>{
    event.preventDefault();
    if(!profile){
        alert("please select a  picture !");
        return ;
    }
    setCount(1);
    formData.append("id",id);
    formData.append("image",profile);
    console.log("forms data is:",formData);

try{


    async function change(){
        const res=await fetch("http://localhost:5000/changeProfile",{
            method:"POST",
            body:formData
        })
 
        const ans=await res.json();
        if(ans.message){
            alert("Changed Sucessfully!");
            setCount(0);
         
        }
        else{
            alert("select proper image!");
            setCount(0);
        

        }
    
    }
    
    change();
    }
    catch(err){
        alert("try after some time!");
    }

}

function back(){
    window.history.back(-1);
}


return (
    <>
<div className="row">
<div className="col--xs-8 col-sm-10 col-lg-12">
        
       <center>

 <h1>Change Your Profile.....</h1>

<form onSubmit={handleProfileSubmit}>
Profile:<input type="file" name="image" className="form-control"  onChange={(event)=>setProfile(event.target.files[0])}/>
<br/>
<br/>
<input type="submit" value="Change"/>
</form>
<br/>
<button onClick={back}>Go Back</button>
{count === 1 ? (<h1>loading...</h1>) : null}


       </center>
       
        </div>

</div>

    
    </>
)



}

export default ChangeProfile;