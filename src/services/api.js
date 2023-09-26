import axios from "axios";

/*REACT_API_KEY=api_key=b248e3f4a05c16ab3c59b34a14693cfe
REACT_API_POPULAR_MOVIES=https://api.themoviedb.org/3/movie/popular
REACT_API_MOVIE=https://api.themoviedb.org/3/movie/
REACT_API_NOW_PLAYING=https://api.themoviedb.org/3/movie/now_playing
REACT_SEARCH=https://api.themoviedb.org/3/search/movie
REACT_API_TOP_RATED=https://api.themoviedb.org/3/movie/top_rated
REACT_IMG=https://image.tmdb.org/t/p/original/*/

export const key = 'b248e3f4a05c16ab3c59b34a14693cfe'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api
