import React from 'react';
import { Card } from 'antd';
import { Button } from 'antd';


class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  OnClick = (e)=>{
    this.props.Rent(this.props.id)
    this.setState({
      ...this.state
    })
    
    // Rent=()=>{
    //     this.props.Rent(this.props.product.id)
    //     this.setState({
    //       ...this.state
    //     })
    }
    render() {
        return(
              <div className="App">
              <Card style={{ width: 400 }} bodyStyle={{ padding: 30 }}>
              <div className="custom-image">
              <img alt="example" width="100%" src="https://cdn.shopify.com/s/files/1/0049/3649/9315/products/1_505f5be0-0559-476c-ad77-599fb72c1809_600x.JPG?v=1542968950" />
              </div>
              <div className="custom-card">
              <h3>Lehanga</h3>
             <p>Rs.300/day</p>
             <p> Gachibowli, Hyderabad</p>
            <p>A lovely pink lehenga that has a chequered crop top with floral clusters made with bullion knots along the waistline embellished with cutdana. It has a sheer back and an airy net skirt.</p>
             <Button color="primary"> Chat </Button>
             </div>
             </Card>
          </div>

        );
    }
}
export default Details;