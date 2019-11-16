import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import classes from '../../../../common_assets/Miscellaneous.module.css';
import Button1 from '../../../../common_assets/Button1/Button1';

const education = props => {

    return (
        <React.Fragment>
            <Row>
                <Col className={classes.Title}>
                    Education #{props.details.EducationID}
                </Col>
                <Col md={{ offset: 9, span: 1 }} className={classes.Delete}>
                    <Button1 click={props.remove} delete><i className="fas fa-trash-alt"></i></Button1>
                </Col>
            </Row>
            <br />
            <Form.Group as={Row} controlId="University">
                <Form.Label column sm="2">University <p style={{ color: 'red', display: 'inline' }}>*</p></Form.Label>
                <Col sm="10">
                    <Form.Control type='text' placeholder="University of Wollongong" value={props.details.University} onChange={props.changeFn} required />
                </Col>
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} sm="4" controlId="Degree">
                    <Form.Label>Degree <p style={{ color: 'red', display: 'inline' }}>*</p></Form.Label>
                    <Form.Control type='text' placeholder="Bachelor" value={props.details.Degree} onChange={props.changeFn} required />
                </Form.Group>
                <Form.Group as={Col} sm="4" controlId="FieldOfStudy">
                    <Form.Label>Field of Study <p style={{ color: 'red', display: 'inline' }}>*</p></Form.Label>
                    <Form.Control type='text' placeholder="Computer Science" value={props.details.FieldOfStudy} onChange={props.changeFn} required />
                </Form.Group>
                <Form.Group as={Col} sm="4" controlId="Major">
                    <Form.Label>Major <p style={{ color: 'red', display: 'inline' }}>*</p></Form.Label>
                    <Form.Control type='text' placeholder="Cyber Security" value={props.details.Major} onChange={props.changeFn} required />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} sm="6" controlId="StartDate">
                    <Form.Label>Start Date <p style={{ color: 'red', display: 'inline' }}>*</p></Form.Label>
                    <Form.Control type='date' placeholder="MM/YY" value={props.details.StartDate} onChange={props.changeFn} required />
                </Form.Group>
                <Form.Group as={Col} sm="6" controlId="EndDate">
                    <Form.Label>End Date <p style={{ color: 'red', display: 'inline' }}>*</p></Form.Label>
                    <Form.Control type='date' placeholder="MM/YY" value={props.details.EndDate} onChange={props.changeFn} required />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} sm="6" controlId="Mode">
                    <Form.Label>Mode <p style={{ color: 'red', display: 'inline' }}>*</p></Form.Label>
                    <Form.Control as='select' value={props.details.Mode} onChange={props.changeFn} required>
                        <option value=''>Choose an option</option>
                        <option value='Part-Time'>Part-Time</option>
                        <option value='Full-Time'>Full-Time</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col} sm="6" controlId="GPA">
                    <Form.Label>GPA <p style={{ color: 'red', display: 'inline' }}>*</p></Form.Label>
                    <Form.Control type='text' placeholder="3.8" value={props.details.GPA} onChange={props.changeFn} required />
                </Form.Group>
            </Form.Row>
            <br />
        </React.Fragment>
    );
}

export default education;