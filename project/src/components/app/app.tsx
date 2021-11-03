import Main from '../../pages/main/main';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {AppRoutes, AuthStatus} from '../../const';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import Error404 from '../../pages/error-404/error-404';
import PrivateRoute from '../private-route/private-rotue';

import {Movie} from '../../types/movie';

type AppMovieProps = {
  promoName: string;
  promoGenre: string;
  promoReleased: string;
  promoPoster: string;
  videoLink: string;
  movies: Movie[];
}

function App({promoName, promoGenre, promoReleased, promoPoster, videoLink, movies}: AppMovieProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoutes.Main}>
          <Main
            promoName={promoName}
            promoGenre={promoGenre}
            promoReleased={promoReleased}
            movies={movies}
          />
        </Route>
        <Route exact path={AppRoutes.SignIn}>
          <SignIn />
        </Route>
        <PrivateRoute
          exact
          path={AppRoutes.MyList}
          render={() => <MyList movies={movies} />}
          authStatus={AuthStatus.Auth}
        >
        </PrivateRoute>
        <Route exact path={AppRoutes.Movie}>
          <MoviePage movies={movies}/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoutes.AddReview}
          render={() => <AddReview />}
          authStatus={AuthStatus.Auth}
        >
        </PrivateRoute>
        <Route exact path={AppRoutes.Player}>
          <Player promoPoster={promoPoster} videoLink={videoLink} />
        </Route>
        <Route path='*'>
          <Error404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
