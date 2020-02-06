import React, { Component } from 'react';
import './Hero.css';

class Hero extends Component {
    render() {
        return (
            <div className="Hero">
                <h1>Banking <br /> Reimagined</h1>
                <img src={require('../Assets/img/mobile-app.png')} alt="" />
            </div>
        )
    }
}

export default Hero
