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
        "pageItems": [],
        "Filter": {
            "Industry": "",
            "WorkExp": "",
            "Location": ""
        }
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

    changeFilter(event){
        console.log(event.target.id, event.target.value);
        let temp = this.state.Filter;
        temp[event.target.id] = event.target.value;
        this.setState({ Filter: temp });
    }

    getSearch = event => {
        this.setState({ Search: event.target.value });
    }

    changeStatus = (id, status) => {
        let temp = this.state.SearchJobs;
        temp.forEach(element => {
            if(element.JobID === id){
                if(status==="Applied")
                    element.Status = status;
                else{
                    if(element.Status === "Saved"){
                        element.Status = "None"
                    }
                    else if(element.Status === "None"){
                        element.Status = "Saved"
                    }
                }
            }
        });
        console.log(temp, id, status);
        this.setState({ "SavedJobs": temp });
    };

    getSearchedJobs() {
        Axios.get(`https://pegasus-backend.herokuapp.com/student/searchjob/${this.state.Search}`)
            .then(receivedData => {
                let temp = receivedData.data;
                console.log(temp);

                let tempJobs = [];
                for (let i in receivedData.data) {
                    let tempJ = {};
                    tempJ['JobTitle'] = receivedData.data[i].title;
                    tempJ['Company'] = receivedData.data[i].companyname;
                    tempJ['Location'] = receivedData.data[i].location;
                    tempJ['WorkExpReq'] = receivedData.data[i].yearsofexperience;
                    tempJ['Description'] = receivedData.data[i].description;
                    tempJ['Industry'] = receivedData.data[i].industry;
                    tempJ['JobID'] = receivedData.data[i].jobid;
                    tempJ['Status'] = "None";
                    tempJobs.push(tempJ);
                }
                this.setState({ SearchJobs: tempJobs });
                console.log(tempJobs);
                this.pagination();
            })
            .catch(err => console.log(err));
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
                            <Sidedrawer filter={this.state.Filter} changeFn={event => this.changeFilter(event)}/>
                        </div>

                        {/* </InputGroup> */}
                        {/* <div className={classes.CardNum}>
                            <span className={classes.CardSpan}>5</span>
                            <span className={classes.CardSpan}>10</span>
                            <span className={classes.CardSpan}>15</span>
                            <span className={classes.CardSpan}>20</span>
                        </div> */}
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
                        if((this.state.Filter.Industry==="" || this.state.Filter.Industry.toLowerCase()===jobDetail.Industry.toLowerCase()) 
                        && (this.state.Filter.WorkExp==="" || this.state.Filter.WorkExp.toLowerCase()===jobDetail.WorkExpReq.toLowerCase())
                        && (this.state.Filter.Location==="" || this.state.Filter.Location.toLowerCase()===jobDetail.Location.toLowerCase()))
                        return (
                            <React.Fragment key={jobDetail.id}>
                                <JobCard jobDetail={jobDetail} changeStatus={(id, status) => this.changeStatus(id, status)} />
                                <br />
                            </React.Fragment>
                        );
                    }): 
                    <div className={classes.NoRecord}>
                        <div className={classes.NoRecordHighlight}>No results</div>
                        <div className={classes.NoRecordMessage}>Sorry there are no results for this search, please try another phrase.</div>
                    </div>
                    }
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