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
              <div className="row">
                <div className="col-8">
                  <h1>{result.volumeInfo.title}</h1>
                  <p>Authors: {result.volumeInfo.authors}</p>
                  <p>Description: {result.volumeInfo.description}</p>
                </div>
                <div className="col-4">
                  <img src={result.volumeInfo.imageLinks.thumbnail} alt="bookimage" />
                  <p></p>
                  <p>
                    <a class="btn btn-info" href={result.volumeInfo.infoLink} >Get Book</a>     <a class="btn btn-success" href="/" >Save For Later</a>
                  </p>






                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SearchResultContainer;

