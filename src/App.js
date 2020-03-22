import React, {createContext} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Countdown from './Countdown';
import Timer from './Timer';
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './Nav';

const appReducer = (state, action) => {
    switch (action.type){
        case("displayTime"): {
            return action.payload
        }
    }
}

export const CityLocation = createContext(null);

function App() {

    const [city, dispatch] = React.useReducer(appReducer, null);

  return (
      <Router>
          <CityLocation.Provider value={{city, dispatch}}>
              <div>
                  <Navigation/>
                  <Route path="/" exact component={Home}/>
                  <Route path="/countdown" component={Countdown}/>
                  <Route path="/time" component={Timer}/>
                </div>
          </CityLocation.Provider>
      </Router>
  );
}

export default App;
