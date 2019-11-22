import React from 'react';
import classes from './JobCard.module.css';


import { Container, Row, Col, Card, Button, Alert, Spinner } from 'react-bootstrap';

const jobCard = props => {

    const AppliedFooter = () => (
        <Alert variant="success">
            <i className="fas fa-check-circle"></i> You have applied for this job
        </Alert>
    );
    
    const OtherFooter = () => {
    
        const unfav = <i className="far fa-star" />
        const fav = <i className="fas fa-star" style={{ color: "#FFCA28" }} />
        const waiting = <Spinner animation="border" variant="warning" />
        return (
            <React.Fragment>
                <div className={classes.ButtonDiv}>
                    <Button className={classes.Apply} onClick={() => props.changeStatus(props.jobDetail.JobID, "Applied")}>Apply</Button>
                </div>
                <div className={classes.StarDiv}>
                    <span className={classes.Star} onClick={() => props.changeStatus(props.jobDetail.JobID, "Save")}>
                        {props.jobDetail.Status === "Saved" ? fav : unfav}
                    </span>
                </div>
            </React.Fragment>
        )
    };    

    return(
        <Card md={{ span: 12 }} className={classes.Card}>
            <Card.Body className={classes.CardBody} onClick={() => window.open(`/student/job/${props.jobDetail.JobID}`, "_blank")}>
                <Card.Title>
                    <Row className={classes.Row} style={{ fontWeight: '600' }}>{props.jobDetail.JobTitle}</Row>
                    <Row className={classes.Row}>{props.jobDetail.Company}</Row>
                    <Row>
                        <Col md={{ span: 3 }} sm={{ span: 12 }} className={classes.CardCol}> <i className="fas fa-map-marker-alt"></i> {props.jobDetail.Location}</Col>
                        <Col md={{ span: 6 }} sm={{ span: 12 }} className={classes.CardCol}> <i className="fas fa-building"></i> {props.jobDetail.Industry}</Col>
                        <Col md={{ span: 3 }} sm={{ span: 12 }} className={classes.CardCol}> <i className="fas fa-briefcase"></i> {props.jobDetail.WorkExpReq}</Col>
                    </Row>
                </Card.Title>
                <Card.Text className={classes.Description}>
                    <div className={classes.Desc}>
                        {props.jobDetail.Description}
                    </div>
                </Card.Text>
            </Card.Body>
            <Card.Footer className={classes.Footer}>

                {props.jobDetail.Status==="Applied" ? AppliedFooter() : OtherFooter()}
                <div className={classes.ButtonDiv}>

                    {/* <Button className={classes.Applied} disabled >Applied</Button> */}
                </div>
                {/* <div className={classes.StarDiv}>
                    <span className={classes.Star} onClick={this.toggle}>
                        {active ? fav : unfav}
                    </span>
                </div> */}
            </Card.Footer>
        </Card>
    )
};

export default jobCard;