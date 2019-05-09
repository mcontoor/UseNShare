import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class Navbar extends React.Component {
  state = {
    navIsOpen: false,
    dropDown1: false,
    dropDown2: false,
    dropDown3: false
  }

  //this is undefined in handleToggle so we made a function an arrow function as does not care about this and does not create its own this
  handleToggle = () => {
    this.setState({ navIsOpen: !this.state.navIsOpen });
    this.setState({ dropDown3: !this.state.dropDown3 });
  }

  handleDropdownToggle = (nb) => {
    this.setState({ [`dropDown${nb}`]: !this.state[`dropDown${nb}`] });
  }

  //1st part is needed otherwise infinte loop, as when we run setState, it updates state so will fire componentWillUpdate which setState again
  componentWillUpdate(){
    this.state.navIsOpen && this.setState({ navIsOpen: false });
  }

  render() {
    return (
      <nav className="navbar mainNavbar">
        <div className="navbar-brand">
          <Link className="navbar-item logo" to="/">
            <img src="../assets/images/sleeveless-dress.png" alt="DressCode" />
            <span className="is-hidden-touch"> Use N Share </span>
          </Link>

          <Link className="navbar-item mainTitle" to="/items">All categories</Link>

          <div className="navbar-item"
            // onClick={() => this.handleDropdownToggle(1)}
            onMouseOver={() => this.handleDropdownToggle(1)}
            onMouseOut={() => this.handleDropdownToggle(1)}>
            <Link className="navbar-link" to="/items?category=Clothing">Clothing</Link>
            <div className={`dropdown ${this.state.dropDown1 ? 'is-open' : ''}`}>
              <Link className="navbar-item" to="/items?category=Clothing">All</Link>
              <Link className="navbar-item" to="/items?category=Clothing&type=Bridal">Bridal Gown</Link>
              <Link className="navbar-item" to="/items?category=Clothing&type=Dresses" onClick={this.updateState}>Hand Bags</Link>
              <Link className="navbar-item" to="/items?category=Clothing&type=Activewear">Jewelary</Link>
            </div>
          </div>

          <div className="navbar-item"
            onMouseOver={() => this.handleDropdownToggle(2)}
            onMouseOut={() => this.handleDropdownToggle(2)}>
            <Link className="navbar-link"
              to="/items?category=Accessories">Accessories</Link>
            <div className={`dropdown ${this.state.dropDown2 ? 'is-open' : ''}`}>
              <Link className="navbar-item" to="/items?category=Accessories">All</Link>
              <Link className="navbar-item" to="/items?category=Accessories&type=Handbags">Handbags</Link>
              <Link className="navbar-item" to="/items?category=Accessories&type=Sunglasses" onClick={this.updateState}>Sunglasses</Link>
              <Link className="navbar-item" to="/items?category=Accessories&type=Jewellery">Jewellery</Link>
            </div>
          </div>
            {!Auth.isAuthenticated() && <Link className="navbar-item mainTitle" to="/login"><span className="icon is-small"><i className="far fa-user"></i></span>Login</Link>}
          </div>
      </nav>
    );
  }
}


export default withRouter(Navbar);s