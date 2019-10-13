import React from 'react';
import {Form, Row, Col} from 'react-bootstrap';

const awards = props => {
    
    return(
        <React.Fragment>
        <Form>
            <Form.Row>
                <Form.Group as={Col} sm = "6" controlId="awardName">
                    <Form.Label>Award Name</Form.Label>
                    <Form.Control type='text' placeholder="Dean's Merit Award" />
                </Form.Group> 
                <Form.Group as={Col} sm="6" controlId="awardedDate">
                    <Form.Label>Awarded Date</Form.Label>
                    <Form.Control type='text' placeholder="MM/YY" />
                </Form.Group> 
            </Form.Row>

            <Form.Group as={Row} controlId="description">
                <Form.Label column sm="2">Description</Form.Label>
                <Col sm="10"><Form.Control as='textarea' rows="5" placeholder="Description..." /></Col>
            </Form.Group>
             
        </Form>
        </React.Fragment>
    );
}

export default awards;