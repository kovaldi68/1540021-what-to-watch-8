import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import TabsOverview from '../../components/tabs/tabs-overview';
import MovieCard from '../../components/movie-card.tsx/movie-card';
import { Movie } from '../../types/movie';
import { useParams, Redirect } from 'react-router-dom';

type MoviePageProps = {
  movies: Movie[];
}

const SIMILAR_COUNT = 4;

function MoviePage({ movies }: MoviePageProps): JSX.Element {
  const { id } = useParams() as {
    id: string;
  };

  const currentMovie = movies.find((movie) => movie.id.toString() === id);
  const similarMovies = movies.filter((movie) => movie.toString() !== id).slice(0, SIMILAR_COUNT);
  const movieAlt = `${currentMovie?.name} poster`;

  if (!currentMovie) {
    return <Redirect to='/'/>;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={currentMovie?.backgroundImage} alt={currentMovie?.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentMovie?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentMovie?.genre}</span>
                <span className="film-card__year">{currentMovie?.released}</span>
              </p>

              <div className="film-card__buttons">
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
                <a href="add-review.html" className="btn film-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={currentMovie?.posterImage} alt={movieAlt} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="#" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <TabsOverview movie={currentMovie}/>

            </div>
          </div>
        </div>
      </section>

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
