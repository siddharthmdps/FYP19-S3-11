import React, { Component } from 'react';
import { Container, Row, Col, Card, Alert, Pagination } from 'react-bootstrap';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import classes from './AppliedJobs.module.css';

import Axios from 'axios';

import JobCard from '../../Components/JobCard/JobCard';

class AppliedJobs extends Component {
    state = {
        "AppliedJobs": [],
        "active": false,
        "jobsPerPage": 5,
        "pageNo": 1,
        "pageItems": []
    };

    toggle = () => this.setState({ "active": !this.state.active });

    pagination = () => {
        let temp = [];
        let number = this.state.AppliedJobs.length / this.state.jobsPerPage;
        if (this.state.AppliedJobs.length % this.state.jobsPerPage !== 0)
            number++;

        for (let index = 1; index <= number; index++) {
            if (index === this.state.pageNo) {
                temp.push(
                <Button key={index} style={{backgroundColor: '#43CD86', color: 'black' }} onClick={() => { this.setState({pageNo: index}); this.refreshPagination(index, number) }} className={classes.PaginationButton}>
                    {index}
                </Button>
                );
            }
            else {
                temp.push(
                    <Button key={index} style={{backgroundColor: '#fff', color: 'black'}} onClick={() => { this.setState({pageNo: index}); this.refreshPagination(index, number) }} className={classes.PaginationButton}>
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

    componentDidMount() {
        Axios.get(`http://192.168.43.251:3001/student/getappliedjoblist/${localStorage.getItem('id')}`)
            .then(receivedData => {
                this.setState({ AppliedJobs: receivedData.data.AppliedJobs });
                console.log(receivedData.data);
                this.pagination();
            });
    }

    render() {
        const active = this.state.active;
        return (
            <Container >
                <br />
                <Row className={classes.Title}>
                    Applied Jobs
                </Row>
                <br />

                {this.state.AppliedJobs.slice(((this.state.pageNo - 1) * this.state.jobsPerPage), ((this.state.pageNo - 1) * this.state.jobsPerPage) + this.state.jobsPerPage).map(jobDetail => {
                    return (
                        <React.Fragment>
                            <JobCard jobDetail={jobDetail} />
                            <br />
                        </React.Fragment>
                    );
                })}
                <br />
                <br />
                
                <Grid container  justify="center">
                        {this.state.pageItems}
                </Grid>
                <br />
                <br />
            </Container>
        );
    }
}

export default AppliedJobs;