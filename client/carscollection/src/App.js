import React from "react";
import "./App.css";
import { signInAuthProvider } from "./AuthProvider";
import { AzureAD, AuthenticationState } from "react-aad-msal";
import GetAccessTokenButton from "./GetAccessTokenButton";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Car from "./Views/Car";

import Header from "./Components/Header";

function App() {
  return (
    <AzureAD provider={signInAuthProvider} forceLogin={true}>
      {({ login, logout, authenticationState, error, accountInfo }) => {
        switch (authenticationState) {
          case AuthenticationState.Authenticated:
            return (
              <div>
                <Router>
                  <Header
                    name={accountInfo.account.name}
                    logout={logout}
                  ></Header>
                  <div>
                    <Switch>
                      <Route path="/Car">
                        <Car></Car>
                      </Route>
                    </Switch>
                  </div>
                </Router>
                {/* <div className="jumbotron jumbotron-fluid">
                  <div className="container">
                    <h1 className="display-4">Welcome Acklener</h1>
                    <p className="lead">This is your list of classic cars.</p>
                  </div>
                </div> */}

                {/* <button className="btn btn-primary" onClick={logout}>
                  Logout
                </button>
                <GetAccessTokenButton
                  provider={signInAuthProvider}
                ></GetAccessTokenButton> */}
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
