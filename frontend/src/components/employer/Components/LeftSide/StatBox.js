import React from 'react';
import classes from './StatBox.module.css';
import CountUp from 'react-countup';
import { Col, Row } from 'react-bootstrap';

//need to install CountUP
//npm i react-countup

//This is the StatBoard where it displays the jobs posted, number of applicants
// and number of applications.

const StatBox = (props) => {
    return (
        <Row style={{ display: 'table-cell', textAlign: 'center' }}>
            <div className={classes.statCircle}>
                {/* <CountUp end={parseInt(props.number,10)} duration={0.5}/> */}
                {props.number}
            </div>
            <div className={classes.statText}>{props.desc}</div>
        </Row>
    )
};



export default StatBox;
