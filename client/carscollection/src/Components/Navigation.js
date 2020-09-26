import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="navbar-brand" style={{ color: "#FFFFFF" }}>
        My Cars App
      </div>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup"></div>
      <form className="form-inline">
        <button className="btn btn-secondary">Sign In</button>
      </form>
    </nav>
  );
}

export default Navigation;
