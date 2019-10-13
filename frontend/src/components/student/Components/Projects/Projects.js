import React from 'react';
import {Form, Row, Col} from 'react-bootstrap';

const projects = props => {
    
    return(
        <React.Fragment>
        <Form>
            <Form.Row>
                <Form.Group as={Col} sm = "6" controlId="projectTitle">
                    <Form.Label>Project Title</Form.Label>
                    <Form.Control type='text' placeholder="Calculator App" />
                </Form.Group> 
                <Form.Group as={Col} sm="6" controlId="projectStatus">
                    <Form.Label>Status</Form.Label>
                    <Form.Control type='text' placeholder="Oracle" />
                </Form.Group> 
            </Form.Row>

            <Form.Group as={Row} controlId="projectDescription">
                <Form.Label column sm="2">Project Description</Form.Label>
                <Col sm="10"><Form.Control as='textarea' rows="5" placeholder="Description..." /></Col>
            </Form.Group>
             
            <Form.Group as={Row} controlId="projectLink">
                <Form.Label column sm="2">Project Link</Form.Label>
                <Col sm="10"><Form.Control type='text' placeholder="www.pegasus.github.com" /></Col>
            </Form.Group>
        </Form>
        </React.Fragment>
    );
}

export default projects;