import React, { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/img/logo.png';
import Col  from 'react-bootstrap/Col';


const Header = () => {
  const [activeLink, setActiveLink] = useState('home');
const [scrolled,seScrolled ] = useState(false);


useEffect(() =>{
  const onScroll = () =>  {
    if(window.scrollY>50){
      seScrolled(true);
    }else{
      seScrolled(false);
    }
  }
  window.addEventListener("scroll",onScroll);
  return () => window.addEventListener("scroll",onScroll);
},[])

const onUpdateActiveLink = (value) => {
  setActiveLink(value);
}
  return (
    <div><Navbar expand="lg" className={scrolled ? "scrolled": ""}>
    <Container>
      <Navbar.Brand href="#/" >  </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
       
        <Nav.Link href="#Home" className={activeLink === 'home' ? 'active navbar-link' :  'navbar-link' } onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#About" className={activeLink === 'about' ? 'active navbar-link' :  'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About us</Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
      
          <Nav.Link href="#Login" className={activeLink === 'login' ? 'active navbar-link' :  'navbar-link'} onClick={() => onUpdateActiveLink('login')}>Login</Nav.Link>
       
        </Navbar.Collapse>
    </Container>
  </Navbar>
</div>
  )
}

export default Header