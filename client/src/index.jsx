import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import AnyComponent from './components/filename.jsx'
import Search from './components/Search.jsx'
import Movies from './components/Movies.jsx'
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      movies: [],
      favorites: [],
      showFaves: false,
    };
    this.getMovies = this.getMovies.bind(this)
    this.saveMovie = this.saveMovie.bind(this)
    this.swapFavorites = this.swapFavorites.bind(this)
    this.deleteMovie = this.deleteMovie.bind(this);
    
    // you might have to do something important here!
  }
 
  componentDidMount() {
    
  }

  getMovies(genre) {
    axios.get('/search', {
      params: {genre}
    })
    .then(({data}) => {
      this.setState({movies: data.results})
    })
    // make an axios request to your server on the GET SEARCH endpoint
  }

  saveMovie(movieid) {
    var favMovie = this.state.movies.filter((movie) => {
      return movie.id === Number(movieid);
    })
    axios.post('/save', {
      params: favMovie[0]
    })
    .then(({data}) => {
      this.setState({ 
        favorites: data
      })

    // same as above but do something diff
    })
  }

  deleteMovie(movieid) {
    var favMovie = this.state.favorites.filter((movie) => {
      return movie.id === Number(movieid);
    })
    axios.post('/delete', {
      params: favMovie[0]
    })
    .then(({data}) => {
      this.setState({ 
        favorites: data
      })
    })
    // same as above but do something diff
  }

  swapFavorites() {
  //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  render () {
  	return (
      <div className="app">
        <header className="navbar"><h1>Bad Movies</h1></header> 
        
        <div className="main">
          <Search swapFavorites={this.swapFavorites} showFaves={this.state.showFaves} getMovies={this.getMovies}/>
          <Movies movies={this.state.showFaves ? this.state.favorites : this.state.movies} showFaves={this.state.showFaves} saveMovie={this.saveMovie} deleteMovie={this.deleteMovie}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));