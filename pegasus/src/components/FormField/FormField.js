import React from 'react';
import classes from './FormField.module.css';

const formField = props => (
    <div className={classes.FormField} style={props.formStyle}>
    <div className={classes.p}>{props.attribute}:</div>
    {props.type==='textarea'?
    (<div className={classes.textArea}><textarea placeholder={props.placeholder} /></div>) : 
    (<div className={classes.input}> <input placeholder={props.placeholder}></input></div>)}
    </div>
);
export default formField;