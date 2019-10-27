import React, { Component } from 'react';
import classes from './Profile.module.css';
import ProfileImage from '../../Components/ProfileImage/ProfileImage';
import PersonalParticulars from '../../Components/PersonalParticulars/PersonalParticulars';
import Education from '../../Components/Education/Education';
import WorkExperience from '../../Components/WorkExperience/WorkExperience';
import JobPreference from '../../Components/JobPreference/JobPreference';
import Awards from '../../Components/Awards/Awards';
import Certification from '../../Components/Certification/Certification';
import Projects from '../../Components/Projects/Projects';
import Document from '../../Components/Document/Document';
import { Accordion, Card, Container, Col, Row, Button, Form } from 'react-bootstrap';
import ppClasses from '../../../common_assets/Validate.module.css';
import Axios from 'axios';

const PersonalParticularsShell = {
    "StudentID": 0,
    "FirstName": "",
    "MiddleName": "",
    "LastName": "",
    "Email": "",
    "Phone": "",
    "Country": "",
    "City": "",
    "CurrentAddress": "",
    "PostalCode": "",
    "Nationality": ""
}

const EducationShell = {
    "EducationID": 0,
    "University": "",
    "Degree": "",
    "FieldOfStudy": "",
    "Major": "",
    "StartDate": "",
    "EndDate": "",
    "Mode": "",
    "GPA": ""
}

const WorkExpShell = {
    "WorkExpID": 0,
    "Position": "",
    "Company": "",
    "StartDate": "",
    "EndDate": "",
    "Mode": "",
    "Industry": "",
    "AnnualSalary": 0,
    "Description": ""
}

const JobPreferenceShell = {
    "JobPreferenceID": 0,
    "Industry": "",
    "Position": "",
    "JobType": "",
    "ExpectedSalary": 0,
    "Location": "",
    "Availability": ""
}

const AwardsShell = {
    "AwardID": 0,
    "Award": "",
    "Date": "",
    "Description": ""
}

const CertificationShell = {
    "CertificateID": 0,
    "Name": "",
    "IssuedBy": "",
    "IssueDate": "",
    "ValidUntil": ""
}

const SkillsShell = {
    "SkillID": 0,
    "SkillName": ""
}

const ProjectsShell = {
    "ProjectID": 0,
    "Title": "",
    "Status": "",
    "Description": "",
    "Link": ""
}

const DocumentShell = {
    "DocumentID": 0,
    "Title": "",
    "Link": ""
}

class Profile extends Component {
    state = {
        "ProfileImage": "https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg",
        "PersonalParticulars": {},
        "Education": [],
        "WorkExp": [],
        "JobPreference": [],
        "Awards": [],
        "Certification": [],
        "Skills": [],
        "Projects": [],
        "Document": [],
        "isActive": []
    }

    changePersonalParticulars = event => {
        console.log(event.target.id);

        let tempState = this.state.PersonalParticulars;
        tempState[event.target.id] = event.target.value;

        this.setState(tempState);
    }

    changeEducation = (event, elementID) => {
        console.log(event.target.value, event.target.id, elementID);
        let tempState = this.state.Education;
        tempState.forEach(element => {
            if (element.EducationID === elementID) {
                element[event.target.id] = event.target.value;
            }
        });
        this.setState(tempState);
    }

    changeWorkExp = (event, elementID) => {
        console.log(event.target.value, event.target.id, elementID);
        let tempState = this.state.WorkExp;
        tempState.forEach(element => {
            if (element.WorkExpID === elementID) {
                element[event.target.id] = event.target.value;
            }
        });
        this.setState(tempState);
    }

    changeJobPreference = (event, elementID) => {
        console.log(event.target.value, event.target.id, elementID);
        let tempState = this.state.JobPreference;
        tempState.forEach(element => {
            if (element.JobPreferenceID === elementID) {
                element[event.target.id] = event.target.value;
            }
        });
        this.setState(tempState);
    }

    changeAwards = (event, elementID) => {
        console.log(event.target.value, event.target.id, elementID);
        let tempState = this.state.Awards;
        tempState.forEach(element => {
            if (element.AwardID === elementID) {
                element[event.target.id] = event.target.value;
            }
        });
        this.setState(tempState);
    }

    changeCertification = (event, elementID) => {
        console.log(event.target.value, event.target.id, elementID);
        let tempState = this.state.Certification;
        tempState.forEach(element => {
            if (element.CertificateID === elementID) {
                element[event.target.id] = event.target.value;
            }
        });
        this.setState(tempState);
    }

    changeSkills = (event, elementID) => {
        console.log(event.target.value, event.target.id, elementID);
        let tempState = this.state.Skills;
        tempState.forEach(element => {
            if (element.SkillID === elementID) {
                element[event.target.id] = event.target.value;
            }
        });
        this.setState(tempState);
    }

    changeProjects = (event, elementID) => {
        console.log(event.target.value, event.target.id, elementID);
        let tempState = this.state.Projects;
        tempState.forEach(element => {
            if (element.ProjectID === elementID) {
                element[event.target.id] = event.target.value;
            }
        });
        this.setState(tempState);
    }

    changeDocument = (event, elementID) => {
        console.log(event.target.value, event.target.id, elementID);
        let tempState = this.state.Document;
        tempState.forEach(element => {
            if (element.DocumentID === elementID) {
                element[event.target.id] = event.target.value;
            }
        });
        this.setState(tempState);
    }

    togglePanel(i) {
        let isActive = [...this.state.isActive];
        isActive[i] = !isActive[i];
        let index;
        for (index = 0; index < isActive.length; index++) {
            if (index != i)
                isActive[index] = false;
        }

        this.setState({ isActive });
    }

    addNewEducation = () => {
        let temp = { ...EducationShell };
        temp.EducationID = this.state.Education[this.state.Education.length - 1]["EducationID"] + 1;
        let temp2 = this.state.Education;
        temp2.push(temp);
        this.setState({ "Education": temp2 });
    }

    addNewWorkExp = () => {
        let temp = { ...WorkExpShell };
        temp.WorkExpID = this.state.WorkExp[this.state.WorkExp.length - 1]["WorkExpID"] + 1;
        let temp2 = this.state.WorkExp;
        temp2.push(temp);
        this.setState({ "WorkExp": temp2 });
    }

    addNewJobPref = () => {
        let temp = { ...JobPreferenceShell };
        temp.JobPreferenceID = this.state.JobPreference[this.state.JobPreference.length - 1]["JobPreferenceID"] + 1;
        let temp2 = this.state.JobPreference;
        temp2.push(temp);
        this.setState({ "JobPreference": temp2 });
    }

    addNewAwards = () => {
        let temp = { ...AwardsShell };
        temp.AwardID = this.state.Awards[this.state.Awards.length - 1]["AwardID"] + 1;
        let temp2 = this.state.Awards;
        temp2.push(temp);
        this.setState({ "Awards": temp2 });
    }

    addNewCertificate = () => {
        let temp = { ...CertificationShell };
        temp.CertificateID = this.state.Certification[this.state.Certification.length - 1]["CertificateID"] + 1;
        let temp2 = this.state.Certification;
        temp2.push(temp);
        this.setState({ "Certification": temp2 });
    }

    addNewProjects = () => {
        let temp = { ...ProjectsShell };
        temp.ProjectID = this.state.Projects[this.state.Projects.length - 1]["ProjectID"] + 1;
        let temp2 = this.state.Projects;
        temp2.push(temp);
        this.setState({ "Projects": temp2 });
    }

    componentDidMount() {
        Axios.get('http://localhost:3000/studentProfile')
            .then(receivedData => {
                console.log(receivedData.data);
                let tempPP = { ...PersonalParticularsShell }
                for (let key in tempPP) {
                    console.log(key, receivedData.data.PersonalParticulars[key]);
                    tempPP[key] = receivedData.data.PersonalParticulars[key];
                }
                this.setState({ PersonalParticulars: tempPP });

                let tempEducation = [];
                for (let i in receivedData.data.Education) {
                    let tempE = { ...EducationShell }
                    for (let key in tempE) {
                        console.log(key, receivedData.data.Education[i][key]);
                        tempE[key] = receivedData.data.Education[i][key];
                    }
                    tempEducation.push(tempE);
                }
                this.setState({ Education: tempEducation });


                this.setState({ WorkExp: receivedData.data.WorkExp });
                this.setState({ JobPreference: receivedData.data.JobPreference });
                this.setState({ Awards: receivedData.data.Awards });
                this.setState({ Certification: receivedData.data.Certification });
                this.setState({ Skills: receivedData.data.Skills });
                this.setState({ Projects: receivedData.data.Projects });
                this.setState({ Document: receivedData.data.Document });
            });
    }

    render() {
        return (
            <Container fluid>
                <br />
                <Row >
                    <Col md={{ offset: 0, span: 1 }}>
                        <ProfileImage imageLink={this.state.ProfileImage} />
                    </Col>
                    <Col md={{ offset: 2, span: 9 }} >
                        <Accordion className={classes.Accordian}>
                            <Card className={classes.background}>
                                <Accordion.Toggle
                                    as={Card.Header} eventKey="0"
                                    className={this.state.isActive[0] ? classes.Active : classes.CardHeader}
                                    onClick={() => this.togglePanel(0)}>
                                    Personal Particulars
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0" className={classes.Cards}>
                                    <Card.Body>
                                        <Form className={ppClasses.Validate}>
                                            <PersonalParticulars
                                                details={this.state.PersonalParticulars}
                                                changeFn={event => this.changePersonalParticulars(event)} />
                                        </Form>
                                        <div style={{ 'textAlign': 'center' }}>
                                            <Button
                                                variant="primary"
                                                type="submit"
                                                className={classes.Submit}>
                                                Submit
                                        </Button>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card className={classes.Card}>
                                <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="1"
                                    className={this.state.isActive[1] ? classes.Active : classes.CardHeader}
                                    onClick={() => this.togglePanel(1)}>
                                    Education
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        {this.state.Education.map(educationDetail => {
                                            return (
                                                <React.Fragment>
                                                    <Form className={ppClasses.Validate}>
                                                        <Education key={educationDetail.EducationID}
                                                            details={educationDetail}
                                                            changeFn={event => this.changeEducation(event, educationDetail.EducationID)}
                                                        />
                                                    </Form>
                                                </React.Fragment>
                                            );
                                        })}
                                        <div style={{ 'textAlign': 'center' }}>
                                            <Button onClick={this.addNewEducation} className={classes.Submit}>+ Add More</Button>
                                            <Button onClick={this.addNewEducation} className={classes.Submit}>Next</Button>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card className={classes.Card}>
                                <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="2"
                                    className={this.state.isActive[2] ? classes.Active : classes.CardHeader}
                                    onClick={() => this.togglePanel(2)}>
                                    Work Experience
                    </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                        {this.state.WorkExp.map(workExpDetail => {
                                            return (
                                                <React.Fragment>
                                                    <Form className={ppClasses.Validate}>
                                                        <WorkExperience
                                                            key={workExpDetail.WorkExpID}
                                                            details={workExpDetail}
                                                            changeFn={event => this.changeWorkExp(event, workExpDetail.WorkExpID)} />
                                                    </Form>
                                                </React.Fragment>
                                            );
                                        })}
                                        <div style={{ 'textAlign': 'center' }}>
                                            <Button onClick={this.addNewEducation} className={classes.Submit}>+ Add More</Button>
                                            <Button onClick={this.addNewEducation} className={classes.Submit}>Next</Button>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card className={classes.Card}>
                                <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="3"
                                    className={this.state.isActive[3] ? classes.Active : classes.CardHeader}
                                    onClick={() => this.togglePanel(3)}>
                                    Job Preference
                    </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body>
                                        {this.state.JobPreference.map(jobPreferenceDetail => {
                                            return (
                                                <React.Fragment>
                                                    <Form className={ppClasses.Validate}>
                                                        <JobPreference
                                                            key={jobPreferenceDetail.JobPreferenceID}
                                                            details={jobPreferenceDetail}
                                                            changeFn={event => this.changeJobPreference(event, jobPreferenceDetail.JobPreferenceID)} />
                                                    </Form>
                                                </React.Fragment>
                                            );
                                        })}
                                        <div style={{ 'textAlign': 'center' }}>
                                            <Button onClick={this.addNewEducation} className={classes.Submit}>+ Add More</Button>
                                            <Button onClick={this.addNewEducation} className={classes.Submit}>Next</Button>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card className={classes.Card}>
                                <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="4"
                                    className={this.state.isActive[4] ? classes.Active : classes.CardHeader}
                                    onClick={() => this.togglePanel(4)}>
                                    Awards
                    </Accordion.Toggle>
                                <Accordion.Collapse eventKey="4">
                                    <Card.Body>
                                        {this.state.Awards.map(awardDetail => {
                                            return (
                                                <React.Fragment>
                                                    <Form className={ppClasses.Validate}>
                                                        <Awards
                                                            key={awardDetail.AwardID}
                                                            details={awardDetail}
                                                            changeFn={event => this.changeAwards(event, awardDetail.AwardID)} />
                                                    </Form>
                                                </React.Fragment>
                                            );
                                        })}
                                        <div style={{ 'textAlign': 'center' }}>
                                            <Button onClick={this.addNewEducation} className={classes.Submit}>+ Add More</Button>
                                            <Button onClick={this.addNewEducation} className={classes.Submit}>Next</Button>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card className={classes.Card}>
                                <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="5"
                                    className={this.state.isActive[5] ? classes.Active : classes.CardHeader}
                                    onClick={() => this.togglePanel(5)}>
                                    Certification
                    </Accordion.Toggle>
                                <Accordion.Collapse eventKey="5">
                                    <Card.Body>
                                        {this.state.Certification.map(certificateDetail => {
                                            return (
                                                <React.Fragment>
                                                    <Form className={ppClasses.Validate}>
                                                        <Certification
                                                            key={certificateDetail.CertificateID}
                                                            details={certificateDetail}
                                                            changeFn={event => this.changeCertification(event, certificateDetail.CertificateID)} />
                                                    </Form>
                                                </React.Fragment>
                                            );
                                        })}
                                        <div style={{ 'textAlign': 'center' }}>
                                            <Button onClick={this.addNewEducation} className={classes.Submit}>+ Add More</Button>
                                            <Button onClick={this.addNewEducation} className={classes.Submit}>Next</Button>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card className={classes.Card}>
                                <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="6"
                                    className={this.state.isActive[6] ? classes.Active : classes.CardHeader}
                                    onClick={() => this.togglePanel(6)}>
                                    Projects
                    </Accordion.Toggle>
                                <Accordion.Collapse eventKey="6">
                                    <Card.Body>
                                        {this.state.Projects.map(projectDetail => {
                                            return (
                                                <React.Fragment>
                                                    <Form className={ppClasses.Validate}>
                                                        <Projects
                                                            key={projectDetail.ProjectID}
                                                            details={projectDetail}
                                                            changeFn={event => this.changeProjects(event, projectDetail.ProjectID)} />
                                                    </Form>
                                                </React.Fragment>
                                            );
                                        })}
                                        <div style={{ 'textAlign': 'center' }}>
                                            <Button onClick={this.addNewEducation} className={classes.Submit}>+ Add More</Button>
                                            <Button onClick={this.addNewEducation} className={classes.Submit}>Next</Button>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card className={classes.Card}>
                                <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="8"
                                    className={this.state.isActive[8] ? classes.Active : classes.CardHeader}
                                    onClick={() => this.togglePanel(8)}>
                                    Upload Documents
                    </Accordion.Toggle>
                                <Accordion.Collapse eventKey="8">
                                    <Card.Body>
                                        {this.state.Document.map(documentDetail => {
                                            return (
                                                <React.Fragment>
                                                    <Form className={ppClasses.Validate}>
                                                        <Document
                                                            key={documentDetail.DocumentID}
                                                            details={documentDetail}
                                                            changeFn={event => this.changeDocument(event, documentDetail.DocumentID)} />
                                                    </Form>
                                                </React.Fragment>
                                            );
                                        })}
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Profile;