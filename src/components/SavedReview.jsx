import React from 'react';
import { bool, string } from 'prop-types';

class SavedReview extends React.Component {
  render() {
    const { email, text, rating, rate1, rate2, rate3, rate4, rate5 } = this.props;

    return (
      <>
        <h4 data-testid="review-card-email">{email}</h4>
        <p data-testid="review-card-rating">
          {' '}
          Nota:
          {' '}
          {rating}
        </p>
        <form action="">
          <input
            type="checkbox"
            id="1-star"
            value="1"
            name="rating"
            checked={ rate1 }
            readOnly
          />
          <input
            type="checkbox"
            id="2-star"
            value="2"
            name="rating"
            checked={ rate2 }
            readOnly

          />
          <input
            type="checkbox"
            id="3-star"
            value="3"
            name="rating"
            checked={ rate3 }
            readOnly

          />
          <input
            type="checkbox"
            id="4-star"
            value="4"
            name="rating"
            checked={ rate4 }
            readOnly

          />
          <input
            type="checkbox"
            id="5-star"
            value="5"
            name="rating"
            checked={ rate5 }
            readOnly

          />
        </form>
        <p data-testid="review-card-evaluation">{text}</p>

      </>

    );
  }
}

SavedReview.propTypes = {
  email: string,
  text: string,
  rating: string.isRequired,
  rate1: bool,
  rate2: bool,
  rate3: bool,
  rate4: bool,
  rate5: bool,

};

SavedReview.defaultProps = {
  email: '',
  text: '',
  rate1: true,
  rate2: true,
  rate3: true,
  rate4: true,
  rate5: true,

};

export default SavedReview;
