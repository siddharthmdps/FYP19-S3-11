import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, Alert, InputGroup, FormControl } from 'react-bootstrap';
import classes from './SearchJobs.module.css';

import Axios from 'axios';

import JobCard from '../../Components/JobCard/JobCard';

class SearchJobs extends Component {
    state = {
        "Search": "",
        "SearchJobs": [],
    };

    changeStatus = (id, status) => {
        let temp = this.state.SavedJobs;
        temp.forEach(element => {
            if(element.id === id)
                element.status = status;
        });
        console.log(temp, id);
        this.setState({ "SearchJobs": temp });
    };

    getSearch = event => {
        this.setState({Search: event.target.value});
    }

    getSearchedJobs(){
        Axios.get("http://localhost:3000/AppliedJobs")
            .then(receivedData =>{
                let temp = receivedData.data;
                temp.forEach(element => {
                    element.status = "active";
                });
                this.setState({ SearchJobs: temp });
                console.log(temp);
            });
    }

    render() {
        return (
            <Container >
                <br />
                <Row className={classes.Title}>
                    Search Jobs
                </Row>
                <br />

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1"><i class="fas fa-search"></i></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    type="text"
                    onChange={(event) => this.getSearch(event)}
                    onKeyDown={(event)=> {if(event.key === 'Enter') this.getSearchedJobs()}}
                    />
                </InputGroup>

                {this.state.SearchJobs.map(jobDetail => {
                    return(
                        <React.Fragment key={jobDetail.id}>
                            <JobCard jobDetail={jobDetail} changeStatus={(id, status) => this.changeStatus(id, status)} />
                            <br />
                        </React.Fragment>
                    );
                })}                
            </Container>
        );
    }
}

export default SearchJobs;