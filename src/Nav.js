import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
    render() {
        return (
            <nav className="Nav-container">
                <div className="logo">
                    <a href="/">Winklet</a>
                </div>
                <ul className="Nav-items">
                    <a href="/benefits">
                        <li>Benefits</li>
                    </a>
                    <a href="/security">
                        <li>Security</li>
                    </a>
                    <a href="/download">
                        <li>Download</li>
                    </a>
                </ul>
            </nav>
        )
    }
}

export default Nav
