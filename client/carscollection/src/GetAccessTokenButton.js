import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function GetTokenButton({ provider }) {
  const getAuthToken = () => {
    // You should should use getAccessToken() to fetch a fresh token before making API calls
    provider.getAccessToken().then(token => {
      console.log(token.accessToken)
    });
  };

  const getIdToken = () => {
    // You should should use getAccessToken() to fetch a fresh token before making API calls
    
      provider.getIdToken().then(token => {
        console.log(token.idToken.rawIdToken);
      });
    
  };

  return (
    <div style={{ margin: '40px 0' }}>
      <p>
        You can use the auth provider to get a fresh token. If a valid token is in cache it will be returned, otherwise
        a fresh token will be requested. If the request fails, the user will be forced to login again.
      </p>
      <button onClick={getAuthToken} className="btn btn-warning">
        Get Access Token
      </button>
      <button onClick={getIdToken} className="btn btn-success">
        Get Id Token
      </button>
    </div>
  );
}