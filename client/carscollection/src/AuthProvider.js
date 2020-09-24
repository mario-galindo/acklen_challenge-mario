import { MsalAuthProvider, LoginType } from "react-aad-msal";
const tenant = "classicscarschallenge.onmicrosoft.com";
const signInPolicy = "B2C_1_carscollection_sign_in_up";
const applicationID = "387d3855-d43e-45f0-937f-b06a3e0d8ff2";
const reactRedirectUri = "http://localhost:3000";
const tenantSubdomain = tenant.split(".")[0];
const instance = `https://${tenantSubdomain}.b2clogin.com/tfp/`;
const signInAuthority = `${instance}${tenant}/${signInPolicy}`;
// Msal Configurations
const signInConfig = {
  auth: {
    authority: signInAuthority,
    clientId: applicationID,
    redirectUri: reactRedirectUri,
    validateAuthority: false,
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: true,
  },
};
// Authentication Parameters
const authenticationParameters = {
  scopes: [
    "https://classicscarschallenge.onmicrosoft.com/515d9a26-cc2d-4bea-95a5-0b44c3953f3a/Api.Read"
  ],
};
// Options
const options = {
  loginType: LoginType.Redirect,
  tokenRefreshUri: window.location.origin,
};
export const signInAuthProvider = new MsalAuthProvider(
  signInConfig,
  authenticationParameters,
  options
);
