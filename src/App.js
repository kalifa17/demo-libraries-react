import React, { Component } from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import StyledComponentsDemo from "./components/StyledComponentsDemo"
import Home from "./components/Home"
import ContactPage from "./components/ContactPage"
import ReactSelectDemo from "./components/ReactSelectDemo"


class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <nav>
            <Link to="/">Home</Link>
          </nav>
          <nav>
            <Link to="/styled-components">Styled Components</Link>
          </nav>
          <nav>
            <Link to="/redux-form">Redux Form</Link>
          </nav>
          <nav>
            <Link to="/react-select">React Select</Link>
          </nav>
        </div>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/styled-components" component={StyledComponentsDemo} />
          <Route path="/redux-form" component={ContactPage} />
          <Route path="/react-select" component={ReactSelectDemo} />
        </div>
      </div>
    );
  }
}

export default App;
