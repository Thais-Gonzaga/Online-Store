import React from 'react';
import { getProductsFromCategoryAndQuery, getCategories } from '../services/api';
import CategoryList from './CategoryList';
import ProductCard from './ProductCard';
import ButtonCart from './ButtonCart';
import { addProduct } from '../services/addProduct';

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      productResult: [],
      result: [],
      qtys: 0,

    };
  }

  async componentDidMount() {
    const result = await getCategories();
    const someQtys = JSON.parse(localStorage.getItem('qtys') || '[]');
    const { qtys } = someQtys;
    this.setState({ result, qtys });
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
    this.setState({ productResult: results });
  };

  getCategoryResult = async (categoryID) => {
    const queryResult = await getProductsFromCategoryAndQuery(categoryID, 'nan');
    const { results } = queryResult;
    this.setState({ productResult: results });
  };

  addCart = (ids, pro) => {
    addProduct(ids, pro);
    const products = JSON.parse(localStorage.getItem('keyLocalStorage'));
    const qtys = products.reduce((acc, { qty }) => acc + qty, 0);
    localStorage.setItem('qtys', JSON.stringify({ qtys }));
    this.setState({ qtys });
  };

  render() {
    const { productResult, result, qtys } = this.state;

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

        <ButtonCart qtys={ qtys } />

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
                addCart={ this.addCart }

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
