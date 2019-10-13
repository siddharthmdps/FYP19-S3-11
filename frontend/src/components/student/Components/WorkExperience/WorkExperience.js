import React from 'react';
import {Form, Row, Col} from 'react-bootstrap';

const workExperience = props => {
    
    return(
        <React.Fragment>
        <Form>
            <Form.Row>
                <Form.Group as={Col} sm = "6" controlId="positionTitle">
                    <Form.Label>Position Title</Form.Label>
                    <Form.Control type='text' placeholder="Senior Developer" />
                </Form.Group> 
                <Form.Group as={Col} sm="6" controlId="comapany">
                    <Form.Label>Company</Form.Label>
                    <Form.Control type='text' placeholder="Facebook" />
                </Form.Group> 
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} sm = "6" controlId="startDate">
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control type='text' placeholder="MM/YY" />
                </Form.Group> 
                <Form.Group as={Col} sm="6" controlId="endDate">
                    <Form.Label>End Date</Form.Label>
                    <Form.Control type='text' placeholder="MM/YY" />
                </Form.Group> 
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} sm = "4" controlId="mode">
                    <Form.Label>Mode</Form.Label>
                    <Form.Control type='text' placeholder="Part Time" />
                </Form.Group> 
                <Form.Group as={Col} sm="4" controlId="industry">
                    <Form.Label>Industry</Form.Label>
                    <Form.Control type='text' placeholder="IT" />
                </Form.Group> 
                <Form.Group as={Col} sm="4" controlId="Annual Salary">
                    <Form.Label>Annual Salary</Form.Label>
                    <Form.Control type='text' placeholder="84000" />
                </Form.Group> 
            </Form.Row>

            <Form.Group as={Row} controlId="responsibility">
                <Form.Label column sm="2">Job Responsibility</Form.Label>
                <Col sm="10"><Form.Control as='textarea' rows="5" placeholder="Description..." /></Col>
            </Form.Group>
             
        </Form>
        </React.Fragment>
    );
}

export default workExperience;