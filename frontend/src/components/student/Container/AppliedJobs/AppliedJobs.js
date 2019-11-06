import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, Alert, Pagination } from 'react-bootstrap';
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
            temp.push(
                <Pagination.Item
                    key={index} active={index === this.state.pageNo} onClick={() => { this.setState({ pageNo: index }); this.refreshPagination(index, number) }} className={classes.PageItem}>
                    {index}
                </Pagination.Item>
            );
        }
        this.setState({ pageItems: temp });
    };

    refreshPagination = (newActive, number) => {
        let temp = [];

        for (let index = 1; index <= number; index++) {
            temp.push(
                <Pagination.Item key={index} active={index === newActive} onClick={() => { this.setState({ pageNo: index }); this.refreshPagination(index, number) }} className={classes.PageItem}>
                    {index}
                </Pagination.Item>
            );
        }
        this.setState({ pageItems: temp });
    };

    componentDidMount() {
        Axios.get("http://localhost:3000/AppliedJobs")
            .then(receivedData => {
                this.setState({ AppliedJobs: receivedData.data });
                console.log(receivedData.data);
                this.pagination()
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

                {this.state.AppliedJobs.slice(((this.state.pageNo - 1) * this.state.jobsPerPage), ((this.state.pageNo - 1) * this.state.jobsPerPage) + this.state.jobsPerPage).map(jobDetail => {
                    return (
                        <React.Fragment>
                            <JobCard jobDetail={jobDetail} Applied />
                            <br />
                        </React.Fragment>
                    );
                })}
                <br />
                <Pagination size="lg">{this.state.pageItems}</Pagination>
            </Container>
        );
    }
}

export default AppliedJobs;