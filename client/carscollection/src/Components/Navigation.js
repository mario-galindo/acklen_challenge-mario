import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  client as myMSALObj,
  request as loginRequest,
  request,
} from "../Auth/authProvider";

function Navigation() {
  const [isAuthenticated, setIdAuthenticated] = useState(false);

  const handleLogin = () => {
    myMSALObj
      .loginPopup(loginRequest)
      .then((response) => {
        localStorage.setItem("userName", myMSALObj.getAccount().name);
        setIdAuthenticated(true);
        getToken();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  async function getToken() {
    let tokenResponse = await myMSALObj.acquireTokenSilent(request);
    localStorage.setItem("idToken", tokenResponse.idToken.rawIdToken);
    console.log(tokenResponse.idToken.rawIdToken)
  }

  const handleLogout = () => {
    myMSALObj.logout();
    localStorage.removeItem("userName");
    localStorage.removeItem("idToken");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="navbar-brand" style={{ color: "#FFFFFF" }}>
        My Cars
      </div>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup"></div>

      <strong className="mr-3" style={{ color: "#FFFFFF" }}>
        {localStorage.getItem("userName")}
      </strong>
      {localStorage.getItem("idToken") !== null || isAuthenticated ? (
        <label type="button" className="btn btn-danger" onClick={handleLogout}>
          Sign Out
        </label>
      ) : (
        <label
          type="button"
          className="btn btn-success mr-3"
          onClick={handleLogin}
        >
          Sign In
        </label>
      )}
    </nav>
  );
}

export default Navigation;
