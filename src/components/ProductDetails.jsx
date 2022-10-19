import React from 'react';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';
import ReviewSection from './ReviewSection';
import { addProduct } from '../services/addProduct';
import ButtonCart from './ButtonCart';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      price: '',
      img: '',
      id: '',
      availableQty: 0,
      qtys: 0,
      shipping: {},
    };
  }

  async componentDidMount() {
    const { match: { params: { idproduct } } } = this.props;
    const product = await getProductById(idproduct);
    const { title, price, id, thumbnail, availableQty, shipping } = product;
    const someQtys = JSON.parse(localStorage.getItem('qtys') || '[]');
    const { qtys } = someQtys;

    this.setState({
      title,
      price,
      img: thumbnail,
      id,
      qtys,
      availableQty,
      shipping,
    });
  }

  addCart = (ids) => {
    addProduct(ids, this.state);
    const products = JSON.parse(localStorage.getItem('keyLocalStorage'));
    const qtys = products.reduce((acc, { qty }) => acc + qty, 0);
    this.setState({ qtys });
  };

  render() {
    const { title, price, img, id, qtys, shipping } = this.state;
    const { match: { params: { idproduct } } } = this.props;
    const { free_shipping: free } = shipping;

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
        { free && (<p data-testid="free-shipping">Frete Grátis</p>)}

        <ButtonCart qtys={ qtys } />

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
