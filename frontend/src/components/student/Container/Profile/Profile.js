import React, {Component} from 'react';
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
import {Accordion, Card, Container, Col, Row, Button} from 'react-bootstrap';
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

const SkillsShell= {
    "SkillID": 0,
    "SkillName": "",
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
    state={
        "ProfileImage": "https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg",
        "PersonalParticulars": {},
        "Education": [],
        "WorkExp": [],
        "JobPreference": [],
        "Awards": [],
        "Certification": [],
        "Skills": [],
        "Projects": [],
        "Document": []
    }

    changePersonalParticulars = event => {
        console.log(event.target.value, event.target.id, this.state);
        let tempState = this.state.PersonalParticulars;
        tempState[event.target.id] = event.target.value;
        this.setState(tempState);
    }

    changeEducation = (event, elementID) => {
        console.log(event.target.value, event.target.id, elementID);
        let tempState = this.state.Education;
        tempState.forEach(element => {
            if(element.EducationID === elementID){
                element[event.target.id] = event.target.value;
            }
        });
        this.setState(tempState);
    }

    changeWorkExp = (event, elementID) => {
        console.log(event.target.value, event.target.id, elementID);
        let tempState = this.state.WorkExp;
        tempState.forEach(element => {
            if(element.WorkExpID === elementID){
                element[event.target.id] = event.target.value;
            }
        });
        this.setState(tempState);
    }

    changeJobPreference = (event, elementID) => {
        console.log(event.target.value, event.target.id, elementID);
        let tempState = this.state.JobPreference;
        tempState.forEach(element => {
            if(element.JobPreferenceID === elementID){
                element[event.target.id] = event.target.value;
            }
        });
        this.setState(tempState);
    }

    changeAwards = (event, elementID) => {
        console.log(event.target.value, event.target.id, elementID);
        let tempState = this.state.Awards;
        tempState.forEach(element => {
            if(element.AwardID === elementID){
                element[event.target.id] = event.target.value;
            }
        });
        this.setState(tempState);
    }

    changeCertification = (event, elementID) => {
        console.log(event.target.value, event.target.id, elementID);
        let tempState = this.state.Certification;
        tempState.forEach(element => {
            if(element.CertificateID === elementID){
                element[event.target.id] = event.target.value;
            }
        });
        this.setState(tempState);
    }

    changeSkills = (event, elementID) => {
        console.log(event.target.value, event.target.id, elementID);
        let tempState = this.state.Skills;
        tempState.forEach(element => {
            if(element.SkillID === elementID){
                element[event.target.id] = event.target.value;
            }
        });
        this.setState(tempState);
    }    

    changeProjects = (event, elementID) => {
        console.log(event.target.value, event.target.id, elementID);
        let tempState = this.state.Projects;
        tempState.forEach(element => {
            if(element.ProjectID === elementID){
                element[event.target.id] = event.target.value;
            }
        });
        this.setState(tempState);
    }

    changeDocument = (event, elementID) => {
        console.log(event.target.value, event.target.id, elementID);
        let tempState = this.state.Document;
        tempState.forEach(element => {
            if(element.DocumentID === elementID){
                element[event.target.id] = event.target.value;
            }
        });
        this.setState(tempState);
    }

    addNewEducation = () =>{
        let temp = {...EducationShell};
        temp.EducationID = this.state.Education[this.state.Education.length-1]["EducationID"]+1;
        let temp2 = this.state.Education;
        temp2.push(temp);
        this.setState({"Education": temp2});
    }

    componentDidMount(){
        Axios.get('http://localhost:3000/studentProfile')
            .then(receivedData => {
                console.log(receivedData.data);
                let tempPP = {...PersonalParticularsShell}
                for(let key in tempPP){
                    console.log(key, receivedData.data.PersonalParticulars[key]);
                    tempPP[key] = receivedData.data.PersonalParticulars[key];
                }
                this.setState({PersonalParticulars: tempPP});

                let tempEducation = [];
                for(let i in receivedData.data.Education){
                    let tempE = {...EducationShell}
                    for(let key in tempE){
                        console.log(key, receivedData.data.Education[i][key]);
                        tempE[key] = receivedData.data.Education[i][key];
                    }
                    tempEducation.push(tempE);
                }
                this.setState({Education: tempEducation});


                this.setState({WorkExp: receivedData.data.WorkExp});
                this.setState({JobPreference: receivedData.data.JobPreference});
                this.setState({Awards: receivedData.data.Awards});
                this.setState({Certification: receivedData.data.Certification});
                this.setState({Skills: receivedData.data.Skills});
                this.setState({Projects: receivedData.data.Projects});
                this.setState({Document: receivedData.data.Document});
            });
    }

    render(){
        return(

            <Container fluid>
                <br />
                <Row>
                <Col  md={{offset: 0, span:1}}>
                    <ProfileImage imageLink={this.state.ProfileImage}/>
                </Col>
                <Col md={{offset: 2, span:9}} >
                <Accordion defaultActiveKey="0" className={classes.Accordian}>
                <Card className={classes.Card}>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className={classes.CardHeader}>
                        Personal Particulars
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <PersonalParticulars details={this.state.PersonalParticulars} changeFn={event => this.changePersonalParticulars(event)}/>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                
                <Card className={classes.Card}>
                    <Accordion.Toggle as={Card.Header} eventKey="1" className={classes.CardHeader}>
                        Education
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            {this.state.Education.map(educationDetail => {
                                return (
                                    <React.Fragment><Education key={educationDetail.EducationID} details={educationDetail} changeFn={event => this.changeEducation(event, educationDetail.EducationID)} />  
                                    <hr />
                                    </React.Fragment>
                                );
                            })}
                            <Button onClick={this.addNewEducation}>+ Add More</Button>
                            <Button onClick={this.addNewEducation}>Next</Button>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className={classes.Card}>
                    <Accordion.Toggle as={Card.Header} eventKey="2" className={classes.CardHeader}>
                        Work Experience
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>   
                        {this.state.WorkExp.map(workExpDetail => {
                            return (
                                <React.Fragment>
                                    <WorkExperience key={workExpDetail.WorkExpID} details={workExpDetail} changeFn={event => this.changeWorkExp(event, workExpDetail.WorkExpID)} />  
                                    <hr />
                                </React.Fragment>
                            );
                        })}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className={classes.Card}>
                    <Accordion.Toggle as={Card.Header} eventKey="3" className={classes.CardHeader}>
                        Job Preference
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>
                        {this.state.JobPreference.map(jobPreferenceDetail => {
                            return (
                                <React.Fragment>
                                    <JobPreference key={jobPreferenceDetail.JobPreferenceID} details={jobPreferenceDetail} changeFn={event => this.changeJobPreference(event, jobPreferenceDetail.JobPreferenceID)} />  
                                    <hr />
                                </React.Fragment>
                            );
                        })}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className={classes.Card}>
                    <Accordion.Toggle as={Card.Header} eventKey="4" className={classes.CardHeader}>
                        Awards
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body>
                            {this.state.Awards.map(awardDetail => {
                                return (
                                    <React.Fragment>
                                        <Awards key={awardDetail.AwardID} details={awardDetail} changeFn={event => this.changeAwards(event, awardDetail.AwardID)} />  
                                        <hr />
                                    </React.Fragment>
                                );
                            })}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className={classes.Card}>
                    <Accordion.Toggle as={Card.Header} eventKey="5" className={classes.CardHeader}>
                        Certification
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
                        <Card.Body>
                            {this.state.Certification.map(certificateDetail => {
                                return (
                                    <React.Fragment>
                                        <Certification key={certificateDetail.CertificateID} details={certificateDetail} changeFn={event => this.changeCertification(event, certificateDetail.CertificateID)} />  
                                        <hr />
                                    </React.Fragment>
                                );
                            })}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className={classes.Card}>
                    <Accordion.Toggle as={Card.Header} eventKey="6" className={classes.CardHeader}>
                        Projects
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="6">
                        <Card.Body>
                            {this.state.Projects.map(projectDetail => {
                                return (
                                    <React.Fragment>
                                        <Projects key={projectDetail.ProjectID} details={projectDetail} changeFn={event => this.changeProjects(event, projectDetail.ProjectID)} />  
                                        <hr />
                                    </React.Fragment>
                                );
                            })}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className={classes.Card}>
                    <Accordion.Toggle as={Card.Header} eventKey="8" className={classes.CardHeader}>
                        Upload Documents
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="8">
                        <Card.Body>
                            {this.state.Document.map(documentDetail => {
                                return (
                                    <React.Fragment>
                                        <Document key={documentDetail.DocumentID} details={documentDetail} changeFn={event => this.changeDocument(event, documentDetail.DocumentID)} />  
                                        <hr />
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