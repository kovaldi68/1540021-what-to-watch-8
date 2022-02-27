import {useState} from "react";
import {Movie} from '../../types/movie';
import MovieCard from '../movie-card/movie-card';

type CatalogListProps = {
  movies: Movie[];
}

function CatalogList({ movies }: CatalogListProps ): JSX.Element {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  

  return (
    <div className="catalog__films-list">
      {movies.map((movie) => <MovieCard movie={movie} key={movie.id}/>)}
    </div>
  );
}

export default CatalogList;
