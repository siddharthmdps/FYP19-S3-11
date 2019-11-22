import React, {Component} from 'react';
import classes from './Polls.module.css';


import {Container, Row, Col, Card, Alert, Button } from 'react-bootstrap';
import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';

import Axios from 'axios';

import { withSnackbar } from 'notistack';

class Polls extends Component {

    state={
        Polls: []
    }

    changeStatus = (id) => {
        let temp = this.state.Polls;
        let value = "0";
        let tempID = 0;
        temp.forEach(element => {
            if(element.ID === id){
                value = element.Selection;
            }
        });
        if(value == "0"){
            this.props.enqueueSnackbar('Please select an option first!', { variant: 'error' });
        }
        else{
            Axios.put(`https://pegasus-backend.herokuapp.com/student/submitpoll/${id}&${value}`)
                .then(res => {
                    console.log(res.data);
                    temp.forEach(element => {
                        if(element.ID === id){
                            element.Submitted = true;
                        }
                    });
                    this.setState({ "Polls": temp });
                })
                .catch(err => {
                    console.log(err)
                });
        }
        console.log(temp, id);
    };

    
    SubmittedFooter = () => (
        <Alert variant="success">
            <i className="fas fa-check-circle"></i> Thank you for submitting the poll
        </Alert>
    );
    
    OtherFooter = (id) => {
        return (
            <React.Fragment>
                <div className={classes.ButtonDiv}>
                    <Button className={classes.Apply} onClick={() => this.changeStatus(id)}>Submit</Button>
                </div>
            </React.Fragment>
        )
    };    

    changeValue (value, ID){
        console.log("Hello", value, ID);

        let temp = this.state.Polls;
        temp.forEach(element => {
            if(element.ID == ID){
                element['Selection'] = value;
            }
        });
        console.log(temp)
        this.setState({Polls: temp});
    }

    componentDidMount(){
        Axios.get('https://pegasus-backend.herokuapp.com/admin/getallpolls')
            .then(receivedData => {
                let tempPolls = [];
                for (let i in receivedData.data) {
                    let tempC = {};
                    tempC['Question'] = receivedData.data[i]['question'];        
                    tempC['1'] = receivedData.data[i]['option1'];        
                    tempC['2'] = receivedData.data[i]['option2'];
                    tempC['3'] = receivedData.data[i]['option3'];
                    tempC['ID'] = receivedData.data[i]['pollid'];
                    tempC['Submitted'] = false;        
                    tempC['Selection'] = "0";             
                    tempPolls.push(tempC);
                }
                console.log(tempPolls);
                this.setState({ Polls: tempPolls });
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
                    Polls
                    </Col>
                </Row>
                <br />
                {this.state.Polls.map(poll => (
                    <Row>
                        <Col md={{ offset: 1, span: 10 }}>
                            <Card className={classes.Card}>
                                <Card.Body className={classes.CardBody}>
                                    <Card.Title>
                                        <Row className={classes.Row} style={{ fontWeight: '600' }}>{poll.Question}</Row>
                                    </Card.Title>


                                    <RadioGroup aria-label="position" name="position" 
                                value={poll.Selection} onChange={event => {this.changeValue(event.target.value, poll.ID)}} 
                                row>

                                    <FormControlLabel
                                        value="1"
                                        control={<Radio color="primary" />}
                                        label={poll['1']}
                                        labelPlacement="end"
                                    />

                                    <br />

                                    <FormControlLabel
                                        value="2"
                                        control={<Radio color="primary" />}
                                        label={poll['2']}
                                        labelPlacement="end"
                                    />

                                    <br />

                                    <FormControlLabel
                                        value="3"
                                        control={<Radio color="primary"/>}
                                        label={poll['3']}
                                        labelPlacement="end"
                                    />

                                </RadioGroup>

                                </Card.Body>
                                <Card.Footer className={classes.Footer}>
                                    {poll.Submitted? this.SubmittedFooter(): this.OtherFooter(poll.ID)}
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                
                ))}
            </Container>
        )
    }
};

export default withSnackbar(Polls);