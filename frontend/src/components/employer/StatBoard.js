import React from 'react';
import './StatBoard.css';
import StatBox from './StatBox';
import PostJob from './PostJob';

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
        <br/>
        <ul className="listAction">
            <li className="listActionItem">
                <button type="button" class="btn btn-outline-secondary btn-no-outline">Preview Company Profile</button>
            </li>
            <li className="listActionItem">
                <button onClick = {props.pjHandler} type="button" class="btn btn-outline-secondary btn-no-outline">Post Jobs</button>
            </li>
            <li className="listActionItem">
                <button type="button" class="btn btn-outline-secondary btn-no-outline">Browse Candidates</button>
            </li>
        </ul>
        
    </div>
    )
  
};


//<button className="btn btn-outline-secondary btn-lg btn-block">Post New Job</button>
export default StatBoard;
