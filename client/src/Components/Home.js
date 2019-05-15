import React from 'react';
import axios from "axios";
import { Button, Row, Col } from 'antd';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Details from '../Components/Details';
import '../layout.css'


class Home extends React.Component {
    constructor() {
      super();
      this.state={
        products:[],
        isLoaded: false,
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
      .catch(err => console.log(err));
    };
    render() {
      var { isLoaded, products} = this.state;
      if (!isLoaded) {
        return <div>Loading...</div>
      } 
        else {
        return(
             <div className="ProductList">
             <Row gutter={40}>
             {products.map(product => (
                   
                   <Col span={6}>
                     <div>
                     <img width="20%" height="20%" src={product.image} alt={product.description}></img><br/>
              <span>{product.name} <br/></span>
              <span> Rs. {product.price}</span><br/>
              <span>{product.address}</span><br/>
              <Button type="primary"> Buy / Rent </Button>
                     </div>
             </Col> 
             ))}
             </Row>
             </div>
             )
        }
    };
  };
     
export default Home;