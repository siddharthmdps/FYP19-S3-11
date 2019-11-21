import React, { Component } from 'react'
import { Modal, Button, Row, Col, Form, InputGroup } from 'react-bootstrap'
import Snackbar from '@material-ui/core/SnackBar'
import IconButton from '@material-ui/core/IconButton'

export class AddEmpModal extends Component {
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
                username: event.target.username.value,
                password: event.target.password.value,
                companyname: event.target.companyname.value,
                companyphone: event.target.companyphone.value,
                companyemail: event.target.companyemail.value,
                companydescription: event.target.companydescription.value,
                companyaddress: event.target.companyaddress.value,
                industry: event.target.industry.value,
                usertype: event.target.usertype.value
            })
        })
            .then(res => res.json())
            .then((result) => {
                //alert(result);
                this.setState({ snackbaropen: true, snackbarmsg: 'Successfully created new employer account!' });
                this.timer = setTimeout(() => { window.location.href = '/admin/employer' }, 1000);
            },
                (error) => {
                    //alert('Failed')
                    this.setState({ snackbaropen: true, snackbarmsg: 'Failed to create new employer account...' });
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
                            Create New Employer Account
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
                                            defaultValue="employer"
                                            placeholder=""></Form.Control>
                                    </Form.Group>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="username">
                                            <Form.Label>Username:</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control
                                                    type="text"
                                                    name="Username"
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

                                    <Form.Group controlId="companyname">
                                        <Form.Label>Company Name:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="companyname"
                                            required
                                            placeholder=""></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId="companydescription">
                                        <Form.Label>Company Description:</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows="3"
                                            type="text"
                                            name="companydescription"
                                            required
                                            placeholder=""></Form.Control>
                                    </Form.Group>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="companyphone">
                                            <Form.Label>Company Phone Number:</Form.Label>
                                            <Form.Control
                                                type="number"
                                                name="companyphone"
                                                required
                                                placeholder=""></Form.Control>
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="companyemail">
                                            <Form.Label>Company E-mail:</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="companyemail"
                                                required
                                                placeholder=""></Form.Control>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Group controlId="companyaddress">
                                        <Form.Label>Company Address:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="companyaddress"
                                            required
                                            placeholder=""></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId="industry">
                                        <Form.Label>Company Industry:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="industry"
                                            required
                                            placeholder=""></Form.Control>
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="outline-success" type="submit">
                                            Create New Employer Account
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
