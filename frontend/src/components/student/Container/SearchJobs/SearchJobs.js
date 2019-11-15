import React, { Component } from 'react';
import { Container, Row, Col, FormControl } from 'react-bootstrap';
import classes from './SearchJobs.module.css';
import Axios from 'axios';
import JobCard from '../../Components/JobCard/JobCard';
import Select from './Select';
import Sidedrawer from './Sidedrawer';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class SearchJobs extends Component {
    state = {
        "Search": "",
        "SearchJobs": [],
        "jobsPerPage": 5,
        "pageNo": 1,
        "pageItems": []
    };

    pagination = () => {
        let temp = [];
        let number = this.state.SearchJobs.length / this.state.jobsPerPage;
        if (this.state.SearchJobs.length % this.state.jobsPerPage !== 0)
            number++;

        for (let index = 1; index <= number; index++) {
            if (index === this.state.pageNo) {
                temp.push(
                <Button key={index} style={{backgroundColor: '#43CD86', color: 'black' }} onClick={() => { this.setState({pageNo: index}); this.refreshPagination(index, number) }}>
                    {index}
                </Button>
                );
            }
            else {
                temp.push(
                    <Button key={index} style={{backgroundColor: '#fff', color: 'black'}} onClick={() => { this.setState({pageNo: index}); this.refreshPagination(index, number) }}>
                        {index}
                    </Button>
                );
            }
        }
        this.setState({ pageItems: temp });
    };

    refreshPagination = (newActive, number) => {
        let temp = [];

        for (let index = 1; index <= number; index++) {
            if (index === newActive) {
                temp.push(
                <Button key={index} style={{backgroundColor: '#43CD86', color: 'black'}} onClick={() => { this.setState({pageNo: index}); this.refreshPagination(index, number) }}>
                    {index}
                </Button>
                );
            }
            else {
                temp.push(
                    <Button key={index} style={{backgroundColor: '#fff', color: 'black'}} onClick={() => { this.setState({pageNo: index}); this.refreshPagination(index, number) }}>
                        {index}
                    </Button>
                );
            }
        }
        this.setState({ pageItems: temp });
        window.scrollTo(0, 0);
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
        Axios.get(`https://pegasus-backend.herokuapp.com/student/searchjob/${this.state.Search}`)
            .then(receivedData => {
                let temp = receivedData.data;
                console.log(temp);
                // temp.forEach(element => {
                //     element.status = "active";
                // });
                this.setState({ SearchJobs: temp });
                console.log(temp);
                this.pagination();
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
                <div className={classes.TopHead} sm={{ span: 12 }}>
                    <div className={classes.MainBox}>
                        <h1 className={classes.SearchTitle}>Find Your Next Job.</h1>
                        {/* <InputGroup size="lg" > */}
                        {/* <InputGroup.Prepend className={classes.SearchPrepend}>
                    <InputGroup.Text id="inputGroup-sizing-lg" className={classes.SearchPrepend}><i className="fas fa-search"></i></InputGroup.Text>
                    </InputGroup.Prepend> */}
                        <div style={{textAlign: 'center'}}>
                            <FormControl aria-label="Large"
                                aria-describedby="inputGroup-sizing-sm"
                                placeholder="Search by company, job, industry"
                                onChange={(event) => this.getSearch(event)}
                                onKeyDown={(event) => { if (event.key === 'Enter') this.getSearchedJobs() }}
                                className={classes.SearchBox}
                            />
                            <br />
                            <Sidedrawer />
                        </div>

                        {/* </InputGroup> */}
                        <div className={classes.CardNum}>
                            <span className={classes.CardSpan}>5</span>
                            <span className={classes.CardSpan}>10</span>
                            <span className={classes.CardSpan}>15</span>
                            <span className={classes.CardSpan}>20</span>
                        </div>
                    </div>
                </div>
                <br />

                {/* <div className={classes.FilterBox}>
                    <Col md={{ span: 3, offset: 1 }} >
                        <h1 className={classes.FilterTitle}>Advanced Search</h1>
                    </Col>
                    <div className={classes.Categories}>
                        <Select />
                    </div>
                </div> */}


                <Col className={classes.Jobs} md={{ offset: 1, span: 10 }}>
                    {this.state.SearchJobs.message!=="NOT FOUND"?
                    this.state.SearchJobs.slice(((this.state.pageNo - 1) * this.state.jobsPerPage), ((this.state.pageNo - 1) * this.state.jobsPerPage) + this.state.jobsPerPage).map(jobDetail => {
                        return (
                            <React.Fragment key={jobDetail.id}>
                                <JobCard jobDetail={jobDetail} changeStatus={(id, status) => this.changeStatus(id, status)} />
                                <br />
                            </React.Fragment>
                        );
                    }): <div className={classes.NoRecord}>No record found</div>}

                </Col>

                <Grid container  justify="center">
                        {this.state.pageItems}
                </Grid>
                <br />
                <br />
            </Container>
        );
    }
}

export default SearchJobs;