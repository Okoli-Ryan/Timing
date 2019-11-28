import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Countdown from './Countdown';
import Timer from './Timer';
import Navigation from "./Nav";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
      <Router>
        <div>
            <Navigation/>
          <Route path="/countdown" component={Countdown}/>
          <Route path="/time" component={Timer}/>

        </div>
      </Router>
  );
}

export default App;
