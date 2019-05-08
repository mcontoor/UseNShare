import React, { Component } from 'react';
import { BrowserRouter, Route, Router } from  'react-router-dom';
import { Button } from 'antd';
import Home from './Components/Home';
import './App.css';

class App extends Component {
  constructor (props){
    super(props);
     this.state = {
      value: '',
    }
  }
  handleChange =(e)=>{
    this.setState({
      value: e.target.value
    })
  }

  render () {
    return(
      <div className="App">
      <header className="App-header">
      <div>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
    </div>
      <div>
        <form className ="App" onSubmit={this.onSubmit}>
          <input type = "text" value ={this.state.value} placeholder = " Search here" onChange={this.handleChange}></input>
          <Button type = "submit"> Search</Button>
        </form>
        </div> 
        <div>
    <Button type="primary">Signin</Button>
    </div>
      </header>
     
      <BrowserRouter>
      <div>
        <Route path="/" component={Home} />
      </div>
      </BrowserRouter>
      <footer>

      </footer>
      </div>
    )
  }
}

export default App;