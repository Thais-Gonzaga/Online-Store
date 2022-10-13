import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';
import ReviewSection from './ReviewSection';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      titleProduct: '',
      priceProduct: '',
      imgProduct: '',
    };
  }

  async componentDidMount() {
    const { match: { params: { idproduct } } } = this.props;
    const product = await getProductById(idproduct);
    const { title, price, id, thumbnail } = product;
    console.log(title, price, id, thumbnail);
    this.setState({
      titleProduct: title,
      priceProduct: price,
      imgProduct: thumbnail,
      id,
    });
  }

  render() {
    const { titleProduct, priceProduct, imgProduct, id } = this.state;
    return (
      <>
        <div data-testid="product">
          <img
            src={ imgProduct }
            alt={ titleProduct }
            data-testid="product-detail-image"
          />
          <p data-testid="product-detail-name">{titleProduct}</p>
          <p data-testid="product-detail-price">{priceProduct}</p>
        </div>

        <Link data-testid="shopping-cart-button" to="/cart">
          <button type="button"> Adicionar ao carrinho </button>
        </Link>
        <ReviewSection id={ id } />
        {console.log(id)}
      </>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.array,
  params: PropTypes.array,
  idproduct: PropTypes.object,

}.isRequired;

export default ProductDetails;
