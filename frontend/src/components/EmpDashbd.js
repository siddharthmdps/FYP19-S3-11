import React from 'react';
import Navbar from './Navbar';
import ProfileContainer from './ProfileContainer';
import StatBoard from './StatBoard';
import './EmpDashbd.css';

//This is the dashboard which the employer will see after successfully logging in.
// It contains a Navbar (header bar), a Profile Container and a Statistics Board.

function EmpDashbd(props) {
    return (
    <div>
        <Navbar/>
        <div className= "wrapper">
            <ProfileContainer username="PegasusSim"/>
            <StatBoard/>
        </div>
        
    </div>
    )
};



export default EmpDashbd;