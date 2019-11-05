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
            if (element.id === id)
                element.status = status;
        });
        console.log(temp, id);
        this.setState({ "SearchJobs": temp });
    };

    getSearch = event => {
        this.setState({ Search: event.target.value });
    }

    getSearchedJobs() {
        Axios.get("http://localhost:3000/AppliedJobs")
            .then(receivedData => {
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
            <Container style={{margin: '0 0', padding: '0 0'}}>
                {/* <br />
                <Row className={classes.Title}>
                    Search Jobs
                </Row>
                <br /> */}
                <div className={classes.TopHead}>
                    <div className={classes.MainBox}>
                        {/* <InputGroup size="lg" > */}
                        {/* <InputGroup.Prepend className={classes.SearchPrepend}>
                    <InputGroup.Text id="inputGroup-sizing-lg" className={classes.SearchPrepend}><i className="fas fa-search"></i></InputGroup.Text>
                    </InputGroup.Prepend> */}
                        <FormControl aria-label="Large"
                            aria-describedby="inputGroup-sizing-sm"
                            placeholder="Search by company, job, industry !"
                            onChange={(event) => this.getSearch(event)}
                            onKeyDown={(event) => { if (event.key === 'Enter') this.getSearchedJobs() }}
                            className={classes.SearchBox}
                        />
                        {/* </InputGroup> */}
                    </div>
                </div>



                <div className={classes.Jobs}>
                    {this.state.SearchJobs.map(jobDetail => {
                        return (
                            <React.Fragment key={jobDetail.id}>
                                <JobCard jobDetail={jobDetail} changeStatus={(id, status) => this.changeStatus(id, status)} />
                                <br />
                            </React.Fragment>
                        );
                    })}
                </div>
            </Container>
        );
    }
}

export default SearchJobs;