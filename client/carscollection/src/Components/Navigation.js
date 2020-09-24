import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Navigation(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/#">
          Cars Collection Acklen
        </a>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/#">
              Create
            </a>
            <a className="nav-item nav-link" href="/#">
              Find
            </a>
          </div>
        </div>
        <form className="form-inline">
          <text className="mr-sm-2">{props.name}</text>
          <button className="btn btn-danger my-2 my-sm-0">Salir</button>
        </form>
      </nav>
    </div>
  );
}

export default Navigation;
