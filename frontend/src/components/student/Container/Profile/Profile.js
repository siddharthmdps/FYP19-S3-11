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
import Resume from '../../Components/Resume/Resume';
import {Accordion, Card, Container, Col, Row} from 'react-bootstrap';

class Profile extends Component {
    state={
        PersonalParticulars: {
            StudentID: 100,
            FirstName: "Gill",
            MiddleName: "Mac",
            LastName: "Oliver",
            Email: "nisi@auctorvelit.ca",
            Phone: "(65) 9577-7329",
            Country: "Korea, North",
            City: "Holman",
            Address: "895-7107 Aliquam, St.",
            PostalCode: "159543",
            Nationality: "Singapore"
        },
        Education: [{
            University: "Faulkner University",
            Degree: "Diploma",
            FieldOfStudy: "Systems Administrator I",
            Major: "DSS",
            Mode: "Part-Time",
            GPA: "Second-class"
        }],
        WorkExp: [{
            Position: "Junior",
            Company: "Vimbo",
            StartDate: "29/06/2018",
            EndDate: "08/04/2019",
            Mode: "Part Time",
            Industry: "Training",
            AnnualSalary: 33000,
            Description: "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
        }],
        JobPreference: [{
            Industry: "Accounting",
            Position: "Senior",
            JobType: "Contract",
            ExpectedSalary: 16000,
            Location: "Bolorejo",
            Availability: "Immediate"
        }],
        Awards: [{
            Award: "Dean's List",
            Date: "Aug 2018",
            Description: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
        }],
        Certification: [{
            Name: "CNNP Routing and Switching",
            IssuedBy: "Scrum Alliance",
            IssueDate: "Mar 2019",
            ValidUntil: "Mar 2020"
        }],
        Projects: [{
            ProjectTitle: "Personal Website",
            Status: "Ongoing",
            Description: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
            ProjectLink: "https://www.google.com"
        }]
    }
    render(){
        return(
            <Container fluid>
                <br />
                <Row>
                <Col md={{offset: 1, span:1}}>
                    <ProfileImage />
                </Col>
                <Col md={{offset: 1, span:9}} >
                <Accordion defaultActiveKey="0" className={classes.Accordian}>
                <Card className={classes.Card}>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className={classes.CardHeader}>
                        Personal Particulars
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <PersonalParticulars />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                
                <Card className={classes.Card}>
                    <Accordion.Toggle as={Card.Header} eventKey="1" className={classes.CardHeader}>
                        Education
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <Education />
                        {/* <iframe style={{width: '100%', height: '100vh'}} src="https://docs.google.com/document/d/e/2PACX-1vTqVSlMkDmBxnOs8qR2p1JLPDJUvS7IWlXkMFo7niI0tYVkkin5iDb41C08_c0CPXvm1Dqe4X9Lk680/pub?embedded=true"></iframe> */}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className={classes.Card}>
                    <Accordion.Toggle as={Card.Header} eventKey="2" className={classes.CardHeader}>
                        Work Experience
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <WorkExperience />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className={classes.Card}>
                    <Accordion.Toggle as={Card.Header} eventKey="3" className={classes.CardHeader}>
                        Job Preference
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>
                            <JobPreference />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className={classes.Card}>
                    <Accordion.Toggle as={Card.Header} eventKey="4" className={classes.CardHeader}>
                        Awards
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body>
                            <Awards />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className={classes.Card}>
                    <Accordion.Toggle as={Card.Header} eventKey="5" className={classes.CardHeader}>
                        Certification
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
                        <Card.Body>
                            <Certification />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className={classes.Card}>
                    <Accordion.Toggle as={Card.Header} eventKey="6" className={classes.CardHeader}>
                        Projects
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="6">
                        <Card.Body>
                            <Projects />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className={classes.Card}>
                    <Accordion.Toggle as={Card.Header} eventKey="8" className={classes.CardHeader}>
                        Resume
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="8">
                        <Card.Body>
                            <Resume />
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