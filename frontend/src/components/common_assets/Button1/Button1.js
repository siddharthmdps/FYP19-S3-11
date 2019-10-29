import React from 'react';
import {Button} from 'react-bootstrap';
import classes from './Button1.module.css'

const button1 = props => (
    props.delete?<Button className={classes.Delete} onClick={props.click}>{props.children}</Button>
    :<Button className={classes.Button1} onClick={props.click}>{props.children}</Button>
);

export default button1;