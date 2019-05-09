import React, { Component } from 'react';
import { BrowserRouter, Route } from  'react-router-dom';
import { Button, Menu, Dropdown, Icon} from 'antd';
import Home from './Components/Home';
import { Card, Col, Row } from 'antd';
import './App.css';
import Product from './Components/Product';

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

  // handleMenuClick=(e)=>{
  //   console.log('click', e);
  // }

   render () {
    return(
      <div className="App">
      <h1> Use N Share </h1>
      <header className="App-header">
      <div>
      <button type="button" class="btn btn-primary">Rent</button>
      <Button coloor="primary">Buy</Button>
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
        <Route path="/" component={Home} />
        <Route path="/" component={Product}/>
      </div>
      </BrowserRouter>
      <Card style={{ width: 400 }} bodyStyle={{ padding: 30 }}>
     <div className="custom-image">
      <img alt="example" width="100%" src="https://img.davidsbridal.com/is/image/DavidsBridalInc/Set-CWG780-10893393-Ivory_Champagne?wid=407&hei=562&bgc=255,255,255&defaultImage=DavidsBridalInc/PDP_No_Image_Available_Message" />
    </div>
    <div className="custom-card">
      <h3>Wedding Bridal Gown</h3>
      <p>Rs.2500/day</p>
      <p> Gachibowli, Hyderabad</p> 
      <Button type="primary">Rent</Button>
      <Button type="primary">Buy</Button>

    </div>
  </Card>
   </div>
    )
  }
}

export default App;
