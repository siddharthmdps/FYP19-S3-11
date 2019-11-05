import React from 'react';
import classes from './JobCard.module.css';


import { Container, Row, Col, Card, Button, Alert, Spinner} from 'react-bootstrap';

const AppliedFooter = () => (
    <Alert variant="success">
        <i className="fas fa-check-circle"></i> You have applied for this job
    </Alert>
);

const SavedFooter = (id, status, changeStatus) => {

    const unfav = <i className="far fa-star" />
    const fav = <i className="fas fa-star" style={{ color: "#FFCA28" }} />
    const waiting =   <Spinner animation="border" variant="warning" />
    return(
        <React.Fragment>
            <div className={classes.ButtonDiv}>
            <Button className={classes.Apply}>Apply</Button>
            </div>
            <div className={classes.StarDiv}>
                <span className={classes.Star} onClick={() => changeStatus(id, "notActive")}>
                    {status==="active" ? fav : status==="notActive"? unfav: status==="waiting"?waiting:null}
                </span>
            </div> 
        </React.Fragment>
    )
};

const OtherFooter = () => (
    <Alert variant="success">
        <i className="fas fa-check-circle"></i> You have applied for this job
    </Alert>
);

const jobCard = props => (
    <Card md={{ span: 12 }} className={classes.Card}>
        <Card.Body style={{ height: '185px' }} onClick={()=> window.open(props.jobDetail.JobURL, "_blank")}>
            <Card.Title>
                <Row className={classes.Row} style={{ fontWeight: '600' }}>{props.jobDetail.JobTitle}</Row>
                <Row className={classes.Row}>{props.jobDetail.Company}</Row>
                <Row>
                    <Col className={classes.CardCol}> <i className="fas fa-map-marker-alt"></i> {props.jobDetail.Location}</Col>
                    <Col className={classes.CardCol}> <i className="fas fa-building"></i> {props.jobDetail.Industry}</Col>
                    <Col className={classes.CardCol}> <i className="fas fa-briefcase"></i> {props.jobDetail.WorkExpReq}</Col>
                </Row>
            </Card.Title>
            <Card.Text className={classes.Description}>
                {props.jobDetail.Description}
                </Card.Text>
        </Card.Body>
        <Card.Footer className={classes.Footer}>

            {props.Applied?AppliedFooter():null}
            {props.Saved?SavedFooter(props.jobDetail.id, props.jobDetail.status, props.changeStatus):null}
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
);

export default jobCard;