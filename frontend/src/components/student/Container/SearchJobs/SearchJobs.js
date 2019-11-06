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
            <Container className={classes.Container} fluid>
                {/* <br />
                <Row className={classes.Title}>
                    Search Jobs
                </Row>
                <br /> */}
                <div className={classes.TopHead} sm={{span: 12}}>
                    <div className={classes.MainBox}>
                        <h1 className={classes.Title}>Search Job</h1>
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
                
                <Col className={classes.Jobs} md={{offset:1, span: 10}}>
                    {this.state.SearchJobs.map(jobDetail => {
                        return (
                            <React.Fragment key={jobDetail.id}>
                                <JobCard jobDetail={jobDetail} changeStatus={(id, status) => this.changeStatus(id, status)} />
                                <br />
                            </React.Fragment>
                        );
                    })}
                </Col>
            </Container>
        );
    }
}

export default SearchJobs;