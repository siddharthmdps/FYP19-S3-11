import React, { Component } from 'react';
import '../styles/PostJob.css';
import apiURL from '../../config';
import { Card, Container, Form, Row, Col } from 'react-bootstrap';
import Button1 from '../common_assets/Button1/Button1';
import classes from './PostJob.module.css';


class PostJob extends Component {

    empid = localStorage.getItem('id');
    state = {
        title: "",
        industry: "",
        requiredskills: "",
        yearsofexperience: "",
        description: "",
        loading: false
    }

    postJob = () => {
        this.setState({ loading: true })
        const job = {
            empid: this.empid,
            title: this.state.title,
            description: this.state.description,
            industry: this.state.industry,
            requiredskills: this.state.requiredskills,
            yearsofexperience: this.state.yearsofexperience
        }

        if (job.title === "" || job.desc === "" || job.industry === "" || job.skills === "") alert('Please fill in all the required fields')
        else {
            const url = apiURL + "employer/postjob"
            const localhost = 'http://localhost:3001/employer/postjob/'

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(job)
            })
                .then(res => res.json())
                .then(data => {
                    this.setState({ loading: false })
                    if (data.message === 'success') {
                        alert('Job posted!')
                        document.location.reload(true)
                    }
                })
                .catch(error => console.log(error))
        }
    }

    SpinningWheel = () => {
        if (this.state.loading) {
            return (
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            )
        } else return null
    }

    changeTitleHandler = event => {
        console.log(event.target.value);
        this.setState({title: event.target.value});
    }

    changeIndustryHandler = event => {
        console.log(event.target.value);
        this.setState({industry: event.target.value});
    }

    changeRequiredSkillsHandler = event => {
        console.log(event.target.value);
        this.setState({requiredskills: event.target.value});
    }

    changeYearsOfExperienceHandler = event => {
        console.log(event.target.value);
        this.setState({yearsofexperience: event.target.value});
    }

    changeDescriptionHandler = event => {
        console.log(event.target.value);
        this.setState({description: event.target.value});
    }

    render() {
        document.body.style = 
        'background: linear-gradient(to right, #0f2027, #203a43, #2c5364);';
        return (
            <React.Fragment>
                <Col className={classes.Container} md={{ offset: 3, span: 6 }}>
                    <Card>
                        <Card.Body>
                            <Form.Group as={Row} controlId="JobTitle" style={{ textAlign: 'center' }}>
                                <Form.Label column sm='3'>Job Title</Form.Label>
                                <Col sm='8'> <Form.Control type='text' placeholder="Software Engineer" value={this.state.title} onChange={this.changeTitleHandler} /> </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="Industry" style={{ textAlign: 'center' }}>
                                <Form.Label column sm='3'>Industry</Form.Label>
                                <Col sm='8'> 
                                    <Form.Control as="select" placeholder="IT/Software" value={this.state.industry} onChange={this.changeIndustryHandler} >
                                        <option value="">Choose...</option>
                                        <option value="Engineering">Engineering</option>
                                        <option value="Business">Business</option>
                                        <option value="Accountancy">Accountancy</option>
                                        <option value="IT">IT</option>
                                    </Form.Control> 
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="RequiredSkills" style={{ textAlign: 'center' }}>
                                <Form.Label column sm='3'>Required Skills</Form.Label>
                                <Col sm='8'> <Form.Control type='text' placeholder="C++, SQL... etc" value={this.state.requiredskills} onChange={this.changeRequiredSkillsHandler} /> </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="YearsOfExperience" style={{ textAlign: 'center', whiteSpace: 'nowrap' }}>
                                <Form.Label column sm='3'>Years of Experience</Form.Label>
                                <Col sm='8'> <Form.Control type='text' placeholder="3 years" value={this.state.yearsofexperience} onChange={this.changeYearsOfExperienceHandler} /> </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="Description" style={{ textAlign: 'center' }}>
                                <Form.Label column sm='3'>Description</Form.Label>
                                <Col sm='8'> <Form.Control style={{height: '45vh'}} as='textarea' rows="5" placeholder="Description..." value={this.state.description} onChange={this.changeDescriptionHandler} /> </Col>
                            </Form.Group>
                            <div style={{ textAlign: 'center' }}>
                                <Button1 click={this.postJob}>
                                    Submit
                                </Button1>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </React.Fragment>
            // <div className="container rounded shadow-sm" id="postjob-container">
            //         <div className="row">
            //             <div className="col-sm-3">
            //                 <label htmlFor="">Job Title</label>
            //             </div>
            //             <div className="col-sm-9">
            //                 <input type="text" className="form-control" id="job-title"/>
            //             </div>

            //             <div className="w-100"></div>
            //             <div className="col-sm-3">
            //                 <label htmlFor="">Description</label>
            //             </div>
            //             <div className="col-sm-9">
            //                 <input type="text" className="form-control" id="job-desc" align="left|top"/>
            //             </div>

            //             <div className="w-100"></div>
            //             <div className="col-sm-3">
            //                 <label htmlFor="">Industry</label>
            //             </div>
            //             <div className="col-sm-9">
            //                 <select className="custom-select" id="job-industry">
            //                     <option selected>Choose...</option>
            //                     <option value="Engineering">Engineering</option>
            //                     <option value="Business">Business</option>
            //                     <option value="Account">Account</option>
            //                 </select>
            //             </div>

            //             <div className="w-100"></div>
            //             <div className="col-sm-3">
            //                 <label htmlFor="">Required Skills</label>
            //             </div>
            //             <div className="col-sm-9">
            //                 <input type="text" className="form-control" id="job-skills"/>
            //             </div>

            //             <div className="w-100"></div>
            //             <div className="col-sm-3">
            //                 <label htmlFor="">Years of Experience</label>
            //             </div>
            //             <div className="col-sm-9">
            //                 <input type="number" className="form-control" id="yearsofexperience"/>
            //             </div>

            //             <div className="w-100"></div>
            //             <button className="btn btn-dark btn-lg btn-block post-job-btn" onClick={this.postJob}>
            //                 Submit
            //             </button>
            //             <this.SpinningWheel/>
            //         </div>
            // </div>
        )
    }
}


export default PostJob