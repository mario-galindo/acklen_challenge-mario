import React from "react";
import Navigation from "./Navigation";

function Header(props) {
  return <Navigation name={props.name} />;
}

export default Header;
