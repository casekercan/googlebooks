import React, { Component } from "react";
import SavedResultContainer from "../components/SavedResultContainer";

class Saved extends Component {
    render() {
        return (
            <div className="container">
                <h1> Saved Books List </h1>
                <SavedResultContainer />
            </div>
        )
    }
}

export default Saved;
