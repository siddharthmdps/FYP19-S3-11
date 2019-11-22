import React, { Component } from 'react'
import { Modal, Button, Row, Col, Form, InputGroup } from 'react-bootstrap'
import Snackbar from '@material-ui/core/SnackBar'
import IconButton from '@material-ui/core/IconButton'

export class EditCanModal extends Component {
    constructor(props) {
        super(props);
        this.state = { snackbaropen: false, snackbarmsg: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.refresh = this.refresh.bind(this);
    }

    snackbarClose = (event) => {
        this.setState({ snackbaropen: false });
    };
    refresh() {
        console.log("asdf");
    }
    handleSubmit(event) {
        event.preventDefault();

        fetch('https://pegasus-backend.herokuapp.com/admin/editstudent/' + event.target.id.value, {
            method: 'PUT',
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
            })
        })
            .then(res => res.json())
            .then((result) => {
                //alert(result);
                this.setState({ snackbaropen: true, snackbarmsg: 'Successfully updated student account!' });
            },
                (error) => {
                    //alert('Failed')
                    this.setState({ snackbaropen: true, snackbarmsg: 'Failed to update student account...' });
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
                            Edit Student Account
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={12}>
                                <Form onSubmit={this.handleSubmit}>

                                    <Form.Group controlId="id">
                                        <Form.Label>Student Account ID:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="id"
                                            required
                                            disabled
                                            defaultValue={this.props.id}
                                            placeholder="id"></Form.Control>
                                    </Form.Group>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="firstname">
                                            <Form.Label>First Name:</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="firstname"
                                                required
                                                defaultValue={this.props.firstname}
                                                placeholder=""></Form.Control>
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="middlename">
                                            <Form.Label>Middle Name:</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="middlename"
                                                required
                                                defaultValue={this.props.middlename}
                                                placeholder=""></Form.Control>
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="lastname">
                                            <Form.Label>Last Name:</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="lastname"
                                                required
                                                defaultValue={this.props.lastname}
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
                                                defaultValue={this.props.email}
                                                placeholder=""></Form.Control>
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="phone">
                                            <Form.Label>Phone Number:</Form.Label>
                                            <Form.Control
                                                type="number"
                                                name="phone"
                                                required
                                                defaultValue={this.props.phone}
                                                placeholder=""></Form.Control>
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Group controlId="currentaddress">
                                        <Form.Label>Current Address:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="currentaddress"
                                            required
                                            defaultValue={this.props.currentaddress}
                                            placeholder=""></Form.Control>
                                    </Form.Group>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="country">
                                            <Form.Label>Country:</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="country"
                                                required
                                                defaultValue={this.props.country}
                                                placeholder=""></Form.Control>
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="city">
                                            <Form.Label>City:</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="city"
                                                required
                                                defaultValue={this.props.city}
                                                placeholder=""></Form.Control>
                                        </Form.Group>



                                        <Form.Group as={Col} controlId="postalcode">
                                            <Form.Label>Postal Code:</Form.Label>
                                            <Form.Control
                                                type="number"
                                                name="postalcode"
                                                required
                                                defaultValue={this.props.postalcode}
                                                placeholder=""></Form.Control>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Group controlId="nationality">
                                        <Form.Label>Nationality:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="nationality"
                                            required
                                            defaultValue={this.props.nationality}
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
                                                    name="username"
                                                    required
                                                    defaultValue={this.props.username}
                                                    placeholder=""></Form.Control>
                                            </InputGroup>
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="password">
                                            <Form.Label>Password:</Form.Label>
                                            <Form.Control
                                                type="password"
                                                name="password"

                                                placeholder="Leave blank if unchanged"></Form.Control>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Group>
                                        <Button variant="outline-success" type="submit">
                                            Update Student Account
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