import React from 'react';
import axios from "axios";
import { Button } from 'antd';

class Home extends React.Component {
    constructor() {
      super();
      this.state={
        products:[],
        isLoaded: false
      };
    }
    
    componentDidMount() {
      axios.get('http://localhost:5000/')
      .then(res => {
        console.log(res.data);
        this.setState(() => ({
          isLoaded: true,
          products: res.data
        }))
      })
      .catch(err => console.log(err))
    }
  
    render() {
      var { isLoaded, products} = this.state;
      if (!isLoaded) {
        return <div>Loading...</div>
      } 
        else {
        return(
            <div className="App">
            <ul>
              {products.map(product => (
                <li key={product.id}>
                <img width="20%" src={product.image} alt={product.description}></img><br/>
                <span>{product.name} <br/></span>
                <span> Rs. {product.price}</span><br/>
                <span>{product.address}</span><br/>
                <Button color="primary"> Rent </Button>
                
                </li>
              ))}
            </ul> 
          </div>
        )
        }
    };
  };

export default Home;