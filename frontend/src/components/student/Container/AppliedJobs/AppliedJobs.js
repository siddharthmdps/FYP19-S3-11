import React, { Component } from 'react';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import classes from './AppliedJobs.module.css';

class AppliedJobs extends Component{
    render(){
        return(
            <Container >
                <br />
                <Row>
                    Applied Jobs
                </Row>
                <br />
                
                    <Card md={{span:12}} className={classes.Card}>
                        <Card.Body>
                            <Card.Title>
                                <Row>Software Developer</Row>
                                <Row>Accenture</Row>
                                <Row><Col>Mf</Col>Ff<Col></Col>Sf<Col></Col></Row>
                            </Card.Title>
                            <Card.Text className={classes.Description}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Col md={{span:2, offset:10}}>
                                <span className={classes.Star}><i class="far fa-star"></i></span>
                                
                                <Button>Apply</Button>
                            </Col>                        
                        </Card.Footer>
                    </Card>
                
            </Container>
        );
    }
}

export default AppliedJobs;