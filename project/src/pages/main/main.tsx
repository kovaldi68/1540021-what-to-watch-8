import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import GenresList from '../../components/genres-list/genres-list';
import ButtonMore from '../../components/button-more/button-more';
import CatalogList from '../../components/catalog-list/catalog-list';
import MovieCardActions from '../../components/movie-card-actions/movie-card-actions';

import {Movie} from '../../types/movie';

type MainProps = {
  promoName: string;
  promoGenre: string;
  promoReleased: string;
  movies: Movie[];
}

function Main({
  promoName,
  promoGenre,
  promoReleased,
  movies,
}: MainProps):JSX.Element {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header>
          
        </Header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoName}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoGenre}</span>
                <span className="film-card__year">{promoReleased}</span>
              </p>

              <MovieCardActions> </MovieCardActions>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList />

          <CatalogList movies={movies}/>

          <ButtonMore />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Main;
