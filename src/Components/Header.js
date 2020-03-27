import React, { Component } from 'react';
import Nav from './Nav';
import Hero from './Hero';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Nav />
        <Hero />
      </div>
    );
  }
}

export default Header;
