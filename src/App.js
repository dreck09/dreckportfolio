import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages';
import MessageMePage from './pages/contactme';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contactme" component={MessageMePage} exact />
      </Switch>
     
    </Router>
  );
}

export default App;
