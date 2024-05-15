import { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Person, Type} from 'react-bootstrap-icons';
import { useRef } from "react";
function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const dom=useRef("")

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!name || !email || !password || !selectedImage) {
      alert('Please fill in all fields and select an image.');
      return;
    }
  
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('image', selectedImage);
console.log("form data is:",formData);
    try {

      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        body: formData,

      });

    const responseData = await response.json();
  
      if (responseData.success) {
      
      alert(responseData.message);

      } else {
     
        alert(responseData.message );
      }
    } catch (error) {
      
      alert('An error occurred. Please try again later.');
    }
  };
  
function Back(){
  window.history.back(-1);
}

  return (
    <center>
    <div className="signup-form  ">

    <h1>  <Person/></h1>
      <br/>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} id="signForm">
        <label htmlFor="name">Name:</label>
        <input
        className="form-control"
          type="text"
          id="name"
          name="name"
          value={name}
          placeholder="Enter Your Name"
          onChange={(event) => setName(event.target.value)}
        />
        <br/>
        <br/>
        <br/>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={email}
          placeholder="enter Your Email"
          onChange={(event) => setEmail(event.target.value)}
        />
         <br/>
         <br/>
         <br/>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={password}
          placeholder="Enter your password"
          onChange={(event) => setPassword(event.target.value)}
        />
         <br/>
         <br/>
         <br/>
        <label htmlFor="image">Image:</label>
        <input type="file" accept="image/*" name="image" id="image" onChange={handleImageChange}    className="form-control"/>
        <br/>
        <br/>
        <button type="submit" className="btn btn-info"> Sign Up</button>
      </form>
      <br/>
 <button onClick={()=>{Back()}} className="btn btn-danger" >Back</button>
    
    </div>
    </center>
  );
}

export default SignUp;
