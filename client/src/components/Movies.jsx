import React from 'react';
import $ from 'jquery';

class Movies extends React.Component {
  constructor(props) {
    super(props)

  }

  // Make an onClick for each list item. If the movies shown is the search results, 
  // onClick add it to the database (do it in the main app, and pass down the function)

  // If you're currently showing the fave list, delete the movie instead
  // You can tell which list is currently being rendered based on whether the prop "showFaves" is false (search results) or true (fave list) (within index.jsx)

  render() {
    return (
      <ul className="movies">

      {this.props.movies.map((movie) => {
        return (
        <li className="movie_item" data-id={movie.id} key={movie.id} onClick={(event) => {
          if (this.props.showFaves) {
            this.props.deleteMovie(event.currentTarget.dataset.id)
          } else {
            this.props.saveMovie(event.currentTarget.dataset.id)
          }
          }}>
          <img src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`}></img>
          <div className="movie_description">
            <h2>{movie.title}</h2>
            <section className="movie_details">
            <div className="movie_year">
              <span className="title">Year</span>
              <span>{movie.release_date.substring(0,4)}</span>
            </div>
            <div className="movie_rating">
              <span className="title">Rating</span>
              <span>{movie.vote_average}</span>
            
            </div>
            
            </section>
          </div>
        </li>
        )
      })}

      </ul>
    );
  }
}

// render() {
//   return (
//     <ul className="movies">

//     {this.props.movies.map((movie) => {
//       return (
//       <li className="movie_item" value={movie} onClick={(event) => {
//         var movie = $(event.target).parent();
//         console.log('this is the movie that the parent thing finds:', movie)
//         this.props.saveMovie(movie)}}>
//         <img src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`}></img>
//         <div className="movie_description">
//           <h2>{movie.title}</h2>
//           <section className="movie_details">
//           <div className="movie_year">
//             <span className="title">Year</span>
//             <span>{movie.release_date.substring(0,4)}</span>
//           </div>
//           <div className="movie_rating">
//             <span className="title">Rating</span>
//             <span>{movie.vote_average}</span>
          
//           </div>
          
//           </section>
//         </div>
//       </li>
//       )
//     })}

//     </ul>
//   );
// }


export default Movies;