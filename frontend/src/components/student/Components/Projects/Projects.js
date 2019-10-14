import React from 'react';
import {Form, Row, Col} from 'react-bootstrap';

const projects = props => {
    
    return(
        <React.Fragment>
        <Form>
            <Form.Row>
                <Form.Group as={Col} sm = "6" controlId="Title">
                    <Form.Label>Project Title</Form.Label>
                    <Form.Control type='text' placeholder="Calculator App" value={props.details.Title} onChange={props.changeFn}/>
                </Form.Group> 
                <Form.Group as={Col} sm="6" controlId="Status">
                    <Form.Label>Status</Form.Label>
                    <Form.Control type='text' placeholder="Oracle" value={props.details.Status} onChange={props.changeFn}/>
                </Form.Group> 
            </Form.Row>

            <Form.Group as={Row} controlId="Description">
                <Form.Label column sm="2">Project Description</Form.Label>
                <Col sm="10"><Form.Control as='textarea' rows="5" placeholder="Description..." value={props.details.Description} onChange={props.changeFn}/></Col>
            </Form.Group>
             
            <Form.Group as={Row} controlId="Link">
                <Form.Label column sm="2">Project Link</Form.Label>
                <Col sm="10"><Form.Control type='text' placeholder="www.pegasus.github.com" value={props.details.Link} onChange={props.changeFn}/></Col>
            </Form.Group>
        </Form>
        </React.Fragment>
    );
}

export default projects;