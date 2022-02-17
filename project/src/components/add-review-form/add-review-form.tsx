import { useState, FormEvent, ChangeEvent } from 'react';

function AddReviewForm(): JSX.Element {
  const [reviewState, setReviewState] = useState({
    rating: '0',
    review: '',
  });

  const handleChange = ({target}: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = target.name;


    // 1 вариант
    // let ratingValue;
    // let reviewValue;
    // name === 'rating' ? ratingValue = target.value : reviewValue = target.value;
    // setReviewState({
    //   rating: ratingValue,
    //   review: reviewValue,
    // });
    // не сработает, так как на каждое изменение создавались бы  новые переменные и одна всегда бы записывалась в стейт как undefined.
    // можно было бы второй присваивать значение из стейта, но тогда это вообще чушь, так как по идее стейт должен обновлять только изменённую часть, а не весь стейт перезаписывать
    // если там будет гораздо больше значений. да и по TS тоже не проходит.

    // был 2 вариант сделать прямо как в доке Реакта
    // setReviewState({
    //   [name]: value
    // })
    // но тогда не проходил по TS(типа заявлен тип {key: string, key: string}, а я пытаюсь записать {key: string}), да и ключи пришлось бы называть как name или менять атрибут name у textarea, так как там через дефис написано.

    // 3 вариант
    //
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
              <>
                <input
                  key={item}
                  className="rating__input"
                  id={`star-${item}`}
                  type="radio"
                  name="rating"
                  value={Number(reviewState.rating)}
                  onChange={handleChange}
                />
                <label className="rating__label" htmlFor={`start-${item}`}>Rating {item}</label>
              </>
            ),
          )}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
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
