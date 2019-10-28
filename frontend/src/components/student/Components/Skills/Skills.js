import React from 'react';
import classes from './Skills.module.css';
import { Button } from 'react-bootstrap';
const skills = props => {
    return (
        <React.Fragment>
            {
                props.details.Edit ?
                    <Button as="input"
                        autoFocus={true}
                        className={classes.Input} value={props.details.SkillName}
                        onChange={props.changeFn}
                        onKeyPress={props.changeFn} 
                        onBlur={props.details.SkillName.trim() == "" ? props.remove : props.removeEdit} />
                    :
                    <Button className={classes.Skill} onClick={props.remove} >{props.details.SkillName}</Button>
            }
        </React.Fragment>
    );
}

export default skills;