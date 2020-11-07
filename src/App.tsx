import React from 'react';
import Home from './Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

import Demo from './Demo/Demo';

function App() {
  return (
    <Router>
       <Switch>   
          <Route path="/demo">
            <Demo />
          </Route> 
          <Route path="/">
            <Home />
          </Route>


        </Switch>
    </Router>
  );
}

export default App;
