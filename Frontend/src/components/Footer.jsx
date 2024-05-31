import React from 'react';


import { Col, Container, Row } from 'react-bootstrap';
import logo from '../assets/img/logo.png';


const Footer = () => {
  return (
    <footer className="footer">
    <Container>
      <Row className="align-items-center">
        
      <Col size={12} sm={6} >
            <img src={logo} alt="Logo"  className='logo'/>
          </Col>
        <Col size={12} sm={6} className="text-center text-sm-end">
          <p>By Tadeas Pirich, Josef Vetrovsky, Marie Kapucianova. All Rights Reserved</p>
        </Col>
      </Row>
    </Container>
  </footer>
  )
}

export default Footer