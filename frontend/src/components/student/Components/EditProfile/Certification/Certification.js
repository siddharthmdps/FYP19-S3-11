import React from 'react';
import {Form, Col, Row} from 'react-bootstrap';
import Button1 from '../../../../common_assets/Button1/Button1'
import classes from '../../../../common_assets/Miscellaneous.module.css';

const certification = props => {
    
    return(
        <React.Fragment>
            <Row>
                <Col className={classes.Title}>
                    Certificate #{props.details.CertificateID}
                </Col>
                <Col md={{ offset: 9, span: 1 }} className={classes.Delete}>
                    <Button1 click={props.remove} delete><i className="fas fa-trash-alt"></i></Button1>
                </Col>
            </Row>
            <br/>
            <Form.Row>
                <Form.Group as={Col} sm = "6" controlId="Name">
                    <Form.Label>Name <p style={{ color: 'red', display: 'inline' }}>*</p></Form.Label>
                    <Form.Control type='text' placeholder="Certificated Java Developer" value={props.details.Name} onChange={props.changeFn} required/>
                </Form.Group> 
                <Form.Group as={Col} sm="6" controlId="IssuedBy">
                    <Form.Label>Issued By <p style={{ color: 'red', display: 'inline' }}>*</p></Form.Label>
                    <Form.Control type='text' placeholder="Oracle" value={props.details.IssuedBy} onChange={props.changeFn} required/>
                </Form.Group> 
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} sm = "6" controlId="IssueDate">
                    <Form.Label>Issue Date <p style={{ color: 'red', display: 'inline' }}>*</p></Form.Label>
                    <Form.Control type='date' placeholder="MM/YY" value={props.details.IssueDate} onChange={props.changeFn} required/>
                </Form.Group> 
                <Form.Group as={Col} sm="6" controlId="ValidUntil">
                    <Form.Label>Valid Until <p style={{ color: 'red', display: 'inline' }}>*</p></Form.Label>
                    <Form.Control type='date' placeholder="MM/YY" value={props.details.ValidUntil} onChange={props.changeFn} required/>
                </Form.Group> 
            </Form.Row>
        </React.Fragment>
    );
}

export default certification;