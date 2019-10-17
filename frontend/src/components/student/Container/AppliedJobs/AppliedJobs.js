import React, { Component } from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import classes from './AppliedJobs.module.css';

class AppliedJobs extends Component{
    render(){
        return(
            <Container fluid>
                <br />
                <Row>
                    Applied Jobs
                </Row>
                <br />
                <Row>
                    <Col md={{span:3}}>

                        <Card>
                            <Card.Body>
                                <Card.Title>150</Card.Title>
                                <Card.Text>
                                All Employers
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col md={{span:3}}>

                        <Card>
                            <Card.Body>
                                <Card.Title>53</Card.Title>
                                <Card.Text>
                                All Candidates
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col md={{span:3}}>

                    <Card>
                        <Card.Body>
                            <Card.Title>44</Card.Title>
                            <Card.Text>
                            All Jobs
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    </Col>
                    <Col md={{span:3}}>

                    <Card>
                        <Card.Body>
                            <Card.Title>Generate</Card.Title>
                            <Card.Text>
                            Reports
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            Click to contine
                        </Card.Footer>
                    </Card>

                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md={{span: 3}}>
                        
                    <Card>
                        <Card.Body>
                            <Card.Title>Generate</Card.Title>
                            <Card.Text>
                            
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md={{span: 6}}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Latest Added Candidates</Card.Title>
                            <Card.Text>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AppliedJobs;