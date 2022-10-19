import React from 'react';
import { Link } from 'react-router-dom';
// import { number } from 'prop-types';
import cartIcon from '../images/cart-shopping-solid.svg';

class ButtonCart extends React.Component {
  render() {
    const { qtys } = this.props;
    return (
      <Link className="Cart-button" data-testid="shopping-cart-button" to="/cart">
        <button type="button">
          <span data-testid="shopping-cart-size">
            {qtys}
          </span>
          <img src={ cartIcon } alt="cart" />
        </button>
      </Link>
    );
  }
}

export default ButtonCart;
