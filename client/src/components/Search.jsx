import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: [],
      selected: ''
    };
    this.onSelectChange = this.onSelectChange.bind(this);
  }

  componentDidMount() {
    this.getGenres()
  }

  getGenres() {
    axios.get('/genres') 
    .then(({data}) => {
      this.setState({genres: data})
    })
    //make an axios request in this component to get the list of genres from your endpoint GET GENRES
  }

  onSelectChange(e) {
    this.setState({
      selected: e.target.value
    })
  }


  render() {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>
        
        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}

        <select onChange={this.onSelectChange}>
          {this.state.genres.map((genre, i) => {
            return <option key={i} value={genre[1]}>{genre[0]}</option>
          })}
        </select>
        <br/><br/>

        <button onClick={() => {this.props.getMovies(this.state.selected)}}>Search</button>

      </div>
    );
  }
}

export default Search;