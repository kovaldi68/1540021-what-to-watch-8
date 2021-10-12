import { Route, Redirect } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';
import { AppRoutes, AuthStatus } from '../../const';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
  authStatus: AuthStatus;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {exact, path, render, authStatus} = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        authStatus === AuthStatus.Auth
          ? render()
          : <Redirect to={AppRoutes.SignIn} />
      )}
    />
  );
}

export default PrivateRoute;
