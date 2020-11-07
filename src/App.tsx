import React from 'react';
import Home from './Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Card from './Card/Card';

function App() {
  return (
    <Router>
       <Switch>

          <Route path="/demo">
            <Card/>
          </Route>
          
          <Route path="/">
            <Home />
          </Route>

        </Switch>
    </Router>
  );
}

export default App;
