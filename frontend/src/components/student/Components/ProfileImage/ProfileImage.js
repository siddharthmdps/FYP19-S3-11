import React from 'react';
import {Button, Image, Row, Container} from 'react-bootstrap';
import Button1 from '../../../common_assets/Button1/Button1'
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
                    <Button1 type = "">Upload</Button1>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default profileImage;