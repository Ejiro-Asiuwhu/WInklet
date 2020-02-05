import React, { Component } from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <nav className="Nav-container">
                <div className="logo">
                    <NavLink to="/">Winklet</NavLink>
                </div>
                <ul className="Nav-items">
                    <NavLink to="/benefits">
                        <li>Benefits</li>
                    </NavLink>
                    <NavLink to="/security">
                        <li>Security</li>
                    </NavLink>
                    <NavLink to="/download">
                        <li>Download</li>
                    </NavLink>
                </ul>
            </nav>
        )
    }
}

export default Nav
