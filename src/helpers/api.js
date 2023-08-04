import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTYwZjc4Y2QyNzU4ZDYyMzcxNTAyYjcxNWI1OGQ1YyIsInN1YiI6IjY0Y2Q3MjQ4ODUwOTBmMDBlNzk2MjkxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9kFp3W76vqc_C2kJIFBLfq4IXXgTjUrV0uFAbMwcxb0',
  },
};

async function fetchTrendingMovies() {
  const response = await axios.get('/trending/all/day?language=en-US', options);
  return response.data.results;
}

async function fetchMovieSearch(query) {
  const response = await axios.get(
    `/search/movie?query=${query}&language=en-US`,
    options
  );
  return response.data.results;
}
async function fetchMovieDetails(id) {
  const response = await axios.get(`/movie/${id}?language=en-US`, options);
  return response.data;
}

async function fetchAddition(id, param) {
  const response = await axios.get(
    `movie/${id}/${param}?language=en-US`,
    options
  );
  return response.data;
}

export {
  fetchTrendingMovies,
  fetchMovieSearch,
  fetchMovieDetails,
  fetchAddition,
};