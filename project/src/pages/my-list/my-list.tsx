import MovieCard from '../../components/movie-card/movie-card';

import {Movie} from '../../types/movie';

type MyListProps = {
  movies: Movie[];
}

function MyList({movies}: MyListProps): JSX.Element {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <div className="catalog__films-list">
        {movies.map((movie) => <MovieCard movie={movie} key={movie.id}/>)}
      </div>
    </section>
  );
}

export default MyList;
