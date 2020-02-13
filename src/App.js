import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './Views/Homepage';
import Benefits from './Views/Benefits';
import Security from './Views/Security';
import Download from './Views/Download';
import NotFound404 from './Views/NotFound404';
import './App.css';

function App() {
  return (
    <div>
      <Switch>  
        <Route exact path="/" render={() =><Homepage />} />
        <Route exact path="/benefits" render={() =><Benefits />} />
        <Route exact path="/security" render={() =><Security />} />
        <Route exact path="/download" render={() => <Download />} />
        <Route  render={() => <NotFound404 />} />
      </Switch>
    </div>
  );
}

export default App;
