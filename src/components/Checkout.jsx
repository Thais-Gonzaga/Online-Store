import React, { Component } from 'react';

class Checkout extends Component {
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

  render() {
    const { products } = this.state;
    return (
      <div>
        <h2>Revise seus produtos</h2>
        { products.length === 0
          ? (<p>Seu carrinho está vazio</p>)

          : products.map(({ img, title, price, id, qty }) => (

            (
              <div key={ id }>

                <button
                  type="button"
                  onClick={ this.remove }
                  id={ id }
                >
                  X
                </button>
                <img src={ img } alt={ title } />
                <p>{title}</p>
                <p>{`Preço: R$${price}`}</p>

                <span>
                  {`Qtd: ${qty}`}
                </span>

              </div>
            )

          ))}
        <h2>Informações do comprador</h2>
      </div>
    );
  }
}
export default Checkout;
