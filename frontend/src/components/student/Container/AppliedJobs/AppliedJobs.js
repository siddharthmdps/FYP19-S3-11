import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import classes from './AppliedJobs.module.css';

import Axios from 'axios';

class AppliedJobs extends Component {
    state = {
        "AppliedJobs": [],
        "active": false
    };

    toggle = () => this.setState({ "active": !this.state.active });

    componentDidMount(){
        Axios.get("http://localhost:3000/AppliedJobs")
            .then(receivedData =>{
                this.setState({ AppliedJobs: receivedData.data });
                console.log(receivedData.data);
            });
    }

    render() {
        const active = this.state.active;
        const unfav = <i class="far fa-star" />
        const fav = <i class="fas fa-star" style={{ "color": "#FFCA28" }} />
        return (
            <Container >
                <br />
                <Row className={classes.Title}>
                    Applied Jobs
                </Row>
                <br />

                {this.state.AppliedJobs.map(jobDetail => {
                    return(
                        <React.Fragment>
                        <Card md={{ span: 12 }} className={classes.Card}>
                    <Card.Body style={{ height: '185px' }} onClick={()=> window.open(jobDetail.JobURL, "_blank")}>
                        <Card.Title>
                            <Row className={classes.Row} style={{ fontWeight: '600' }}>{jobDetail.JobTitle}</Row>
                            <Row className={classes.Row}>{jobDetail.Company}</Row>
                            <Row>
                                <Col className={classes.CardCol}> <i class="fas fa-map-marker-alt"></i> {jobDetail.Location}</Col>
                                <Col className={classes.CardCol}> <i class="fas fa-building"></i> {jobDetail.Industry}</Col>
                                <Col className={classes.CardCol}> <i class="fas fa-briefcase"></i> {jobDetail.WorkExpReq}</Col>
                            </Row>
                        </Card.Title>
                        <Card.Text className={classes.Description}>
                            {jobDetail.Description}
                            </Card.Text>
                    </Card.Body>
                    <Card.Footer className={classes.Footer}>
                        <div className={classes.ButtonDiv}>
                        <Alert variant="success">
                        <i className="fas fa-check-circle"></i> You have applied for this job
                        </Alert>
                            {/* <Button className={classes.Applied} disabled >Applied</Button> */}
                        </div>
                        <div className={classes.StarDiv}>
                            <span className={classes.Star} onClick={this.toggle}>
                                {active ? fav : unfav}
                            </span>
                        </div>
                    </Card.Footer>
                </Card>
                <br />
                </React.Fragment>
                    );
                })}                
            </Container>
        );
    }
}

export default AppliedJobs;