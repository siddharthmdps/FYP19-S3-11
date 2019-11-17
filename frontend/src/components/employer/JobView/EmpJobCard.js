//These are 2 components used by EmpJobView.js -> EmpJobCard and EmpAppCard

// EmpJobCard is the card that displays details about the job posted.
// It accepts parameters in the form of props such as title, companyName, joblocation, jobindustry and reqSkills.
// Job description is to be passed in as children.

//EmpAppCard is card that briefly summarises details about each applicant.
//It accepts parameters in the form of props such as 
/*appName,appSkills,appContact,degree,university, gpa, position,company,
awardname, awarddate, certname, certbody, projecttitle and dateapplied
*/

import React, { Component } from 'react';
import { Card, Button, Col, Row, Alert, Table } from 'react-bootstrap';
import '../ProfileView/Card.css';
import apiURL from '../../../config'
//import './EmpCard.css'

// need to handle if empty.s

//links to be disccused with backend--> can be changed.
const EmpJobCard = (props) => {
    return (
        <div className="col-sm-8 mx-auto">
            <Card>
                <Card.Header>
                    <Card.Title>
                        <Row>
                            <Col sm={9}>{props.title}</Col>
                            <Col sm={3}>
                                <Button variant="primary" onClick={props.editJobHandler}>
                                    Edit&nbsp;
                                <i class="fas fa-edit"></i>
                                </Button>
                            </Col>
                        </Row>

                    </Card.Title>
                </Card.Header>

                <Card.Body>

                    <Card.Subtitle>{props.companyName}</Card.Subtitle>
                    <br />
                    <Card.Text>
                        <Row>
                            <Col sm={6}>
                                <i class="fas fa-globe-asia"> </i>
                                &nbsp;
                            {props.joblocation}
                            </Col>
                            <Col sm={6}>
                                <i class="fas fa-industry"></i>
                                &nbsp;
                        {props.jobindustry}
                            </Col>
                        </Row>
                    </Card.Text>

                    <Card.Text> {props.children}</Card.Text>
                    <Card.Text>
                        <i class="fas fa-tasks"></i>
                        <em>&nbsp; Skills Required <br /></em>
                        {props.reqSkills}
                    </Card.Text>

                    <Card.Text>
                        <small className="text-muted">
                            Last updated  {props.dateposted}
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

        this.state = {
            educationList: [],
            jobExpList: [],
            awardsList: [],
            certsList: [],
            projectsList: [],
            showAlert: false,
            error: false,
            noEducation: false,
            noJobExp: false,
            noAwards: false,
            noCerts: false,
            noProjects: false
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
                console.log(`Number of education : ${this.state.educationList.length}`)
            })

            .catch(error => {
                console.log(`Error at getEducation : ${error}`)
                this.setState({ error: true })
            })

        if (`${this.state.educationList.length}<1`) {
            this.setState({ noEducation: true })
        }
    }

    //gets all the job experience of the applicant
    getJobExp = (appID) => {
        const localhost = `http://localhost:3001/student/studentworkexp/${appID}`
        const url = apiURL + 'student/studentworkexp/' + { appID }

        fetch(localhost)
            .then(response => response.json())
            .then(data => {
                this.setState({ jobExpList: data.WorkExp })
                console.log(`Number of job experiences : ${this.state.jobExpList.length}`)
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
                console.log(`Number of awards : ${this.state.awardsList.length}`)
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
                console.log(`Number of projects : ${this.state.projectsList.length}`)
            })

            .catch(error => {
                console.log(`Error at getProjects : ${error}`)
                this.setState({ error: true })
            })
    }

    componentDidMount() {
        console.log(this.props.appID)
        this.getEducation(this.props.appID)
        this.getJobExp(this.props.appID)
        this.getAwards(this.props.appID)
        this.getCerts(this.props.appID)
        this.getProjects(this.props.appID)
    }

    educationContent = () => {
        console.log(this.state.educationList)
        // Loading
        if (this.state.educationList.length === 0 && !this.state.error) {
            return (
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }
        else if (this.state.educationList.length > 0 && !this.state.error) {
            return (
                this.state.educationList.map(education => (
                    <tr>
                        <td>{education.FieldOfStudy}</td>
                        <td>{education.Major}</td>
                        <td>{education.University}</td>
                        <td>{education.GPA}</td>
                        <td>{education.Mode}</td>
                    </tr>
                )))
        }

        else return <div>No Education Records found</div>
    }

    jobExpContent = () => {
        console.log(this.state.jobExpList)
        // Loading
        if (this.state.jobExpList.length === 0 && !this.state.error) {
            return (
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }
        else if (this.state.jobExpList.length > 0 && !this.state.error) {
            return (
                this.state.jobExpList.map((jobExp) => {
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
        else return <div></div>
    }

    awardsContent = () => {
        console.log(this.state.awardsList)
        // Loading
        if (this.state.awardsList.length === 0 && !this.state.error) {
            return (
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }
        else if (this.state.awardsList.length > 0 && !this.state.error) {
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
        else return <div>Error</div>
    }

    certsContent = () => {
        console.log(this.state.certsList)
        // Loading
        if (this.state.certsList.length === 0 && !this.state.error) {
            return (
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }
        else if (this.state.certsList.length > 0 && !this.state.error) {
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
        else return <div>Error</div>
    }

    projectsContent = () => {
        console.log(this.state.projectsList)
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
        else return <div>Error</div>
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
        const application = {
            jobid: jobId,
            appid: appId
        }

        const url = apiURL + "employer/shortlist"
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
                <Card >
                    <Card.Header>
                        <Row>
                            <Col sm={9}>
                                <Card.Title>{this.props.appName}</Card.Title>
                            </Col>
                            <Col sm={3}>
                                <Button variant="primary"><i class="fas fa-file-download"></i></Button>
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
                                            <this.educationContent />
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
                                            <this.jobExpContent />
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
                                            <this.awardsContent />
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </Card.Text>

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
                        <Button variant="success" onClick={this.shortlist(123, 456)} >Shortlist</Button>


                        <Button variant="success" onClick={() => { this.shortlist(123, 456) }} >Shortlist</Button>
                    </Card.Body>
                </Card>
            </div >
        )
    }
}

export { EmpAppCard };
export default EmpJobCard;
