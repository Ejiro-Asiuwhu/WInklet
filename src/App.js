import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './Views/Homepage';
import Benefits from './Views/Benefits';
import Security from './Views/Security';
import Download from './Views/Download';
import './App.css';

function App() {
  return (
    <div>
      <Switch>  
        <Route exact path="/" component={Homepage} />
        <Route exact path="/benefits" component={Benefits} />
        <Route exact path="/security" component={Security} />
        <Route exact path="/download" component={Download} />
      </Switch>
    </div>
  );
}

export default App;
