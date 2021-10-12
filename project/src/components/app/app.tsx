import Main from '../../pages/main/main';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { AppRoutes, AuthStatus } from '../../const';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import Movie from '../../pages/movie/movie';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import Error404 from '../../pages/error-404/error-404';
import PrivateRoute from '../private-route/private-rotue';


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
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoutes.Main}>
          <Main
            movieTitle={movieTitle}
            movieGenre={movieGenre}
            movieReleaseDate={movieReleaseDate}
            moviesList={moviesList}
          />
        </Route>
        <Route exact path={AppRoutes.SignIn}>
          <SignIn />
        </Route>
        <PrivateRoute
          exact
          path={AppRoutes.MyList}
          render={() => <MyList />}
          authStatus={AuthStatus.NoAuth}
        >
        </PrivateRoute>
        <Route exact path={AppRoutes.Movie}>
          <Movie />
        </Route>
        <PrivateRoute
          exact
          path={AppRoutes.AddReview}
          render={() => <AddReview />}
          authStatus={AuthStatus.NoAuth}
        >
        </PrivateRoute>
        <Route exact path={AppRoutes.Player}>
          <Player />
        </Route>
        <Route path='*'>
          <Error404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
