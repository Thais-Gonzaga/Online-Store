import React from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';

class ProductCard extends React.Component {
  // adicionado - thais
  constructor() {
    super();
    this.state = {
    };
  }

  addCart = () => {
    // const { id } = target;
    console.log(this.props);
    const jasonSave = localStorage.getItem('keyLocalStorage') || '[]';
    const save = JSON.parse(jasonSave);
    save.push(this.props);
    // const newSave = save.filter(({ id: idSave }) => id !== idSave);
    // console.log(newSave);
    localStorage.setItem('keyLocalStorage', JSON.stringify(save));
  };
  // adicionado thais

  render() {
    const { title, price, img, id } = this.props;
    return (
      <div data-testid="product">
        <Link to={ `/product/${id}` } data-testid="product-detail-link">
          <img src={ img } alt={ title } />
          <p>{title}</p>
          <p>{price}</p>
          {/* adicionado thais */}
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.addCart }
          // id={ id }
        >
          add to cart
        </button>
        {/* adicionado thais */}
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
