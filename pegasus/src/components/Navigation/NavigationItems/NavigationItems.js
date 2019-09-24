import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Logo from '../../Logo/Logo';

const navigationItems = props => (
    <ul className={classes.NavigationItems}>
        <NavigationItem drawer={props.drawer}><Logo /></NavigationItem>
    </ul>
);

export default navigationItems;