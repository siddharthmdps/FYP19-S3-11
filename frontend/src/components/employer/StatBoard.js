import React from 'react';
import './StatBoard.css';
import StatBox from './StatBox';

//This is the StatBoard where it displays the jobs posted, number of applicants
// and number of applications.


const StatBoard = (props) =>{

    return (
    <div className= "statBoard">
        <div className="statBoxWrapper">
            <div className = "row">
            <StatBox number={props.numOfJobs} desc="Jobs" className= "col-xs-3"/>
            <StatBox number="62" desc="Applicants" className= "col-xs-3"/>
            <StatBox number="333" desc="Applications" className= "col-xs-3"/>
            </div>
           
        </div>
        <br/>
        <ul className="listAction">
            <li className="listActionItem">
                <button type="button" className="btn btn-outline-secondary btn-no-outline buttonText">Preview Company Profile</button>
            </li>
            <li className="listActionItem">
                <button onClick = {props.pjHandler} type="button" className="btn btn-outline-secondary btn-no-outline buttonText">Post Jobs</button>
            </li>
            <li className="listActionItem">
                <button type="button" className="btn btn-outline-secondary btn-no-outline buttonText">Browse Candidates</button>
            </li>
        </ul>
        
    </div>
    )
  
};


//<button className="btn btn-outline-secondary btn-lg btn-block">Post New Job</button>
export default StatBoard;
