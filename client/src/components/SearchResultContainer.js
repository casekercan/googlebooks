import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "./Searchform";


class SearchResultContainer extends Component {
  state = {
    results: [],
    search: ""
  };

  componentDidMount() {
    this.searchBooks("mystery");
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
    this.setState({ search: "" });
  };

  searchBooks = (query) => {
    API.search(query)
      .then(res => this.setState({ results: res.data.items })).catch(err => console.log(err));
  };


  sendBook = (book) => {
    API.saveBook({
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.infoLink
    }).then(alert("Book Saved to your list!"))
      .catch(err => console.log(err));
  };



  render() {
    return (
      <div className="container">
        <SearchForm value={this.state.search} handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} />
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
                  <img src={result.volumeInfo.imageLinks ? result.volumeInfo.imageLinks.thumbnail : "./images/NoCoverArt_Book_3.png"} alt="bookimage" />
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

