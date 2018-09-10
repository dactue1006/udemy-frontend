import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import './stylesheets/main.scss';
import Home from './scenes/Home';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home}/>
    </Switch>
  </Router>
);

export default App;
