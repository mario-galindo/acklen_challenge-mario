import React from "react";
import "./App.css";
import { signInAuthProvider } from "./AuthProvider";
import { AzureAD, AuthenticationState } from "react-aad-msal";
import GetAccessTokenButton from "./GetAccessTokenButton";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from './Components/Header'

function App() {
  return (
    <AzureAD provider={signInAuthProvider} forceLogin={true}>
      {({ login, logout, authenticationState, error, accountInfo }) => {
        switch (authenticationState) {
          case AuthenticationState.Authenticated:
            return (
              <div>
                <Header name={accountInfo.account.name}></Header>
                <p>
                  <h2>Welcome, {accountInfo.account.name}!</h2>
                </p>
                <button className="btn btn-primary" onClick={logout}>
                  Logout
                </button>
                <GetAccessTokenButton
                  provider={signInAuthProvider}
                ></GetAccessTokenButton>
              </div>
            );
          case AuthenticationState.Unauthenticated:
            return (
              <div>
                {error && (
                  <p>
                    <span>
                      An error occurred during authentication, please try again!
                    </span>
                  </p>
                )}
                <p>
                  <span>Hey stranger, you look new!</span>
                  <button onClick={login}>Login</button>
                </p>
              </div>
            );
          case AuthenticationState.InProgress:
            return <p>Authenticating...</p>;
          default:
            return <div></div>;
        }
      }}
    </AzureAD>
  );
}

export default App;
