import React from 'react';
import SavedReview from './SavedReview';

class ReviewSection extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      rating: '',
      text: '',
      rate1: false,
      rate2: false,
      rate3: false,
      rate4: false,
      rate5: false,
      showError: false,
      savedReviews: [],

    };
  }

  componentDidMount() {
    const { id } = this.props;
    const idProd = (id);
    console.log(idProd);
    if (!JSON.parse(localStorage.getItem(idProd))) {
      localStorage.setItem(idProd, JSON.stringify([]));
    }

    const productReviews = JSON.parse(localStorage.getItem(idProd));
    this.setState((prevState) => ({
      savedReviews: [...prevState.savedReviews, productReviews],
    }));
  }

  validatesEmail = (email) => /\S+@\S+\.\S+/.test(email);

  handleFormChange = (event) => {
    const { name, value } = event.target;
    if (name === 'rating') {
      this.handlesRating(event.target.value);
    }

    // const value = type === 'checkbox' ? checked : event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handlesRating = (rating) => {
    const maxStars = 5;
    for (let i = 0; i < Number(rating); i += 1) {
      this.setState({
        [`rate${i + 1}`]: true,
      });
    }
    for (let j = Number(rating); j < maxStars; j += 1) {
      this.setState({
        [`rate${j + 1}`]: false,
      });
    }
  };

  validatesForm = () => {
    const { email, rating } = this.state;
    const validatesEmail = this.validatesEmail(email);
    const validatesRating = rating !== '';
    return validatesEmail && validatesRating;
  };

  submitsReview = (event) => {
    event.preventDefault();
    const validatesForm = this.validatesForm();

    const { email, rating, text, rate1, rate2, rate3, rate4, rate5 } = this.state;

    if (validatesForm) {
      const newReview = {
        email,
        rating,
        text,
        rate1,
        rate2,
        rate3,
        rate4,
        rate5,
      };

      this.setState((prevState) => ({
        showError: false,
        email: '',
        rating: '',
        text: '',
        rate1: false,
        rate2: false,
        rate3: false,
        rate4: false,
        rate5: false,
        savedReviews: [...prevState.savedReviews, newReview],

      }), this.savesLocalStorage);

      // this.savesLocalStorage();
    } else {
      this.setState({

        showError: true,
      });
    }
  };

  savesLocalStorage = () => {
    const { id } = this.props;
    console.log(id);
    const { savedReviews } = this.state;
    console.log(savedReviews);
    localStorage.setItem(`${id}`, JSON.stringify(savedReviews));
  };

  render() {
    const {
      email,
      message,
      rate1,
      rate2,
      rate3,
      rate4,
      rate5,
      savedReviews,
      showError } = this.state;
    console.log(savedReviews);
    return (

      <>
        <div>
          {showError && <p data-testid="error-msg">Campos inválidos</p>}
          <form action="">
            <label htmlFor="email">
              <input
                type="text"
                placeholder="Email"
                id="email"
                name="email"
                onChange={ this.handleFormChange }
                data-testid="product-detail-email"
                value={ email }
              />
            </label>
            <input
              type="checkbox"
              id="1-star"
              value="1"
              name="rating"
              checked={ rate1 }
              data-testid="1-rating"
              onChange={ this.handleFormChange }
              onClick={ this.handlesRating }
            />
            <input
              type="checkbox"
              id="2-star"
              value="2"
              name="rating"
              checked={ rate2 }
              data-testid="2-rating"
              onChange={ this.handleFormChange }
              onClick={ this.handlesRating }
            />
            <input
              type="checkbox"
              id="3-star"
              value="3"
              name="rating"
              checked={ rate3 }
              data-testid="3-rating"
              onChange={ this.handleFormChange }
              onClick={ this.handlesRating }
            />
            <input
              type="checkbox"
              id="4-star"
              value="4"
              name="rating"
              checked={ rate4 }
              data-testid="4-rating"
              onChange={ this.handleFormChange }
              onClick={ this.handlesRating }
            />
            <input
              type="checkbox"
              id="5-star"
              value="5"
              name="rating"
              checked={ rate5 }
              data-testid="5-rating"
              onChange={ this.handleFormChange }
              onClick={ this.handlesRating }
            />
            <label htmlFor="text">
              <textarea
                name="text"
                id="text"
                cols="30"
                rows="20"
                placeholder="Mensagem (opcional)"
                data-testid="product-detail-evaluation"
                onChange={ this.handleFormChange }
                value={ message }
              />
            </label>
            <button
              type="button"
              data-testid="submit-review-btn"
              // disabled={ !this.validatesForm() }
              onClick={ this.submitsReview }
            >
              Avaliar
            </button>
          </form>
        </div>
        {savedReviews !== undefined && savedReviews !== []
           && savedReviews
             .map((review) => (<SavedReview
               key={ review.email }
               email={ review.email }
               rating={ review.rating }
               text={ review.text }
               rate1={ review.rate1 }
               rate2={ review.rate2 }
               rate3={ review.rate3 }
               rate4={ review.rate4 }
               rate5={ review.rate5 }
             />
             )) }

        <div />

      </>
    );
  }
}

export default ReviewSection;
