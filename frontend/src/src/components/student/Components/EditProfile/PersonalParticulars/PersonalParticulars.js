import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const personalParticulars = props => {
    return (
        <React.Fragment>
            <Form.Row>
                <Form.Group as={Col} sm='4' controlId="FirstName">
                    <Form.Label>First Name <p style={{ color: 'red', display: 'inline' }}>*</p></Form.Label>
                    <Form.Control type='text' placeholder="Michael" value={props.details.FirstName} onChange={props.changeFn} required pattern="[A-Za-z]+" />
                    <Form.Control.Feedback type="invalid">
                        Please choose a username.
                        </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} sm='4' controlId="MiddleName">
                    <Form.Label>Middle Name</Form.Label>
                    <Form.Control style={{backgroundColor: 'white', borderColor: 'lightgrey'}} type='text' placeholder="Bakari" value={props.details.MiddleName} onChange={props.changeFn} />
                </Form.Group>

                <Form.Group as={Col} sm='4' controlId="LastName">
                    <Form.Label>Last Name <p style={{ color: 'red', display: 'inline' }}>*</p></Form.Label>
                    <Form.Control type='text' placeholder="Jordan" value={props.details.LastName} onChange={props.changeFn} required />
                </Form.Group>
            </Form.Row>

            <Form.Group as={Row} controlId="Email">
                <Form.Label column sm="2">E Mail <p style={{ color: 'red', display: 'inline' }}>*</p></Form.Label>
                <Col sm="10"><Form.Control type='email' placeholder="someone@email.com" value={props.details.Email} onChange={props.changeFn} required /></Col>
            </Form.Group>

            <Form.Group as={Row} controlId="Phone">
                <Form.Label column sm="2">Phone  <p style={{ color: 'red', display: 'inline' }}>*</p></Form.Label>
                <Col sm="10">
                    <Form.Control type='number' placeholder="+65 1234 1234" value={props.details.Phone} onChange={props.changeFn} required />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="CurrentAddress">
                <Form.Label column sm="2">Current Address <p style={{ color: 'red', display: 'inline' }}>*</p></Form.Label>
                <Col sm="10">
                    <Form.Control type='text'
                        placeholder="115A Commonwealth Drive #02-14, 149596, Singapore"
                        value={props.details.CurrentAddress}
                        onChange={props.changeFn}
                        required />
                </Col>
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} sm='6' controlId="City">
                    <Form.Label>City <p style={{ color: 'red', display: 'inline' }}>*</p></Form.Label>
                    <Form.Control type='text' placeholder="Singapore" value={props.details.City} onChange={props.changeFn} required />
                </Form.Group>

                <Form.Group as={Col} sm='6' controlId="Country">
                    <Form.Label>Country <p style={{ color: 'red', display: 'inline' }}>*</p></Form.Label>
                    <Form.Control type='text' placeholder="Singapore" value={props.details.Country} onChange={props.changeFn} required />
                </Form.Group>
            </Form.Row>

            <Form.Group as={Row} controlId="PostalCode">
                <Form.Label column sm="2">Postal Code <p style={{ color: 'red', display: 'inline' }}>*</p></Form.Label>
                <Col sm="10">
                    <Form.Control type='text' placeholder="123456" value={props.details.PostalCode} onChange={props.changeFn} required />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="Nationality">
                <Form.Label column sm="2">Nationality <p style={{ color: 'red', display: 'inline' }}>*</p></Form.Label>
                <Col sm="10">
                    <Form.Control type='text' placeholder="Singaporean" value={props.details.Nationality} onChange={props.changeFn} required />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="Availability">
                <Form.Label column sm="2">Availability <p style={{ color: 'red', display: 'inline' }}>*</p></Form.Label>
                <Col sm='10'>
                    <Form.Control as='select' value={props.details.Availability} onChange={props.changeFn} required >
                        <option value="">Choose an option</option>
                        <option value="Immediate">Immediate</option>
                        <option value="1 - 3 months">1 - 3 months</option>
                        <option value="3 - 6 months">3 - 6 months</option>
                        <option value="6 - 12 months">6 - 12 months</option>
                        <option value="More than a year">More than a year</option>
                    </Form.Control>
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="LinkedIn">
                <Form.Label column sm="2">LinkedIn <p style={{ color: 'red', display: 'inline' }}>*</p></Form.Label>
                <Col sm="10">
                    <Form.Control type='text' placeholder="https://www.linkedin.com/in/abcd1234/" value={props.details.LinkedIn} onChange={props.changeFn} required />
                </Col>
            </Form.Group>
        </React.Fragment>
    );
}

export default personalParticulars;