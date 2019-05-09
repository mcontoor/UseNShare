import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from  'react-router-dom';
import { Button } from 'antd';
import Home from './Components/Home';
import './App.css';
import Signin from './Components/Signin';
import Nav from './Components/Nav';

class App extends Component {
  render () {
    return(
      <BrowserRouter>
       <div>
         <Nav />
         <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/signin" component={Signin} />
        </Switch>
       </div>
      </BrowserRouter>
    )
  };
}

export default App;