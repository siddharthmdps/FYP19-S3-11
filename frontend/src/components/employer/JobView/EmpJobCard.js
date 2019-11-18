//These are 2 components used by EmpJobView.js -> EmpJobCard and EmpAppCard

// EmpJobCard is the card that displays details about the job posted.
// It accepts parameters in the form of props such as title, companyName, joblocation, jobindustry and reqSkills.
// Job description is to be passed in as children.


import React, { Component } from 'react';
import { Card, Button, Col, Row, Alert, Table } from 'react-bootstrap';
import '../ProfileView/Card.css';
import apiURL from '../../../config'
import classes from './EmpJobCard.module.css';
import Button1 from '../../common_assets/Button1/Button1';

// need to handle if empty.s

//links to be disccused with backend--> can be changed.
const EmpJobCard = (props) => {
    return (
        <div className="col-sm-8 mx-auto">
            <Card className={classes.Card}>
                <Card.Header>
                    <Card.Title>
                        <Row>
                            <Col sm={9}>{props.jobDetail.title}</Col>
                            <Col sm={3}>
                                <Button1 onClick={props.editJobHandler}>
                                    Edit&nbsp;
                                <i class="fas fa-edit"></i>
                                </Button1>
                            </Col>
                        </Row>

                    </Card.Title>
                </Card.Header>

                <Card.Body>

                    <Card.Subtitle>{props.jobDetail.companyName}</Card.Subtitle>
                    <br />
                    <Card.Text>
                        <Row>
                            <Col sm={6}>
                                <i className="fas fa-globe-asia"> </i>
                                &nbsp;
                            {props.jobDetail.joblocation}
                            </Col>
                            <Col sm={6}>
                                <i className="fas fa-industry"></i>
                                &nbsp;
                        {props.jobDetail.jobindustry}
                            </Col>
                        </Row>
                    </Card.Text>

                    <Card.Text> {props.children}</Card.Text>
                    <Card.Text>
                        <i className="fas fa-tasks"></i>
                        <em>&nbsp; Skills Required <br /></em>
                        {props.jobDetail.reqSkills}
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
        const url = apiURL + 'student/studenteducation/' + { appID }

        fetch(localhost)
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
        const url = apiURL + 'student/studentworkexp/' + { appID }

        fetch(localhost)
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
        const url = apiURL + 'student/studentawards/' + { appID }

        fetch(localhost)
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
        const url = apiURL + 'student/studentcertificate/' + { appID }


        fetch(localhost)
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
        //unconfirmed link
        const localhost = `http://localhost:3001/student/studentproject/${appID}`
        const url = apiURL + 'student/studentproject/' + { appID }

        fetch(localhost)
            .then(response => response.json())
            .then(data => {
                this.setState({ projectsList: data.Projects })
                // console.log(`Number of projects : ${this.state.projectsList.length}`)
            })

            .catch(error => {
                console.log(`Error at getProjects : ${error}`)
                this.setState({ error: true })
            })

        // if (`${this.state.projectsList.length}<1`) {
        //     this.setState({ noProjects: true })
        // }
    }

    handleUndefined(item) {
        if (item === undefined)
            return []
        return item
    }

    componentDidMount() {
        // if (!this.state.appId) {
        //     this.setState({ error: true })
        // }
        // if (this.state.appId) {
            console.log(this.props);
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
                <tr>
                    <td>{education.FieldOfStudy}</td>
                    <td>{education.Major}</td>
                    <td>{education.University}</td>
                    <td>{education.GPA}</td>
                    <td>{education.Mode}</td>
                </tr>
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
                    <tr>
                        <td>{jobExp.Position}</td>
                        <td>{jobExp.Mode}</td>
                        <td>{jobExp.Company}</td>
                        <td>{jobExp.Industry}</td>
                        <td>{jobExp.Description}</td>
                        <td>{jobExp.StartDate}</td>
                        <td>{jobExp.EndDate}</td>
                        <td>{jobExp.AnnualSalary}</td>
                    </tr>

                )
            })
        )



    }

    awardsContent = () => {
        let awardsList = this.handleUndefined(this.awardsList)

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
                    <tr>
                        <td>{award.Award}</td>
                        <td>{award.Description}</td>
                        <td>{award.Date}</td>
                    </tr>
                )
            })
        )


    }

    certsContent = () => {
        let certsList = this.handleUndefined(this.certsList)

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
                    <tr>
                        <td>{cert.Name}</td>
                        <td>{cert.IssuedBy}</td>
                        <td>{cert.IssuedDate}</td>
                        <td>{cert.ValidUntil}</td>
                    </tr>
                )
            })
        )
    }



    projectsContent = () => {
        if (!this.state.noProjects) {
            // Loading
            if (this.state.projectsList.length === 0 && !this.state.error) {
                return (
                    <div class="d-flex justify-content-center">
                        <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                )
            }
            else if (this.state.projectsList.length > 0 && !this.state.error) {
                return (
                    this.state.projectsList.map((project) => {
                        return (
                            <tr>
                                <td>{project.Title}</td>
                                <td>{project.Status}</td>
                                <td>{project.Description}</td>
                                <td><a href={project.Link} /></td>
                            </tr>
                        )
                    })
                )
            }
            else return <div> Error</div>
        }
        else return <div>No projects content found</div>
    }

    hideAlert = () => {
        this.setState({ showAlert: false });
    }

    showAlert = (appName) => {
        this.setState({ showAlert: true });
        return (
            <Alert show={this.state.showAlert} variant="success" onClose={() => { this.hideAlert() }} dismissible>
                {appName} has been successfully shortlisted.
          </Alert>
        )
    }

    shortlist = (appId, jobId) => {
        //to update shortlist link
        const application = {
            jobid: jobId,
            appid: appId
        }

        const url = apiURL + `employer/shortlist/`
        const localhost = 'http://localhost:3001/employer/shortlist/'

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(application)
        })
            .then(res => res.json())
            .then(data => {
                if (data.message === 'success') {
                    alert('Applicant has been shortlisted!')
                    document.location.reload(true)
                }
            })
            .catch(error => console.log(error))
        // alert('Applicant has been shortlisted!')
        // document.location.reload(true)
    }


    render() {
        return (
            <div className="col-sm-8 mx-auto" style={{ paddingBottom: "10px" }}>
                <Card className={classes.Card}>
                    <Card.Header>
                        <Row>
                            <Col sm={9}>
                                <Card.Title>{this.props.appName}</Card.Title>
                            </Col>
                            <Col sm={3}>
                                <Button1 >Download <i class="fas fa-file-download"></i></Button1>
                            </Col>
                        </Row>
                    </Card.Header>

                    <Card.Body>
                        <Card.Text>
                            <i class="fas fa-book"></i>
                            &nbsp; <em> Education</em>
                            <br />
                            <Row>
                                <Col sm={12}>
                                    <Table striped bordered hover variant="light">
                                        <thead>
                                            <tr>
                                                <th>Degree</th>
                                                <th>Major</th>
                                                <th>University</th>
                                                <th>GPA</th>
                                                <th>Mode</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.educationContent()}
                                        </tbody>
                                    </Table>
                                </Col>

                            </Row>
                        </Card.Text>

                        <Card.Text>
                            <i class="fas fa-briefcase"></i>
                            &nbsp; <em>Job Experience</em>
                            <Row>
                                <Col sm={12}>
                                    <Table striped bordered hover variant="light">
                                        <thead>
                                            <tr>
                                                <th>Mode</th>
                                                <th>Company</th>
                                                <th>Industry</th>
                                                <th>Job Description</th>
                                                <th>Start Date</th>
                                                <th>End Date</th>
                                                <th>Annual Salary</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.jobExpContent()}
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </Card.Text>

                        <Card.Text>
                            <i class="fas fa-medal"></i>
                            &nbsp; <em>Awards Obtained</em>
                            <Row>
                                <Col sm={12}>
                                    <Table striped bordered hover variant="light">
                                        <thead>
                                            <tr>
                                                <th>Title of Award</th>
                                                <th>Description</th>
                                                <th>Date Awarded</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.awardsContent()}
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </Card.Text>
                        {/*
                        <Card.Text>
                            <i class="fas fa-stamp"></i>
                            &nbsp; <em>Professional Certifications Obtained</em>
                            <Row>
                                <Col sm={12}>
                                    <Table striped bordered hover variant="light">
                                        <thead>
                                            <tr>
                                                <th>Name of Certification</th>
                                                <th>Issued By</th>
                                                <th>Issued on</th>
                                                <th>Valid Until</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <this.certsContent />
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </Card.Text>

                        <Card.Text>
                            <i class="fas fa-folder-open"></i>
                            &nbsp; <em>Featured Projects</em>
                            <Row>
                                <Col sm={12}>
                                    <Table striped bordered hover variant="light">
                                        <thead>
                                            <tr>
                                                <th>Project Title</th>
                                                <th>Project Status</th>
                                                <th>Description</th>
                                                <th>Project Link</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <this.projectsContent />
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </Card.Text>

                        <Card.Text><i class="fas fa-phone"></i> &nbsp;{this.props.appPhone}</Card.Text>
                        <Card.Text><i class="far fa-envelope"></i> &nbsp;{this.props.appEmail}</Card.Text>
                        {/* <Card.Text>
                        <small className="text-muted">
                            Applied {this.props.dateapplied} 
                        </small>
                    
                    </Card.Text> */}
    
                        <Button1 onClick={() => { this.shortlist(123, 456) }} >Shortlist</Button1>
                    </Card.Body>
                </Card>
            </div >
        )
    }
}

export { EmpAppCard };
export default EmpJobCard;
