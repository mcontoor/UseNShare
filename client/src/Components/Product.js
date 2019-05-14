import React from 'react';
import axios from "axios";

class Product extends React.Component {
    constructor() {
        super();
        this.state={
            products:[],
            isLoaded:false
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/product/:product_id')
        .then(res=> {
            console.log(res.data);
            this.setState(()=>({
                isLoaded:true,
                products: res.data
            }))
        })
        .catch(err => console.log(err))
    }

    render() {
        var {isLoaded,products} = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>
        }

        else{
            return(
                <div className="App">
                <ul>
                    {products.map(products =>(
                        <li key={products.product_id}>
                        <span>{products.name}<br/></span>
                        <span>{products.price}<br/></span>
                        <span>{products.description}<br/></span>
                        <span>{products.image}<br/></span>
                        <span>{products.size}<br/></span>
                        <span>{products.user_id}<br/></span>
                        <span>{products.address}<br/></span>
                        <span>{products.google_location}<br/></span>
                        <span>{products.user_name}<br/></span>
                        <span>{products.review}<br/></span>
                        <span>{products.rating}</span>
                        </li>
                    ))}
                </ul>
                </div>
            )
        }
    };
};

export default Product;
