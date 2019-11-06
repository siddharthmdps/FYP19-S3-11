import React, { Component } from 'react';
import classes from './EditProfile.module.css';
import LeftSide from '../../Components/EditProfile/LeftSide/LeftSide';
import PersonalParticulars from '../../Components/EditProfile/PersonalParticulars/PersonalParticulars';
import Education from '../../Components/EditProfile/Education/Education';
import WorkExperience from '../../Components/EditProfile/WorkExperience/WorkExperience';
import JobPreference from '../../Components/EditProfile/JobPreference/JobPreference';
import Awards from '../../Components/EditProfile/Awards/Awards';
import Certification from '../../Components/EditProfile/Certification/Certification';
import Skills from '../../Components/EditProfile/Skills/Skills';
import Projects from '../../Components/EditProfile/Projects/Projects';
import Document from '../../Components/EditProfile/Document/Document';
import Button1 from '../../../common_assets/Button1/Button1';
import { Accordion, Card, Container, Col, Row, Form } from 'react-bootstrap';
import ppClasses from '../../../common_assets/Validate.module.css';
import apiURL from '../../../../config';

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
    "SkillName": "",
    "Edit": false
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
        "ProfileImage": "data:image/jpeg;base64,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",
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
        "activatedToggle": "-1"
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
                if(event.key === 'Enter'){
                    element["Edit"] = false;
                }
                else
                    element["SkillName"] = event.target.value;
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
        if(this.state.activatedToggle==i)
            this.setState({"activatedToggle": "-1"});
        else
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

    addNewSkill = () => {
        let temp = { ...SkillsShell };
        if(this.state.Skills.length === 0)
            temp.SkillID = 1;
        else
            temp.SkillID = this.state.Skills[this.state.Skills.length - 1]["SkillID"] + 1;
        temp.Edit = true;
        let temp2 = this.state.Skills;
        temp2.push(temp);
        this.setState({ "Skills": temp2 });
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

    addNewDocument = () => {
        let temp = {...DocumentShell};
        if (this.state.Document.length === 0)
            temp.DocumentID = 1;
        else
            temp.DocumentID = this.state.Document[this.state.Document.length-1]["DocumentID"] + 1;
        let temp2 = this.state.Document;
        temp2.push(temp);
        this.setState({"Document": temp2});
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

    removeDocument = (dID) => {
        let temp = this.state.Document;
        let found=false;
        let dIndex = -1;
        temp.forEach((element, index) => {    
            if(element["DocumentID"]===dID){
                found=true;
                dIndex=index;
            }
            if(found){
                element["DocumentID"]--;
            }
        });
        if(found)
            temp.splice(dIndex, 1);
        this.setState({ "Document": temp });
    }
// Removing elements in the Profile ends here

    removeEdit = (elementID) => {
        let tempState = this.state.Skills;
        tempState.forEach(element => {
            if (element.SkillID === elementID) {
                    element["Edit"] = false;
            }
        });
        this.setState(tempState);
    }

    test = () => {
        this.setState({"activatedToggle": "2"});

    }

    componentDidMount() {
        var studentid = 1;
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
        
        var getawardurl = apiURL + 'student/studentawards/' + studentid;
        Axios.get(getawardurl)
            .then(receivedData => {
                console.log(receivedData.Awards);
                this.setState({ Awards: receivedData.data.Awards });
            });
            this.togglePanel(7);
    }

    render() {
        return (
            <Container fluid>
                <br />
                <Row >
                    <Col md={{ span: 3 }} className={classes.LeftSide}>
                        <LeftSide imageLink={this.state.ProfileImage} />
                        
                    </Col>
                    <Col md={{ offset: 3, span: 9 }} >
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
                                        <div className={classes.ButtonSection}>
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
                                <Accordion.Collapse eventKey="1" className={classes.Cards}>
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
                                        <div className={classes.ButtonSection}>
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
                                <Accordion.Collapse eventKey="2" className={classes.Cards}>
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
                                        <div className={classes.ButtonSection}>
                                            <Button1 click={this.addNewWorkExp} clicked>+ Add More</Button1>
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
                                <Accordion.Collapse eventKey="3" className={classes.Cards}>
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
                                        <div className={classes.ButtonSection}>
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
                                <Accordion.Collapse eventKey="4" className={classes.Cards}>
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
                                        <div className={classes.ButtonSection}>
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
                                <Accordion.Collapse eventKey="5" className={classes.Cards}>
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
                                        <div className={classes.ButtonSection}>
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
                                <Accordion.Collapse eventKey="6" className={classes.Cards}>
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
                                        <div className={classes.ButtonSection}>
                                            <Button1 click={this.addNewProjects}>+ Add More</Button1>
                                            <Button1 click={this.addNewEducation}>Next ></Button1>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card className={classes.Card}>
                                <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="7"
                                    className={this.state.isActive[7] ? classes.Active : classes.CardHeader}
                                    onClick={() => this.togglePanel(7)}>
                                    Skills
                    </Accordion.Toggle>
                                <Accordion.Collapse eventKey="7" className={classes.Cards}>
                                    <Card.Body>
                                        {this.state.Skills.map(skillDetail => {
                                            return (
                                                <React.Fragment key={skillDetail.SkillID}>
                                                    <Form className={ppClasses.Validate} className={classes.SkillInline}>
                                                        <Skills
                                                            details={skillDetail}
                                                            changeFn={event => this.changeSkills(event, skillDetail.SkillID)} 
                                                            remove={this.removeSkills.bind(this, skillDetail["SkillID"])}
                                                            removeEdit={this.removeEdit.bind(this, skillDetail.SkillID)}
                                                        />
                                                    </Form>
                                                </React.Fragment>
                                            );
                                        })}
                                        <div className={classes.ButtonSection}>
                                            <Button1 click={this.addNewSkill}>+ Add More</Button1>
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
                                <Accordion.Collapse eventKey="8" className={classes.Cards}>
                                    <Card.Body>
                                        {this.state.Document.map(documentDetail => {
                                            return (
                                                <React.Fragment key={documentDetail.DocumentID}>
                                                    <Form className={ppClasses.Validate}>
                                                        <Document
                                                            details={documentDetail}
                                                            changeFn={event => this.changeDocument(event, documentDetail.DocumentID)} 
                                                            remove={this.removeDocument.bind(this, documentDetail["DocumentID"])}/>
                                                    </Form>
                                                </React.Fragment>
                                            );
                                        })}
                                        <div className={classes.ButtonSection}>
                                            <Button1 click={this.addNewDocument}>+ Add More</Button1>
                                            <Button1 click={this.addNewEducation}>Next ></Button1>
                                        </div>
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