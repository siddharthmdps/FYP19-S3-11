import React, { Component } from 'react';
import classes from './ContactUs.module.css';
import { Container, Row, Col, Image } from 'react-bootstrap';

import Logo from '../../../common_assets/Logo';

class AboutUs extends Component {

    componentDidMount(){
        this.props.useBlog(true);
    }

    render(){
        return(
            <Container fluid className={classes.AboutUs}>
                <Row>
                    <Col sm={12} md={{span: 4, offset: 2}} className={classes.Logo}>
                        <Image src="./email.png" style={{ width: '100%'}} />
                    </Col>

                    <Col sm={12} md={{span: 5, offset: 1}} className={classes.Description}>
                    <span className={classes.Title}>Reach us at ...</span>
<pre className={classes.DescriptionText}>
{`
Project Assessor: Tan Kheng Teck

Email : `}{<a className={classes.Clickable} href={"mailto:khengtecktan@yahoo.com.sg"} >khengtecktan@yahoo.com.sg</a>}{` 

Project Supervisor: Dr Loo Poh Kok

Email : `}{<a className={classes.Clickable} href={"mailto:pkloo@singnet.com.sg"} >pkloo@singnet.com.sg</a>}{` 

Siddharth Singh: `}{<a className={classes.Clickable} href={"mailto:singh041@mymail.sim.edu.sg"} >singh041@mymail.sim.edu.sg</a>}{` 

Joshua Cheng: `}{<a className={classes.Clickable} href={"mailto:jcycheng001@mymail.sim.edu.sg"} >jcycheng001@mymail.sim.edu.sg</a>}{` 

Lum Soon Keong: `}{<a className={classes.Clickable} href={"mailto:sklum001@mymail.sim.edu.sg"} >sklum001@mymail.sim.edu.sg</a>}{` 

Min Marn OO: `}{<a className={classes.Clickable} href={"mailto:mmoo001@mymail.sim.edu.sg"} >mmoo001@mymail.sim.edu.sg</a>}{` 

Min San: `}{<a className={classes.Clickable} href={"mailto:san002@mymail.sim.edu.sg"} >san002@mymail.sim.edu.sg</a>}{` 

Zhiting: `}{<a className={classes.Clickable} href={"mailto:ztchia002@mymail.sim.edu.sg"} >ztchia002@mymail.sim.edu.sg</a>}{` 
`}
</pre>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AboutUs;