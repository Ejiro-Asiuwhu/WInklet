import React, { Component } from 'react';
import './Nav.css'

class Nav extends Component {
    render() {
        return (
            <nav className="Nav-container">
                <div className="logo">
                    <h1>Winklet</h1>
                </div>
                <ul className="Nav-items">
                    <a href="#">
                        <li>Benefits</li>
                    </a>
                    <a href="#">
                        <li>Security</li>
                    </a>
                    <a href="#">
                        <li>Download</li>
                    </a>
                </ul>
            </nav>
        )
    }
}

export default Nav
