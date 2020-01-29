import React, { Component, Suspense, lazy } from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import services from './services/services';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const MovieDetailsPage = lazy(() =>
  import('./MovieDetailsPage/MovieDetailsPage'),
);
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));

export default class App extends Component {
  state = {
    movies: [],
    currentMovie: {},
    cast: [],
    reviews: [],
    currentMovieId: null,
    inputValue: '',
    searchResult: [],
  };

  componentDidMount() {
    this.getMovies();
  }

  getMovies = () => {
    services.getData().then(data => {
      console.log('data', data);
      this.setState({ movies: data });
    });
  };

  getMovieCast = async () => {
    const cast = await services.getCasts(this.state.currentMovieId);

    this.setState({
      cast,
    });
  };
  getMovieReviews = async () => {
    const reviews = await services.getReviews(this.state.currentMovieId);
    this.setState({
      reviews,
    });
  };

  getDetails = async e => {
    console.log('e.target.id', e.target.id);
    e.persist();
    const currentMovie = await services.getMovieDetails(+e.target.id);
    this.setState({ currentMovie, currentMovieId: +e.target.id });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const searchResult = await services.searchFilms(this.state.inputValue);
    console.log('searchResult', searchResult);
    this.setState({ searchResult });
  };

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    console.log('this.state.cast==>', this.state.cast);
    return (
      <div>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/movies">Movies</Link>
        <br></br>
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
              path="/"
              exact
              render={() => (
                <HomePage
                  movies={this.state.movies}
                  getMovieById={this.getMovieById}
                  getDetails={this.getDetails}
                />
              )}
            />
            <Route
              path="/movies/:movieId"
              render={() => (
                <MovieDetailsPage
                  currentMovie={this.state.currentMovie}
                  getMovieCast={this.getMovieCast}
                  getMovieReviews={this.getMovieReviews}
                  cast={this.state.cast}
                  reviews={this.state.reviews}
                />
              )}
            />
            <Route
              path="/movies"
              render={() => (
                <MoviesPage
                  searchResult={this.state.searchResult}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  inputValue={this.state.inputValue}
                  getDetails={this.getDetails}
                />
              )}
            />

            <Redirect to="/" />
          </Switch>
        </Suspense>
      </div>
    );
  }
}
