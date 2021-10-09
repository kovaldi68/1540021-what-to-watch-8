import Main from '../../pages/main/main';

type AppMovieProps = {
  movieTitle: string;
  movieGenre: string;
  movieReleaseDate: string | number;
  moviesList: number[];
}

function App({
  movieTitle,
  movieGenre,
  movieReleaseDate,
  moviesList,
}: AppMovieProps): JSX.Element {
  return (
    <Main
      movieTitle={movieTitle}
      movieGenre={movieGenre}
      movieReleaseDate={movieReleaseDate}
      moviesList={moviesList}
    />
  );
}

export default App;
