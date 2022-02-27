import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import TabsOverview from '../../components/tabs-content/tab-overview';
import MovieCard from '../../components/movie-card/movie-card';
import { Link } from 'react-router-dom';
import Tabs from '../../components/tabs/tabs';
import { Movie } from '../../types/movie';
import { useParams, Redirect } from 'react-router-dom';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import MovieCardActions from '../../components/movie-card-actions/movie-card-actions';

type MoviePageProps = {
  movies: Movie[];
}

type PageParams = {
  id: string;
}

const SIMILAR_COUNT = 4;

function MoviePage({ movies }: MoviePageProps): JSX.Element {
  const { id } = useParams<PageParams>();
  const currentMovie = movies.find((movie) => movie.id === Number(id));
  const similarMovies = movies.filter((movie) => movie.id !== Number(id)).slice(0, SIMILAR_COUNT);

  if (!currentMovie) {
    return <Redirect to='/'/>;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={currentMovie.backgroundImage} alt={currentMovie.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header>
            
          </Header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentMovie.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentMovie.genre}</span>
                <span className="film-card__year">{currentMovie.released}</span>
              </p>

              <MovieCardActions>
                <Link className="btn film-card__button" to={`/movies/${currentMovie.id}/review`}>
                  Add review
                </Link>
              </MovieCardActions>

              {/* <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link className="btn film-card__button" to={`/movies/${currentMovie.id}/review`}>
                  Add review
                </Link>
              </div> */}
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={currentMovie.posterImage} alt={`${currentMovie.name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <Tabs />

              <TabsOverview movie={currentMovie}/>

            </div>
          </div>
        </div>
      </section>

      <AddReviewForm />

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            {similarMovies.map((movie) => <MovieCard movie={movie} key={movie.id}/>)}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MoviePage;
