import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <div className="nav-item">
              <div className="nav-title">Home</div>
            </div>
            <div className="nav-item">
              <span className="nav-title">Bikes</span>
              <div className="sub-menu sub-menu-imgs">
                <div className="backdrop">
                  <img
                    className="sub-menu-item"
                    src="http://www.placekitten.com/450/301"
                    alt="cat"
                  />
                  <img
                    className="sub-menu-item"
                    src="http://www.placekitten.com/450/301"
                    alt="cat"
                  />
                  <img
                    className="sub-menu-item"
                    src="http://www.placekitten.com/450/301"
                    alt="cat"
                  />
                </div>
              </div>
            </div>
            <div className="nav-item">
              <span className="nav-title">other Bikes</span>
              <div className="sub-menu sub-menu-imgs">
                <div className="backdrop">
                  <img
                    className="sub-menu-item"
                    src="http://www.placekitten.com/450/301"
                    alt="cat"
                  />
                  <img
                    className="sub-menu-item"
                    src="http://www.placekitten.com/450/301"
                    alt="cat"
                  />
                  <img
                    className="sub-menu-item"
                    src="http://www.placekitten.com/450/301"
                    alt="cat"
                  />
                </div>
              </div>
            </div>
            <div className="nav-item">
              <span className="nav-title">more Bikes</span>
              <div className="sub-menu sub-menu-imgs">
                <div className="backdrop">
                  <img
                    className="sub-menu-item"
                    src="http://www.placekitten.com/450/301"
                    alt="cat"
                  />
                  <img
                    className="sub-menu-item"
                    src="http://www.placekitten.com/450/301"
                    alt="cat"
                  />
                  <img
                    className="sub-menu-item"
                    src="http://www.placekitten.com/450/301"
                    alt="cat"
                  />
                </div>
              </div>
            </div>
            <div className="nav-item">
              <span className="nav-title">words</span>
              <div className="sub-menu sub-menu-text">
                <div className="backdrop">
                  <p className="sub-menu-item">Words and such</p>
                  <p className="sub-menu-item">sWords and such</p>
                  <p className="sub-menu-item">sWords and such</p>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
