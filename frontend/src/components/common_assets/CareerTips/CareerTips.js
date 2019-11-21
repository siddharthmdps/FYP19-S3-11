import React, {Component} from 'react';
import classes from './CareerTips.module.css';


import {Container, Row, Col, Card } from 'react-bootstrap';

import Axios from 'axios';

class CareerTips extends Component {

    state={
        Tips: []
    }

    componentDidMount(){
        Axios.get('https://pegasus-backend.herokuapp.com/admin/getallcareertips')
            .then(receivedData => {
                let tempCareerTips = [];
                for (let i in receivedData.data) {
                    let tempC = {};
                    tempC['Title'] = receivedData.data[i]['title'];        
                    tempC['Link'] = receivedData.data[i]['url'];
                    tempCareerTips.push(tempC);
                }
                console.log(tempCareerTips);
                this.setState({ Tips: tempCareerTips });
            })
            .catch(err => {
                console.log(err);
            })
        
    }
    
    render(){
        return(
            <Container fluid>
                <br />
                <Row className={classes.Title}>
                    <Col md={{ offset: 1, span: 10 }}>
                    Career Tips
                    </Col>
                </Row>
                <br />
                {this.state.Tips.map(careerTips => (
                    <Row>
                        <Col md={{ offset: 1, span: 10 }}>
                            <Card className={classes.Card} onClick={() => {window.open(careerTips.Link)}}>
                                <Card.Body className={classes.CardBody}>
                                    <Card.Title>
                                        <Row className={classes.Row} style={{ fontWeight: '600' }}>{careerTips.Title}</Row>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                
                ))}
            </Container>
        )
    }
};

export default CareerTips;