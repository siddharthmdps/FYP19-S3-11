import React from 'react'
import { Col, Row, Card, Container, Form, Button } from 'react-bootstrap';
import './SignUp.css'
import classes from './Signup.module.css';
import { fontWeight, bgcolor } from '@material-ui/system';
import Button1 from '../common_assets/Button1/Button1';
import { RegStuModal } from './RegStuModal'
import { RegEmpModal } from './RegEmpModal'

class Signup extends React.Component {
    constructor() {
        super()
        this.state = {
            usertype : "student",
            loading : false
        }
    }

    render() {
        let RegEmpModalClose = () => this.setState({ RegEmpModalShow: false })
        let RegStuModalClose = () => this.setState({ RegStuModalShow: false })
        document.body.style =
            'background-image: url("BG.jpg");background-size: cover';
        return (
            <React.Fragment>
                <Row >
                    <Col md={{ span: 6, offset: 5 }}>
                        <div className={classes.Title}>
                            <h1 >Sign Up</h1>
                            <p style={{ fontWeight: '400' }}>Kick start your professional career</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 6, offset: 5 }}>
                        <Card className={classes.Card}>
                            <Card.Body>


                                <div style={{ textAlign: 'center' }}>
                                    <h3>Are you an employer or a student?</h3>
                                    <br />
                                    <Button variant="outline-success" size="lg" block
                                        onClick={() => this.setState({ RegEmpModalShow: true })}
                                    >Employer</Button>
                                    <RegEmpModal show={this.state.RegEmpModalShow}
                                        onHide={RegEmpModalClose}
                                    />
                                    <br /><br />
                                    <Button variant="outline-success" size="lg" block
                                        onClick={() => this.setState({ RegStuModalShow: true })}
                                    >Student</Button>
                                    <RegStuModal show={this.state.RegStuModalShow}
                                        onHide={RegStuModalClose}
                                    />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default Signup