import * as Msal from "msal";

const config = {
  auth: {
    clientId: "387d3855-d43e-45f0-937f-b06a3e0d8ff2",
    authority:
      "https://classicscarschallenge.b2clogin.com/classicscarschallenge.onmicrosoft.com/B2C_1_carscollection_sign_in_up",
    redirectUri: "https://secureapi-galindo.azurewebsites.net/",
    validateAuthority: false,
  },
};

export const client = new Msal.UserAgentApplication(config);

export const request = {
  scopes: [
    "openid",
    "profile",
    "https://classicscarschallenge.onmicrosoft.com/515d9a26-cc2d-4bea-95a5-0b44c3953f3a/Api.Read",
  ],
};
