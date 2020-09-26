import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//Views
import Car from "./Views/Car";
import Home from "./Views/Home";

//Components
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <div>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/Car">
              <Car></Car>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
