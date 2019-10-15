import React from 'react';
import {Form, Row, Col} from 'react-bootstrap';

const personalParticulars = props => {
    return(
        <React.Fragment>
        <Form>
            <Form.Row>
                <Form.Group as={Col} sm='4' controlId="FirstName">
                    <Form.Label>First Name</Form.Label>
                        <Form.Control type='text' placeholder="Joshua" value={props.details.FirstName} onChange={props.changeFn}/>
                </Form.Group>

                <Form.Group as={Col}  sm='4' controlId="MiddleName">
                    <Form.Label>Middle Name</Form.Label>
                        <Form.Control type='text' placeholder="Chee Yan Cheng" value={props.details.MiddleName} onChange={props.changeFn}/>
                </Form.Group>

                <Form.Group as={Col}  sm='4' controlId="LastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type='text' placeholder="Oliver" value={props.details.LastName} onChange={props.changeFn}/>
                </Form.Group>
            </Form.Row>

            <Form.Group as={Row} controlId="Email">
                <Form.Label column sm="2">E Mail</Form.Label>
                <Col sm="10"><Form.Control type='text' placeholder="someone@email.com" value={props.details.Email} onChange={props.changeFn}/></Col>
            </Form.Group>

            <Form.Group as={Row} controlId="Phone">
            <Form.Label column sm="2">
                Phone
                </Form.Label>
                <Col sm="10">
                <Form.Control type='text' placeholder="+65 1234 1234" value={props.details.Phone} onChange={props.changeFn}/>
                </Col>
            </Form.Group> 

            <Form.Group as={Row} controlId="CurrentAddress">
            <Form.Label column sm="2">
                Current Address
                </Form.Label>
                <Col sm="10">
                <Form.Control type='text' placeholder="115A Commonwealth Drive #02-14, 149596, Singapore" value={props.details.CurrentAddress} onChange={props.changeFn}/>
                </Col>
            </Form.Group>          

            <Form.Row>
                <Form.Group as={Col} sm='6' controlId="City">
                    <Form.Label>City</Form.Label>
                        <Form.Control type='text' placeholder="Singapore" value={props.details.City} onChange={props.changeFn}/>
                </Form.Group>

                <Form.Group as={Col}  sm='6' controlId="Country">
                    <Form.Label>Country</Form.Label>
                        <Form.Control type='text' placeholder="Singapore" value={props.details.Country} onChange={props.changeFn}/>
                </Form.Group>
            </Form.Row> 
            
            <Form.Group as={Row} controlId="PostalCode">
            <Form.Label column sm="2">
                Postal Code
                </Form.Label>
                <Col sm="10">
                <Form.Control type='text' placeholder="123456" value={props.details.PostalCode} onChange={props.changeFn}/>
                </Col>
            </Form.Group>   
            <Form.Group as={Row} controlId="Nationality">
            <Form.Label column sm="2">
                Nationality
                </Form.Label>
                <Col sm="10">
                <Form.Control type='text' placeholder="Singaporean" value={props.details.Nationality} onChange={props.changeFn}/>
                </Col>
            </Form.Group>      
        </Form>
        </React.Fragment>
    );
}

export default personalParticulars;