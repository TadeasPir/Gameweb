import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HttpClient from "../components/HttpClient";
import { Alert } from "react-bootstrap";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);

  const registerUser = async (e) => {

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   if(!emailRegex.test(email)){
    setInvalidEmail(true); 
    return;
   }else{ 
    setInvalidEmail(false);
   } 
    try {
      const resp = await HttpClient.post("//localhost:8080/register", {
        email,
        password,
      });

      window.location.href = "/"

    } catch (err) {
      if (err.response.status === 409){
        setShow(true)
      }
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
        <Alert variant="danger"
    show={show} 
 onClose={() => setShow(false)} dismissible>
     <Alert.Heading>Oh snap! This email already has account!</Alert.Heading>
     <p>
      You know you could be a little bit more creative. Here are some ideas. <Alert.Link href="https://brandsnag.com/email-name-generator"> check this</Alert.Link>.
     </p>
   </Alert>

   <Alert variant="danger"
    show={invalidEmail} 
 onClose={() => setInvalidEmail(false)} dismissible>
     <Alert.Heading>Nu uh!</Alert.Heading>
     <p>
      Not an email! <Alert.Link href="https://www.urbandictionary.com/define.php?term=email"> Need a hand?</Alert.Link>.
     </p>
   </Alert>

          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?
            <Link to="/login" className="sign">
              {" "}
              Sign In?
            </Link>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="button" className="btn btn-primary" onClick={registerUser}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
