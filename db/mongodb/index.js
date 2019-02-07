const mongoose = require('mongoose');
if(process.env.MONGODB_URI){
  mongoose.connect(process.env.MONGODB_URI)
} else{
  mongoose.connect('mongodb://localhost:27017/badmovies', { useNewUrlParser: true });
}

const db = mongoose.connection;

let favoritesSchedma = mongoose.Schema({
  title: String,
  release_date: String,
  id: Number,
  vote_average: Number,
  poster_path: String,

})

let Movie = mongoose.model('Movie', favoritesSchedma);

let save = (movie) => {
  return Movie.findOneAndUpdate({id: movie.id},
    {
      title: movie.title,
      release_date: movie.release_date.substring(0,4),
      id: movie.id,
      vote_average: movie.vote_average,
      poster_path: movie.poster_path
    }, {upsert: true}
    
    
    ).exec()
}

let get = (cb) => {
  Movie.find({}).exec((err, movies) => {
    if (err) {
      cb(err, null)
    } else {
      cb(null, movies);
    }
  })
}

let del = (movie) => {
  return Movie.deleteOne({id: movie.id}).exec();
}
// mongoose.Promise = Promise;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to db...');
})

module.exports = {
  save: save,
  get: get,
  del: del
}