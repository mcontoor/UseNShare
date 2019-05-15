import React from 'react';
import { Card } from 'antd';
import { Button } from 'antd';
import { Rate } from 'antd';
import Axios from 'axios';


class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: []
    }}

    componentDidMount() {
      Axios.get(`http://localhost:5000/details/${this.props.location.product}`)
      .then(res => console.log(res.data))
      .then(this.setState({
        product: res.data
      }))
      .catch(e => console.log(e))
    }


  
  handleRent = () => {
    console.log("Rendet..!", this.state.value);
  }
  render() {
  
      return(
            <div className="App"> jhlk
        {/* //     <Card style={{ width: 400 }} bodyStyle={{ padding: 30 }}>
        //     <div className="custom-image">
        //     <img alt="example" width="100%" src={product.image}/>
        //     </div>
        //     <div className="custom-card">
        //     <h3>{product.name}</h3>
        //     <p>Rs.{product.price}</p>
        //     <p> {product.address}</p>
        //   <p>{product.description}</p>
        //     <Rate allowHalf defaultValue={3.5} /><br/>
        //     <Button type="primary" onClick={this.handleRent}> Rent </Button>
        //     <Button type="primary"> Buy </Button>
        //     </div>
        //     </Card> */}
        </div>

      )
  }
}
export default Details;