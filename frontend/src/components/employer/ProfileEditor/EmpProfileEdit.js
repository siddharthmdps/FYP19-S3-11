import React, { Component } from 'react';
import { Card, Col, Row, Form, Button } from 'react-bootstrap'
import '../ProfileView/Card.css'
import apiURL from '../../../config'



//This is the edit profile page for employers.
class EmpProfileEdit extends Component {
    constructor(props) {
        super()
        this.props = props
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            companyName: props.companyName,
            companyPhone: props.companyPhone,
            companyEmail: props.companyEmail,
            industry: props.industry
        }
        this.employername = localStorage.getItem('username')
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    updateProfile = () => {
        // //console.log(`Updating profile of ${props.empID}`)
        // const newEmpInfo = {
        //     companyname: document.getElementById("CompanyName").value,
        //     companyphone: document.getElementById("CompanyPhone").value,
        //     industry: document.getElementById("CompanyIndustry").value,
        //     companydescription: document.getElementById("CompanyDescription").value
        // }

        // const url = `${apiURL}employer/${props.empID}`
        // //const localhost = `http://localhost:3001/employer/${props.empID}`
        // fetch(url, {
        //     method: 'PUT',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(newEmpInfo)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data.message)
        //         alert('Profile Editted')
        //         document.location.reload(true)
        //     })
        //     .catch(error => { console.log(error) })
    }

    // return (
    //     <div>
    //         <div className="wrapper">
    //             <ProfileContainer companyName={props.companyName} buttonText="Find out more" />
    //             <div className="card pad100 mar50">
    //                 <div className="card-body centered">
    //                     <BasicFormField pid="CompanyName" title="Company Name" defaultValue={props.companyName} />
    //                     <br />
    //                     <BasicFormField pid="CompanyPhone" title="Company Phone" defaultValue={props.companyPhone} />
    //                     <br />
    //                     <SelectFormField pid="CompanyIndustry" title="Industry" defaultValue={props.industry} />
    //                     <br />
    //                     <AreaFormField pid="CompanyDescription" title="Company Description" defaultValue={props.companyDescription} />
    //                     <br />
    //                     <button className="btn btn-outline-secondary"
    //                         onClick={updateProfile}>
    //                         Save Changes
    //                 </button>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>

    // )
    render() {
        return (

            <div>
                <div className="wrapper">
                    <Row>
                        <Col md={2} />
                        <Col md={8}>
                            <Card>
                                <Card.Header>
                                    <Card.Title>
                                        <Form.Group controlId="jobtitle">
                                            <Row>
                                                <Col md={11}>
                                                    <Form.Label>Company Name</Form.Label>
                                                </Col>
                                                <Col md={1} />
                                            </Row>
                                            <Row>
                                                <Col md={6}>
                                                    <Form.Control type='text' defaultValue={this.props.companyName} />
                                                </Col>

                                            </Row>
                                        </Form.Group>
                                    </Card.Title>

                                </Card.Header>
                                <Card.Body>
                                    <Col md={2}></Col>
                                    <Col md={8}>
                                        <Form>
                                            <Form.Group as={Row} controlId="companyName">
                                                <Form.Label column sm="2">Company Phone</Form.Label>
                                                <Col sm={10}>
                                                    <Form.Control type="text" defaultValue={this.props.companyPhone} />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} controlId="companyEmail">
                                                <Form.Label column sm="2">Company Email</Form.Label>
                                                <Col sm={10}>
                                                    <Form.Control type="email" defaultValue={this.props.companyEmail} />
                                                </Col>
                                            </Form.Group>
                                            {/* <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
                                            <Form.Label column sm="2">Example select</Form.Label>
                                            <Col sm={10}>
                                                <Form.Control as="select">
                                                    <option>Engineering</option>
                                                    <option>IT</option>
                                                    <option>Business</option>
                                                    <option>Accountancy</option>
                                                    <option>Finance</option>
                                                </Form.Control>
                                            </Col>
                                        </Form.Group> */}
                                            <Form.Group as={Row} controlId="industry">
                                                <Form.Label column sm="2">Industry</Form.Label>
                                                <Col sm={10}>
                                                    <Form.Control type="text" defaultValue={this.props.industry} />
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} controlId="companyDescription">
                                                <Form.Label column sm="2">Company Description</Form.Label>
                                                <Col sm={10}>
                                                    <Form.Control type="text" defaultValue={this.props.companyDescription} />
                                                </Col>
                                            </Form.Group>
                                        </Form>

                                    </Col>

                                    <Col md={2}></Col>
                                    <Row>
                                        <Col md={1}>
                                            <Button variant="danger" type="submit"> Cancel </Button>
                                        </Col>
                                        <Col md={10}></Col>
                                        <Col md={1}>
                                            <Button variant="primary" type="submit" onClick={this.updateProfile}> Save </Button>
                                        </Col>
                                    </Row>

                                </Card.Body>
                            </Card>

                        </Col>
                        <Col md={2} />
                    </Row>




                </div>
            </div >

        )
    }
};

export default EmpProfileEdit;
