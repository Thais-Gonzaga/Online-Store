import React from 'react';
import { Link } from 'react-router-dom';
import { addProduct } from '../services/addProduct';
import { removeProduct } from '../services/removeProduct';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.localStorage();
  }

  localStorage = () => {
    const products = JSON.parse(localStorage.getItem('keyLocalStorage'));
    if (!products) this.setState({ products: [] });
    if (products) this.setState({ products });
  };

  add = (ids) => {
    addProduct(ids);
    this.localStorage();
  };

  removeItem = (ids) => {
    removeProduct(ids);
    this.localStorage();
  };

  remove = ({ target }) => {
    const { id } = target;
    const jasonSave = localStorage.getItem('keyLocalStorage') || '[]';
    const save = JSON.parse(jasonSave);
    const newSave = save.filter(({ id: idSave }) => idSave !== id);
    localStorage.setItem('keyLocalStorage', JSON.stringify(newSave));
    this.setState({ products: newSave });
  };

  render() {
    const { products } = this.state;

    return (
      <div>

        { products.length === 0
          ? (<p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>)

          : products.map(({ img, title, price, id, qty }) => (

            (
            // ProductCard
              <div data-testid="product" key={ id }>
                <img src={ img } alt={ title } />
                <p data-testid="shopping-cart-product-name">{title}</p>
                <p>{`Preço: R$${price}`}</p>

                <button
                  data-testid="remove-product"
                  type="button"
                  onClick={ this.remove }
                  id={ id }
                >
                  X
                </button>
                <button
                  data-testid="product-decrease-quantity"
                  type="button"
                  onClick={ () => this.removeItem(id) }
                  name="subtract"
                >
                  -
                </button>
                <span data-testid="shopping-cart-product-quantity">
                  {qty}
                </span>
                <button
                  data-testid="product-increase-quantity"
                  type="button"
                  onClick={ () => this.add(id) }
                  name="add"
                >
                  +
                </button>
              </div>
            )

          ))}
        <Link
          to="/checkout"
          data-testid="checkout-products"
        >
          <button
            type="button"
          >
            Finalizar compra
          </button>
        </Link>

      </div>
    );
  }
}

export default ShoppingCart;
