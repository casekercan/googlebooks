import React, { Component } from "react";
import SearchResultContainer from "../components/SearchResultContainer";
import "../styles/style.css";

class Books extends Component {


    render() {
        return (
            <div className="container">
                <SearchResultContainer />
            </div>
        )
    }
}

export default Books;

