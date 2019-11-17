//import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react'
// Employer exclusive components
import EmpNavbar from '../EmpNavbar'
import PostJob from '../PostJob'
import LeftSide from '../Components/LeftSide/LeftSide'
import EmpFeed from '../EmpFeed'
import NewEmpFeed from '../Components/EmpFeed/NewEmpFeed';
//import EmpJobView from './JobView/EmpJobView'
import EditJob from '../JobEdit/EditJob'
import { Container, Card, Form, Col, Row } from 'react-bootstrap';

import classes from './Employer.module.css'


const herokuURL = require('../../../config')



class Employer extends Component {
    constructor() {
        super()
        this.state = {
            id: localStorage.getItem('id'),
            username: localStorage.getItem('username'),
            companyName: null,
            companyPhone: null,
            companyEmail: null,
            companyAddress: null,
            companyDescription: null,
            industry: null,
            numOfJobs: null,
            numOfApplicants: null

        }

    }



    updateNumOfJobs = (numJob) => {
        this.setState({ numOfJobs: numJob })
        //console.log(`num of jobs = ${this.state.numOfJobs}`)
    }

    viewJobHandler = (job) => {
        console.log(`triggered by`, job)

        //declaring global variable job details
        window.jobDetails = {
            jobid: job.id,
            jobpostdate: job.dateposted,
            jobdescription: job.description,
            jobindustry: job.industry,
            joblocation: job.location,
            jobrequiredskills: job.requiredskills,
            jobtitle: job.title
        };
    }



    // mainContent = () => {
    //     const contentID = this.state.mainContent
    //     switch (contentID) {
    //         case 'viewprofile':
    //             return <EmpProfileView companyName={this.state.companyName} companyDescription={this.state.companyDescription} industry={this.state.industry} companyEmail={this.state.companyEmail} industry={this.state.industry} />
    //         case 'editprofile':
    //             return <EmpProfileEdit empID={this.state.id} companyName={this.state.companyName}
    //                 companyPhone={this.state.companyPhone} companyAddress={this.state.companyAddress}
    //                 industry={this.state.industry} companyDescription={this.state.companyDescription} />
    //         case 'about':
    //             return <About />
    //         case 'blog':
    //             return <h3>blog</h3>
    //         case 'postjob':
    //             return <PostJob />
    //         // case 'viewjob':
    //         //     return <EmpJobView
    //         //         jobID={window.jobDetails.jobid}
    //         //         jobtitle={window.jobDetails.jobtitle}
    //         //         jobskills={window.jobDetails.jobrequiredskills}
    //         //         jobdescription={window.jobDetails.jobdescription}
    //         //         joblocation={window.jobDetails.joblocation}
    //         //         jobindustry={window.jobDetails.jobindustry}
    //         //         dateposted={window.jobDetails.jobpostdate}
    //         //         editJobHandler={this.editJobHandler}

    //         //     />

    //         case 'editjob':
    //             return <EditJob
    //                 jobID={window.jobDetails.jobid}
    //                 jobtitle={window.jobDetails.jobtitle}
    //                 jobskills={window.jobDetails.jobrequiredskills}
    //                 jobdescription={window.jobDetails.jobdescription}
    //                 joblocation={window.jobDetails.joblocation}
    //                 jobindustry={window.jobDetails.jobindustry}
    //                 dateposted={window.jobDetails.jobpostdate}
    //                 mainPageHandler={this.mainPageHandler}
    //             />


    //         case '*': return <h3>{contentID} not found</h3>
    //     }
    // }

    fetchEmployerDetails = () => {
        const apiURL = `${herokuURL}employer/employerinfo/${this.state.id}`
        const localhost = `http://localhost:3001/employer/employerinfo/${this.state.id}`
        console.log("EMPIDv1: " + this.state.id)
        fetch(localhost, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => {
                console.log('response', data.body[0])
                const empInfo = data.body[0]

                this.setState({
                    companyName: empInfo.companyname,
                    companyPhone: empInfo.companyphone,
                    companyEmail: empInfo.companyemail,
                    companyAddress: empInfo.companyaddress,
                    companyDescription: empInfo.companydescription,
                    industry: empInfo.industry
                })
            }).catch(error => console.log(error))
    }


    componentDidMount() {
        this.fetchEmployerDetails()
        //console.log(this.state)
    }

    render() {
        return (
            <Container fluid className={classes.Employer}>
                <Row style={{marginRight: '1px'}}>
                    {/* <br /> */}
                    <Col md={{ span: 3 }} className={classes.LeftSide}>
                        <LeftSide companyName={this.state.companyName} numOfJobs={this.state.numOfJobs} />
                    </Col>
                    <Col md={{ span: 9, offset: 3}} className={classes.AdvertBox}>
                        {/* <EmpFeed updateNumOfJobs={this.updateNumOfJobs} viewJobHandler={this.viewJobHandler} /> */}
                        <NewEmpFeed updateNumOfJobs={this.updateNumOfJobs} viewJobHandler={this.viewJobHandler} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Employer
