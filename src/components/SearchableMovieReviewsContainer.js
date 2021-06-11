import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import SearchForm from './SearchForm';

const NYT_API_KEY = 'uOTm5On5aOP6RqUlOgHifYGz9Rw1v0M3';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  constructor(){
    super();
    this.state = {
      reviews: [],
      searchTerm: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    fetch(URL + `&query=${this.state.searchTerm}`).then(res => res.json())
    .then(data => {
      this.setState({reviews: data.results})
      }
    )
  }

  render () {
    return (
      <div className="searchable-movie-reviews">
        <SearchForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} searchTerm={this.state.searchTerm}/>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
