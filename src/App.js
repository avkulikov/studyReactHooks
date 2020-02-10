import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Navbar} from './component/Navbar';
import {Home} from './pages/Home';
import {Profile} from './pages/Profile';
import {About} from './pages/About';
import {Alert} from './component/Alert';
import {AlertState} from './context/Alert/AlertState';

function App() {
  return (
    <AlertState>
      <BrowserRouter>
        <Navbar />
        <div className="container pt-4">
          <Alert alert={{text: 'Text Alert'}} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/profile/:name" exact component={Profile} />
          </Switch>
        </div>
      </BrowserRouter>
    </AlertState>
  );
}

export default App;
