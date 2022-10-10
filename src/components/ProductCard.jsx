import React from 'react';
import { string } from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { title, price, img } = this.props;
    return (
      <div data-testid="product">
        <img src={ img } alt={ title } />
        <p>{title}</p>
        <p>{price}</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: string,
  price: string,
  img: string,

}.isRequired;
export default ProductCard;
