import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {signIn} from '../Auth/authPopup'

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="navbar-brand" style={{ color: "#FFFFFF" }}>
        My Cars App
      </div>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup"></div>
      
        <button className="btn btn-success mr-3" onClick={signIn}>Sign In</button>
        <button className="btn btn-danger">Sign Out</button>
      
    </nav>
  );
}

export default Navigation;
