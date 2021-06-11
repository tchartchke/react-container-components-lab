import React from 'react';

class SearchForm extends React.Component {
  render() {
    return (
      <form onSubmit={ e => this.props.handleSubmit(e)}>
        <input onChange={ e => this.props.handleChange(e) } type="text" name="searchTerm" value={this.props.searchTerm} />
        <button type="submit">Search for Review</button>
      </form>
    )
  }
}

export default SearchForm; 