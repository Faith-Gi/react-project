import React from "react";
import axios from "axios";

import Weather from "./Weather";

import "./App.css";

function App() {
  
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Debugging</h1>
        <br />
        <a href="https://www.shecodes.io" target="_blank" rel="noreferrer">
          Workshops
        </a>
        <Weather />
        
      </header>
    </div>
  );
}

export default App;
