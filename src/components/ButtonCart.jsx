import React from 'react';
import { Link } from 'react-router-dom';
import cartIcon from '../images/cart-shopping-solid.svg';

class ButtonCart extends React.Component {
  render() {
    return (
      <Link className="Cart-button" data-testid="shopping-cart-button" to="/cart">
        <button type="button">
          <span>4</span>
          <img src={ cartIcon } alt="cart" />
        </button>
      </Link>
    );
  }
}

export default ButtonCart;
