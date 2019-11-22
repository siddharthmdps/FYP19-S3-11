import React, {Component} from 'react';
import classes from './Job.module.css';


import { Container, Row, Col, Card, Button, Alert, Spinner } from 'react-bootstrap';

import Axios from 'axios';

class JobCard extends Component {

    state={

    }

    changeStatus = (id, status) => {
        let temp = this.state.SearchJobs;
        temp.forEach(element => {
            if(element.JobID === id){
                if(status==="Applied")
                    element.Status = status;
                else{
                    if(element.Status === "Saved"){
                        element.Status = "None"
                    }
                    else if(element.Status === "None"){
                        element.Status = "Saved"
                    }
                }
            }
        });
        console.log(temp, id, status);
        this.setState({ "SavedJobs": temp });
    };

    AppliedFooter = () => (
        <Alert variant="success">
            <i className="fas fa-check-circle"></i> You have applied for this job
        </Alert>
    );
    
    OtherFooter = () => {
    
        const unfav = <i className="far fa-star" />
        const fav = <i className="fas fa-star" style={{ color: "#FFCA28" }} />
        const waiting = <Spinner animation="border" variant="warning" />
        return (
            <React.Fragment>
                <div className={classes.ButtonDiv}>
                    <Button className={classes.Apply} onClick={() => this.changeStatus(this.state.JobID, "Applied")}>Apply</Button>
                </div>
                <div className={classes.StarDiv}>
                    <span className={classes.Star} onClick={() => this.changeStatus(this.state.JobID, "Save")}>
                        {this.state.Status === "Saved" ? fav : unfav}
                    </span>
                </div>
            </React.Fragment>
        )
    };
    
    componentDidMount(){
        Axios.get(`https://pegasus-backend.herokuapp.com/employer/getjobinfo/${this.props.match.params.JID}`)
            .then(res => {
                let temp = res.data[0];
                this.setState({ID: temp.id, JobTitle: temp.title, Company: temp.companyname, Industry: temp.industry,  Location: temp.location, WorkExpReq: `${temp.yearsofexperience} years`, Status: 'None', Description: temp.description})
                console.log(temp);
            })
            .catch(err => {
                console.log(err);
            })
        Axios.get(`http://192.168.43.251:3001/student/getjobapplicationstatus/${localStorage.getItem('id')}/${this.props.match.params.JID}`)
        .then(res => {
            this.setState({Status: res.data.Status});
            console.log(res.data.Status);
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    render(){
        return(
            <Container fluid>
                <br />
                <Row className={classes.Title}>
                    <Col md={{ offset: 1, span: 10 }}>
                    Job
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md={{ offset: 1, span: 10 }}>
                        <Card md={{ span: 12 }} className={classes.Card}>
                            <Card.Body className={classes.CardBody}>
                                <Card.Title>
                                    <Row className={classes.Row} style={{ fontWeight: '600' }}>{this.state.JobTitle}</Row>
                                    <Row className={classes.Row}>{this.state.Company}</Row>
                                    <Row>
                                        <Col md={{ span: 3 }} sm={{ span: 12 }} className={classes.CardCol}> <i className="fas fa-map-marker-alt"></i> {this.state.Location}</Col>
                                        <Col md={{ span: 6 }} sm={{ span: 12 }} className={classes.CardCol}> <i className="fas fa-building"></i> {this.state.Industry}</Col>
                                        <Col md={{ span: 3 }} sm={{ span: 12 }} className={classes.CardCol}> <i className="fas fa-briefcase"></i> {this.state.WorkExpReq}</Col>
                                    </Row>
                                </Card.Title>
                                <Card.Text className={classes.Description}>
                                    <div className={classes.Desc}>
                                        {this.state.Description}
                                    </div>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className={classes.Footer}>
                                {this.state.Status==="applied" ? this.AppliedFooter() : this.OtherFooter()}
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
};

export default JobCard;