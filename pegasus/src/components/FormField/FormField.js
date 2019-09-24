import React from 'react';
import classes from './FormField.module.css';

const formField = props => (
    <div className={classes.FormField} style={props.formStyle}>
    <p>{props.attribute}:</p><input style={props.inStyle} placeholder={props.placeholder}></input>
    </div>
);
export default formField;