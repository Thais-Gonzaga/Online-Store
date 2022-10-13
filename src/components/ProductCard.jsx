import React from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';

class ProductCard extends React.Component {
  addCart = (ids) => {
    const jasonSave = localStorage.getItem('keyLocalStorage') || '[]';
    const save = JSON.parse(jasonSave);
    const verificId = save.some(({ id }) => ids === id);
    if (!verificId) {
      save.push(this.props);
      localStorage.setItem('keyLocalStorage', JSON.stringify(save));
    }
  };

  render() {
    const { title, price, img, id } = this.props;
    return (
      <div data-testid="product">
        <Link to={ `/product/${id}` } data-testid="product-detail-link">
          <img src={ img } alt={ title } />
          <p>{title}</p>
          <p>{price}</p>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => this.addCart(id) }
        >
          add to cart
        </button>
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
