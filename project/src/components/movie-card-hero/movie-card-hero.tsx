import MovieCardActions from "../movie-card-actions/movie-card-actions";

function MovieCardHero(): JSX.Element {
  return (
    <div className="film-card__wrap">
      <div className="film-card__desc">
        <h2 className="film-card__title">The Grand Budapest Hotel</h2>
        <p className="film-card__meta">
          <span className="film-card__genre">Drama</span>
          <span className="film-card__year">2014</span>
        </p>

        <MovieCardActions> </MovieCardActions>
      </div>
    </div>
  );
}

export default MovieCardHero;
