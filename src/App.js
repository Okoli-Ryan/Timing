import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Countdown from './Countdown';
import Timer from './Timer';
import Navigation from "./Nav";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
      <Router>
        <div>
            <Navigation/>
            <Route path="/" exact component={Home}/>
            <Route path="/countdown" component={Countdown}/>
            <Route path="/time" component={Timer}/>

        </div>
      </Router>
  );
}

export default App;

//uPYTXqX5ASvU4xPjRPfXmNSf2Msgs4
//Powered by <a href="https://www.amdoren.com">Amdoren</a>
//https://www.amdoren.com/api/timezone.php?loc=New+York&api_key=uPYTXqX5ASvU4xPjRPfXmNSf2Msgs4