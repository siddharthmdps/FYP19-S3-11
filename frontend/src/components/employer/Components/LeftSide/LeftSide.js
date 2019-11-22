import React from 'react';
import StatBox from './StatBox'
import classes from './LeftSide.module.css';
import { Card, Form, Col, Image, ListGroup, ListGroupItem, ResponsiveEmbed } from 'react-bootstrap';

//This component is the employer's control panel.
//It contains a Profile Container and a statboard.

const leftSide = (props) => {
    return (
        <React.Fragment>
            <Card className={classes.LeftSide}>
                <Card.Body>
                    <ResponsiveEmbed aspectRatio="1by1">
                        <Image src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-P3iJ7YoAPkY%2FT5e57OJGikI%2FAAAAAAAAA38%2FRTHs9cmhndQ%2Fs1600%2Fapple-logo-clouds.jpg&f=1&nofb=1" className={classes.Image} />
                    </ResponsiveEmbed>
                    <p className="companyName">{props.companyName}</p>
                </Card.Body>

                <Card.Body>
                    <Form.Row >
                        <Form.Group as={Col} lg={4} sm={12}>
                            <StatBox number={props.numOfJobs} desc="Jobs" />
                        </Form.Group>
                        <Form.Group as={Col} lg={4} sm={12}>
                            <StatBox number="62" desc="Applicants" />
                        </Form.Group>
                        <Form.Group as={Col} lg={4} sm={12}>
                            <StatBox number="333" desc="Applications" />
                        </Form.Group>
                    </Form.Row>

                </Card.Body>
                <ListGroup className="list-group-flush" className={classes.CentralContent}>
                    <ListGroupItem className={classes.Clickable}> Preview Company Profile </ListGroupItem>
                    <ListGroupItem onClick={props.pjHandler} className={classes.Clickable}>View Jobs</ListGroupItem>
                    <ListGroupItem className={classes.Clickable}>View Applicants</ListGroupItem>
                </ListGroup>
                {/* <button type="button" className={classes.BtnNoOutline} >Preview Company Profile</button>

                    <button onClick={props.pjHandler} type="button" className={classes.BtnNoOutline} >Post Jobs</button>

                    <button type="button" className={classes.BtnNoOutline} >Browse Candidates</button> */}

            </Card>

        </React.Fragment>

    )
};

export default leftSide;
