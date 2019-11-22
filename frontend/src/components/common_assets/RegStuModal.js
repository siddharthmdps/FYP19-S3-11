import React, { Component } from 'react'
import { Modal, Button, Row, Col, Form, InputGroup } from 'react-bootstrap'
import Snackbar from '@material-ui/core/SnackBar'
import IconButton from '@material-ui/core/IconButton'

export class RegStuModal extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = { snackbaropen: false, snackbarmsg: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    snackbarClose = (event) => {
        this.setState({ snackbaropen: false });
    };
    handleSubmit(event) {
        event.preventDefault();
        fetch('https://pegasus-backend.herokuapp.com/createuser', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname: event.target.firstname.value,
                middlename: event.target.middlename.value,
                lastname: event.target.lastname.value,
                email: event.target.email.value,
                phone: event.target.phone.value,
                country: event.target.country.value,
                city: event.target.city.value,
                currentaddress: event.target.currentaddress.value,
                postalcode: event.target.postalcode.value,
                nationality: event.target.nationality.value,
                username: event.target.username.value,
                password: event.target.password.value,
                usertype: event.target.usertype.value
            })
        })
            .then(res => res.json())
            .then((result) => {
                //alert(result);
                this.setState({ snackbaropen: true, snackbarmsg: 'You have successfully created your account!' });
                this.timer = setTimeout(() => { window.location.href = '/' }, 1000);
            },
                (error) => {
                    //alert('Failed')
                    this.setState({ snackbaropen: true, snackbarmsg: 'Failed to create your account...' });
                }
            )
    }

    render() {
        return (
            <div className="container">
                <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    open={this.state.snackbaropen}
                    autoHideDuration={5000}
                    onClose={this.snackbarClose}

                    message={<span id="message-id">{this.state.snackbarmsg}</span>}
                    action={[
                        <IconButton
                            key="close"
                            arial-label="close"
                            color="inherit"
                            onClick={this.snackbarClose}
                        >
                            x
                </IconButton>
                    ]}
                />
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Register New Student Account
        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={12}>
                                <Form onSubmit={this.handleSubmit} >

                                    <Form.Group controlId="usertype">
                                        <Form.Label>User Type:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="usertype"
                                            required
                                            disabled
                                            defaultValue="student"
                                            placeholder=""></Form.Control>
                                    </Form.Group>

                                    <Form.Row>
                                        <Form.Group as={Col} controlId="firstname">
                                            <Form.Label>First Name:</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="firstname"
                                                required
                                                placeholder=""></Form.Control>
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="middlename">
                                            <Form.Label>Middle Name:</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="middlename"
                                                required
                                                placeholder=""></Form.Control>
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="lastname">
                                            <Form.Label>Last Name:</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="lastname"
                                                required
                                                placeholder=""></Form.Control>
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col} controlId="email">
                                            <Form.Label>E-mail:</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                required
                                                placeholder=""></Form.Control>
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="phone">
                                            <Form.Label>Phone No.:</Form.Label>
                                            <Form.Control
                                                type="number"
                                                name="phone"
                                                required
                                                placeholder=""></Form.Control>
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Group controlId="currentaddress">
                                        <Form.Label>Current Address:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="currentaddress"
                                            required
                                            placeholder=""></Form.Control>
                                    </Form.Group>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="country">
                                            <Form.Label>Country:</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="country"
                                                required
                                                placeholder=""></Form.Control>
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="city">
                                            <Form.Label>City:</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="city"
                                                required
                                                placeholder=""></Form.Control>
                                        </Form.Group>



                                        <Form.Group as={Col} controlId="postalcode">
                                            <Form.Label>Postal code:</Form.Label>
                                            <Form.Control
                                                type="number"
                                                name="postalcode"
                                                required
                                                placeholder=""></Form.Control>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Group controlId="nationality">
                                        <Form.Label>Nationality:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="nationality"
                                            required
                                            placeholder=""></Form.Control>
                                    </Form.Group>
                                    <Form.Row>
                                        <Form.Group as={Col} sm='6' controlId="username">
                                            <Form.Label>Username:</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control
                                                    type="text"
                                                    name="username"
                                                    required
                                                    placeholder=""></Form.Control>
                                            </InputGroup>
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="password">
                                            <Form.Label>Password:</Form.Label>
                                            <Form.Control
                                                type="password"
                                                name="password"
                                                required
                                                placeholder=""></Form.Control>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Group>
                                        <Button variant="outline-success" type="submit">
                                            Register New Student Account
                                        </Button>
                                    </Form.Group>

                                </Form>

                            </Col>

                        </Row>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
