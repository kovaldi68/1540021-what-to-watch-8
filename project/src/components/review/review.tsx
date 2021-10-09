function Review(): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.</p>

        <footer className="review__details">
          <cite className="review__author">Matthew Lickona</cite>
          <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
        </footer>
      </blockquote>

      <div className="review__rating">7,2</div>
    </div>
  );
}

export default Review;
