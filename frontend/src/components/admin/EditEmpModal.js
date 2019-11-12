import React, { Component } from 'react'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap'
import Snackbar from '@material-ui/core/SnackBar'
import IconButton from '@material-ui/core/IconButton'

export class EditEmpModal extends Component {
    constructor(props) {
        super(props);
        this.state = { snackbaropen: false, snackbarmsg: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.refresh = this.refresh.bind(this);
    }

    snackbarClose = (event) => {
        this.setState({ snackbaropen: false });
    };
    refresh(){
        console.log("asdf");
    }
    handleSubmit(event) {
        event.preventDefault();

        fetch('https://pegasus-backend.herokuapp.com/admin/editemployer/' + event.target.id.value, {
            method: 'PUT',
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
                industry: event.target.industry.value
            })
        })
            .then(res => res.json())
            .then((result) => {
                //alert(result);
                this.setState({ snackbaropen: true, snackbarmsg: 'Successfully updated employer account!'});
            },
                (error) => {
                    //alert('Failed')
                    this.setState({ snackbaropen: true, snackbarmsg: 'Failed to update employer account...' });
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
                            Edit Employer Account
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>

                                    <Form.Group controlId="id">
                                        <Form.Label>Employer Account ID:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="id"
                                            required
                                            disabled
                                            defaultValue={this.props.id}
                                            placeholder="id"></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId="username">
                                        <Form.Label>Username:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="Username"
                                            required
                                            defaultValue={this.props.username}
                                            placeholder="Username"></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId="password">
                                        <Form.Label>Password:</Form.Label>
                                        <Form.Control
                                            type="password"
                                            name="password"
                                            placeholder="Leave blank if unchanged"></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId="companyname">
                                        <Form.Label>Company Name:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="companyname"
                                            required
                                            defaultValue={this.props.companyname}
                                            placeholder="companyname"></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId="companyphone">
                                        <Form.Label>Company Phone:</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="companyphone"
                                            required
                                            defaultValue={this.props.companyphone}
                                            placeholder="companyphone"></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId="companyemail">
                                        <Form.Label>Company E-mail:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="companyemail"
                                            required
                                            defaultValue={this.props.companyemail}
                                            placeholder="companyemail"></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId="companydescription">
                                        <Form.Label>Company Description:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="companydescription"
                                            required
                                            defaultValue={this.props.companydescription}
                                            placeholder="companydescription"></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId="companyaddress">
                                        <Form.Label>Company Address:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="companyaddress"
                                            required
                                            defaultValue={this.props.companyaddress}
                                            placeholder="companyaddress"></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId="industry">
                                        <Form.Label>Industry:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="industry"
                                            required
                                            defaultValue={this.props.industry}
                                            placeholder="industry"></Form.Control>
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit" onClick={this.props.onHide}>
                                            Update Employer Account
                                        </Button>
                                    </Form.Group>

                                </Form>

                            </Col>

                        </Row>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }

}