import React from 'react';
import {Form, Row, Col, Container} from 'react-bootstrap';

const education = props => {

    return(
        <React.Fragment>
        <Form>
            <Form.Group as={Row} controlId="university">
                <Form.Label column sm="2">University</Form.Label>
                <Col sm="10"><Form.Control type='text' placeholder="University of Wollongong" /></Col>
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} sm = "4" controlId="Degree">
                    <Form.Label>Degree</Form.Label>
                    <Form.Control type='text' placeholder="Bachelor" />
                </Form.Group> 
                <Form.Group as={Col} sm="4" controlId="fieldOfStudy">
                    <Form.Label>Field of Study</Form.Label>
                    <Form.Control type='text' placeholder="Computer Science" />
                </Form.Group> 
                <Form.Group as={Col} sm="4" controlId="major">
                    <Form.Label>Major</Form.Label>
                    <Form.Control type='text' placeholder="Cyber Security" />
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
                <Form.Group as={Col} sm = "6" controlId="mode">
                    <Form.Label>Mode</Form.Label>
                    <Form.Control type='text' placeholder="Part Time" />
                </Form.Group> 
                <Form.Group as={Col} sm="6" controlId="gpa">
                    <Form.Label>GPA</Form.Label>
                    <Form.Control type='text' placeholder="3.8" />
                </Form.Group> 
            </Form.Row>
             
        </Form>
        </React.Fragment>
    );
}

export default education;