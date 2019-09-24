import React from 'react';
import './StatBoard.css';
import StatBox from './StatBox';

//This is the StatBoard where it displays the jobs posted, number of applicants
// and number of applications.

const StatBoard = (props) =>{
    return (
    <div className= "statBoard">
        <div className="statBoxWrapper">
            <StatBox number="39" desc="Jobs"/>
            <StatBox number="62" desc="Applicants"/>
            <StatBox number="333" desc="Applications"/>
        </div>
        <button className="btn btn-outline-secondary btn-lg btn-block">Post New Job</button>
    </div>
    )
};



export default StatBoard;
