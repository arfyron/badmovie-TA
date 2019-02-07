const request = require('request');
const axios = require('axios');
const { API_KEY } = require('../../config.js');

// write out logic/functions required to query TheMovieDB.org

var getGenres = () => {
    return axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
    .then(({data}) => {
        return data.genres.map((genre) => [genre.name, genre.id]);
    })
    .catch((err) => {console.log(err)});
}

var getMovies = (genre) => {
    return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&vote_count.gte=20&vote_average.gte=1&with_genres=${genre}`)
    .then((data) => {
        return data;
    })
    .catch((err) => {console.log(err)})
}
// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover
// Get your API Key and save it in your config file

// Don't forget to export your functions and require them within your server file

module.exports = {getGenres, getMovies};