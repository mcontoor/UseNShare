import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from  'react-router-dom';
import Home from './Components/Home';
import Profile from './Components/Profile';
import './App.css';
import Signin from './Components/Signin';
import Nav from './Components/Nav';
import Review from './Components/Review';


class App extends Component {
  render () {
    return(
        <BrowserRouter>
        <div>
          <Nav />
          <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/signin" component={Signin} />
              <Route path="/profile" component={Profile} />
            ` <Route path="/review" component={Review} />
          </Switch>
        </div>
        </BrowserRouter>
    )
  };
}

export default App;