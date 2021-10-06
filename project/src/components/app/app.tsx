import MainPage from '../main-page/main-page';

type AppMovieProps = {
  movieTitle: string,
  movieGenre: string,
  movieReleaseDate: string | number;
}

function App({movieTitle, movieGenre, movieReleaseDate}: AppMovieProps): JSX.Element {
  return <MainPage movieTitle={movieTitle} movieGenre={movieGenre} movieReleaseDate={movieReleaseDate} />;
}

export default App;
