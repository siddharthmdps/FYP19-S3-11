import React from 'react';
import StatBox from './StatBox'
import classes from './LeftSide.module.css';
import { Card, Form, Col, Image, ListGroup, ListGroupItem, ResponsiveEmbed } from 'react-bootstrap';
import { Link } from 'react-router-dom'
//This component is the employer's control panel.
//It contains a Profile Container and a statboard.

const leftSide = (props) => {
    return (
        <React.Fragment>
            <Card className={classes.LeftSide}>
                <Card.Body>
                    <ResponsiveEmbed aspectRatio="1by1">
                        <Image src="default3.png" className={classes.Image} />
                    </ResponsiveEmbed>
                    <p className="companyName">{props.companyName}</p>
                </Card.Body>

                <Card.Body>
                    <Form.Row >
                        <Form.Group as={Col} lg={4} sm={12}>
                            <StatBox number="" desc="" />
                        </Form.Group>
                        <Form.Group as={Col} lg={4} sm={12}>
                            <Link to={`/employer/viewjobs`} style={{ textDecoration: 'none' }}>
                                <StatBox number={props.numOfJobs} desc="Jobs" />
                            </Link>
                        </Form.Group>
                        <Form.Group as={Col} lg={4} sm={12}>
                            <StatBox number="" desc="" />
                        </Form.Group>

                    </Form.Row>

                </Card.Body>
                {/* <ListGroup className="list-group-flush" className={classes.CentralContent}>
                    <ListGroupItem className={classes.Clickable}> Preview Company Profile </ListGroupItem>
                    <ListGroupItem onClick={props.pjHandler} className={classes.Clickable}>View Jobs</ListGroupItem>
                    <ListGroupItem className={classes.Clickable}>View Applicants</ListGroupItem>
                </ListGroup> */}
                {/* <button type="button" className={classes.BtnNoOutline} >Preview Company Profile</button>

                    <button onClick={props.pjHandler} type="button" className={classes.BtnNoOutline} >Post Jobs</button>

                    <button type="button" className={classes.BtnNoOutline} >Browse Candidates</button> */}

            </Card>

        </React.Fragment>

    )
};

export default leftSide;
