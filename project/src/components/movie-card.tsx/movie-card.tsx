import {Link} from 'react-router-dom';
import {Movie} from '../../types/movie';

type MovieCardProps = {
  movie: Movie;
}

function MovieCard( {movie}: MovieCardProps): JSX.Element {
  const {previewImage, name, id} = movie;
  const movieLink = `/movies/${id}`;

  return (
    <article className="small-film-card catalog__films-card">
      <Link className="small-film-card__link" to={movieLink}>
        <div className="small-film-card__image">
          <img src={previewImage} alt={name} width="280" height="175" />
        </div>
        <h3 className="small-film-card__title">
          {name}
        </h3>
      </Link>
    </article>
  );
}

export default MovieCard;
