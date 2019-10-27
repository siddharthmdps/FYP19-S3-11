import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import classes from '../../../common_assets/Miscellaneous.module.css';

const education = props => {

    return (
        <React.Fragment>
            <Row>
                <Col className={classes.Title}>
                    Education #{props.details.EducationID}
                </Col>
                <Col md={{ offset: 9, span: 1 }} className={classes.Delete}>
                    <i className="fas fa-trash-alt" ></i>
                </Col>
            </Row>
            <Form.Group as={Row} controlId="University">
                <Form.Label column sm="2">University</Form.Label>
                <Col sm="10">
                    <Form.Control type='text' placeholder="University of Wollongong" value={props.details.University} onChange={props.changeFn} required />
                </Col>
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} sm="4" controlId="Degree">
                    <Form.Label>Degree</Form.Label>
                    <Form.Control type='text' placeholder="Bachelor" value={props.details.Degree} onChange={props.changeFn} required />
                </Form.Group>
                <Form.Group as={Col} sm="4" controlId="FieldOfStudy">
                    <Form.Label>Field of Study</Form.Label>
                    <Form.Control type='text' placeholder="Computer Science" value={props.details.FieldOfStudy} onChange={props.changeFn} required />
                </Form.Group>
                <Form.Group as={Col} sm="4" controlId="Major">
                    <Form.Label>Major</Form.Label>
                    <Form.Control type='text' placeholder="Cyber Security" value={props.details.Major} onChange={props.changeFn} required />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} sm="6" controlId="StartDate">
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control type='date' placeholder="MM/YY" value={props.details.StartDate} onChange={props.changeFn} required />
                </Form.Group>
                <Form.Group as={Col} sm="6" controlId="EndDate">
                    <Form.Label>End Date</Form.Label>
                    <Form.Control type='date' placeholder="MM/YY" value={props.details.EndDate} onChange={props.changeFn} required />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} sm="6" controlId="Mode">
                    <Form.Label>Mode</Form.Label>
                    <Form.Control type='text' placeholder="Part Time" value={props.details.Mode} onChange={props.changeFn} required />
                </Form.Group>
                <Form.Group as={Col} sm="6" controlId="GPA">
                    <Form.Label>GPA</Form.Label>
                    <Form.Control type='text' placeholder="3.8" value={props.details.GPA} onChange={props.changeFn} required />
                </Form.Group>
            </Form.Row>
        </React.Fragment>
    );
}

export default education;