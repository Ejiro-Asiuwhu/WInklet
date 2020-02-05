import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Benefits from './Views/Benefits';
import Security from './Views/Security';
import './App.css';

function App() {
  return (
    <div>
      <Switch>  
        <Route exact path="/" component={Header} />
        <Route exact path="/benefits" component={Benefits} />
        <Route exact path="/security" component={Security} />
      </Switch>
    </div>
  );
}

export default App;
