import React, { Component } from 'react';
import classes from './Home.module.css';

export class Home extends Component {
    render() {
        return ( 
            <div className={classes.Home}>
                <div className={classes.HomeContent}>
                    <h1>Welcome to Pegusus@SIM</h1>
                    <h2>Admin Management Portal</h2>
                </div>
            </div>
        )
    }
}
