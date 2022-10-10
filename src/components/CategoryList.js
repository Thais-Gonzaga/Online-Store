import React from 'react';
import { string } from 'prop-types';

class CategoryList extends React.Component {
  handleCatergoryPick = ({ target }) => {
    const { getCategoryResult } = this.props;
    const { id } = target;
    getCategoryResult(id);
  };

  render() {
    const { name, id } = this.props;
    return (
      <button
        key={ id }
        id={ id }
        type="button"
        data-testid="category"
        name={ name }
        onClick={ this.handleCatergoryPick }
      >
        {name}
      </button>
    );
  }
}

CategoryList.propTypes = {
  name: string,
  id: string,

}.isRequired;
export default CategoryList;
