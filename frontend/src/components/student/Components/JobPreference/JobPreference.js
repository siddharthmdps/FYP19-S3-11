import React from 'react';
import {Form, Col} from 'react-bootstrap';

const jobPreference = props => {
    return(
        <React.Fragment>
        <Form>
            <Form.Row>
                <Form.Group as={Col} sm='6' controlId="Industry">
                    <Form.Label>Industry</Form.Label>
                        <Form.Control type='text' placeholder="Accounting" value={props.details.Industry} onChange={props.changeFn}/>
                </Form.Group>

                <Form.Group as={Col}  sm='6' controlId="Position">
                    <Form.Label>Position</Form.Label>
                        <Form.Control type='text' placeholder="Senior Level" value={props.details.Position} onChange={props.changeFn} />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} sm='6' controlId="JobType">
                    <Form.Label>Job Type</Form.Label>
                        <Form.Control type='text' placeholder="Full Time" value={props.details.JobType} onChange={props.changeFn}/>
                </Form.Group>

                <Form.Group as={Col}  sm='6' controlId="ExpectedSalary">
                    <Form.Label>Expected Salary</Form.Label>
                        <Form.Control type='text' placeholder="90000" value={props.details.ExpectedSalary} onChange={props.changeFn}/>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} sm='6' controlId="Location">
                    <Form.Label>Location</Form.Label>
                        <Form.Control type='text' placeholder="Singapore" value={props.details.Location} onChange={props.changeFn}/>
                </Form.Group>

                <Form.Group as={Col}  sm='6' controlId="Availability">
                    <Form.Label>Availability</Form.Label>
                        <Form.Control type='text' placeholder="Immediately" value={props.details.Availability} onChange={props.changeFn}/>
                </Form.Group>
            </Form.Row>
        </Form>
        </React.Fragment>
    );
}

export default jobPreference;