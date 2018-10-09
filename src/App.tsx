import React, { Component } from "react";
import "./App.css";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar fluid={true} collapseOnSelect={true}>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Gamer Fi</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default App;
