import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>{" "}
        <footer>
          This project was created by{" "}
          <a
            href="https://github.com/Mumina033"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mumina Mohamed
          </a>{" "}
          and is
          <a
            href="https://github.com/Mumina033/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
