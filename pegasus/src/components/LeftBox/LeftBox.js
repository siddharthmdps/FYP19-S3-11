import React from 'react';
import Logo from '../Logo/Logo';
import classes from './LeftBox.module.css'

const leftBox = (props) => {
    return(
        <div className={classes.LeftBox}>
            <ul>
                <li>
                    <Logo />
                </li>
                {
                    props.list.map((value, index) => {
                        return (
                            <li key='index' onClick={props.activeHandler.bind(this, index)} className={index===props.active?classes.active: null}>
                                {value}
                                
                            </li>
                        )
                    })
                }
                {/* <li key='1' onClick={props.activeHandler.bind(this, '1')}>
                    View Profile
                </li>
                <li key='2' onClick={props.activeHandler.bind(this, '2')}>
                    Personal Particulars
                </li>
                <li key='3' onClick={props.activeHandler.bind(this, '3')}>
                    Education
                </li>
                <li key='4' onClick={props.activeHandler.bind(this, '4')}>
                    Work Experience
                </li>
                <li key='5' onClick={props.activeHandler.bind(this, '5')}>
                    Skills
                </li>
                <li key='6' onClick={props.activeHandler.bind(this, '6')}>
                    Job Preference
                </li>
                <li key='7' onClick={props.activeHandler.bind(this, '7')}>
                    Awards
                </li>
                <li key='8' onClick={props.activeHandler.bind(this, '8')}>
                    Certifications
                </li>
                <li key='9' onClick={props.activeHandler.bind(this, '9')}>
                    Projects
                </li>
                <li key='10'>
                    Resume
                </li> */}
            </ul>
        </div>
    );
}

export default leftBox;