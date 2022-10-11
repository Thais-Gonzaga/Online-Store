import React from 'react';
import { string } from 'prop-types';

class SavedReview extends React.Component {
  render() {
    const { email, text, rate1, rate2, rate3, rate4, rate5 } = this.props;
    return (
      <>
        <h4>{email}</h4>
        <form action="">
          <input
            type="checkbox"
            id="1-star"
            value="1"
            name="rating"
            checked={ rate1 }
            data-testid="1-rating"
          />
          <input
            type="checkbox"
            id="2-star"
            value="2"
            name="rating"
            checked={ rate2 }
            data-testid="2-rating"

          />
          <input
            type="checkbox"
            id="3-star"
            value="3"
            name="rating"
            checked={ rate3 }
            data-testid="3-rating"

          />
          <input
            type="checkbox"
            id="4-star"
            value="4"
            name="rating"
            checked={ rate4 }
            data-testid="4-rating"

          />
          <input
            type="checkbox"
            id="5-star"
            value="5"
            name="rating"
            checked={ rate5 }
            data-testid="5-rating"

          />
        </form>
        <p>{text}</p>

      </>

    );
  }
}

SavedReview.propTypes = {
  email: string,
  text: string,
  rate1: string,
  rate2: string,
  rate3: string,
  rate4: string,
  rate5: string,

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
