import React from 'react';
import axios from "axios";
import { Button, Row, Col, Rate } from 'antd';
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
          <BrowserRouter>
             <div className="ProductList" style={{ textAlign: 'center' }}>
             <Row gutter={54}>
             {products.map(product => (
                   <Col span={8}>
                     <div>
                        <img width="80%" height="80%" src={product.image} alt={product.description}></img><br/>
                        <span text-align="center">{product.name} <br/></span>
                        <span text-align="center"> Rs. {product.price}</span><br/>
                        <span text-align="center">{product.address}</span><br/>
                        <Rate disabled allowHalf Value={3.5} ></Rate><br/>
                        <Link to="/reviews" text-align="center"> 1 Reviews</Link><br />
                        <Route path="/reviews" />
                        <Button type="primary" align="center">
                        <span> Buy/Rent </span>
                        <Link to="/details" />
                        <Route path="/details" component={Details} />
                         </Button>
                     </div>
             </Col> 
             ))}
             </Row>
             </div>
             </BrowserRouter>
             )
        }
    };
  };
     
export default Home;