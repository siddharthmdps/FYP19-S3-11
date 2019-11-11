import React from 'react';
import { Image, Container, Card, ResponsiveEmbed, Form, Col, Row } from 'react-bootstrap';
import Button1 from '../../../../common_assets/Button1/Button1'
import classes from './LeftSide.module.css';

const leftSide = props => {

    return (
        <React.Fragment>
            <Container>
                <Card className={classes.CentralContent}>
                    <Card.Body onClick={() => { alert("Eh!") }}>
                        <ResponsiveEmbed aspectRatio="1by1">
                            <Image src={props.imageLink} className={classes.Image} />
                        </ResponsiveEmbed>
                    </Card.Body>
                    <Card.Body ><Button1>Upload</Button1></Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Form.Row>
                            <Form.Group as={Col} sm='1'>
                                <Form.Label ><i class="fab fa-linkedin" /></Form.Label>
                            </Form.Group>
                            <Form.Group as={Col} sm='11'>
                                <Form.Control type='url' placeholder='https://www.linkedin.com/in/joliverc18/'></Form.Control>
                            </Form.Group>
                        </Form.Row>
                    </Card.Body>
                </Card>
            </Container>
        </React.Fragment>
    );
}

export default leftSide;