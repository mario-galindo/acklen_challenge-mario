import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { signIn,logout } from "../Auth/authPopup";

function Navigation() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="navbar-brand">
          <Link to="/">My Cars</Link>
        </div>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/#">
              <Link to="Car">
                <button className="btn btn-outline-light">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-plus-square-fill"
                    fill="#806cef"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
                    />
                  </svg>
                </button>
              </Link>
            </a>
          </div>
        </div>
        <form className="form-inline">
          {/* <strong style={{ color: "#806cef" }} className="mr-sm-2">
            User
          </strong> */}
          <button className="btn btn-warning mr-3" >SignOut</button>
          <button className="btn btn-primary" onClick={signIn()}>
            SignIn
          </button>
        </form>
      </nav>
    </div>
  );
}

export default Navigation;
