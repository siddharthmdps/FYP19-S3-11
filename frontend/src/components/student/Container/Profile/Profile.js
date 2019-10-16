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
import {Accordion, Card, Container, Col, Row} from 'react-bootstrap';

class Profile extends Component {
    state={
        ProfileImage: "https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg",
        PersonalParticulars: {
            StudentID: 100,
            FirstName: "Gill",
            MiddleName: "Mac",
            LastName: "Oliver",
            Email: "nisi@auctorvelit.ca",
            Phone: "(65) 9577-7329",
            Country: "Korea, North",
            City: "Holman",
            CurrentAddress: "895-7107 Aliquam, St.",
            PostalCode: "159543",
            Nationality: "Singapore"
        },
        Education: [{
            EducationID: 1,
            University: "Faulkner University",
            Degree: "Diploma",
            FieldOfStudy: "Systems Administrator I",
            Major: "DSS",
            StartDate: "",
            EndDate: "",
            Mode: "Part-Time",
            GPA: "Second-class"
        },
        {
            EducationID: 2,
            University: "Faulkners University",
            Degree: "Diplomas",
            FieldOfStudy: "Systemsa Administrator I",
            Major: "DSSa",
            StartDate: "",
            EndDate: "",
            Mode: "Part-Time",
            GPA: "Second-class"
        },
        {
            EducationID: 3,
            University: "Faulkners University",
            Degree: "Diplomas",
            FieldOfStudy: "Systemsa Administrator I",
            Major: "DSSa",
            StartDate: "",
            EndDate: "",
            Mode: "Part-Time",
            GPA: "Second-class"
        }],
        WorkExp: [{
            WorkExpID: 1,
            Position: "Junior",
            Company: "Vimbo",
            StartDate: "29/06/2018",
            EndDate: "08/04/2019",
            Mode: "Part Time",
            Industry: "Training",
            AnnualSalary: 33000,
            Description: "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
        },
        {
            WorkExpID: 2,
            Position: "Juniora",
            Company: "Vimboq",
            StartDate: "29/06/2018",
            EndDate: "08/04/2019",
            Mode: "Part Timew",
            Industry: "Traininga",
            AnnualSalary: 33000,
            Description: "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
        }],
        JobPreference: [{
            JobPreferenceID: 1,
            Industry: "Accounting",
            Position: "Senior",
            JobType: "Contract",
            ExpectedSalary: 16000,
            Location: "Bolorejo",
            Availability: "Immediate"
        },
        {
            JobPreferenceID: 2,
            Industry: "Accountinga",
            Position: "Seniora",
            JobType: "Contracta",
            ExpectedSalary: 16000,
            Location: "Bolorejoa",
            Availability: "Immediate"
        }],
        Awards: [{
            AwardID: 1,
            Award: "Dean's List",
            Date: "Aug 2018",
            Description: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
        }, 
        {
            AwardID: 2,
            Award: "Dean's List",
            Date: "Aug 2018",
            Description: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
        }],
        Certification: [{
            CertificateID: 1,
            Name: "CNNP Routing and Switching",
            IssuedBy: "Scrum Alliance",
            IssueDate: "Mar 2019",
            ValidUntil: "Mar 2020"
        },{
            CertificateID: 2,
            Name: "CNNP Routing and Switchinga",
            IssuedBy: "Scrum Alliancea",
            IssueDate: "Mar 2019a",
            ValidUntil: "Mar 2020a"
        }],
        Skills: [{
            SkillID: 1,
            SkillName: 'C++',
        }],
        Projects: [{
            ProjectID: 1,
            Title: "Personal Website",
            Status: "Ongoing",
            Description: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
            Link: "https://www.google.com"
        },
        {
            ProjectID: 2,
            Title: "Personal Websites",
            Status: "Ongoinging",
            Description: "Duis abibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
            Link: "https://www.google.com.loo"
        }],
        Document: [{
            DocumentID: 1,
            Title: "Resume",
            Link: ""
        }]
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