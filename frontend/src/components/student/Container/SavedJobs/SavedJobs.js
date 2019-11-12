import React, { Component } from 'react';
import { Container, Row} from 'react-bootstrap';
import classes from './SavedJobs.module.css';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Axios from 'axios';

import JobCard from '../../Components/JobCard/JobCard';

class SavedJobs extends Component {
    state = {
        "SavedJobs": [],
        "jobsPerPage": 5,
        "pageNo": 1,
        "pageItems": []
    };

    pagination = () => {
        let temp = [];
        let number = this.state.SavedJobs.length / this.state.jobsPerPage;
        if (this.state.SavedJobs.length % this.state.jobsPerPage !== 0)
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
                this.pagination();
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

                {this.state.SavedJobs.slice(((this.state.pageNo - 1) * this.state.jobsPerPage), ((this.state.pageNo - 1) * this.state.jobsPerPage) + this.state.jobsPerPage).map(jobDetail => {
                    return(
                        <React.Fragment key={jobDetail.id}>
                            <JobCard jobDetail={jobDetail} Saved changeStatus={(id, status) => this.changeStatus(id, status)} />
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

export default SavedJobs;