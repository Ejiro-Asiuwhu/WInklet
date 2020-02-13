import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

export class NotFound404 extends Component {
    render() {
        return (
            <div>
               <h1>Seems like You are lost</h1>
               <NavLink to="/">Home</NavLink>
            </div>
        )
    }
}

export default NotFound404
