import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header resp-head">
          <div className="nav-container">
            <h1 className="logo">Start Bootstrap</h1>
            <label for="toggle">Menu &#9776;</label>
            <input type="checkbox" id="toggle" />
            <ul id="nav-bar">
              <nav>SERVICES</nav>
              <nav>PORTFOLIO</nav>
              <nav>ABOUT</nav>
              <nav>TEAM</nav>
              <nav>CONTACT</nav>
            </ul>
          </div>
          <div className="landing-text">
            <h2>Welcome To Our Studio!</h2>
            <h1>IT'S NICE TO MEET YOU</h1>
            <button>TELL ME MORE</button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
