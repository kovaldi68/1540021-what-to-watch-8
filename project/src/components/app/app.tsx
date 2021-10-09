import Main from '../../pages/main/main';

type AppMovieProps = {
  movieTitle: string,
  movieGenre: string,
  movieReleaseDate: string | number,
  moviesCount: number[]
}

function App({
  movieTitle,
  movieGenre,
  movieReleaseDate,
  moviesCount,
}: AppMovieProps): JSX.Element {
  return <Main movieTitle={ movieTitle } movieGenre={ movieGenre } movieReleaseDate={ movieReleaseDate } moviesCount={ moviesCount }/>;
}

export default App;
