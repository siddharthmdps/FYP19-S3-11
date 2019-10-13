import React from 'react';
import {Form, Row, Col, Container} from 'react-bootstrap';

const personalParticulars = props => {
    return(
        <React.Fragment>
        <Form>
            <Form.Row>
                <Form.Group as={Col} sm='4' controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                        <Form.Control type='text' placeholder="Joshua" />
                </Form.Group>

                <Form.Group as={Col}  sm='4' controlId="middleName">
                    <Form.Label>Middle Name</Form.Label>
                        <Form.Control type='text' placeholder="Chee Yan Cheng" />
                </Form.Group>

                <Form.Group as={Col}  sm='4' controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type='text' placeholder="Oliver" />
                </Form.Group>
            </Form.Row>

            <Form.Group as={Row} controlId="Email">
                <Form.Label column sm="2">E Mail</Form.Label>
                <Col sm="10"><Form.Control type='text' placeholder="someone@email.com" /></Col>
            </Form.Group>

            <Form.Group as={Row} controlId="Phone">
            <Form.Label column sm="2">
                Phone
                </Form.Label>
                <Col sm="10">
                <Form.Control type='text' placeholder="+65 1234 1234" />
                </Col>
            </Form.Group> 

            <Form.Group as={Row} controlId="address">
            <Form.Label column sm="2">
                Current Address
                </Form.Label>
                <Col sm="10">
                <Form.Control type='text' placeholder="115A Commonwealth Drive #02-14, 149596, Singapore" />
                </Col>
            </Form.Group>          

            <Form.Group as={Row} controlId="City">
            <Form.Label column sm="2">
                City
                </Form.Label>
                <Col sm="4">
                <Form.Control type='text' placeholder="Singapore" />
                </Col>
                <Form.Label column sm="2">
                Country
                </Form.Label>
                <Col sm="4">
                <Form.Control type='text' placeholder="Singapore" />
                </Col>
            </Form.Group>   
            
            <Form.Group as={Row} controlId="postalCode">
            <Form.Label column sm="2">
                Postal Code
                </Form.Label>
                <Col sm="10">
                <Form.Control type='text' placeholder="123456" />
                </Col>
            </Form.Group>   
            <Form.Group as={Row} controlId="nationality">
            <Form.Label column sm="2">
                Nationality
                </Form.Label>
                <Col sm="10">
                <Form.Control type='text' placeholder="Singaporean" />
                </Col>
            </Form.Group>      
        </Form>
        </React.Fragment>
    );
}

export default personalParticulars;