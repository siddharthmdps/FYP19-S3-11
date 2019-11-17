import React, { Component } from 'react';
import classes from './Home.module.css';

export class Home extends Component {
    render() {
        document.documentElement.style=
        'height: 100%';
        return (
            <React.Fragment>
                <div className={classes.Home}>
                    <div className={classes.HomeContent}>
                        <h4>Welcome to Pegusus@SIM</h4>
                        <h1>Admin Management Portal</h1>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
