import React from 'react'
import {Col, Row, Card, Container} from 'react-bootstrap';
import './SignUp.css'
import classes from './Signup.module.css';

class Signup extends React.Component {
    constructor() {
        super()
        this.state = {
            usertype: "student"
        }
    }

    studentForm = () => {
        return (
            <div id="create-account">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label for="firstName">First name</label>
                        <input type="text" className="form-control" id="firstname" required="" />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label for="lastName">Last name</label>
                        <input type="text" className="form-control" id="lastname" required="" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Username</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" id="username" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Email</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" id="email" placeholder="you@example.com" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Address</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" id="address" placeholder="Block 123, #20-123, ABC Street" />
                    </div>
                </div>

                <div className="mb-3 job-experience">
                    <label for="job-experience">Job Experience <span className="text-muted">(Optional)</span></label>
                    <input type="text" className="form-control" id="jobexperience" placeholder="Describe your past experience" />
                </div>

                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Password</label>
                    <div className="col-sm-8">
                        <input type="password" className="form-control" id="password" placeholder="" />
                    </div>
                </div>
            </div>
        )
    }

    employerForm = () => {
        return (
            <div>
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Username</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" id="username" placeholder="" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Email</label>
                    <div className="col-sm-8">
                        <input type="email" className="form-control" id="companyemail" placeholder="username@example.com" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Company Name</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" id="companyname" placeholder="" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Phone</label>
                    <div className="col-sm-8">
                        <input type="tel" minLength="8" maxLength="8" className="form-control" id="companyphone" placeholder="" />
                    </div>
                </div>
                <div className="form-group">
                    <label>Describe your company</label>
                    <input type="text" className="form-control" id="companydescription" placeholder="" />
                </div>
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Address</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" id="companyaddress" placeholder="" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Industry</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" id="industry" placeholder="" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label">Password</label>
                    <div className="col-sm-8">
                        <input type="password" className="form-control" id="password" placeholder="" />
                    </div>
                </div>
            </div>
        )
    }

    signUpForm = () => {
        switch (this.state.usertype) {
            case "student": return <this.studentForm />
            case "employer": return <this.employerForm />
        }
    }

    setUserType = () => {
        const usertype = document.getElementById("usertype-select").value
        this.setState({
            usertype: usertype
        })
    }

    userTypeSelector = () => {
        return (
            <div className="container" id="btn-group-container">

                <select class="custom-select" id="usertype-select" onChange={this.setUserType}>
                    <option selected>Select user type</option>
                    <option value="student">Student</option>
                    <option value="employer">Employer</option>
                </select>
            </div>
        )
    }

    createAccount = () => {
        console.log(`submitting form for a new ${this.state.usertype}`)
        let userDetails = null;
        switch (this.state.usertype) {
            case "student":
                const studentDetails = {
                    firstname: document.getElementById('firstname').value,
                    lastname: document.getElementById('lastname').value,
                    email: document.getElementById('email').value,
                    address: document.getElementById('address').value,
                    jobexperience: document.getElementById('jobexperience').value,
                    password: document.getElementById('password').value,
                    usertype: this.state.usertype
                }
                userDetails = studentDetails
                break;
            case "employer":
                const employerDetails = {
                    username: document.getElementById('username').value,
                    companyemail: document.getElementById('companyemail').value,
                    companyname: document.getElementById('companyname').value,
                    companyphone: document.getElementById('companyphone').value,
                    companydescription: document.getElementById('companydescription').value,
                    companyaddress: document.getElementById('companyaddress').value,
                    industry: document.getElementById('industry').value,
                    password: document.getElementById('password').value,
                    usertype: this.state.usertype
                }
                userDetails = employerDetails
                break;
        }
        console.log(`sending form`, userDetails)

        // verify
        let formIsValid = true
        for (let index in userDetails) {
            if (userDetails[index] === null || userDetails[index] === '')
                formIsValid = false
        }

        if (formIsValid) {
            // post to backend
            const apiURL = "https://pegasus-backend.herokuapp.com/createuser"
            const localhost = "http://localhost:3001/createuser"
            fetch(apiURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userDetails)
            })
                .then(response => response.json())
                .then(data => {
                    console.log(`response from server`, data)

                    if (data.message === "success") {
                        alert(`New user created successfully`)
                    }
                })
                .catch(error => {
                    console.log(`response from server`, error)
                    alert(`Failed to create new user. Please try again.`)
                })
        }
        else alert(`Please fill in all the required fields`)
    }

    render() {
        return (
            <div className="container create-account main">
                <div className="py-3 text-center" id="header-div">
                    <h2><a href="/" id="pegasus-tag">Pegasus</a></h2>
                    <p className="font-weight-light ">Kick start your professional career</p>
                </div>
                <this.userTypeSelector />

                <div className="container">
                    <this.signUpForm />
                    <button className="btn btn-dark btn-lg btn-block create-account" onClick={this.createAccount}>Create Account</button>
                </div>
            </div>
            // <React.Fragment>
            //     <Row className={classes.Container}>
            //         <Col md={{span: 6, offset: 3}} className={classes.MainBody}>
            //             <Card>
            //                 <Card.Body>
            //                     Hello
            //                 </Card.Body>
            //             </Card>
            //         </Col>
            //     </Row>
            // </React.Fragment>
        )
    }
}



export default Signup