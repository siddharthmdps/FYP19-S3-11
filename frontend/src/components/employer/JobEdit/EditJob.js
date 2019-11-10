
import React, { Component } from 'react';
import { Card, Form, Button, Col, Row } from 'react-bootstrap';
import '../ProfileView/Card.css';
import apiURL from '../../../config';

class EditJob extends Component {
    constructor(props) {
        super()
        this.props = props
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            jobtitle: props.jobtitle,
            jobdescription: props.jobdescrition,
            joblocation: props.joblocation,
            jobindustry: props.jobindutry,
            jobskills: props.jobskills
        }
        this.employername = localStorage.getItem('username')
    }

    MyForm = () => {
        return (
            <Card>
                <Card.Header>
                    <Card.Title>
                        <Form.Group controlId="jobtitle">
                            <Row>
                                <Col md={11}>
                                    <Form.Label>Job Title</Form.Label>
                                </Col>
                                <Col md={1}>
                                    <Button variant="dark" type="submit"><i class="far fa-trash-alt"></i> </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <Form.Control type='text' defaultValue={this.state.jobtitle} onChange={this.handleChange} />
                                </Col>

                            </Row>
                        </Form.Group>

                    </Card.Title>
                </Card.Header>

                <Card.Body>
                    <Card.Text>
                        <Form>
                            <Form.Group as={Row} controlId="formPlaintextCompanyName">
                                <Form.Label column sm="2"> Company Name </Form.Label>
                                <Col sm="10">
                                    <Form.Control plaintext readOnly defaultValue={this.employername} />
                                </Col>
                            </Form.Group>
                            <Form.Group controlId="formJobLocation">
                                <Form.Label>Job Location</Form.Label>
                                <Row >
                                    <Col md={6}>
                                        <Form.Control type="text" defaultValue={this.props.joblocation} onChange={this.handleChange} />
                                    </Col>
                                </Row>
                            </Form.Group>

                            <Form.Group controlId="formJobIndustry">
                                <Form.Label>Industry</Form.Label>
                                <Row >
                                    <Col md={6}>
                                        <Form.Control type="text" defaultValue={this.props.jobindustry} onChange={this.handleChange} />
                                    </Col>
                                </Row>

                            </Form.Group>
                            <Form.Group controlId="formJobDescription">
                                <Form.Label>Job Description</Form.Label>
                                <Row>
                                    <Col md={8}>
                                        <Form.Control as="textarea" rows="8" defaultValue={this.props.jobdescription} onChange={this.handleChange} />
                                    </Col>
                                </Row>

                            </Form.Group>
                            <Form.Group controlId="formSkillsRequired">
                                <Form.Label>Skills Required</Form.Label>
                                <Row>
                                    <Col md={8}>
                                        <Form.Control as="textarea" rows="3" defaultValue={this.props.jobskills} onChange={this.handleChange} />
                                    </Col>
                                </Row>

                            </Form.Group>
                            <Row>
                                <Col md={1}>
                                    <Button variant="danger" type="submit"> Cancel </Button>
                                </Col>
                                <Col md={10}></Col>
                                <Col md={1}>
                                    <Button variant="primary" type="submit" onClick={this.props.mainPageHandler}> Save </Button>
                                </Col>
                            </Row>

                        </Form>
                    </Card.Text>

                    {/* update props.dateposted */}
                </Card.Body>

            </Card>
        )
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    handleSave(event) {
        const job = {
            empid: localStorage.getItem('id'),
            title: this.state.jobtitle,
            description: this.state.jobdescription,
            industry: this.state.jobindustry,
            requiredskills: this.state.jobskills
        }

        const url = `${apiURL}employer/employerinfo/savejob/${this.props.jobID}`
        const localhost = `http://localhost:3001/employer/savejob/${this.props.jobID}`

        fetch(localhost, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(job)
        })
            .then(res => res.json())
            .then(data => {
                if (data.message === 'success') {
                    alert('Job updated!')
                    document.location.reload(true)
                }
            })
            .catch(error => console.log(error))

    }

    render() {
        return (
            <Col sm={8} className="mx-auto">
                {this.MyForm()}
            </Col>
        )
    }
};


export default EditJob;
