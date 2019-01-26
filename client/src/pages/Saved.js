import React, { Component } from "react";
import SavedResultContainer from "../components/SavedResultContainer";
import "../styles/style.css";


class Saved extends Component {
    render() {
        return (
            <div className="container">
                <img src="http://www.knowerstech.com/wp-content/uploads/2017/01/google-book.png" alt="googlebookslogo" />
                <SavedResultContainer />
            </div>
        )
    }
}

export default Saved;
