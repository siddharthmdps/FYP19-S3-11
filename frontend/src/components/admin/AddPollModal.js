import React, { Component } from 'react'
import { Modal, Button, Row, Col, Form, InputGroup } from 'react-bootstrap'
import Snackbar from '@material-ui/core/SnackBar'
import IconButton from '@material-ui/core/IconButton'

export class AddPollModal extends Component {
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
        fetch('https://pegasus-backend.herokuapp.com/admin/addpoll', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                question: event.target.question.value,
                option1: event.target.option1.value,
                option2: event.target.option2.value,
                option3: event.target.option3.value
            })
        })
            .then(res => res.json())
            .then((result) => {
                //alert(result);
                this.setState({ snackbaropen: true, snackbarmsg: 'Successfully created new poll!' });
                this.timer = setTimeout(() => { window.location.href = '/admin/polls' }, 1000);
            },
                (error) => {
                    //alert('Failed')
                    this.setState({ snackbaropen: true, snackbarmsg: 'Failed to create new poll...' });
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
                            Create New Poll
        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit} >


                                    <Form.Group controlId="question">
                                        <Form.Label>Question:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="question"
                                            required
                                            placeholder=""></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId="option1">
                                        <Form.Label>option 1:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="option1"
                                            required
                                            placeholder=""></Form.Control>
                                    </Form.Group>


                                    <Form.Group controlId="option2">
                                        <Form.Label>Option 2:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="option2"
                                            required
                                            placeholder=""></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId="option3">
                                        <Form.Label>Option 3:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="option3"

                                            placeholder=""></Form.Control>
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="outline-success" type="submit">
                                            Create New Poll
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
