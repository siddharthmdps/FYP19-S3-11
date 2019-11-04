import React, { Component } from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom'


class AppliedJobs extends Component {
    render() {
        return (
            <Container fluid>
                <br />
                <Row>
                    <h1>Dashboard <span style={{ marginLeft: '5px' }}><sub></sub></span></h1>
                </Row>
                <br />
                <Row>
                    <Col md={{ span: 3 }}>

                        <Card>
                            <Card.Body>
                                <Card.Title>150</Card.Title>
                                <Card.Text>
                                    All Employers
                                </Card.Text>
                                <Link to="/Employer" className="small-box-footer">More info <i className="fa fa-arrow-circle-right" /></Link>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col md={{ span: 3 }}>

                        <Card>
                            <Card.Body>
                                <Card.Title>53</Card.Title>
                                <Card.Text>
                                    All Candidates
                                </Card.Text>
                                <Link to="/Candidate" className="small-box-footer">More info <i className="fa fa-arrow-circle-right" /></Link>

                            </Card.Body>
                        </Card>

                    </Col>
                    <Col md={{ span: 3 }}>

                        <Card>
                            <Card.Body>
                                <Card.Title>44</Card.Title>
                                <Card.Text>
                                    All Jobs
                            </Card.Text>
                                <Link to="/Jobs" className="small-box-footer">More info <i className="fa fa-arrow-circle-right" /></Link>

                            </Card.Body>
                        </Card>

                    </Col>
                    <Col md={{ span: 3 }}>

                        <Card>
                            <Card.Body>
                                <Card.Title>Generate</Card.Title>
                                <Card.Text>
                                    Reports
                            </Card.Text>
                                <Link to="/Reports" className="small-box-footer">More info <i className="fa fa-arrow-circle-right" /></Link>

                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md={{ span: 12 }} style={{ height: '50vh', marginBottom: '10px', border: '1px solid black' }}>

                        <Card>
                            <Card.Body>
                                <Card.Title>Latest Added Jobs</Card.Title>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Username</th>
                                    <th>Date Posted</th>
                                    <th>Job Position</th>
                                    <th>Job Information</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Mark</td>
                                    <td>11/1/2019</td>
                                    <td>Writer</td>
                                    <td>Do job for me and get paid.</td>
                                </tr>
                                <tr>
                                    <td>Mark</td>
                                    <td>12/4/2019</td>
                                    <td>Developer</td>
                                    <td>Do job for me and get paid.</td>
                                </tr>
                                <tr>
                                    <td>Mark</td>
                                    <td>12/4/2019</td>
                                    <td>Engineer</td>
                                    <td>Do job for me and get paid.</td>
                                </tr>
                                <tr>
                                    <td>Mark</td>
                                    <td>12/4/2019</td>
                                    <td>Thornton</td>
                                    <td>Do job for me and get paid.</td>
                                </tr>
                                <tr>
                                    <td>Mark</td>
                                    <td>12/4/2019</td>
                                    <td>Thornton</td>
                                    <td>Do job for me and get paid.</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 6 }} style={{ height: '50vh', border: '1px solid black' }}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Latest Added Candidates</Card.Title>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Username</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Mark</td>
                                    <td>Mark12345@gmail.com</td>
                                </tr>
                                <tr>
                                <td>Mark</td>
                                    <td>Mark12345@gmail.com</td>
                                </tr>
                                <tr>
                                <td>Mark</td>
                                    <td>Mark12345@gmail.com</td>
                                </tr>
                                <tr>
                                <td>Mark</td>
                                    <td>Mark12345@gmail.com</td>
                                </tr>
                                <tr>
                                <td>Mark</td>
                                    <td>Mark12345@gmail.com</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col md={{ span: 6 }} style={{ height: '50vh', border: '1px solid black' }}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Latest Added Employers</Card.Title>
                                <Card.Text>

                                </Card.Text>

                            </Card.Body>

                        </Card>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Username</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Mark</td>
                                    <td>Mark12345@gmail.com</td>
                                </tr>
                                <tr>
                                <td>Mark</td>
                                    <td>Mark12345@gmail.com</td>
                                </tr>
                                <tr>
                                <td>Mark</td>
                                    <td>Mark12345@gmail.com</td>
                                </tr>
                                <tr>
                                <td>Mark</td>
                                    <td>Mark12345@gmail.com</td>
                                </tr>
                                <tr>
                                <td>Mark</td>
                                    <td>Mark12345@gmail.com</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AppliedJobs;