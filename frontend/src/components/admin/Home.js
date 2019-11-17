import React, { Component } from 'react';
import classes from './Home.module.css';

export class Home extends Component {
    render() {
        return (
            <div className={classes.Home}>
                <div>
                    <h4>Welcome to Pegusus@SIM</h4>
                    <h1>Admin Management Portal</h1>
                </div>
            </div>
        )
    }
}
