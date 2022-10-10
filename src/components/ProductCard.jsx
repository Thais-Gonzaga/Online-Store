import React from 'react';

class ProductCard extends React.Component {
  render() {
    const { title, price, img } = this.props;
    return (
      <div data-testid="product">
        <img src={img} alt={title} />
        <p>{title}</p>
        <p>{price}</p>
      </div>
    );
  }
}
export default ProductCard;
