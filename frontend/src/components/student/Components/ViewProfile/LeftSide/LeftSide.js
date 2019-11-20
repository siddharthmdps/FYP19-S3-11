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
                            <i className="fas fa-envelope"></i> <a className={classes.Clickable} href={"mailto:" +props.details.Email}  >{props.details.Email}</a>
                        </ListGroupItem>
                        <ListGroupItem> <i className="fas fa-mobile"></i> {props.details.Phone}</ListGroupItem>
                        <ListGroupItem> <i className="fas fa-map-marker-alt"></i> {props.details.CurrentAddress} <br /> {props.details.City} {props.details.Country} {props.details.PostalCode}</ListGroupItem>
                    </ListGroup>
                </Card>
                <Card className={[classes.LeftSide, classes.CentralContent]}>
                <ListGroup className="list-group-flush" className={classes.CentralContent}>
                    {
                        props.documents.map( (doc, id) =>{
                        const file = new Blob(doc.Link.data, {
                            type: "application/pdf"
                          });
                        return <ListGroupItem key={id} onClick={()=> {window.open(URL.createObjectURL(file))}} className={classes.Clickable}><i className="fas fa-file"></i> {doc.Title}</ListGroupItem>
                        })
                    }
                </ListGroup>
                
                </Card>
            </Container>
        </React.Fragment>
    );
}

export default leftSide;