import { client as myMSALObj, request as loginRequest } from "./authConfig";

export function signIn() {
  myMSALObj
    .loginPopup(loginRequest)
    .then((loginResponse) => {
      console.log("id_token acquired at: " + new Date().toString());
      console.log(loginResponse);

      if (myMSALObj.getAccount()) {
        console.log(myMSALObj.getAccount().name);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

export function logout() {
  myMSALObj.logout();
}


