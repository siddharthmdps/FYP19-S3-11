import React from 'react';
import {Form, Col} from 'react-bootstrap';

const certification = props => {
    
    return(
        <React.Fragment>
        <Form>
            <Form.Row>
                <Form.Group as={Col} sm = "6" controlId="Name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' placeholder="Certificated Java Developer" value={props.details.Name} onChange={props.changeFn}/>
                </Form.Group> 
                <Form.Group as={Col} sm="6" controlId="IssuedBy">
                    <Form.Label>Issued By</Form.Label>
                    <Form.Control type='text' placeholder="Oracle" value={props.details.IssuedBy} onChange={props.changeFn}/>
                </Form.Group> 
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} sm = "6" controlId="IssueDate">
                    <Form.Label>Issue Date</Form.Label>
                    <Form.Control type='text' placeholder="MM/YY" value={props.details.IssueDate} onChange={props.changeFn}/>
                </Form.Group> 
                <Form.Group as={Col} sm="6" controlId="ValidUntil">
                    <Form.Label>Valid Until</Form.Label>
                    <Form.Control type='text' placeholder="MM/YY" value={props.details.ValidUntil} onChange={props.changeFn}/>
                </Form.Group> 
            </Form.Row>
             
        </Form>
        </React.Fragment>
    );
}

export default certification;