
import React, { Component } from 'react';
import { Card, Form, Button, Col, Row } from 'react-bootstrap';
import '../ProfileView/Card.css';
import apiURL from '../../../config';

import Axios from 'axios';

import industries from '../../common_assets/CommonLists/Industries'
import locations from '../../common_assets/CommonLists/Locations'
import workExpReqList from '../../common_assets/CommonLists/WorkExpReqList'

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
            yearsofexperience: "",
            dateposted: "",
            companyName: ""
            // jobskills: props.jobskills
        }
        // this.employername = localStorage.getItem('username')
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
                                    <Button variant="dark" onClick={(event) => this.handleDelete(event)}><i class="far fa-trash-alt"></i> </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <Form.Control type='text' defaultValue={this.state.jobtitle} onChange={this.changeTitleHandler} />
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
                                    <Form.Control plaintext readOnly defaultValue={this.state.companyName} />
                                </Col>
                            </Form.Group>
                            {/* <Form.Group as={Row} controlId="Location" style={{ textAlign: 'center' }}>
                                <Form.Label column sm='3'>Location</Form.Label>
                                <Col sm='8'>
                                    <Form.Control as="select" value={this.state.location} onChange={this.changeLocationHandler} >
                                        {locations()}
                                    </Form.Control>
                                </Col>
                            </Form.Group> */}

                            <Form.Group as={Row} controlId="formJobLocation">
                                <Form.Label column sm='2'>Job Location</Form.Label>
                                <Col sm={8}>
                                    <Form.Control as="select" defaultValue={this.state.joblocation} onChange={this.changeLocationHandler} >
                                        {locations()}
                                    </Form.Control>
                                </Col>
                                <Col sm={2} />
                            </Form.Group>

                            <Form.Group as={Row} controlId="Industry">
                                <Form.Label column sm='2'>Industry</Form.Label>

                                <Col sm={8}>
                                    <Form.Control as="select" value={this.state.jobindustry} onChange={this.changeIndustryHandler} >
                                        {industries()}
                                    </Form.Control>
                                </Col>
                                <Col sm={2} />


                            </Form.Group>

                            {/* <Form.Group controlId="formJobIndustry">
                                <Form.Label>Industry</Form.Label>
                                <Row >
                                    <Col md={6}>
                                        <Form.Control type="text" defaultValue={this.state.jobindustry} onChange={this.handleChange} />
                                    </Col>
                                </Row>

                            </Form.Group> */}
                            <Form.Group as={Row} controlId="YearsOfExperience">
                                <Form.Label column sm='2'>Work Experience</Form.Label>
                                <Col sm='2'>
                                    <Form.Control type="number" value={this.state.yearsofexperience} onChange={this.changeYearsOfExperienceHandler} />
                                </Col>
                                <Col sm={8} />
                                {/* <Form.Group as={Row} controlId="JobTitle" style={{ textAlign: 'center' }}>
                                <Form.Label column sm='3'>Job Title</Form.Label>
                                <Col sm='8'> <Form.Control type='text' placeholder="Software Engineer" value={this.state.title} onChange={this.changeTitleHandler} /> </Col>
                            </Form.Group> */}
                            </Form.Group>

                            <Form.Group controlId="formJobDescription">
                                <Form.Label>Job Description</Form.Label>
                                <Row>
                                    <Col md={8}>
                                        <Form.Control as="textarea" rows="8" value={this.state.jobdescription} onChange={this.changeDescriptionHandler} />
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
                    companyName: response.data[0]['companyname'],
                    reqSkills: response.data[0]['requiredskills'],
                    joblocation: response.data[0]['location'],
                    jobindustry: response.data[0]['industry'],
                    dateposted: response.data[0]['dateposted'],
                    jobdescription: response.data[0]['description'],
                    yearsofexperience: response.data[0]['yearsofexperience'],
                    empid: response.data[0]['empid'],
                };
                console.log(temp);
                this.setState({
                    jobtitle: temp.title,
                    jobdescription: temp.jobdescription,
                    joblocation: temp.joblocation,
                    jobindustry: temp.jobindustry,
                    yearsofexperience: temp.yearsofexperience,
                    dateposted: temp.dateposted,
                    companyName: temp.companyName

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
    changeTitleHandler = event => {
        // console.log(event.target.value);
        this.setState({ jobtitle: event.target.value });
    }

    changeIndustryHandler = event => {
        // console.log(event.target.value);
        this.setState({ jobindustry: event.target.value });
    }

    // changeRequiredSkillsHandler = event => {
    //     // console.log(event.target.value);
    //     this.setState({ requiredskills: event.target.value });
    // }

    changeYearsOfExperienceHandler = event => {
        // console.log(event.target.value);
        this.setState({ yearsofexperience: event.target.value });
    }

    changeDescriptionHandler = event => {
        // console.log(event.target.value);
        this.setState({ jobdescription: event.target.value });
    }

    changeLocationHandler = event => {
        // console.log(event.target.value);
        this.setState({ joblocation: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    handleSave(event) {
        event.preventDefault()
        const { jobid } = this.props.match.params;

        console.log(this.state.joblocation)

        const job = {
            title: this.state.jobtitle,
            industry: this.state.jobindustry,
            description: this.state.jobdescription,
            requiredskills: this.state.requiredskills,
            dateposted: this.state.dateposted,
            location: this.state.joblocation,
            yearsofexperience: this.state.yearsofexperience
        }

        const url = `${apiURL}admin/editjob/${jobid}`
        const localhost = `http://localhost:3001/admin/editjob/${jobid}`

        fetch(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(job)
        })
            .then(res => res.json())
            .then(data => {
                alert('Job updated!')
                let target = `/employer/viewjob/${jobid}`
                this.timer = setTimeout(() => { window.location.href = target }, 1000);
            })
            .catch(error => console.log(error))


    }

    handleCancel(event) {
        const { jobid } = this.props.match.params;
        let target = `/employer/viewjob/${jobid}`
        this.props.history.push(target)
    }

    handleDelete(event) {
        event.preventDefault()
        const { jobid } = this.props.match.params;
        let url = `${apiURL}admin/deletejob/${jobid}`

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((result) => {
                console.log("Deletion of job successful")
                alert('job deleted')
                let target = `/employer/viewjobs`
                this.props.history.push(target)
                this.timer = setTimeout(() => { window.location.href = target }, 1000);
            },
                (error) => {
                    console.log("Failure in deletion of job detected.")
                }
            )
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
