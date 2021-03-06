var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var axios = require('axios');
var model = require('./models/movieModel.js')
var mongooseModels = require('../db/mongodb/index.js')
//Helpers
var apiHelpers = require('./helpers/apiHelpers.js');
// var getMovies = require('./helpers/apiHelpers.js').getMovies

//Middleware
app.use(bodyParser.json());

// Due to express, when you load the page, it doesn't make a get request to '/', it simply serves up the dist folder
app.use(express.static(__dirname + '/../client/dist'));


//OPTION 1: Use regular routes
app.get('/search', function(req, res) {
  var genre = req.query.genre;
  apiHelpers.getMovies(genre)
  .then(({data}) => (res.send(data)))
  .catch((err) => {console.log(err)})
  // get the search genre     

  // https://www.themoviedb.org/account/signup

  // use this endpoint to search for movies by genres, you will need an API key

  // https://api.themoviedb.org/3/discover/movie

  // and sort them by horrible votes using the search parameters in the API

  
});

app.get('/genres', function(req, res) {
  // console.log(apiHelpers)

  apiHelpers.getGenres()
  .then((response) => {
    res.send(response)
  })
  .catch((err) => console.log(err))
  // make an axios request to get the list of official genres
  
  // use this endpoint, which will also require your API key: https://api.themoviedb.org/3/genre/movie/list

  // send back
});

app.post('/save', function(req, res) {
  // let movie = req.body.params;
  // model.movies.save(movie, (err) => {
  //   if (err) {
  //     console.log(err)
  //   } else {
  //     model.movies.get((err, result) => {
  //       if (err) {
  //         console.log(err)
  //       } else {
  //         res.send(result)
  //       }
  //     })
  //   }
  // });
  let movie = req.body.params;
  mongooseModels.save(movie)
  .then(() => {mongooseModels.get((err, movies) => {
    if (err) {
      console.log(err)
    } else {
      res.send(movies)
    }
  })})



});

app.post('/delete', function(req, res) {
  // let movie = req.body.params;
  // model.movies.delete(movie, (err) => {
  //   if (err) {
  //     console.log(err)
  //   } else {
  //     model.movies.get((err, result) => {
  //       if (err) {
  //         console.log(err)
  //       } else {
  //         res.send(result)
  //       }
  //     })
  //   }
  // });
  let movie = req.body.params;
  mongooseModels.del(movie)
  .then(() => {
    mongooseModels.get((err, movies) => {
      if (err) {
        console.log(err)
      } else {
        res.send(movies)
      }
    })
  })
});

//OPTION 2: Use Express Router
//IF you decide to go with this option delete OPTION 1 to continue
//Routes
const movieRoutes = require('./routes/movieRoutes.js');
//Use routes
app.use('/movies', movieRoutes);


app.listen(3000, function() {
  console.log('listening on port 3000!');
});
