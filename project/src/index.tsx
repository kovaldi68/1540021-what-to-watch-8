import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const MoviePromoInfo = {
  movieTitle: 'The Grand Budapest Hotel',
  movieGenre: 'Drama',
  movieReleaseDate: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      movieTitle={MoviePromoInfo.movieTitle} movieGenre={MoviePromoInfo.movieGenre} movieReleaseDate={MoviePromoInfo.movieReleaseDate}
    />
  </React.StrictMode>,
  document.getElementById('root'));
