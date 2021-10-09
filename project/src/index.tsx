import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const MOVIES_NUMBER = 20;
const moviesList = Array.from({length: MOVIES_NUMBER}, (el, index) => index);

const MoviePromoInfo = {
  movieTitle: 'The Grand Budapest Hotel',
  movieGenre: 'Drama',
  movieReleaseDate: 2014,
  moviesList,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      movieTitle={MoviePromoInfo.movieTitle}
      movieGenre={MoviePromoInfo.movieGenre}
      movieReleaseDate={MoviePromoInfo.movieReleaseDate}
      moviesList={MoviePromoInfo.moviesList}
    />
  </React.StrictMode>,
  document.getElementById('root'));
