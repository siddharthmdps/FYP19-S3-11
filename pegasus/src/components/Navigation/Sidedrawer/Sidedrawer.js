import React from 'react';
import classes from './Sidedrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sidedrawer = props => {

    return (
        <React.Fragment>
        <Backdrop show={props.show} clickBackdrop={props.toggleDrawer} />
        <div className={[classes.Sidedrawer, props.show?classes.Open:null].join(' ')}>
            <nav>
                <ul>
                    <li><a href='/'>Profile</a></li>
                    <li><a href='/'>Applied Jobs</a></li>
                    <li><a href='/'>Saved Jobs</a></li>
                    <li><a href='/'>Recommended Jobs</a></li>
                    <li><a href='/'>Settings</a></li>
                    <li><a href='/'>Logout</a></li>
                </ul>
            </nav>
        </div>
        </React.Fragment>
    );
};

export default sidedrawer;