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
    render(){
        return(
            <Container fluid>
                <br />
                <Row>
                <Col md={{offset: 1, span:1}}>
                    <ProfileImage />
                </Col>
                <Col md={{offset: 1, span:9}} >
                <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Personal Particulars
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <PersonalParticulars />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        Education
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <Education />
                        {/* <iframe style={{width: '100%', height: '100vh'}} src="https://docs.google.com/document/d/e/2PACX-1vTqVSlMkDmBxnOs8qR2p1JLPDJUvS7IWlXkMFo7niI0tYVkkin5iDb41C08_c0CPXvm1Dqe4X9Lk680/pub?embedded=true"></iframe> */}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                        Work Experience
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <WorkExperience />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                        Job Preference
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>
                            <JobPreference />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="4">
                        Awards
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body>
                            <Awards />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="5">
                        Certification
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
                        <Card.Body>
                            <Certification />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="6">
                        Projects
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="6">
                        <Card.Body>
                            <Projects />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="8">
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