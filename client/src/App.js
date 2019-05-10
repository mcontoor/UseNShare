import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from  'react-router-dom';
import { Button, Menu, Dropdown, Icon} from 'antd';
import { Card, Col, Row } from 'antd';
import Home from './Components/Home';
import Profile from './Components/Profile';
import './App.css';
import Signin from './Components/Signin';
import Nav from './Components/Nav';
import Review from './Components/Review';
import Details from './Components/Details';

class App extends Component {
  constructor (props){
    super(props);
     this.state = {
      value: '',
    }
  }
  handleChange=(e)=>{
    this.setState({
      value: e.target.value
    })
  }

  handleMenuClick=(e)=>{
    console.log('click', e);
  }

  render () {
    return(
      <div className="App">
      <h1> Use N Share </h1>
      <header className="App-header">
      <div>
      <Button type="primary">Rent</Button>
      <Button type="primary">Buy</Button>
      <Button type="primary">Category</Button>

     {/* <Dropdown>
      <Button>
        Category <Icon type="down" />
        <Menu onClick={(e)=>console.log('click',e)}>
      <Menu.Item key="1"> Western Wear </Menu.Item>
      <Menu.Item key="2"> Hand Bags </Menu.Item>
      <Menu.Item key="3"> Jewelary </Menu.Item>
    </Menu>
      </Button>
    </Dropdown> */}
     </div>
      {/* <div>
      <Button type="primary">Rent</Button>
      <Button type="primary">Buy</Button>
    </div> */}
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input type="text" value={this.state.value} placeholder=" Search here" onChange={this.handleChange}></input>
          <Button type="submit"> Search</Button>
        </form>
        </div> 
        <div>
        <Icon type="notification" />
    <Button type="primary">Signin</Button>
    </div>
      </header>
      <BrowserRouter>
      <div>
         <Nav />
         <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/signin" component={Signin} />
            <Route path="/profile" component={Profile} />
            <Route path="/review" component={Review} />
            <Route path="/Details" component={Details}/>
            
        </Switch>
       </div> 
      </BrowserRouter>
   </div>
    )
  }
}

export default App;
 