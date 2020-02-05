import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <nav className="Nav-container">
                <div className="logo">
                    <Link to="/">Winklet</Link>
                </div>
                <ul className="Nav-items">
                    <Link to="/benefits">
                        <li>Benefits</li>
                    </Link>
                    <Link to="/security">
                        <li>Security</li>
                    </Link>
                    <Link to="/download">
                        <li>Download</li>
                    </Link>
                </ul>
            </nav>
        )
    }
}

export default Nav
