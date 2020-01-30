import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';


const Navig = (props) =>{
    return(
   
   
    <Navbar
    //  fixed = "top" 
     bg="light" 
    variant = "dark" style = {{height: 74, color: "green"
    // marginLeft:80, marginRight:80
    }}>   
    <Navbar.Brand href="#home">RaphaelLee</Navbar.Brand>

        <Nav className="ml-auto">
         

          <Nav.Link href="#About" style={{color:"#E65247", fontSize:20}}> About  </Nav.Link>    
          <Nav.Link href="#About Me" style={{color:"#E65247"}} >About Me</Nav.Link>
          <Nav.Link href="#Contact" style={{color:"#E65247"}}>Contact</Nav.Link>
          <Nav.Link href="#Resume" style={{color:"#E65247"}}>Resume</Nav.Link> 
      
       </Nav>
     
    </Navbar>

    );
}

export default Navig;