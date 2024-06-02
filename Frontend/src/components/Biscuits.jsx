import React from 'react'
import posthog from 'posthog-js';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect } from 'react';



const Biscuits = () => {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow  = () => {setShow(true);}
    const cookieConsent = localStorage.getItem('cookieConsent');
onload(() => {
    
    if(cookieConsent === false){
        setShow(true);
    }

},[]);


  useEffect(() => {
    
    if (!cookieConsent) {
        setShow(true);
    }
}, []);
const declineCookies = () => {posthog.opt_out_capturing(); localStorage.setItem('cookieConsent',true); setShow(false);}
  const acceptCookies = () => {posthog.opt_in_capturing();  localStorage.setItem('cookieConsent',true); setShow(false);}
return (
  
      
   
    
      <>
      
      <Modal
     className='cookie-modal'
        show={show}
        onHide={handleShow }
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Biscuits</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         we collect cookies, to improve your experience, would you like to send them?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={declineCookies}>
            Decline
          </Button>
          <Button variant="primary" onClick={acceptCookies} >
          Accept
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Biscuits