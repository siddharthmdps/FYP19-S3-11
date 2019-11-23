import React from 'react';
import {Form, Row, Col} from 'react-bootstrap';
import Button1 from '../../../../common_assets/Button1/Button1';
import classes from '../../../../common_assets/Validate.module.css';
import classes2 from '../../../../common_assets/Miscellaneous.module.css';
import Industries from '../../../../common_assets/CommonLists/Industries';

const workExperience = props => {
    
    return(
        <React.Fragment>
            <Row>
                <Col className={classes2.Title} >
                    Work #{props.seq }
                </Col>
                <Col md={{ offset: 9, span: 1 }} className={classes2.Delete}>
                    <Button1 click={props.remove} delete><i className="fas fa-trash-alt"></i></Button1>
                </Col>
            </Row> 
            <br/>
            <Form.Row>
                <Form.Group as={Col} sm = "6" controlId="Position">
                    <Form.Label>Position <p style={{ color: 'red', display: 'inline' }}>*</p></Form.Label>
                    <Form.Control type='text' placeholder="Senior Developer" value={props.details.Position} onChange={props.changeFn} required/>
                </Form.Group> 
                <Form.Group as={Col} sm="6" controlId="Company">
                    <Form.Label>Company <p style={{ color: 'red', display: 'inline' }}>*</p></Form.Label>
                    <Form.Control type='text' placeholder="Facebook" value={props.details.Company} onChange={props.changeFn} required/>
                </Form.Group> 
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} sm = "6" controlId="StartDate">
                    <Form.Label>Start Date <p style={{ color: 'red', display: 'inline' }}>*</p></Form.Label>
                    <Form.Control type='date' placeholder="MM/YY" value={props.details.StartDate} onChange={props.changeFn} required/>
                </Form.Group> 
                <Form.Group as={Col} sm="6" controlId="EndDate">
                    <Form.Label>End Date <p style={{ color: 'red', display: 'inline' }}>*</p></Form.Label>
                    <Form.Control type='date' placeholder="MM/YY" value={props.details.EndDate} onChange={props.changeFn} required/>
                </Form.Group> 
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} sm = "4" controlId="Mode">
                    <Form.Label>Mode <p style={{ color: 'red', display: 'inline' }}>*</p></Form.Label>
                    {/* <Form.Control componentClass='select' type='text' placeholder="Part Time" value={props.details.Mode} onChange={props.changeFn} required/> */}
                    <Form.Control as='select' value={props.details.Mode} onChange={props.changeFn} className={classes.ptft} required>
                        <option value="">Choose ...</option>
                        <option value="Part-Time">Part-Time</option>
                        <option value="Full-Time">Full-Time</option>
                        <option value="Intern">Intern</option>
                        <option value="Contract">Contract</option>
                    </Form.Control>
                </Form.Group> 
                <Form.Group as={Col} sm="4" controlId="Industry">
                    <Form.Label>Industry <p style={{ color: 'red', display: 'inline' }}>*</p></Form.Label>
                    <Form.Control as='select' value={props.details.Industry} className={classes.ptft} onChange={props.changeFn} required>
                        <Industries />
                    </Form.Control>
                </Form.Group> 
                <Form.Group as={Col} sm="4" controlId="AnnualSalary">
                    <Form.Label>Annual Salary <p style={{ color: 'red', display: 'inline' }}>*</p></Form.Label>
                    <Form.Control type='text' placeholder="84000" value={props.details.AnnualSalary} onChange={props.changeFn} required/>
                </Form.Group> 
            </Form.Row>

            <Form.Group as={Row} controlId="Description">
                <Form.Label column sm="2">Job Responsibility</Form.Label>
                <Col sm="10"><Form.Control as='textarea' rows="5" placeholder="Description..." value={props.details.Description} onChange={props.changeFn} required/></Col>
            </Form.Group>
        </React.Fragment>
    );
}

export default workExperience;