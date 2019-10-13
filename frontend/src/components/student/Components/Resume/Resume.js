import React from 'react';
import {Form, Row, Col, Container} from 'react-bootstrap';

const resume = props => {
    
    return(
        <React.Fragment>
        <Form>
            <Form.Group as={Row} controlId="Title">
                <Form.Label column sm="2">Title</Form.Label>
                <Col sm="10"><Form.Control type='text' placeholder="Resume" /></Col>
            </Form.Group>

            <Form.Group as={Row} controlId="resume">
                <Form.Label column sm="2">Upload resume here</Form.Label>
                <Col sm="10"><Form.Control type='file' /></Col>
            </Form.Group>
        </Form>
        </React.Fragment>
    );
}

export default resume;