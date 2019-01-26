import React, { Component } from "react";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    results: []
  };

  componentDidMount() {
    this.searchBooks();
  }

  searchBooks = () => {
    API.search()
      .then(res => this.setState({ results: res.data.items }))
      .catch(err => console.log(err));
  };

  sendBook = (book) => {
    API.saveBook({
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.infoLink
    }).then(console.log("done!"))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <ul className="list-group">
          {this.state.results.map(result => (
            <li className="list-group-item" key={result.id}>
              <div className="row">
                <div className="col-8">
                  <h1>{result.volumeInfo.title}</h1>
                  <p>Authors: {result.volumeInfo.authors ? result.volumeInfo.authors.join(" , ") : " "}</p>
                  <p>Description: {result.volumeInfo.description ? result.volumeInfo.description : " No Description Available"}</p>
                </div>
                <div className="col-4">
                  <img src={result.volumeInfo.imageLinks.thumbnail} alt="bookimage" />
                  <p></p>
                  <p>
                    <a className="btn btn-info" href={result.volumeInfo.infoLink} >Get Book</a>    <button className="btn btn-success" onClick={() => this.sendBook(result)}  >Save For Later</button>
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

