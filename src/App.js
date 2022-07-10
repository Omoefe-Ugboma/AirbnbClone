import React from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    // BEM
    <div className="app">
      <Router>
        <Header/>
        <Home/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
