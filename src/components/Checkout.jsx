import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Error from './Error';

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      name: '',
      email: '',
      cpf: '',
      cep: '',
      address: '',
      payment: '',
      disabled: true,
      toHome: false,
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

  changesInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, this.verificInput);
  };

  verificInput = () => {
    const { name, email, cpf, cep, address, payment } = this.state;
    const bool = name.length
    && email.length
    && cpf.length
    && cep.length
    && address.length
    && payment.length;
    const regex = /\w+@\w+\.\w+/g;
    const verificEmail = regex.test(email);
    return bool && verificEmail;
  };

  onSave = () => {
    if (this.verificInput()) this.setState({ toHome: true });
    this.setState({ disabled: false });
  };

  render() {
    const { products, disabled, toHome } = this.state;
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
        {toHome && <Redirect to="/" />}
        <h2>Informações do comprador:</h2>

        <label htmlFor="name">
          Nome Completo:
          <input
            data-testid="checkout-fullname"
            placeholder="Nome Completo"
            type="text"
            onChange={ this.changesInput }
            name="name"
          />

        </label>
        <label htmlFor="email">
          Email:
          <input
            data-testid="checkout-email"
            placeholder="email"
            type="text"
            name="email"
            onChange={ this.changesInput }
          />

        </label>
        <label htmlFor="cpf">
          CPF:
          <input
            data-testid="checkout-cpf"
            placeholder="CPF"
            type="text"
            name="cpf"
            onChange={ this.changesInput }
          />

        </label>
        <label htmlFor="phone">
          Telefone:
          <input
            data-testid="checkout-phone"
            placeholder="(ddd) 99999-9999"
            type="text"
            name="phone"
            onChange={ this.changesInput }
          />

        </label>
        <label htmlFor="cep">
          CEP:
          <input
            data-testid="checkout-cep"
            placeholder="CEP"
            name="cep"
            type="text"
            onChange={ this.changesInput }
          />

        </label>
        <label htmlFor="address">
          Endereço:
          <input
            data-testid="checkout-address"
            placeholder="Endereço"
            type="text"
            name="address"
            onChange={ this.changesInput }
          />
        </label>

        <h3>Método de pagamento</h3>
        <label htmlFor="pg">
          Boleto:
          <input
            data-testid="ticket-payment"
            type="radio"
            id=""
            name="payment"
            value="pg"
            onChange={ this.changesInput }
          />
        </label>
        <p>Carão de crédito:</p>
        <label htmlFor="pg">
          Visa
          <input
            data-testid="visa-payment"
            type="radio"
            id="pg"
            name="payment"
            value="pg"
            onChange={ this.changesInput }
          />
        </label>
        <label htmlFor="pg">
          MasterCard
          <input
            data-testid="master-payment"
            type="radio"
            id="pg"
            name="payment"
            value="pg"
            onChange={ this.changesInput }
          />
        </label>
        <label htmlFor="pg">
          Elo
          <input
            data-testid="elo-payment"
            type="radio"
            id="pg"
            name="payment"
            value="pg"
            onChange={ this.changesInput }
          />
        </label>

        <button
          type="button"
          data-testid="checkout-btn"
          onClick={ this.onSave }
        >
          Comprar
        </button>
        {!disabled && <Error />}
      </div>
    );
  }
}
export default Checkout;
