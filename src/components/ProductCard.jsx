import React from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { title, price, img, id } = this.props;
    return (
      <Link to={ `/product/${id}` } data-testid="product-detail-link">
        <div data-testid="product">
          <img src={ img } alt={ title } />
          <p>{title}</p>
          <p>{price}</p>
        </div>
      </Link>
    );
  }
}

ProductCard.propTypes = {
  title: string,
  price: string,
  img: string,

}.isRequired;
export default ProductCard;
