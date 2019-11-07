import React from 'react';
import {Image, Container, Card, ResponsiveEmbed} from 'react-bootstrap';
import Button1 from '../../../../common_assets/Button1/Button1'
import classes from './LeftSide.module.css';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

let percentage = 66

const leftSide = props => {
    
    return(
        <React.Fragment>
            <Container>
                <Card className={classes.CentralContent}>
                <Card.Body onClick={()=>{alert("Eh!")}}>
                    <ResponsiveEmbed aspectRatio="1by1">
                        <Image src = {props.imageLink} className={classes.Image}/>
                    </ResponsiveEmbed>
                </Card.Body>
                <Card.Body ><Button1>Upload</Button1></Card.Body>
                </Card>
                <Card>
                <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={1}/>
                </Card>
            </Container>
        </React.Fragment>
    );
}

export default leftSide;