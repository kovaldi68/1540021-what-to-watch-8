import { useState, FormEvent, ChangeEvent, Fragment } from 'react';
// import RatingStar from '../rating-star/rating-star';

function AddReviewForm(): JSX.Element {
  const [reviewState, setReviewState] = useState<{[key: string]: string}>({
    rating: '0',
    review: '',
  });

  const handleChange = ({target}: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = target;

    setReviewState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log(reviewState.rating, reviewState.review);
  };

  return (
    <form
      onSubmit={handleSubmit}
      action="#"
      className="add-review__htmlForm"
    >
      <div className="rating">
        <div className="rating__stars">
          {Array.from({length: 10}, (v, i) => i + 1).reverse().map((item) =>
            (
              // <RatingStar></RatingStar>
              <Fragment key={item}>
                <input
                    className="rating__input"
                    id={`star-${item}`}
                    type="radio"
                    name="rating"
                    value={item}
                    checked = {Number(reviewState.rating) === item}
                    onChange={handleChange}
                />
                <label className="rating__label" htmlFor={`star-${item}`}>Rating {item}</label>
              </Fragment>
            ),
          )}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review"
          id="review-text"
          placeholder="Review text"
          value={reviewState.review}
          onChange={handleChange}
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}

export default AddReviewForm;
