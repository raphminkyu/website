import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';


const Navig = (props) =>{
    return(
   
    // <Navbar sticky = "top" bg="dark" variant = "dark" style = {{marginLeft:80, marginRight:80}}>
    <Navbar fixed = "top" bg="dark" variant = "dark" style = {{marginLeft:80, marginRight:80}}>   
    <Navbar.Brand href="#home">RaphaelLee</Navbar.Brand>

        <Nav className="ml-auto">
         
          <Nav.Link href="#About">About</Nav.Link>    
          <Nav.Link href="#Projects">Projects</Nav.Link>
          <Nav.Link href="#Contact">Contact</Nav.Link>
          <Nav.Link href="#Resume">Resume</Nav.Link> 
      
       </Nav>
     
    </Navbar>

    );
}

export default Navig;