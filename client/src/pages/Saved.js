import React, { Component } from "react";
import API from "../utils/API";


class Saved extends Component {


    state = {
        results: []
    };


    componentDidMount() {
        this.savedBooks();
    }

    savedBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({ results: res.data })
            )
            .catch(err => console.log(err));
    };


    render() {
        return (
            <div className="container">
                <h1>Saved Books Here</h1>
                <ul className="list-group">
                    {this.state.results.map(result => (
                        <li className="list-group-item" key={result._id}>
                            <div className="row">
                                <div className="col-8">
                                    <h1>{result.title}</h1>
                                    <p>Authors: {result.authors ? result.authors.join(" , ") : " "}</p>
                                    <p>Description: {result.description ? result.description : " No Description Available"}</p>
                                </div>
                                <div className="col-4">
                                    <img src={result.image} alt="bookimage" />
                                    <p></p>
                                    <p>
                                        <a className="btn btn-info" href={result.link} >Get Book</a>    <button className="btn btn-success" onClick={() => this.deleteBook(result)}  >Delete Saved</button>
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>


        )
    }
}

export default Saved;

