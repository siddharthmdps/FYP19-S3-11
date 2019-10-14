import React from 'react';
import {Form, Row, Col} from 'react-bootstrap';

const workExperience = props => {
    
    return(
        <React.Fragment>
        <Form>
            <Form.Row>
                <Form.Group as={Col} sm = "6" controlId="Position">
                    <Form.Label>Position</Form.Label>
                    <Form.Control type='text' placeholder="Senior Developer" value={props.details.Position} onChange={props.changeFn}/>
                </Form.Group> 
                <Form.Group as={Col} sm="6" controlId="Company">
                    <Form.Label>Company</Form.Label>
                    <Form.Control type='text' placeholder="Facebook" value={props.details.Company} onChange={props.changeFn}/>
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
                <Form.Group as={Col} sm = "4" controlId="Mode">
                    <Form.Label>Mode</Form.Label>
                    <Form.Control type='text' placeholder="Part Time" value={props.details.Mode} onChange={props.changeFn}/>
                </Form.Group> 
                <Form.Group as={Col} sm="4" controlId="Industry">
                    <Form.Label>Industry</Form.Label>
                    <Form.Control type='text' placeholder="IT" value={props.details.Industry} onChange={props.changeFn}/>
                </Form.Group> 
                <Form.Group as={Col} sm="4" controlId="AnnualSalary">
                    <Form.Label>Annual Salary</Form.Label>
                    <Form.Control type='text' placeholder="84000" value={props.details.AnnualSalary} onChange={props.changeFn}/>
                </Form.Group> 
            </Form.Row>

            <Form.Group as={Row} controlId="Description">
                <Form.Label column sm="2">Job Responsibility</Form.Label>
                <Col sm="10"><Form.Control as='textarea' rows="5" placeholder="Description..." value={props.details.Description} onChange={props.changeFn}/></Col>
            </Form.Group>
             
        </Form>
        </React.Fragment>
    );
}

export default workExperience;