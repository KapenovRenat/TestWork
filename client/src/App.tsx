import React from 'react';
import { Router, Link } from "@reach/router"
import MainPage from "./pages/main";

function App() {
  return (
    <div className="App">
      <Router>
        <MainPage path="/" />
      </Router>
    </div>
  );
}

export default App;
