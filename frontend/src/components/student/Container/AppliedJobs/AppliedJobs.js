import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import classes from './AppliedJobs.module.css';

import Axios from 'axios';

import JobCard from '../../Components/JobCard/JobCard';

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
                            <JobCard jobDetail={jobDetail} Applied toggle={this.toggle}/>
                            <br />
                        </React.Fragment>
                    );
                })}                
            </Container>
        );
    }
}

export default AppliedJobs;