import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from  'react-router-dom';
import Home from './Components/Home';
import './App.css';
import Signin from './Components/Signin';
import Nav from './Components/Nav';

import { Provider } from 'react-redux';
import store from './store';


class App extends Component {
  render () {
    return(
      <Provider store={store}>
        <BrowserRouter>
        <div>
          <Nav />
          <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/signin" component={Signin} />
          </Switch>
        </div>
        </BrowserRouter>
      </Provider>
    )
  };
}

export default App;