import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from  'react-router-dom';
import Home from './Components/Home';
import Profile from './Components/Profile';
import './App.css';
import Signin from './Components/Signin';
import Nav from './Components/Nav';
import Review from './Components/Review';
import Product from './Components/Product';
import Chat from './Components/Chat';
import Messages from './Components/Messages';


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
              <Route path="/messages" component={Messages} />
              <Route path="/chat" component={Chat} />
          </Switch>
        </div>
        </BrowserRouter>
    )
  };
}

export default App;