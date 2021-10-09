import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import GenresList from '../../components/genres-list/genres-list';
import ButtonMore from '../../components/button-more/button-more';
import MovieCard from '../../components/movie-card.tsx/movie-card';
// import MovieCatalogList from '../../components/movie-catalog-list/movie-catalog-list';


type MoviePromoProps = {
  movieTitle: string,
  movieGenre: string,
  movieReleaseDate: string | number,
  moviesCount: number[]
}

function Main(props: MoviePromoProps):JSX.Element {
  const {movieTitle, movieGenre, movieReleaseDate, moviesCount} = props;

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{movieTitle}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{movieGenre}</span>
                <span className="film-card__year">{movieReleaseDate}</span>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList />

          <div className="catalog__films-list">
            {
              moviesCount.map((element) => <MovieCard key={ element }/>)
            }
          </div>

          {/* <MovieCatalogList moviesCount={ moviesCount }/> */}

          <ButtonMore />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Main;
