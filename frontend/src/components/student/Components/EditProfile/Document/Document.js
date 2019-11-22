import React from 'react';
import {Form, Row, Col} from 'react-bootstrap';
import Button1 from '../../../../common_assets/Button1/Button1'
import classes from '../../../../common_assets/Miscellaneous.module.css';

const document = props => {
    
    return(
        <React.Fragment>
            <Row>
                <Col className={classes.Title}>
                    Document #{props.details.DocumentID}
                </Col>
                <Col md={{ offset: 9, span: 1 }} className={classes.Delete}>
                    <Button1 click={props.remove} delete><i className="fas fa-trash-alt"></i></Button1>
                </Col>
            </Row>
            <br/>
            <Form.Group as={Row} controlId="Title">
                <Form.Label column sm="2">Title</Form.Label>
                <Col sm="10"><Form.Control type='text' placeholder="Resume" value={props.details.Title} onChange={props.changeFn} required/></Col>
            </Form.Group>

            <Form.Group as={Row} controlId="Link">
                {props.details.Link===""?<Form.Label column sm="2">Upload</Form.Label>:<Form.Label column sm="2">Replace File</Form.Label>}
                {/* <Form.Label column sm="2">Upload</Form.Label> */}
                <Col sm="10"><Form.Control type='file' onChange={props.changeFn} required/></Col>
            </Form.Group>
        </React.Fragment>
    );
}

export default document;