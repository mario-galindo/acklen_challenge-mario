import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <strong className="navbar-brand">
          <Link to="/">Cars Collection Acklen</Link>
        </strong>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/#">
              <Link to="Car">Create</Link>
            </a>
          </div>
        </div>
        <form className="form-inline">
          <strong className="mr-sm-2">User Name</strong>
          <button className="btn btn-danger my-2 my-sm-0">Salir</button>
        </form>
      </nav>
    </div>
  );
}

export default Navigation;
