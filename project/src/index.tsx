import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {movies} from './mocks/movies';
// import {userReviews} from './mocks/reviews';

const promo = movies[0];

ReactDOM.render(
  <React.StrictMode>
    <App
      promoName={promo.name}
      promoGenre={promo.genre}
      promoReleased={promo.released}
      promoPoster={promo.posterImage}
      movies={movies}
      videoLink={promo.videoLink}
    />
  </React.StrictMode>,
  document.getElementById('root'));
