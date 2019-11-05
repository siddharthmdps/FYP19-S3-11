import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import classes from './SavedJobs.module.css';

import Axios from 'axios';

import JobCard from '../../Components/JobCard/JobCard';

class SavedJobs extends Component {
    state = {
        "SavedJobs": [],
    };

    changeStatus = (id, status) => {
        let temp = this.state.SavedJobs;
        temp.forEach(element => {
            if(element.id === id)
                element.status = status;
        });
        console.log(temp, id);
        this.setState({ "SavedJobs": temp });
    };

    componentDidMount(){
        Axios.get("http://localhost:3000/AppliedJobs")
            .then(receivedData =>{
                let temp = receivedData.data;
                temp.forEach(element => {
                    element.status = "active";
                });
                this.setState({ SavedJobs: temp });
                console.log(temp);
            });
    }

    render() {
        return (
            <Container >
                <br />
                <Row className={classes.Title}>
                    Saved Jobs
                </Row>
                <br />

                {this.state.SavedJobs.map(jobDetail => {
                    return(
                        <React.Fragment key={jobDetail.id}>
                            <JobCard jobDetail={jobDetail} Saved changeStatus={(id, status) => this.changeStatus(id, status)} />
                            <br />
                        </React.Fragment>
                    );
                })}                
            </Container>
        );
    }
}

export default SavedJobs;