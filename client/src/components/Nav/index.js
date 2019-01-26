import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">


            <a className="navbar-brand" href="/"><img width="50px" src="https://www.androidpolice.com/wp-content/cache/wp-appbox/080fa0042dbc8367611501cd5069e82f/ai-ce2e9683756736c58388718296c4d274" alt="google" /></a>
            <ul className="navbar-nav mt-2 mt-lg-0">
                <li className="nav-item">
                    <a className="nav-link" href="/">Search</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/saved">My Saved Books</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;


