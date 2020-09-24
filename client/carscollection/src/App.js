import React from "react";
import "./App.css";
import { signInAuthProvider } from "./AuthProvider";
import { AzureAD, AuthenticationState } from "react-aad-msal";
import GetAccessTokenButton from "./GetAccessTokenButton";

function App() {
  return (
    <AzureAD provider={signInAuthProvider} forceLogin={true}>
      {({ login, logout, authenticationState, error, accountInfo }) => {
        switch (authenticationState) {
          case AuthenticationState.Authenticated:
            return (
              <div>
                <p>
                  <span>Welcome, {accountInfo.account.name}!</span>
                </p>
                <button onClick={logout}>Logout</button>
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
