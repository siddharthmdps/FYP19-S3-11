import React from 'react';
import {Form, Row, Col, Container} from 'react-bootstrap';

const jobPreference = props => {
    return(
        <React.Fragment>
        <Form>
            <Form.Row>
                <Form.Group as={Col} sm='6' controlId="industry">
                    <Form.Label>Industry</Form.Label>
                        <Form.Control type='text' placeholder="Accounting" />
                </Form.Group>

                <Form.Group as={Col}  sm='6' controlId="position">
                    <Form.Label>Position</Form.Label>
                        <Form.Control type='text' placeholder="Senior Level" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} sm='6' controlId="jobType">
                    <Form.Label>Job Type</Form.Label>
                        <Form.Control type='text' placeholder="Full Time" />
                </Form.Group>

                <Form.Group as={Col}  sm='6' controlId="expectedSalary">
                    <Form.Label>Expected Salary</Form.Label>
                        <Form.Control type='text' placeholder="90000" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} sm='6' controlId="location">
                    <Form.Label>Location</Form.Label>
                        <Form.Control type='text' placeholder="Singapore" />
                </Form.Group>

                <Form.Group as={Col}  sm='6' controlId="availability">
                    <Form.Label>Availability</Form.Label>
                        <Form.Control type='text' placeholder="Immediately" />
                </Form.Group>
            </Form.Row>
        </Form>
        </React.Fragment>
    );
}

export default jobPreference;