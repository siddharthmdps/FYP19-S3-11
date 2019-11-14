import React from 'react';
import ProfileContainer from '../Components/LeftSide/CompanyInfo';
import classes from './EmpEditProfile.module.css'
import apiURL from '../../../config'
import Button from '../../common_assets/Button1/Button1'
import Axios from 'axios';
import { Card, Form, Row, Col, Container } from 'react-bootstrap';


class EmpEditProfile extends React.Component {

    empID = localStorage.getItem('id')
    state = {
        username: localStorage.getItem('username'),
        companyname: "",
        companyphone: "",
        companydescription: "",
        companyaddress: "",
        industry: "",
        loading: false
    }

    updateProfile = () => {
        this.setState({ loading: true })
        //console.log(`Updating profile of ${props.empID}`)
        const newEmpInfo = {
            companyname         : this.state.companyname,
            companyphone        : this.state.companyphone,
            industry            : this.state.industry,
            companydescription  : this.state.companydescription
        }

        const url = `${apiURL}employer/${this.empID}`
        //const localhost = `http://localhost:3001/employer/${props.empID}`
        fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newEmpInfo)
        })
            .then(res => res.json())
            .then(data => {
                this.setState({ loading: false })
                console.log(data.message)
                alert('Profile Editted')
                document.location.reload(true)
            })
            .catch(error => { console.log(error) })
    }

    componentDidMount() {
        Axios.get(`${apiURL}employer/employerinfo/${this.empID}`)
            .then(response => {
                this.setState({
                    companyname: response.data.body[0].companyname,
                    companyphone: response.data.body[0].companyphone,
                    companydescription: response.data.body[0].companydescription,
                    companyaddress: response.data.body[0].companyaddress,
                    industry: response.data.body[0].industry
                })
                console.log(response.data);
            })
            .catch(error => {
                alert(`failed to fetch employer details : ${error}`)
            })
    }

    companyNameChangeHandler = event => {
        console.log(event.target.value);
        this.setState({ companyname: event.target.value });
    }

    companyPhoneChangeHandler = event => {
        console.log(event.target.value);
        this.setState({ companyphone: event.target.value });
    }

    companyIndustryChangeHandler = event => {
        console.log(event.target.value);
        this.setState({ industry: event.target.value });
    }

    companyDescriptionChangeHandler = event => {
        console.log(event.target.value);
        this.setState({ companydescription: event.target.value });
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

    EditForm = () => {
        document.body.style =
            'background: linear-gradient(to right, #0f2027, #203a43, #2c5364);';
        return (
            <Container fluid>
                <Row>
                    <Col sm={12} md={{span:2, offset: 1}}>
                        <Card style={{borderRadius: '50px', background: 'transparent'}}>
                            <Card.Body>
                                <ProfileContainer buttonText="Find out more" />
                                <div style={{textAlign: 'center'}}>
                                    <Button>Upload</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={8}>
                        <Card className={classes.EditProfile}>
                            <Card.Body>
                                <Form.Group controlId="CompanyName" as={Row}>
                                    <Form.Label column sm="3">Company Name</Form.Label>
                                    <Col sm="9"><Form.Control type="text" placeholder="Abcd Pte. Ltd." value={this.state.companyname} onChange={event => this.companyNameChangeHandler(event)} /></Col>
                                </Form.Group>

                                <Form.Group controlId="CompanyPhone" as={Row}>
                                    <Form.Label column sm="3">Company Phone</Form.Label>
                                    <Col sm="9"><Form.Control type="text" placeholder="12345678" value={this.state.companyphone} onChange={event => this.companyPhoneChangeHandler(event)} /></Col>
                                </Form.Group>

                                <Form.Group controlId="CompanyIndustry" as={Row}>
                                    <Form.Label column sm="3">Industry</Form.Label>
                                    <Col sm="9">
                                        <Form.Control as="select" placeholder="IT" value={this.state.industry} onChange={event => this.companyIndustryChangeHandler(event)}>
                                            <option value="">Choose...</option>
                                            <option value="Engineering">Engineering</option>
                                            <option value="Business">Business</option>
                                            <option value="Accountancy">Accountancy</option>
                                            <option value="IT">IT</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>

                                <Form.Group controlId="CompanyDescription" as={Row} >
                                    <Form.Label column sm="3">Company Description</Form.Label>
                                    <Col sm="9"><Form.Control style={{ height: '50vh' }} as="textarea" rows="15" placeholder="Description..." value={this.state.companydescription} onChange={event => this.companyDescriptionChangeHandler(event)} /></Col>
                                </Form.Group>

                                <Button click={this.updateProfile}>Submit</Button>

                                <this.SpinningWheel />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


            </Container>
        )
    }

    render() {
        return <this.EditForm />
    }
}



export default EmpEditProfile;
