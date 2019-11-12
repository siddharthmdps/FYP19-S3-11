import React from 'react';
import {Form, Row, Col} from 'react-bootstrap';
import Button1 from '../../../../common_assets/Button1/Button1';
import classes from '../../../../common_assets/Miscellaneous.module.css';

const awards = props => {
    
    return(
        <React.Fragment>
            <Row>
                <Col className={classes.Title}>
                    Award #{props.details.AwardID}
                </Col>
                <Col md={{ offset: 9, span: 1 }} className={classes.Delete}>
                    <Button1 click={props.remove} delete><i className="fas fa-trash-alt"></i></Button1>
                </Col>
            </Row>
            <br/>
            <Form.Row>
                <Form.Group as={Col} sm = "6" controlId="Award">
                    <Form.Label>Award Name <p style={{ color: 'red', display: 'inline' }}>*</p></Form.Label>
                    <Form.Control type='text' placeholder="Dean's Merit Award" value={props.details.Award} onChange={props.changeFn} required/>
                </Form.Group> 
                <Form.Group as={Col} sm="6" controlId="Date">
                    <Form.Label>Awarded Date <p style={{ color: 'red', display: 'inline' }}>*</p></Form.Label>
                    <Form.Control type='date' placeholder="MM/YY" value={props.details.Date} onChange={props.changeFn} required/>
                </Form.Group> 
            </Form.Row>

            <Form.Group as={Row} controlId="Description">
                <Form.Label column sm="2">Description <p style={{ color: 'red', display: 'inline' }}>*</p></Form.Label>
                <Col sm="10"><Form.Control as='textarea' rows="5" placeholder="Description..." value={props.details.Description} onChange={props.changeFn} required/></Col>
            </Form.Group>
        </React.Fragment>
    );
}

export default awards;