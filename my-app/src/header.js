import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { FaBars, FaTimes } from "react-icons/fa";
import "react-bootstrap";
import {Link} from "react-router-dom";
function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Call useState here

  const handleToggle = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Navbar bg="light" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#">Your Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className={isMenuOpen ? 'show' : ''}>
          <Nav className="ms-auto ">
            <Nav.Link ><span> <Link to="/" className='btn btn-info' role="button">Home</Link></span> </Nav.Link>
            <Nav.Link ><span> <Link to="/sign"  className='btn btn-info' role="button">SignUp</Link></span> </Nav.Link>
            <Nav.Link ><span><Link to="/data"   className='btn btn-info'  role="button"> Get Data</Link></span></Nav.Link>

            <Nav.Link><span><Link to="/login"  className='btn btn-info'  role="button">MyAccount</Link></span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
