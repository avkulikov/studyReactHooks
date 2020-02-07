import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Navbar} from './component/Navbar';
import {Home} from './pages/Home';
import {Profile} from './pages/Profile';
import {About} from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container pt-4">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/profile/:name" exact component={Profile} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
