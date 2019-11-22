import React, { Component } from 'react';
import EmpJobCard, { EmpAppCard } from './EmpJobCard';
import apiURL from '../../../config';
import { Row } from 'react-bootstrap';

import Axios from 'axios';


//This component is the employer' posted job view (individual)
// An employer can view all the applicants that have applied under a particular job posted.

//EmpJobCard is ready to be deployed.

class EmpJobView extends Component {
    constructor(props) {
        super()
        this.props = props;

        this.state = {
            appList: [],
            jobDetail: {},
            error: false
        }
        this.employername = localStorage.getItem('username')
    }

    //link will return an array of applicants (JSON Notation)

    // getApplicants = (jobID) => {
    //     console.log("JOB ID :" + jobID)
    //     const localhost = `http://192.168.43.1:3001/employer/jobview/${jobID}`
    //     const url = apiURL + 'employer/jobview/' + { jobID }

    //     fetch(localhost)
    //         .then(response => response.json())
    //         .then(data => {
    //             this.setState({ appList: data })
    //             console.log(`total applicants : ${this.state.appList.length}`)
    //         })

    //         .catch(error => {
    //             console.log(`Error at getApplicants : ${error}`)
    //             this.setState({ error: true })
    //         })
    // }

    // fetch  applicants
    componentDidMount() {
        const { jobid } = this.props.match.params;
        console.log("JOB DETAILS")
        //Get Job data
        Axios.get(`${apiURL}employer/getjobinfo/${jobid}`)
            .then(response => {
                console.log(jobid, response.data);
                let temp = {
                    title: response.data[0]['title'],
                    jobid: response.data[0]['id'],
                    companyName: response.data[0]['empid'],
                    reqSkills: response.data[0]['requiredskills'],
                    joblocation: response.data[0]['location'],
                    jobindustry: response.data[0]['industry'],
                    dateposted: response.data[0]['dateposted'],
                    jobdescription: response.data[0]['description'],
                    yearsofexperience: response.data[0]['yearsofexperience'],
                    companyName: response.data[0]['companyname']
                };
                console.log(temp);
                this.setState({ jobDetail: temp });
                // editJobHandler={this.props.editJobHandler}
            })
            .catch(error => {
                console.log("error getting job details");
            })

        //Get Applicant data
        Axios.get(`${apiURL}employer/jobview/${jobid}`)
            .then(response => {
                console.log(response.data);
                this.setState({ appList: response.data })
            })
            .catch(error => {
                console.log(`Error at getApplicants : ${error}`)
                this.setState({ error: true })
            })
        //this.getApplicants(jobID)
    }

    applicantContent = () => {
        console.log(this.state.appList)
        // Loading
        if (this.state.appList.length === 0 && !this.state.error) {
            return (
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }
        else if (this.state.appList.length > 0 && !this.state.error) {

            return (
                this.state.appList.map((applicant) => {
                    // job.dateposted = job.dateposted.substr(0,10)
                    console.log(applicant)
                    return (
                        <Row>
                            <EmpAppCard appID={applicant.id} appName={applicant.firstname.concat(" ", applicant.lastname)} appSkills={applicant.skills} appPhone={applicant.phone} appEmail={applicant.email} jobid={this.props.match.params.jobid} />
                        </Row>

                    )
                })
            )
        }
        else return <div>Error</div>
    }

    render() {
        // console.log(this.state.jobDetail)
        document.body.style =
            'background: linear-gradient(to right, #0f2027, #203a43, #2c5364);';
        return (
            <div>
                <Row>
                    <EmpJobCard
                        jobDetail={this.state.jobDetail}
                    >
                    </EmpJobCard>
                </Row>
                <br />
                <this.applicantContent />
            </div>
        )
    };


}

export default EmpJobView;

