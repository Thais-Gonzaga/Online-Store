import React from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';
// import { addProduct } from '../services/addProduct';

class ProductCard extends React.Component {
  add = (ids) => {
    const { addCart } = this.props;
    addCart(ids, this.props);
  };

  render() {
    const { title, price, img, id, shipping } = this.props;
    const { free_shipping: free } = shipping;
    return (

      <div data-testid="product">
        <Link to={ `/product/${id}` } data-testid="product-detail-link">
          <img src={ img } alt={ title } />
          <p>{title}</p>
          <p>{`Preço: R$ ${price}`}</p>
          { free && (<p data-testid="free-shipping">Frete Grátis</p>)}
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => this.add(id, this.props) }
        >
          adicionar ao carrinho
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
