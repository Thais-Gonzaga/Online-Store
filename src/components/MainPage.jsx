import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from './ProductCard';

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      productResult: [],
    };
  }

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  getQueryResult = async () => {
    const { search } = this.state;
    const queryResult = await getProductsFromCategoryAndQuery('nan', search);
    const { results } = queryResult;
    console.log(results);
    this.setState({ productResult: results });
  };

  render() {
    const { search, productResult } = this.state;

    return (
      <>
        <label htmlFor="search-input">
          <input
            data-testid="query-input"
            type="text"
            name="search"
            id="search-input"
            onChange={this.handleInputChange}
          />
        </label>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <button
          onClick={this.getQueryResult}
          data-testid="query-button"
          type="button"
        >
          Buscar
        </button>

        {productResult.length <= 0 ? (
          <p> Nenhum produto foi encontrado </p>
        ) : (
          <div>
            {productResult.map(({ id, price, title, thumbnail }) => (
              <ProductCard
                key={id}
                price={price}
                title={title}
                img={thumbnail}
              />
            ))}
          </div>
        )}

        <Link data-testid="shopping-cart-button" to="/cart">
          <button type="button"> Carrinho </button>
        </Link>
        {/* inserir condicional quando tivermos a lógica do resultado da requisição */}
      </>
    );
  }
}

export default MainPage;
