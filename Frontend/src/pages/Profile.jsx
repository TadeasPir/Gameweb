import React from "react";
import { Link } from "react-router-dom";
import HttpClient from "../components/HttpClient";
import { useState, useEffect } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const resp = await HttpClient.get("//localhost:8080/@me");

        setUser(resp.data);
      } catch (e) {
      }
    })();
  }, []);

  const logoutUser = async (e) => {
    await HttpClient.post("//localhost:8080/logout");
    window.location.href = "/";
  };

  return (
    <div className="Auth-form-container">
      <div className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Signed In</h3>
          <div className="form-group mt-3">Email address: {user != null && user.email}</div>
          <div className="form-group mt-3">Password: You wish :D</div>
        <div className="d-grid gap-2 mt-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={logoutUser}
          >
            Logout
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
