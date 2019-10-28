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
import Button1 from '../../../common_assets/Button1/Button1';
import { Accordion, Card, Container, Col, Row, Form } from 'react-bootstrap';
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
        "isActive": [],
        "activatedToggle": "0"
    }

// Handling Form Inputs starts here

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

// Handling Form Inputs ends here

    togglePanel(i) {
        let isActive = [...this.state.isActive];
        isActive[i] = !isActive[i];
        let index;
        for (index = 0; index < isActive.length; index++) {
            if (index != i)
                isActive[index] = false;
        }

        this.setState({ isActive });
        this.setState({"activatedToggle": i.toString()});
    }

// Adding new elements in the Profile starts here

    addNewEducation = () => {
        let temp = { ...EducationShell };
        if(this.state.Education.length === 0)
            temp.EducationID = 1;    
        else 
            temp.EducationID = this.state.Education[this.state.Education.length - 1]["EducationID"] + 1;
        let temp2 = this.state.Education;
        temp2.push(temp);
        this.setState({ "Education": temp2 });
    }

    addNewWorkExp = () => {
        let temp = { ...WorkExpShell };
        if(this.state.WorkExp.length === 0)
            temp.WorkExpID = 1;
        else
            temp.WorkExpID = this.state.WorkExp[this.state.WorkExp.length - 1]["WorkExpID"] + 1;
        let temp2 = this.state.WorkExp;
        temp2.push(temp);
        this.setState({ "WorkExp": temp2 });
    }

    addNewJobPref = () => {
        let temp = { ...JobPreferenceShell };
        if(this.state.JobPreference.length === 0)
            temp.JobPreferenceID = 1;
        else
            temp.JobPreferenceID = this.state.JobPreference[this.state.JobPreference.length - 1]["JobPreferenceID"] + 1;
        let temp2 = this.state.JobPreference;
        temp2.push(temp);
        this.setState({ "JobPreference": temp2 });
    }

    addNewAwards = () => {
        let temp = { ...AwardsShell };
        if(this.state.Awards.length === 0)
            temp.AwardID = 1;
        else
            temp.AwardID = this.state.Awards[this.state.Awards.length - 1]["AwardID"] + 1;
        let temp2 = this.state.Awards;
        temp2.push(temp);
        this.setState({ "Awards": temp2 });
    }

    addNewCertificate = () => {
        let temp = { ...CertificationShell };
        if(this.state.Certification.length === 0)
            temp.CertificateID = 1;
        else
            temp.CertificateID = this.state.Certification[this.state.Certification.length - 1]["CertificateID"] + 1;
        let temp2 = this.state.Certification;
        temp2.push(temp);
        this.setState({ "Certification": temp2 });
    }

    addNewProjects = () => {
        let temp = { ...ProjectsShell };
        if(this.state.Projects.length === 0)
            temp.ProjectID = 1;
        else
            temp.ProjectID = this.state.Projects[this.state.Projects.length - 1]["ProjectID"] + 1;
        let temp2 = this.state.Projects;
        temp2.push(temp);
        this.setState({ "Projects": temp2 });
    }

// Adding new elements in the Profile ends here

// Removing elements in the Profile starts here

    removeEducation = (eID) => {
        let temp = this.state.Education;
        let found=false;
        let eIndex = -1;
        temp.forEach((element, index) => {    
            if(element["EducationID"]===eID){
                found=true;
                eIndex=index;
            }
            if(found){
                element["EducationID"]--;
            }
        });
        if(found)
            temp.splice(eIndex, 1);
        this.setState({ "Education": temp });
    }

    removeWorkExp = (wID) => {
        let temp = this.state.WorkExp;
        let found=false;
        let wIndex = -1;
        temp.forEach((element, index) => {    
            if(element["WorkExpID"]===wID){
                found=true;
                wIndex=index;
            }
            if(found){
                element["WorkExpID"]--;
            }
        });
        if(found)
            temp.splice(wIndex, 1);
        this.setState({ "WorkExp": temp });
    }

    removeJobPreference = (jID) => {
        let temp = this.state.JobPreference;
        let found=false;
        let jIndex = -1;
        temp.forEach((element, index) => {    
            if(element["JobPreferenceID"]===jID){
                found=true;
                jIndex=index;
            }
            if(found){
                element["JobPreferenceID"]--;
            }
        });
        if(found)
            temp.splice(jIndex, 1);
        this.setState({ "JobPreference": temp });
    }

    removeAwards = (aID) => {
        let temp = this.state.Awards;
        let found=false;
        let aIndex = -1;
        temp.forEach((element, index) => {    
            if(element["AwardID"]===aID){
                found=true;
                aIndex=index;
            }
            if(found){
                element["AwardID"]--;
            }
        });
        if(found)
            temp.splice(aIndex, 1);
        this.setState({ "Awards": temp });
    }

    removeCertification = (cID) => {
        let temp = this.state.Certification;
        let found=false;
        let cIndex = -1;
        temp.forEach((element, index) => {    
            if(element["CertificateID"]===cID){
                found=true;
                cIndex=index;
            }
            if(found){
                element["CertificateID"]--;
            }
        });
        if(found)
            temp.splice(cIndex, 1);
        this.setState({ "Certification": temp });
    }

    removeSkills = (sID) => {
        let temp = this.state.Skills;
        let found=false;
        let sIndex = -1;
        temp.forEach((element, index) => {    
            if(element["SkillID"]===sID){
                found=true;
                sIndex=index;
            }
            if(found){
                element["SkillID"]--;
            }
        });
        if(found)
            temp.splice(sIndex, 1);
        this.setState({ "Skills": temp });
    }

    removeProjects = (pID) => {
        let temp = this.state.Projects;
        let found=false;
        let pIndex = -1;
        temp.forEach((element, index) => {    
            if(element["ProjectID"]===pID){
                found=true;
                pIndex=index;
            }
            if(found){
                element["ProjectID"]--;
            }
        });
        if(found)
            temp.splice(pIndex, 1);
        this.setState({ "Projects": temp });
    }
// Removing elements in the Profile ends here

    test = () => {
        this.setState({"activatedToggle": "2"});

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
            this.togglePanel(0);
    }

    render() {
        return (
            <Container fluid>
                <br />
                <Row >
                    <Col md={{ span: 3 }}>
                        <ProfileImage imageLink={this.state.ProfileImage} />

                        <Card>
                        <Card.Body>Recommended Jobs</Card.Body>
                        </Card>
                        
                        <Card>
                        <Card.Body>Applied Jobs</Card.Body>
                        </Card>
                        
                        <Card>
                        <Card.Body>Saved Jobs</Card.Body>
                        </Card>
                        
                    </Col>
                    <Col md={{ span: 9 }} >
                        <Accordion className={classes.Accordian} activeKey={this.state.activatedToggle}>
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
                                            <Button1 click={this.test}>
                                                Next >
                                        </Button1>
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
                                                <React.Fragment key={educationDetail.EducationID}>
                                                    <Form className={ppClasses.Validate}>
                                                        <Education
                                                            details={educationDetail}
                                                            changeFn={event => this.changeEducation(event, educationDetail.EducationID)}
                                                            remove={this.removeEducation.bind(this, educationDetail["EducationID"])}
                                                        />
                                                    </Form>
                                                </React.Fragment>
                                            );
                                        })}
                                        <div style={{ 'textAlign': 'center' }}>
                                            <Button1 click={this.addNewEducation}>+ Add More</Button1>
                                            <Button1 click={this.addNewEducation}>Next ></Button1>
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
                                                <React.Fragment key={workExpDetail.WorkExpID}>
                                                    <Form className={ppClasses.Validate}>
                                                        <WorkExperience
                                                            details={workExpDetail}
                                                            changeFn={event => this.changeWorkExp(event, workExpDetail.WorkExpID)} 
                                                            remove={this.removeWorkExp.bind(this, workExpDetail["WorkExpID"])}
                                                        />
                                                    </Form>
                                                </React.Fragment>
                                            );
                                        })}
                                        <div style={{ 'textAlign': 'center' }}>
                                            <Button1 click={this.addNewWorkExp}>+ Add More</Button1>
                                            <Button1 click={this.addNewEducation}>Next ></Button1>
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
                                                <React.Fragment key={jobPreferenceDetail.JobPreferenceID}>
                                                    <Form className={ppClasses.Validate}>
                                                        <JobPreference
                                                            details={jobPreferenceDetail}
                                                            changeFn={event => this.changeJobPreference(event, jobPreferenceDetail.JobPreferenceID)} 
                                                            remove={this.removeJobPreference.bind(this, jobPreferenceDetail["JobPreferenceID"])}
                                                        />
                                                    </Form>
                                                </React.Fragment>
                                            );
                                        })}
                                        <div style={{ 'textAlign': 'center' }}>
                                            <Button1 click={this.addNewJobPref}>+ Add More</Button1>
                                            <Button1 click={this.addNewEducation}>Next ></Button1>
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
                                                <React.Fragment key={awardDetail.AwardID}>
                                                    <Form className={ppClasses.Validate}>
                                                        <Awards
                                                            details={awardDetail}
                                                            changeFn={event => this.changeAwards(event, awardDetail.AwardID)} 
                                                            remove={this.removeAwards.bind(this, awardDetail["AwardID"])}
                                                        />
                                                    </Form>
                                                </React.Fragment>
                                            );
                                        })}
                                        <div style={{ 'textAlign': 'center' }}>
                                            <Button1 click={this.addNewAwards}>+ Add More</Button1>
                                            <Button1 click={this.test}>Next ></Button1>
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
                                                <React.Fragment key={certificateDetail.CertificateID}>
                                                    <Form className={ppClasses.Validate}>
                                                        <Certification
                                                            details={certificateDetail}
                                                            changeFn={event => this.changeCertification(event, certificateDetail.CertificateID)} 
                                                            remove={this.removeCertification.bind(this, certificateDetail["CertificateID"])}
                                                        />
                                                    </Form>
                                                </React.Fragment>
                                            );
                                        })}
                                        <div style={{ 'textAlign': 'center' }}>
                                            <Button1 click={this.addNewCertificate}>+ Add More</Button1>
                                            <Button1 click={this.addNewEducation}>Next ></Button1>
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
                                                <React.Fragment key={projectDetail.ProjectID}>
                                                    <Form className={ppClasses.Validate}>
                                                        <Projects
                                                            details={projectDetail}
                                                            changeFn={event => this.changeProjects(event, projectDetail.ProjectID)} 
                                                            remove={this.removeProjects.bind(this, projectDetail["ProjectID"])}
                                                        />
                                                    </Form>
                                                </React.Fragment>
                                            );
                                        })}
                                        <div style={{ 'textAlign': 'center' }}>
                                            <Button1 click={this.addNewProjects}>+ Add More</Button1>
                                            <Button1 click={this.addNewEducation}>Next ></Button1>
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
                                                <React.Fragment key={documentDetail.DocumentID}>
                                                    <Form className={ppClasses.Validate}>
                                                        <Document
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