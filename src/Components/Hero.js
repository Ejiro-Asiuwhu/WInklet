import React, { Component } from 'react';
import './Hero.css';
import mobileApp from '../Assets/img/mobile-app.png';

class Hero extends Component {
  render() {
    return (
      <div className="Hero">
        <h1>
          Banking
          <br />
          Reimagined
        </h1>
        <img src={mobileApp} alt="Banking app" />
      </div>
    );
  }
}

export default Hero;
