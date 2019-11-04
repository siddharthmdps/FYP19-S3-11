import React from 'react';
import classes from './JobCard.module.css';

import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';

const jobCard = props => (
    <Card md={{ span: 12 }} className={classes.Card}>
        <Card.Body style={{ height: '185px' }} onClick={()=> window.open(props.jobDetail.JobURL, "_blank")}>
            <Card.Title>
                <Row className={classes.Row} style={{ fontWeight: '600' }}>{props.jobDetail.JobTitle}</Row>
                <Row className={classes.Row}>{props.jobDetail.Company}</Row>
                <Row>
                    <Col className={classes.CardCol}> <i class="fas fa-map-marker-alt"></i> {props.jobDetail.Location}</Col>
                    <Col className={classes.CardCol}> <i class="fas fa-building"></i> {props.jobDetail.Industry}</Col>
                    <Col className={classes.CardCol}> <i class="fas fa-briefcase"></i> {props.jobDetail.WorkExpReq}</Col>
                </Row>
            </Card.Title>
            <Card.Text className={classes.Description}>
                {props.jobDetail.Description}
                </Card.Text>
        </Card.Body>
        <Card.Footer className={classes.Footer}>
            <div className={classes.ButtonDiv}>
            <Alert variant="success">
            <i className="fas fa-check-circle"></i> You have applied for this job
            </Alert>
                {/* <Button className={classes.Applied} disabled >Applied</Button> */}
            </div>
            {/* <div className={classes.StarDiv}>
                <span className={classes.Star} onClick={this.toggle}>
                    {active ? fav : unfav}
                </span>
            </div> */}
        </Card.Footer>
    </Card>
);

export default jobCard;