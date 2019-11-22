import React from 'react';
import {Form, Row, Col} from 'react-bootstrap';
import Button1 from '../../../../common_assets/Button1/Button1'
import classes from '../../../../common_assets/Miscellaneous.module.css';

const projects = props => {
    
    return(
        <React.Fragment>
            <Row>
                <Col className={classes.Title}>
                    Project #{props.seq}
                </Col>
                <Col md={{ offset: 9, span: 1 }} className={classes.Delete}>
                    <Button1 click={props.remove} delete><i className="fas fa-trash-alt"></i></Button1>
                </Col>
            </Row>
            <br/>
            <Form.Row>
                <Form.Group as={Col} sm = "6" controlId="Title">
                    <Form.Label>Project Title <p style={{ color: 'red', display: 'inline' }}>*</p></Form.Label>
                    <Form.Control type='text' placeholder="Calculator App" value={props.details.Title} onChange={props.changeFn}/>
                </Form.Group> 
                <Form.Group as={Col} sm="6" controlId="Status">
                    <Form.Label>Status <p style={{ color: 'red', display: 'inline' }}>*</p></Form.Label>
                    <Form.Control as='select' placeholder="Oracle" value={props.details.Status} onChange={props.changeFn}>
                        <option value="">Choose</option>
                        <option value="ongoing">Ongoing</option>
                        <option value="completed">Completed</option>
                    </Form.Control>
                </Form.Group> 
            </Form.Row>

            <Form.Group as={Row} controlId="Description">
                <Form.Label column sm="2">Project Description <p style={{ color: 'red', display: 'inline' }}>*</p></Form.Label>
                <Col sm="10"><Form.Control as='textarea' rows="5" placeholder="Description..." value={props.details.Description} onChange={props.changeFn}></Form.Control></Col>
            </Form.Group>
             
            <Form.Group as={Row} controlId="Link">
                <Form.Label column sm="2">Project Link</Form.Label>
                <Col sm="10"><Form.Control type='text' placeholder="www.pegasus.github.com" value={props.details.Link} onChange={props.changeFn}/></Col>
            </Form.Group>
        </React.Fragment>
    );
}

export default projects;