import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  client as myMSALObj,
  request as loginRequest,
} from "../Auth/authProvider";

function Navigation() {
  const [userName, SetUserName] = useState("");

  const handleLogin = () => {
    myMSALObj
      .loginPopup(loginRequest)
      .then((response) => {
        SetUserName(myMSALObj.getAccount().name);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogout = () => {
    myMSALObj.logout();
  };

  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="navbar-brand" style={{ color: "#FFFFFF" }}>
        My Cars App
      </div>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup"></div>

      <strong className="mr-3" style={{ color: "#FFFFFF" }}>
        {userName}
      </strong>
      <button
        id="signin"
        className="btn btn-success mr-3"
        onClick={handleLogin}
      >
        Sign In
      </button>
      <button className="btn btn-danger" onClick={handleLogout}>
        Sign Out
      </button>
    </nav>
  );
}

export default Navigation;
