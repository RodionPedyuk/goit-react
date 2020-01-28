import axios from 'axios';

const key = `77431cea015dd621074f5795bae86ab0`;
export default {
  async getData() {
    try {
      const data = await axios
        .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`)
        .then(data => data.data.results);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  async getCasts(id) {
    try {
      const data = await axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`,
        )
        .then(data => data.data.cast);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  async getReviews(id) {
    try {
      const data = await axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`,
        )
        .then(data => data.data.results);
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  async getMovieDetails(id) {
    try {
      const data = await axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`,
        )
        .then(data => data.data);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  async searchFilms(query) {
    try {
      const data = await axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`,
        )
        .then(data => data.data.results);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },
};
