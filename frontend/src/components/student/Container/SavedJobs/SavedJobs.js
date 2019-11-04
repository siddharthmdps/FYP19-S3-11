import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import classes from './SavedJobs.module.css';

import Axios from 'axios';

import JobCard from '../../Components/JobCard/JobCard';

class SavedJobs extends Component {
    state = {
        "SavedJobs": [],
        "active": false
    };

    toggle = (id) => {
        let temp = this.state.SavedJobs;
        temp.forEach(element => {
            if(element.id === id)
                element.active = !element.active;
        });
        console.log(temp, id);
        // temp[id]["active"] = !temp[id]["active"];
        this.setState({ "SavedJobs": temp });
    };

    componentDidMount(){
        Axios.get("http://localhost:3000/AppliedJobs")
            .then(receivedData =>{
                let temp = receivedData.data;
                temp.forEach(element => {
                    element.active = true;
                });
                this.setState({ SavedJobs: temp });
                console.log(temp);
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
                    Saved Jobs
                </Row>
                <br />

                {this.state.SavedJobs.map(jobDetail => {
                    return(
                        <React.Fragment key={jobDetail.id}>
                            <JobCard jobDetail={jobDetail} Saved toggle={(id) => this.toggle(id)} />
                            <br />
                        </React.Fragment>
                    );
                })}                
            </Container>
        );
    }
}

export default SavedJobs;