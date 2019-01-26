import React, { Component } from "react";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    results: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchGiphy();
  }

  searchGiphy = () => {
    API.search()
      .then(res => this.setState({ results: res.data.items }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container">
        <ul className="list-group">
          {this.state.results.map(result => (
            <li className="list-group-item" key={result.id}>
              <h1>{result.volumeInfo.title}</h1>
              <p>Authors: {result.volumeInfo.authors}</p>
              <p>Description: {result.volumeInfo.description}</p>
              <img src={result.volumeInfo.imageLinks.thumbnail} alt="bookimage" />
              <p><a href={result.volumeInfo.infoLink}> Get Book </a></p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SearchResultContainer;
