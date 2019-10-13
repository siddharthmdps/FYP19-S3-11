import React from 'react';
import {Form, Row, Col} from 'react-bootstrap';

const certification = props => {
    
    return(
        <React.Fragment>
        <Form>
            <Form.Row>
                <Form.Group as={Col} sm = "6" controlId="certificationName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' placeholder="Certificated Java Developer" />
                </Form.Group> 
                <Form.Group as={Col} sm="6" controlId="issuedBy">
                    <Form.Label>Issued By</Form.Label>
                    <Form.Control type='text' placeholder="Oracle" />
                </Form.Group> 
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} sm = "6" controlId="issueDate">
                    <Form.Label>Issue Date</Form.Label>
                    <Form.Control type='text' placeholder="MM/YY" />
                </Form.Group> 
                <Form.Group as={Col} sm="6" controlId="validUntilDate">
                    <Form.Label>Valid Until</Form.Label>
                    <Form.Control type='text' placeholder="MM/YY" />
                </Form.Group> 
            </Form.Row>
             
        </Form>
        </React.Fragment>
    );
}

export default certification;