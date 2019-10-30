import React from 'react';
import classes from './ViewCard.module.css';
import { Card } from 'react-bootstrap';

export const ViewCard = props => (
    <React.Fragment>
        <Card className={classes.ViewCard} style={{ width: '18rem' }}>
            <Card.Title className={classes.Title}>{props.title}</Card.Title>
            {props.children}
        </Card>
    </React.Fragment>);

export const Element = props => (
//   <Card.Body className={classes.Element} style={{ width: '18rem' }}>
        <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>
    <Card.Subtitle className="mb-2 text-muted">{props.interval}</Card.Subtitle>
    <Card.Text>
    {props.children}
    </Card.Text>

      {/* <Card.Body><strong>{props.title}</strong></Card.Body>
      <Card.Body><strong>{props.subtitle}</strong></Card.Body>
      <Card.Body className={classes.Date}>{props.interval}</Card.Body>
      <Card.Body className={classes.Description}>
        
      </Card.Body> */}
  </Card.Body>);