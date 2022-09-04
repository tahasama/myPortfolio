import React from "react";
import "./App.css";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Navbar /> */}
        <Hero />
      </header>
    </div>
  );
}

export default App;
