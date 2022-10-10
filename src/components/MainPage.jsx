import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      // id: '',
      // name: '',
      result: [],
    };
  }

  async componentDidMount() {
    const result = await getCategories();
    this.setState({ result });
  }

  render() {
    const {
      // name, id,
      result } = this.state;

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
        {result.map(({ name, id }) => (
          <button
            key={ id }
            type="button"
            data-testid="category"
            name={ name }
          >
            {name}
          </button>))}
      </>
    );
  }
}

export default MainPage;
