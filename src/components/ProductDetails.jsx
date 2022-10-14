import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';
import ReviewSection from './ReviewSection';
import { addProduct } from '../services/addProduct';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      price: '',
      img: '',
      id: '',
    };
  }

  async componentDidMount() {
    const { match: { params: { idproduct } } } = this.props;
    const product = await getProductById(idproduct);
    const { title, price, id, thumbnail } = product;
    this.setState({
      title,
      price,
      img: thumbnail,
      id,
    });
  }

  addCart = (ids) => {
    // const jasonSave = localStorage.getItem('keyLocalStorage') || '[]';
    // const save = JSON.parse(jasonSave);
    // const verificId = save.some(({ id }) => ids === id);
    // if (!verificId) {
    //   save.push(this.state);
    //   localStorage.setItem('keyLocalStorage', JSON.stringify(save));
    // }
    addProduct(ids, this.state);
  };

  render() {
    const { title, price, img, id } = this.state;
    const { match: { params: { idproduct } } } = this.props;

    return (
      <>
        <div data-testid="product">
          <img
            src={ img }
            alt={ title }
            data-testid="product-detail-image"
          />
          <p data-testid="product-detail-name">{title}</p>
          <p data-testid="product-detail-price">{price}</p>
        </div>

        <Link data-testid="shopping-cart-button" to="/cart">
          <button type="button"> Carrinho </button>
        </Link>

        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => this.addCart(id) }
        >
          Adicionar ao Carrinho
        </button>
        <ReviewSection id={ idproduct } />

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
