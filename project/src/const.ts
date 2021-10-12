export enum AppRoutes {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Movie = '/movies/:id',
  AddReview = '/movies/:id/review',
  Player = '/player/:id',
  Error404 = '/404error'
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
