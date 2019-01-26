import React from "react";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">Search for Books </a>
            <ul className="navbar-nav mt-2 mt-lg-0">
                <li className="nav-item">
                    <a className="nav-link" href="/saved">Saved Books</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;


