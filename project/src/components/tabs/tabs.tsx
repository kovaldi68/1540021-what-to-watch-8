import { Fragment } from "react";

const FILM_NAV_LINKS = ['Overview', 'Details', 'Reviews'];

function Tabs():JSX.Element {
  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {FILM_NAV_LINKS.map((navElement, index) =>
          (
            <li key={index} className="film-nav__item film-nav__item--active">
              <a href="#" className="film-nav__link">{navElement}</a>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}

export default Tabs;
