import React from 'react';
import classes from './NavigationItem.module.css'

const navigationItem = props => (
    <li className={classes.NavigationItem}>
    <div className={classes.sidedrawer} onClick={props.drawer}>
    {props.children}
    </div>
    </li>
);

export default navigationItem;