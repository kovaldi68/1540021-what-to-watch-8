import MovieCard from '../movie-card.tsx/movie-card';

// type MoviePromoProps = {
//   movieTitle: string,
//   movieGenre: string,
//   movieReleaseDate: string | number,
//   moviesCount: number[]
// }

function MovieCatalogList(): JSX.Element {

  return (
    <div className="catalog__films-list">
      {
        // moviesCount.map((element) => <MovieCard key={ element }/>)
      }
    </div>
  );
}

export default MovieCatalogList;
