import React, { Component } from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
    constructor(props) {
        super(props)
        this.toggleNav = this.toggleNav.bind(this);
    }

      toggleNav() {
          const navLinks = document.querySelector('.nav-links');
          const links = document.querySelector('.nav-links a');
          navLinks.classList.toggle('open');
              links.classList.toggle('fade')
          
        }

    
    render() {
        return (
            <nav className="Nav-container">
                <div className="logo">
                    <NavLink exact to="/">Winklet</NavLink>
                </div>
                <ul className="Nav-items nav-links">
                    <NavLink exact activeClassName="nav-link-active" to="/benefits">
                        <li>Benefits</li>
                    </NavLink>
                    <NavLink exact activeClassName="nav-link-active" to="/security">
                        <li>Security</li>
                    </NavLink>
                    <NavLink exact activeClassName="nav-link-active" to="/download">
                        <li>Download</li>
                    </NavLink>
                </ul>
                 <div onClick={this.toggleNav} className="hamburger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </nav>
        )
    }
}

export default Nav
