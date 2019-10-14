import React from 'react';
import {Form, Row, Col, Accordion, Card} from 'react-bootstrap';

const education = props => {

    return(
        <React.Fragment>
        <Form>
            <Form.Group as={Row} controlId="University">
                <Form.Label column sm="2">University</Form.Label>
                <Col sm="10">
                    <Form.Control type='text' placeholder="University of Wollongong" value={props.details.University} onChange={props.changeFn}/>
                </Col>
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} sm = "4" controlId="Degree">
                    <Form.Label>Degree</Form.Label>
                    <Form.Control type='text' placeholder="Bachelor" value={props.details.Degree} onChange={props.changeFn}/>
                </Form.Group> 
                <Form.Group as={Col} sm="4" controlId="FieldOfStudy">
                    <Form.Label>Field of Study</Form.Label>
                    <Form.Control type='text' placeholder="Computer Science" value={props.details.FieldOfStudy} onChange={props.changeFn}/>
                </Form.Group> 
                <Form.Group as={Col} sm="4" controlId="Major">
                    <Form.Label>Major</Form.Label>
                    <Form.Control type='text' placeholder="Cyber Security" value={props.details.Major} onChange={props.changeFn}/>
                </Form.Group> 
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} sm = "6" controlId="StartDate">
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control type='text' placeholder="MM/YY" value={props.details.StartDate} onChange={props.changeFn}/>
                </Form.Group> 
                <Form.Group as={Col} sm="6" controlId="EndDate">
                    <Form.Label>End Date</Form.Label>
                    <Form.Control type='text' placeholder="MM/YY" value={props.details.EndDate} onChange={props.changeFn}/>
                </Form.Group> 
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} sm = "6" controlId="Mode">
                    <Form.Label>Mode</Form.Label>
                    <Form.Control type='text' placeholder="Part Time" value={props.details.Mode} onChange={props.changeFn}/>
                </Form.Group> 
                <Form.Group as={Col} sm="6" controlId="GPA">
                    <Form.Label>GPA</Form.Label>
                    <Form.Control type='text' placeholder="3.8" value={props.details.GPA} onChange={props.changeFn}/>
                </Form.Group> 
            </Form.Row>
             
        </Form>
        </React.Fragment>
    );
}

export default education;