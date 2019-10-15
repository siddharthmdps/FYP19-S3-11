import React from 'react';
import {Button, Image, Row, Container} from 'react-bootstrap';
import classes from './ProfileImage.module.css';

const profileImage = props => {
    
    return(
        <React.Fragment>
            <Container className={classes.ProfileImage}>
                <Row>
                    <Image src = {props.imageLink} className={classes.Image}/>
                </Row>
                <br />
                <Row>
                    <Button type = "">Upload</Button>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default profileImage;