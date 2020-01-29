import React, { Suspense, lazy } from 'react';
import { Route, withRouter, Link, Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Cast = lazy(() => import('./Cast/Cast'));

const Reviews = lazy(() => import('./Reviews/Reviews'));

const MovieDetailsPage = props => {
  const {
    original_title,
    poster_path,
    popularity,
    overview,
    genres = [],
    id,
  } = props.currentMovie;
  const { getMovieReviews, getMovieCast, cast, history, reviews } = props;
  return (
    <div>
      <div>
        <button onClick={() => history.push('/')}>back to</button>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={original_title}
        />
        <h2>{original_title}</h2>
        <p>{popularity}</p>
        <h3>overview</h3>
        <p>{overview}</p>
        <h3>genres</h3>
        <ul>
          {genres.map(elem => (
            <li key={elem.id}>{elem.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <Link onClick={getMovieCast} to="/movies/:movieId/cast">
          Cast
        </Link>
        <br />
        <Link onClick={getMovieReviews} to="/movies/:movieId/reviews">
          Reviews
        </Link>
      </div>
      <div>
        <Suspense
          fallback={
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
          }
        >
          <Switch>
            <Route
              path="/movies/:movieId/cast"
              render={() => <Cast cast={cast} />}
            />

            <Route
              path="/movies/:movieId/reviews"
              render={() => <Reviews reviews={reviews} />}
            />
          </Switch>
        </Suspense>
      </div>
    </div>
  );
};

export default withRouter(MovieDetailsPage);
