import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//Views
import Car from "./Views/Car";
import Home from "./Views/Home";

//Components
import Navigation from "./Components/Navigation";

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <div></div>
      </Router>
    </div>
  );
}

export default App;
