import React, { Component } from 'react';
import { Image, Container, Card, ResponsiveEmbed, Form, Col, Row } from 'react-bootstrap';
import Button1 from '../../../../common_assets/Button1/Button1'
import classes from './LeftSide.module.css';

class LeftSide  extends Component {
    render(){
        return (
            <React.Fragment>
                <Container>
                    <Card className={classes.CentralContent}>
                        <Card.Body >
                            <div className={classes.Parent}>
                                <ResponsiveEmbed aspectRatio="1by1" style={{ position: 'absolute' }}>
                                    <div className={classes.Overlay}>
                                        <input type='file' style={{display: 'none'}} onChange={this.props.changeFn} ref={fileInput => this.fileInput = fileInput} />
                                        <button className={classes.Text} onClick={() => this.fileInput.click()}>Upload New</button>
                                    </div>
                                </ResponsiveEmbed>
                                <ResponsiveEmbed aspectRatio="1by1" >
                                    <Image src={this.props.imageLink} className={classes.Image} bsPrefix />
                                </ResponsiveEmbed>
                            </div>
                        </Card.Body>
                        <Card.Body>{this.props.children}</Card.Body>
                    </Card>
                </Container>
            </React.Fragment>
        );
    }
}

export default LeftSide;