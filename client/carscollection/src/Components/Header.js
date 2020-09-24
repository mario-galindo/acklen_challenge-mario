import React from "react";
import Navigation from "./Navigation";

function Header(props) {
  return <Navigation name={props.name} logout={props.logout}/>;
}

export default Header;
