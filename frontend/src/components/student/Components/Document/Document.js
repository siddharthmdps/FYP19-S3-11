import React from 'react';
import {Form, Row, Col} from 'react-bootstrap';

const document = props => {
    
    return(
        <React.Fragment>
            <Form.Group as={Row} controlId="Title">
                <Form.Label column sm="2">Title</Form.Label>
                <Col sm="10"><Form.Control type='text' placeholder="Resume" value={props.details.Title} onChange={props.changeFn} required/></Col>
            </Form.Group>

            <Form.Group as={Row} controlId="document">
                <Form.Label column sm="2">Upload</Form.Label>
                <Col sm="10"><Form.Control type='file'/></Col>
            </Form.Group>
        </React.Fragment>
    );
}

export default document;