import React from 'react';
import classes from './Timeline.module.css';
import { Card } from 'react-bootstrap';

export const Timeline = props => (
    <React.Fragment>
        <Card className={classes.Timeline} style={{ width: '18rem' }}>
            <label className={classes.TitleIcon}> <i class="fas fa-graduation-cap"></i> </label>
            <Card.Title className={classes.Title}>{props.title}</Card.Title>
            {props.children}
        </Card>
    </React.Fragment>
    );

export const Event = props => (
  <Card.Body className={classes.Event} style={{ width: '18rem' }}>
    <label className={classes.Icon}></label>
    <div className={classes.Body}>
      <p className={classes.Date}>{props.interval}</p>
      <p><strong>{props.title}</strong></p>
      <p><strong>{props.subtitle}</strong></p>
      <div className={classes.Description}>
        {props.children}
      </div>
    </div>
  </Card.Body>);

