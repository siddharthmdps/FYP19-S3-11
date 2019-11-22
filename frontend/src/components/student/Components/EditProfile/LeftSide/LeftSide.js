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
                                    <div className={classes.Overlay} onClick={() => this.fileInput.click()}>
                                        <span className={classes.Text} >Upload New</span>
                                    </div>
                                </ResponsiveEmbed>
                                        <input type='file' style={{display: 'none'}} onChange={this.props.changeFn} ref={fileInput => this.fileInput = fileInput} />
                                <ResponsiveEmbed aspectRatio="1by1" >
                                    <Image src={this.props.imageLink} className={classes.Image} bsPrefix />
                                </ResponsiveEmbed>
                            </div>
                        </Card.Body>
                        {/* <Card.Body>{this.props.children}</Card.Body> */}
                    </Card>
                </Container>
            </React.Fragment>
        );
    }
}

export default LeftSide;