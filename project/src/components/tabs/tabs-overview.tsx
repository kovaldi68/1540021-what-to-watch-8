import { Movie } from '../../types/movie';

type TabsProps = {
  movie: Movie | undefined;
}

const getRating = function(rate: number | undefined) {
  if (rate) {
    if (rate >= 0 && rate < 3) {
      return 'Bad';
    }
    else if (rate >= 3 && rate < 5) {
      return 'Normal';
    }
    else if (rate >= 5 && rate < 8) {
      return 'Good';
    }
    else if (rate >= 8 && rate < 10) {
      return 'Very Good';
    }
    else if (rate === 10) {
      return 'Awesome';
    } else {
      return 'No rating';
    }
  }
};

function TabsOverview( { movie }: TabsProps): JSX.Element {
  const scoresCountString = `${movie?.scoresCount} ratings`;
  const movieStarring = `Starring: ${movie?.starring.join(', ')} and other`;
  const movieDirector = `Director: ${movie?.director}`;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{movie?.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRating(movie?.rating)}</span>
          <span className="film-rating__count">{scoresCountString}</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{movie?.description}</p>

        <p className="film-card__director"><strong>{movieDirector}</strong></p>

        <p className="film-card__starring"><strong>{movieStarring}</strong></p>
      </div>
    </>
  );
}

export default TabsOverview;
