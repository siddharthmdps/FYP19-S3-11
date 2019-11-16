import React, {Component} from 'react';
import classes from './Login.module.css';

import apiURL from '../../../config';

import auth from '../../../utils/auth';

import { Container, Row, Col, Card } from 'react-bootstrap';

import { FormControlLabel, Radio , TextField, Grid, RadioGroup, Fab, Button} from '@material-ui/core';
import { Person as PersonIcon, Lock as LockIcon, ExitToApp as ExitAppIcon } from '@material-ui/icons';

import { withSnackbar } from 'notistack';

class Login extends Component {

    state = {
        userName: "",
        password: "",
        userType: "",
        loading : false
    }

    validateUser = (cb) => {
        // const username = document.getElementById("input-username").value.toLowerCase()
        // const password = document.getElementById("input-password").value
        // const usertype = document.getElementById("input-usertype").value

        const loginParticulars = { "username" : this.state.userName.toLowerCase(), "password" : this.state.password, "usertype" : this.state.userType }
        
        

        if(this.state.userName !== "" && this.state.password !== "" && this.state.userType !== "") {
            this.setState({loading : true})
            auth.login(loginParticulars, (loginResult) => {
                this.setState({loading : false})

                // if login is successful, route the user to their home page
                if(loginResult){
                    window.location = `/${this.state.userType}`
                } 
                else
                    this.props.enqueueSnackbar('Login failed, please try again.', { variant: 'error' }); 
            })
        }
        else 
            this.props.enqueueSnackbar('Please fill in all the required fields', { variant: 'error' }); 
        
    }

    setLoadingSpin = () => {
        if (this.state.loading) {
            return (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }
        else return null
    }

    changeUserNameHandler = event => {
        console.log(event.target.value);
        this.setState({userName: event.target.value});
    }

    changePasswordHandler = event => {
        console.log(event.target.value);
        this.setState({password: event.target.value});
    }

    changeUserTypeHandler = event => {
        console.log(event.target.value);
        this.setState({userType: event.target.value});
    }

    render(){
        return(
            <Container fluid className={classes.Login}>
                <Row>
                    <Col md={{offset: 7, span: 4}}>
                        <Card className={classes.Card}>
                            <Card.Title className={classes.Title}>Login</Card.Title>
                            <Card.Body className={classes.TagLine}>
                            Don't miss your next opportunity. <br /> Sign in to stay updated on your professional world.
                            </Card.Body>
                            <Card.Body>
                                <Grid container spacing={1} alignItems="flex-end">
                                    <Grid item>
                                        <PersonIcon />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <TextField id="input-username" label="User ID" value={this.state.userName} onChange={event => this.changeUserNameHandler(event)} fullWidth />
                                    </Grid>
                                </Grid>
                                <br />
                                <Grid container spacing={1} alignItems="flex-end">
                                    <Grid item>
                                        <LockIcon />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <TextField id="input-password" type="password" label="Password" value={this.state.password} onChange={event => this.changePasswordHandler(event)} fullWidth />
                                    </Grid>
                                </Grid>

                                <br />
                                <RadioGroup aria-label="position" name="position" 
                                value={this.state.userType} onChange={event => this.changeUserTypeHandler(event)} 
                                row>

                                    <FormControlLabel
                                        value="student"
                                        control={<Radio color="primary" />}
                                        label="Student"
                                        labelPlacement="start"
                                    />

                                    <FormControlLabel
                                        value="employer"
                                        control={<Radio color="primary" />}
                                        label="Employer"
                                        labelPlacement="start"
                                    />

                                    <FormControlLabel
                                        value="admin"
                                        control={<Radio color="primary"/>}
                                        label="Admin"
                                        labelPlacement="start"
                                    />

                                </RadioGroup>

                                <Fab    style={{backgroundColor: 'lightgreen', width: '80%'}} 
                                variant="extended" color="primary" aria-label="add" className={classes.LoginButton} onClick={this.validateUser}>
                                    <ExitAppIcon />
                                    Login
                                </Fab>
                                <br />
                                <this.setLoadingSpin/>
                                <br />
                                New to Pegasus? 
                                <Button style={{color: 'lightgreen'}}className={classes.button} href="/signup">
                                    Join Now
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );

    }
}

export default withSnackbar(Login);