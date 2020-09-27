import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  client as myMSALObj,
  request as loginRequest,
  request,
} from "../Auth/authProvider";

function Navigation() {
  const [userName, SetUserName] = useState("");
  const [IsAuthenticated, setIsAutheticated] = useState(false);

  const handleLogin = async () => {
    myMSALObj
      .loginPopup(loginRequest)
      .then((response) => {
        SetUserName(myMSALObj.getAccount().name);
        getToken();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  async function getToken() {
    let tokenResponse = await myMSALObj.acquireTokenSilent(request);
    console.log(tokenResponse.idToken.rawIdToken);
    if (tokenResponse) {
      setIsAutheticated(true);
    }
  }

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
      {IsAuthenticated ? (
        <button className="btn btn-danger" onClick={handleLogout}>
          Sign Out
        </button>
      ) : (
        <button className="btn btn-success mr-3" onClick={handleLogin}>
          Sign In
        </button>
      )}
    </nav>
  );
}

export default Navigation;
