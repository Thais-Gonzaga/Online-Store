import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery, getCategories } from '../services/api';
import CategoryList from './CategoryList';
import ProductCard from './ProductCard';

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      productResult: [],
      result: [],
    };
  }

  async componentDidMount() {
    const result = await getCategories();
    this.setState({ result });
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

  getCategoryResult = async (categoryID) => {
    const queryResult = await getProductsFromCategoryAndQuery(categoryID, 'nan');
    const { results } = queryResult;
    console.log(results);
    this.setState({ productResult: results });
  };

  render() {
    const { productResult, result } = this.state;

    return (
      <>
        <label htmlFor="search-input">
          <input
            data-testid="query-input"
            type="text"
            name="search"
            id="search-input"
            onChange={ this.handleInputChange }
          />
        </label>

        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

        <button
          onClick={ this.getQueryResult }
          data-testid="query-button"
          type="button"
        >
          Buscar
        </button>

        <Link data-testid="shopping-cart-button" to="/cart">
          <button type="button"> Carrinho </button>
        </Link>

        {productResult.length <= 0 ? (
          <p> Nenhum produto foi encontrado </p>
        ) : (
          <div className="products">
            {productResult.map(({ id, price, title, thumbnail }) => (
              <ProductCard
                key={ id }
                price={ price }
                title={ title }
                img={ thumbnail }
                id={ id }
                addProductCart={ this.addProductCart }
              />
            ))}
          </div>
        )}

        {result.map(({ name, id }) => (
          <CategoryList
            key={ id }
            name={ name }
            id={ id }
            getCategoryResult={ this.getCategoryResult }

          />
        ))}
      </>
    );
  }
}

export default MainPage;
