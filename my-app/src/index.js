import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as BrowserRoute, Route, Routes, Link, Outlet } from "react-router-dom"; // Corrected import
//import { useState,useEffect } from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap

import { Nav, NavLink } from './MyStyle.js'; // Import styled components

import { Person, Type, Wind} from 'react-bootstrap-icons';

import SignUp  from './sign.js';
import Data from "./data.js";
import SingleUserDetails from "./singleUser.js"; 

import MyData from './MyData.js';
import MyAccount from "./MyAccount.js";
import Edit from "./EditMyAccount.js";
import Window from './window.js';

import LogOut from './LogOut.js';

import ChangeProfile from './changeProfile.js';

import "./layout.css";

import GoBack from './goback.js';

import NavBar from './header.js';

// Export Layout component
function Layout() {
  return (

/*
    <div id="layout" >

    <Nav>

      <Link to="/" className='btn btn-success' role="button">Home</Link>
        <Link to="/window"  className='btn btn-success' role="button">window</Link>
        <Link to="/sign"  className='btn btn-success' role="button">SignUp</Link>
        <Link to="/data"   className='btn btn-success' role="button"> Get Data</Link>
       <Link to="/login"  className='btn btn-success' role="button">MyAccount</Link>
    </Nav>
   
      <Outlet />

    </div>
    */
<div className='row'>
<div className='col-xs-8 col-sm-10 col-lg-12'>
<div className="grid-container">
<div className="item1"> 
{/*
<span> <Link to="/" className='btn btn-info' role="button">Home</Link></span> 
<span> <Link to="/window" className='btn btn-info'  role="button">window</Link></span> 
<span> <Link to="/sign"  className='btn btn-info' role="button">SignUp</Link></span> 
<span><Link to="/data"   className='btn btn-info'  role="button"> Get Data</Link></span>
<span><Link to="/login"  className='btn btn-info'  role="button">MyAccount</Link></span>

<span><Link to="/nav"  className='btn btn-info'  role="button">NavBar</Link></span>

  */}

  <NavBar/>

</div>

<div className="item2">
  
    <h3> <Link to="/"   className='btn btn-default'  role="button">Home</Link></h3>
    <h3> <Link to="/"   className='btn btn-default'  role="button">Home</Link></h3>
    <h3> <Link to="/"   className='btn btn-default'  role="button">Home</Link></h3>
    <h3> <Link to="/"   className='btn btn-default'  role="button">Home</Link></h3>
    <h3> <Link to="/"   className='btn btn-default'  role="button">Home</Link></h3>
    <h3> <Link to="/"   className='btn btn-default'  role="button">Home</Link></h3>
    <h3> <Link to="/"   className='btn btn-default'  role="button">Home</Link></h3>
    <h3> <Link to="/"   className='btn btn-default'  role="button">Home</Link></h3>
    <h3> <Link to="/"   className='btn btn-default'  role="button">Home</Link></h3>
    <h3> <Link to="/"   className='btn btn-default'  role="button">Home</Link></h3>
    <h3> <Link to="/"   className='btn btn-default'  role="button">Home</Link></h3>
    


</div>
<div className="item3">
    
In today's ever-evolving world,
 education is the key to unlocking your potential and shaping your future. 
 We believe that learning should be an engaging and empowering experience, 
 accessible to everyone.  This website is your gateway to a wealth of educational resources, 
 designed to ignite your curiosity, deepen your knowledge, and equip you with the skills you need to thrive.
   Whether you're a lifelong learner, a student seeking support, or an educator looking for innovative tools,
    we're here to support your educational journey.
    </div>  
<div className="item4">
  
<h4>
  Add
</h4>
  
<h4>
  Add
</h4>
  
<h4>
  Add
</h4>
  
<h4>
  Add
</h4>

</div>
<div className="item5">Footer</div>
</div>
</div>
</div>



  );
}



// Home component (no need for changes)
function Home() {
return (
  
<div id='home'>
<div className="row">
<div className="col-xs-4 col-sm-18 col-lg-12" >

<BrowserRoute>
        <Routes>
          <Route path="/sign" element={<SignUp />} />
          <Route path="/" element={<Layout />} />
          <Route path='/data' element={<Data/>}/>
          <Route path="/users/:userId" element={<SingleUserDetails />} />
          <Route path="/login" element={<MyAccount/>}/>
          <Route path="/:MyId" element={<MyData/>}/>
          <Route path="/editmyaccount" element={<Edit/>}/>
          <Route path="/window" element={<Window/>}/>
          <Route path="/logout" element={<LogOut/>}/>
          <Route path="/ProfileChange" element={<ChangeProfile/>}/>
          <Route path="/back" element={<GoBack/>}/>
 

        </Routes>
  </BrowserRoute>



</div>
</div>


    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);
