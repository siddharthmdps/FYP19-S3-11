import React from 'react';
import classes from './Timeline.module.css';
import { Card } from 'react-bootstrap';

export const Timeline = props =>
    <React.Fragment>
        <Card className={classes.Timeline} style={{ width: '18rem' }}>
            <label className={classes.TitleIcon}></label>
            <Card.Title className={classes.Title}>{props.title}</Card.Title>
            {props.children}
        </Card>
    </React.Fragment>

export const Event = ({ title, subtitle, interval, children }) =>
  <Card.Body className={classes.Event} style={{ width: '18rem' }}>
    <label className={classes.Icon}></label>
    <div className={classes.Body}>
      <p className={classes.Date}>{interval}</p>
      <p><strong>{title}</strong></p>
      <p><strong>{subtitle}</strong></p>
      <div className={classes.Description}>
        {children}
      </div>
    </div>
  </Card.Body>
