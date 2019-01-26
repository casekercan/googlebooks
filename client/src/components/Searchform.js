import React from "react";
import "../styles/style.css";


function SearchForm(props) {
    return (
        <div className="container">
            <img src="http://www.knowerstech.com/wp-content/uploads/2017/01/google-book.png" alt="googlebookslogo" />

            <form>
                <div className="form-row align-items-center">
                    <div className="col-auto">
                        <input
                            onChange={props.handleInputChange}
                            value={props.value}
                            name="search"
                            type="text"
                            className="form-control mb-2" placeholder="Search for a Book"
                            id="search"
                        />
                    </div>
                    <div className="col-auto">
                        <button onClick={props.handleFormSubmit} className="btn btn-primary mb-2">
                            Search</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SearchForm;
