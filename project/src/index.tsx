import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const MOVIES_NUMBER = 20;
const moviesList = Array(MOVIES_NUMBER).fill(0).map((el, index) => index + 1);

const MoviePromoInfo = {
  movieTitle: 'The Grand Budapest Hotel',
  movieGenre: 'Drama',
  movieReleaseDate: 2014,
  moviesCount: moviesList,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      movieTitle={ MoviePromoInfo.movieTitle }
      movieGenre={ MoviePromoInfo.movieGenre }
      movieReleaseDate={ MoviePromoInfo.movieReleaseDate }
      moviesCount = { MoviePromoInfo.moviesCount }
    />
  </React.StrictMode>,
  document.getElementById('root'));
