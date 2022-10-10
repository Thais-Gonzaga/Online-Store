import React from 'react';
import { Link } from 'react-router-dom';

class MainPage extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="search-input">
          <input type="text" name="search-input" id="search-input" />
        </label>

        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link data-testid="shopping-cart-button" to="/cart">
          <button type="button"> Carrinho </button>
        </Link>
        {/* inserir condicional quando tivermos a lógica do resultado da requisição */}
      </>
    );
  }
}

export default MainPage;
