const BASE_URL = 'https://api.themoviedb.org/3';


async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTrendingMovie() {
  return fetchWithErrorHandling(`${BASE_URL}/trending/movie/week?api_key=a5d27c40376a4ea09985282eed260888`);
}

export function fetchSearchMovies (query) {
  return fetchWithErrorHandling(`${BASE_URL}/search/movie?api_key=a5d27c40376a4ea09985282eed260888&query=${query}&language=en-US&page=1&include_adult=false`);
}

export function fetchMovieId(movieId) {
  return fetchWithErrorHandling(`${BASE_URL}/movie/${movieId}?api_key=a5d27c40376a4ea09985282eed260888&language=en-US`);
}

export function fetchMovieCredits (movieId) {
  return fetchWithErrorHandling(`${BASE_URL}/movie/${movieId}/credits?api_key=a5d27c40376a4ea09985282eed260888&language=en-US`);
}

export function fetchMovieReviews(movieId) {
  return fetchWithErrorHandling(`${BASE_URL}/movie/${movieId}/reviews?api_key=a5d27c40376a4ea09985282eed260888&language=en-US&page=1`);
}