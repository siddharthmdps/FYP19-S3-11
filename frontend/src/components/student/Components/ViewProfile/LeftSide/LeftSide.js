import React from 'react';
import { Image, Container, Card, ResponsiveEmbed, ListGroup, ListGroupItem } from 'react-bootstrap';
import Button1 from '../../../../common_assets/Button1/Button1'
import classes from './LeftSide.module.css';

const leftSide = props => {

    return (
        <React.Fragment>
            <Container>
                <Card className={classes.LeftSide}>
                    <Card.Body >
                        <ResponsiveEmbed aspectRatio="1by1">
                            <Image src={props.imageLink} className={classes.Image} />
                        </ResponsiveEmbed>

                    </Card.Body>
                    <ListGroup className="list-group-flush" className={classes.CentralContent}>
                        <ListGroupItem >{props.details.FirstName} {props.details.MiddleName} {props.details.LastName}</ListGroupItem>
                        <ListGroupItem> <i className="fas fa-flag"></i> {props.details.Nationality}</ListGroupItem>
                        <ListGroupItem className={classes.Clickable} >
                            <i className="fas fa-envelope"></i> <a href={"mailto:" +props.details.Email}  >{props.details.Email}</a>
                        </ListGroupItem>
                        <ListGroupItem> <i className="fas fa-mobile"></i> {props.details.Phone}</ListGroupItem>
                        <ListGroupItem> <i className="fas fa-map-marker-alt"></i> {props.details.CurrentAddress} <br /> {props.details.City} {props.details.Country} {props.details.PostalCode}</ListGroupItem>
                    </ListGroup>
                </Card>
            </Container>
        </React.Fragment>
    );
}

export default leftSide;