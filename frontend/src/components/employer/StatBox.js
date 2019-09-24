import React from 'react';
import './StatBox.css';
import CountUp from 'react-countup';

//need to install CountUP
//npm i react-countup

//This is the StatBoard where it displays the jobs posted, number of applicants
// and number of applications.

const StatBox=(props) =>{
    return (
    <div className= "statBox">
       <div className= "statCircle">
       <CountUp end={parseInt(props.number,10)} duration={0.5}/>
       </div>
       <div className="statText">{props.desc}</div>
    </div>
    )
};



export default StatBox;
