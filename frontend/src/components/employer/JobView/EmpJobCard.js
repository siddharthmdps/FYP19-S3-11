//These are 2 components used by EmpJobView.js -> EmpJobCard and EmpAppCard

// EmpJobCard is the card that displays details about the job posted.


import React, { Component } from 'react';
import { Card, Col, Row, Alert } from 'react-bootstrap';
import '../ProfileView/Card.css';
import apiURL from '../../../config'
import classes from './EmpJobCard.module.css';
import Button1 from '../../common_assets/Button1/Button1';
import { Link } from 'react-router-dom'

const EmpJobCard = (props) => {
    // const editHandler = () =>{

    // }
    return (
        <div className="col-sm-8 mx-auto">
            <Card className={classes.Card}>
                <Card.Header>
                    <Card.Title>
                        <Row>
                            <Col sm={9}>{props.jobDetail.title}</Col>
                            <Col sm={3}>
                                <Link to={`/employer/editjob/${props.jobDetail.jobid}`}>
                                    <Button1 >
                                        Edit&nbsp;
                                <i class="fas fa-edit"></i>
                                    </Button1>
                                </Link>
                            </Col>
                        </Row>

                    </Card.Title>
                </Card.Header>

                <Card.Body>
                    {/* {props.jobDetail.companyName} */}
                    {/* localStorage.getItem('username') */}
                    <Card.Subtitle>{props.jobDetail.companyName}</Card.Subtitle>
                    <br />
                    <Card.Text>
                        <Row>
                            <Col sm={4}>
                                <i className="fas fa-globe-asia"> </i>
                                &nbsp;
                            {props.jobDetail.joblocation}
                            </Col>
                            <Col sm={4}>
                                <i className="fas fa-industry"></i>
                                &nbsp;
                        {props.jobDetail.jobindustry}
                            </Col>
                            <Col sm={4}>
                                <i className="fas fa-briefcase" />
                                &nbsp;
                        {props.jobDetail.yearsofexperience}
                            </Col>
                        </Row>
                    </Card.Text>

                    <Card.Text>
                        <i className="fas fa-tasks"></i>
                        <em>&nbsp; Description<br /></em>
                        {props.jobDetail.jobdescription}
                    </Card.Text>

                    <Card.Text>
                        <small className="text-muted">
                            Last updated  {props.jobDetail.dateposted}
                        </small>

                    </Card.Text>

                </Card.Body>

            </Card>
        </div>
    )
};

class EmpAppCard extends Component {
    constructor(props) {
        super()
        this.props = props;
        // console.log(props.appID)

        this.state = {
            appId: props.appId,
            educationList: [],
            jobExpList: [],
            awardsList: [],
            certsList: [],
            projectsList: [],
            showAlert: false,
            error: false,
            isLoading: true
        }
    }

    //gets all the education of the applicant
    getEducation = (appID) => {
        const localhost = `http://localhost:3001/student/studenteducation/${appID}`
        const url = `${apiURL}student/studenteducation/${appID}`
        // const url = apiURL + 'student/studenteducation/' + { appID }

        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({ educationList: data.Education })
                // console.log(`Number of education : ${this.state.educationList.length}`)
            })

            .catch(error => {
                this.setState({ error: true })
            })
    }


    //gets all the job experience of the applicant
    getJobExp = (appID) => {
        const localhost = `http://localhost:3001/student/studentworkexp/${appID}`
        const url = `${apiURL}student/studentworkexp/${appID}`
        // const url = apiURL + 'student/studentworkexp/' + { appID }

        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({ jobExpList: data.WorkExp })
                // console.log(`Number of job experiences : ${this.state.jobExpList.length}`)
            })

            .catch(error => {
                console.log(`Error at getJobExp : ${error}`)
                this.setState({ error: true })
            })

    }

    //gets all the awards of the applicant
    getAwards = (appID) => {
        const localhost = `http://localhost:3001/student/studentawards/${appID}`
        const url = `${apiURL}student/studentawards/${appID}`
        // const url = apiURL + 'student/studentawards/' + { appID }

        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({ awardsList: data.Awards })
                // console.log(`Number of awards : ${this.state.awardsList.length}`)
            })

            .catch(error => {
                console.log(`Error at getAwards : ${error}`)
                this.setState({ error: true })
            })
    }

    //gets all the awards of the applicant
    getCerts = (appID) => {
        const localhost = `http://localhost:3001/student/studentcertificate/${appID}`
        const url = `${apiURL}student/studentcertificate/${appID}`
        // const url = apiURL + 'student/studentcertificate/' + { appID }


        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({ certsList: data.Certification })
                console.log(`Number of certs : ${this.state.certsList.length}`)
            })

            .catch(error => {
                console.log(`Error at getCerts : ${error}`)
                this.setState({ error: true })
            })
    }

    //gets all the awards of the applicant
    getProjects = (appID) => {
        const localhost = `http://localhost:3001/student/studentproject/${appID}`
        const url = `${apiURL}student/studentproject/${appID}`
        // const url = apiURL + 'student/studentproject/' + { appID }

        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({ projectsList: data.Projects })
                // console.log(`Number of projects : ${this.state.projectsList.length}`)
            })

            .catch(error => {
                console.log(`Error at getProjects : ${error}`)
                this.setState({ error: true })
            })
    }

    handleUndefined(item) {
        if (item === undefined)
            return []
        return item
    }


    componentDidMount() {
        // console.log(this.props);
        this.getEducation(this.props.appID)
        this.getJobExp(this.props.appID)
        this.getAwards(this.props.appID)
        this.getCerts(this.props.appID)
        this.getProjects(this.props.appID)
        this.setState({ isLoading: false })
        // }
    }


    educationContent = () => {
        let eduList = this.handleUndefined(this.state.educationList)
        if (this.state.isLoading) {
            return (
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }

        if (!eduList.length) {
            return <div>No Records found</div>
        }

        return (
            eduList.map(education => (
                <p className={classes.detail}>{education.Degree} in {education.FieldOfStudy} ({education.Major}) - {education.GPA}</p>
            ))
        );

    }

    jobExpContent = () => {
        let jobList = this.handleUndefined(this.state.jobExpList)

        if (this.state.isLoading) {
            return (
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }

        if (!jobList.length) {
            return (
                <div>No records found</div>

            )
        }
        return (
            jobList.map((jobExp) => {
                return (
                    <p className={classes.detail}>{jobExp.Position} at {jobExp.Company} ({jobExp.StartDate} - {jobExp.EndDate}) </p>
                )
            })
        )



    }

    awardsContent = () => {
        let awardsList = this.handleUndefined(this.state.awardsList)
        // console.log(awardsList)

        // Loading
        if (this.state.isLoading) {
            return (
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }

        if (!awardsList.length) {
            return (
                <div>No records found</div>

            )
        }

        return (
            this.state.awardsList.map((award) => {
                return (
                    <p className={classes.detail}>{award.Award} - {award.Date}</p>
                )
            })
        )


    }

    certsContent = () => {
        let certsList = this.handleUndefined(this.state.certsList)

        // Loading
        if (this.state.isLoading) {
            return (
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }

        if (!certsList.length) {
            return (
                <div>No records found</div>

            )
        }


        return (
            this.state.certsList.map((cert) => {
                return (
                    <p className={classes.detail}>{cert.Name} - {cert.IssuedBy}</p>
                )
            })
        )
    }



    projectsContent = () => {
        let projectsList = this.handleUndefined(this.state.projectsList)
        // Loading
        if (this.state.isLoading) {
            return (
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }

        if (!projectsList.length) {
            return (
                <div>No records found</div>

            )
        }


        return (
            projectsList.map((project) => {
                return (
                    <p className={classes.detail}>{project.Title} ({project.Status})</p>
                )
            })
        )

    }

    hideAlert = () => {
        this.setState({ showAlert: false });
    }

    // showAlert = (appName) => {
    //     this.setState({ showAlert: true });
    //     return (
    //         <Alert show={this.state.showAlert} variant="success" onClose={() => { this.hideAlert() }} dismissible>
    //             {appName} has been successfully shortlisted.
    //       </Alert>
    //     )
    // }

    shortlist = (appId, jobId) => {
        console.log(appId, jobId)
        //to update shortlist link
        const application = {
            jobid: jobId,
            appid: appId
        }

        // const url = apiURL + `employer/shortlist/`
        // const localhost = `${apiURL}employer/shortlist/${appId}`'http://localhost:3001/employer/shortlist/'

        const url = `${apiURL}employer/shortlist/${appId}`

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(application)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.message)
                if (data.message === 'shortlisted') {
                    console.log('Applicant has been shortlisted!')
                    alert('Applicant has been shortlisted!')
                    // document.location.reload(true)
                }
            })
            .catch(error => console.log(error))
        // alert('Applicant has been shortlisted!')
        // document.location.reload(true)
    }

    hire = (appId, jobId) => {
        console.log(appId, jobId)
        //to update shortlist link
        const application = {
            jobid: jobId,
            appid: appId
        }

        // const url = apiURL + `employer/shortlist/`
        // const localhost = `${apiURL}employer/shortlist/${appId}`'http://localhost:3001/employer/shortlist/'

        const url = `${apiURL}employer/hire/${appId}`

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(application)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.message)
                if (data.message === 'status updated') {
                    console.log('Applicant has been hired!')
                    alert('Applicant has been hired!')
                    // document.location.reload(true)
                }
            })
            .catch(error => console.log(error))
    }

    handleStudentClicked = (event) => {
        console.log(event)
        // if (studentId === undefined)
        //     studentId = 0

        // let studentUrl = `/student/viewprofile/${studentId}`
        // this.props.history.push(studentUrl)
    }


    render() {
        console.log(this.props)
        return (
            <div className="col-sm-8 mx-auto" style={{ paddingBottom: "10px" }}>
                <Card className={classes.Card}>
                    <Card.Header>
                        <Row>
                            <Col sm={9}>
                                <Card.Title>{this.props.appName}</Card.Title>
                            </Col>
                            <Col sm={3}>
                                {/* /student/viewprofile/${studentId} */}

                                <Link to={`/student/viewprofile/${this.props.appID}`}>
                                    <Button1 >View Profile<i class="fas fa-file-download"></i></Button1>
                                </Link>
                            </Col>
                        </Row>
                    </Card.Header>

                    <Card.Body>
                        <Card.Text>
                            <i class="fas fa-book"></i>
                            &nbsp; <em> Education</em>
                            <br />
                            {this.educationContent()}
                        </Card.Text>

                        <Card.Text>
                            <i class="fas fa-briefcase"></i>
                            &nbsp; <em>Job Experience</em>
                            {this.jobExpContent()}
                        </Card.Text>

                        <Card.Text>
                            <i class="fas fa-medal"></i>
                            &nbsp; <em>Awards Obtained</em>
                            {this.awardsContent()}
                        </Card.Text>

                        <Card.Text>
                            <i class="fas fa-stamp"></i>
                            &nbsp; <em>Professional Certifications Obtained</em>
                            <this.certsContent />
                        </Card.Text>

                        <Card.Text>
                            <i class="fas fa-folder-open"></i>
                            &nbsp; <em>Featured Projects</em>
                            {this.projectsContent()}
                        </Card.Text>

                        {/* <Card.Text>
                            <small className="text-muted">
                                Applied {this.props.dateapplied}
                            </small>

                        </Card.Text> */}

                        <Button1 click={() => { this.shortlist(this.props.appID, this.props.jobid) }} >Shortlist</Button1>
                        <Button1 click={() => { this.hire(this.props.appID, this.props.jobId) }} >Hire </Button1>
                    </Card.Body>
                </Card>
            </div >
        )
    }
}

export { EmpAppCard };
export default EmpJobCard;
