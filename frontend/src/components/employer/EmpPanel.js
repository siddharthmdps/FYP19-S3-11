import React from 'react';
import ProfileContainer from './ProfileContainer';
import StatBoard from './StatBoard';
import './EmpDashbd.css';

//This component is the employer's control panel.
//It contains a Profile Container and a statboard.

const EmpPanel=(props)=> {
    return (
        <div className= "panelWrapper float-left">
            <ProfileContainer/>
            <StatBoard/>
        </div>

    )
};

export default EmpPanel;
