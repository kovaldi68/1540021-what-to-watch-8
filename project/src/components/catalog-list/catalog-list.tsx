import MovieCard from '../movie-card.tsx/movie-card';

type CatalogListProps = {
  moviesList: number[];
}

function CatalogList({ moviesList }: CatalogListProps ): JSX.Element {
  return (
    <div className="catalog__films-list">
      {moviesList.map((element) => <MovieCard key={element}/>)}
    </div>
  );
}

export default CatalogList;
