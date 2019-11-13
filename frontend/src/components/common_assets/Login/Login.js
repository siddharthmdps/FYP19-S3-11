import React, {Component} from 'react';
import classes from './Login.module.css';

import { Container, Row, Col, Card } from 'react-bootstrap';

import { FormControl, FormControlLabel, Radio , TextField, Grid, RadioGroup, Fab, Button} from '@material-ui/core';
import { Person as PersonIcon, Lock as LockIcon, ExitToApp as ExitAppIcon } from '@material-ui/icons';

class Login extends Component {
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
                                        <TextField id="input-with-icon-grid" label="User ID" fullWidth />
                                    </Grid>
                                </Grid>
                                <br />
                                <Grid container spacing={1} alignItems="flex-end">
                                    <Grid item>
                                        <LockIcon />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <TextField id="input-with-icon-grid" type="password" label="Password" fullWidth />
                                    </Grid>
                                </Grid>

                                <br />
                                <RadioGroup aria-label="position" name="position" 
                                // value={value} onChange={handleChange} 
                                row>

                                    <FormControlLabel
                                        value="Student"
                                        control={<Radio color="primary" />}
                                        label="Student"
                                        labelPlacement="start"
                                    />

                                    <FormControlLabel
                                        value="Employer"
                                        control={<Radio color="primary" />}
                                        label="Employer"
                                        labelPlacement="start"
                                    />

                                    <FormControlLabel
                                        value="Admin"
                                        control={<Radio color="primary"/>}
                                        label="Admin"
                                        labelPlacement="start"
                                    />

                                </RadioGroup>

                                <Fab variant="extended" color="primary" aria-label="add" className={classes.LoginButton}>
                                    <ExitAppIcon />
                                    Login
                                </Fab>
                                <br />
                                <br />
                                New to Pegasus? 
                                <Button color="primary" className={classes.button}>
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

export default Login;