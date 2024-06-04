import React, { useState } from "react";
import { Link } from "react-router-dom";
import HttpClient from "../components/HttpClient";
import { Alert } from "react-bootstrap";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const logInUser = async (e) => {
    try {
      const resp = await HttpClient.post("//localhost:8080/login", {
        email,
        password,
      });

      window.location.href = "/";
    } catch (err) {
      setShow(true)
    }
  };

  return (
    <div>
     
    <div className="Auth-form-container">
   
   
     
      <form className="Auth-form">
    
        <div className="Auth-form-content">
        <Alert variant="danger"
    show={show} 
 onClose={() => setShow(false)} dismissible>
     <Alert.Heading>Oh snap! your password or email is invalid!</Alert.Heading>
     <p>
      this is sign of severe lack of skill for more info <Alert.Link href="https://www.urbandictionary.com/define.php?term=skill+issue"> check this</Alert.Link>.
     </p>
   </Alert>
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Not registered yet?
            <Link to="/register" className="sign">
              {" "}
              Sign Up?
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
            <button
              type="button"
              className="btn btn-primary"
              onClick={logInUser}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    
    </div>

    </div>
  );
};

export default Login;
