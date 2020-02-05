import React, { Component } from 'react'
import Nav from './Nav';
import Hero from './Hero'

class Header extends Component {
    render() {
        const style = {
            height: '100vh',
        }
        return (
            <div style={style} className="Header">
               <Nav /> 
               <Hero /> 
            </div>
        )
    }
}

export default Header
