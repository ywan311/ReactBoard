import React from 'react';
import Header from "./Componenets/Header"
import Routes from "./Routes"
import { BrowserRouter as Router } from "react-router-dom"


function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes/>
      </div>
    </Router>
  );
}

export default App;
