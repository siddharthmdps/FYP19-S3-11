
import React, { Component } from 'react';
import { Card, Form, Button, Col, Row } from 'react-bootstrap';
import '../ProfileView/Card.css';
import apiURL from '../../../config';

import Axios from 'axios';

class EditJob extends Component {
    constructor(props) {
        super()
        this.props = props
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            jobtitle: "",
            jobdescription: "",
            joblocation: "",
            jobindustry: "",
            // jobskills: props.jobskills
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
                                        <Form.Control type="text" defaultValue={this.state.joblocation} onChange={this.handleChange} />
                                    </Col>
                                </Row>
                            </Form.Group>

                            <Form.Group controlId="formJobIndustry">
                                <Form.Label>Industry</Form.Label>
                                <Row >
                                    <Col md={6}>
                                        <Form.Control type="text" defaultValue={this.state.jobindustry} onChange={this.handleChange} />
                                    </Col>
                                </Row>

                            </Form.Group>
                            <Form.Group controlId="formJobDescription">
                                <Form.Label>Job Description</Form.Label>
                                <Row>
                                    <Col md={8}>
                                        <Form.Control as="textarea" rows="8" defaultValue={this.state.jobdescription} onChange={this.handleChange} />
                                    </Col>
                                </Row>

                            </Form.Group>
                            {/* <Form.Group controlId="formSkillsRequired">
                                <Form.Label>Skills Required</Form.Label>
                                <Row>
                                    <Col md={8}>
                                        <Form.Control as="textarea" rows="3" defaultValue={this.props.jobskills} onChange={this.handleChange} />
                                    </Col>
                                </Row>

                            </Form.Group> */}
                            <Row>
                                <Col md={1}>
                                    <Button variant="danger" onClick={(event) => this.handleCancel(event)}> Cancel </Button>
                                </Col>
                                <Col md={10}></Col>
                                <Col md={1}>
                                    <Button variant="primary" type="submit" onClick={(event) => this.handleSave(event)}> Save </Button>
                                </Col>
                            </Row>

                        </Form>
                    </Card.Text>

                    {/* update props.dateposted */}
                </Card.Body>

            </Card>
        )
    }

    getJobDetails() {
        const { jobid } = this.props.match.params;

        //Get Job data
        Axios.get(`${apiURL}employer/getjobinfo/${jobid}`)
            .then(response => {
                // console.log(jobid, response.data);
                let temp = {
                    title: response.data[0]['title'],
                    companyName: response.data[0]['empid'],
                    reqSkills: response.data[0]['requiredskills'],
                    joblocation: response.data[0]['location'],
                    jobindustry: response.data[0]['industry'],
                    dateposted: response.data[0]['dateposted'],
                    jobdescription: response.data[0]['description']
                };
                console.log(temp);
                this.setState({
                    jobtitle: temp.title,
                    jobdescription: temp.jobdescription,
                    joblocation: temp.joblocation,
                    jobindustry: temp.jobindustry
                });
                // editJobHandler={this.props.editJobHandler}
            })
            .catch(error => {
                console.log("error getting job details");
            })
    }

    componentDidMount() {
        this.getJobDetails()
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    handleSave(event) {
        const { jobid } = this.props.match.params;

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

        let target = `/employer/viewjob/${jobid}`
        this.props.history.push(target)
    }

    handleCancel(event) {
        const { jobid } = this.props.match.params;
        let target = `/employer/viewjob/${jobid}`
        this.props.history.push(target)
    }

    handleDelete(jobId) {
        //Get Job data
        // Axios.put(`${apiURL}admin/deletejob${jobId}`)
        //     .then(response => {
        //         // console.log(jobid, response.data);
        //         let temp = {
        //             title: response.data[0]['title'],
        //             companyName: response.data[0]['empid'],
        //             reqSkills: response.data[0]['requiredskills'],
        //             joblocation: response.data[0]['location'],
        //             jobindustry: response.data[0]['industry'],
        //             dateposted: response.data[0]['dateposted'],
        //             jobdescription: response.data[0]['description']
        //         };
        //         // console.log(temp);
        //         this.setState({
        //             jobtitle: temp.title,
        //             jobdescription: temp.jobdescription,
        //             joblocation: temp.joblocation,
        //             jobindustry: temp.jobindustry
        //         });
        //         // editJobHandler={this.props.editJobHandler}
        //     })
        //     .catch(error => {
        //         console.log("error deleting job details");
        //     })
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
