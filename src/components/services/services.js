import axios from 'axios';

const keyApi = `7dbf79a7ec9fee0ed11175b6a2c600f3`;
export default {
  async getData() {
    try {
      const data = await axios
        .get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${keyApi}`,
        )
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
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${keyApi}&language=en-US`,
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
          `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${keyApi}&language=en-US&page=1`,
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
          `https://api.themoviedb.org/3/movie/${id}?api_key=${keyApi}&language=en-US`,
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
          `https://api.themoviedb.org/3/search/movie?api_key=${keyApi}&language=en-US&query=${query}&page=1&include_adult=false`,
        )
        .then(data => data.data.results);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },
};
