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
import { Card, Button, Col, Row, Alert } from 'react-bootstrap';
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
            error: false
        }
    }

    //gets all the education of the applicant
    getEducation = (appID) => {
        //unconfirmed link
        const localhost = `http://localhost:3001/employer/jobview/appEdu/${appID}`
        const url = apiURL + 'employer/jobview/appEdu' + { appID }

        fetch(localhost)
            .then(response => response.json())
            .then(data => {
                this.setState({ educationList: data })
                console.log(`Number of education : ${this.state.educationList.length}`)
            })

            .catch(error => {
                console.log(`Error at getEducation : ${error}`)
                this.setState({ error: true })
            })
    }

    //gets all the job experience of the applicant
    getJobExp = (appID) => {
        //unconfirmed link
        const localhost = `http://localhost:3001/employer/jobview/appjobexp/${appID}`
        const url = apiURL + 'employer/jobview/appjobexp' + { appID }

        fetch(localhost)
            .then(response => response.json())
            .then(data => {
                this.setState({ jobExpList: data })
                console.log(`Number of education : ${this.state.jobExpList.length}`)
            })

            .catch(error => {
                console.log(`Error at getJobExp : ${error}`)
                this.setState({ error: true })
            })
    }

    //gets all the awards of the applicant
    getAwards = (appID) => {
        //unconfirmed link
        const localhost = `http://localhost:3001/employer/jobview/appawards/${appID}`
        const url = apiURL + 'employer/jobview/appawards' + { appID }

        fetch(localhost)
            .then(response => response.json())
            .then(data => {
                this.setState({ awardsList: data })
                console.log(`Number of awards : ${this.state.awardsList.length}`)
            })

            .catch(error => {
                console.log(`Error at getAwards : ${error}`)
                this.setState({ error: true })
            })
    }

    //gets all the awards of the applicant
    getCerts = (appID) => {
        //unconfirmed link
        const localhost = `http://localhost:3001/employer/jobview/appcerts/${appID}`
        const url = apiURL + 'employer/jobview/appcerts' + { appID }

        fetch(localhost)
            .then(response => response.json())
            .then(data => {
                this.setState({ certsList: data })
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
        const localhost = `http://localhost:3001/employer/jobview/appprojects/${appID}`
        const url = apiURL + 'employer/jobview/appprojects' + { appID }

        fetch(localhost)
            .then(response => response.json())
            .then(data => {
                this.setState({ projectsList: data })
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
                this.state.educationList.map((education) => {
                    return (
                        <li className="cardli">
                            {education.degree} &nbsp; {education.fieldofstudy} ({education.major})
                            <br />
                            {education.university} | {education.gpa}
                        </li>

                    )
                })
            )
        }
        else return <div>Error</div>
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
                        <li className="cardli">
                            <Row>
                                <Col md={3}>
                                    {jobExp.mode}
                                </Col>
                                <Col md={3}>
                                    {jobExp.postion}
                                </Col>
                            </Row>
                            <Row>
                                {jobExp.company}
                            </Row>

                            <Row>
                                {jobExp.description}
                            </Row>

                        </li>

                    )
                })
            )
        }
        else return <div>Error</div>
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
                        <li className="cardli">
                            <Row>
                                {award.awardname}
                            </Row>
                            <Row>
                                {award.awarddate}
                            </Row>
                        </li>

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
                        <li className="cardli">
                            <Row>
                                {cert.certificatename}
                            </Row>
                            <Row>
                                Issued by: {cert.issuedby} <br />
                                Issued on: {cert.issueddate}
                                Valid till: {cert.validuntil}
                            </Row>
                        </li>

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
                        <li className="cardli">
                            <Row>
                                {project.title}
                            </Row>
                            <Row>
                                {project.description}
                            </Row>
                            <Row>
                                {project.link}
                            </Row>
                        </li>

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
    shortlist = (appId, appName) => {
        this.showAlert();

        return (
            <div>

            </div>
        )
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
                            <this.educationContent />
                            <ul className="cardul">

                            </ul>
                        </Card.Text>

                        <Card.Text>
                            <i class="fas fa-briefcase"></i>
                            &nbsp; <em>Job Experience</em>
                            <ul className="cardul">
                                <this.jobExpContent />
                            </ul>
                        </Card.Text>

                        <Card.Text>
                            <i class="fas fa-medal"></i>
                            &nbsp; <em>Awards Obtained</em>
                            <ul className="cardul">
                                <this.awardsContent />
                            </ul>
                        </Card.Text>

                        <Card.Text>
                            <i class="fas fa-stamp"></i>
                            &nbsp; <em>Professional Certifications Obtained</em>
                            <ul className="cardul">
                                <this.certsContent />
                            </ul>
                        </Card.Text>

                        <Card.Text>
                            <i class="fas fa-folder-open"></i>
                            &nbsp; <em>Featured Projects</em>
                            <ul className="cardul">
                                <this.projectsContent />
                            </ul>
                        </Card.Text>

                        {/*<Card.Text>{props.appSkills}</Card.Text>*/}
                        <Card.Text><i class="fas fa-phone"></i> &nbsp;{this.props.appPhone}</Card.Text>
                        <Card.Text><i class="far fa-envelope"></i> &nbsp;{this.props.appEmail}</Card.Text>
                        {/* <Card.Text>
                        <small className="text-muted">
                            Applied {this.props.dateapplied} 
                        </small>
                    
                    </Card.Text> */}

                        <Button variant="success" onClick={this.shortlist(123, 456)} >Shortlist</Button>



                        {/* onClick={this.shortlist("asjdkasj", "Juna")} */}
                    </Card.Body>
                </Card>
                </div>
        )
    }
}

export { EmpAppCard };
export default EmpJobCard;
