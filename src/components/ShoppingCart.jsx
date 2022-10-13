import React from 'react';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      qtd: 1,
    };
    this.localStorage = this.localStorage.bind(this);
    this.changesQtd = this.changesQtd.bind(this);
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    this.localStorage();
  }

  localStorage() {
    const products = JSON.parse(localStorage.getItem('keyLocalStorage'));
    if (!products) this.setState({ products: [] });
    if (products) this.setState({ products });
  }

  changesQtd(action) {
    this.setState(({ qtd }) => {
      if (!qtd && action === '-') return;
      return (qtd < 0
        ? { qtd }
        : { qtd: action === '+' ? qtd + 1 : qtd - 1 });
    });
  }

  remove({ target }) {
    const { id } = target;
    const jasonSave = localStorage.getItem('keyLocalStorage') || '[]';
    const save = JSON.parse(jasonSave);
    const newSave = save.filter(({ id: idSave }) => idSave !== id);
    localStorage.setItem('keyLocalStorage', JSON.stringify(newSave));
    this.setState({ products: newSave });
  }

  render() {
    const { products, qtd } = this.state;

    return (
      <div>

        { products.length === 0
          ? (<p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>)

          : products.map(({ img, title, price, id }) => (

            (
            // ProductCard
              <div data-testid="product" key={ id }>
                <img src={ img } alt={ title } />
                <p data-testid="shopping-cart-product-name">{title}</p>
                <p>{price}</p>

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
                  onClick={ () => this.changesQtd('-') }
                  name="subtract"
                >
                  -
                </button>
                <span data-testid="shopping-cart-product-quantity">
                  {qtd}
                </span>
                <button
                  data-testid="product-increase-quantity"
                  type="button"
                  onClick={ () => this.changesQtd('+') }
                  name="add"
                >
                  +
                </button>
              </div>
            )

          ))}

      </div>
    );
  }
}

export default ShoppingCart;
