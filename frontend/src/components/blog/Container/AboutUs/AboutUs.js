import React, { Component } from 'react';
import classes from './AboutUs.module.css';
import { Container, Row, Col, Image } from 'react-bootstrap';

import Logo from '../../../common_assets/Logo';

class AboutUs extends Component {

    componentDidMount(){
        this.props.useBlog(true);
    }
    
    render(){
        return(
            <Container fluid className={classes.AboutUs}>
                {/* <Row className={classes.Title}>
                    <Col sm={12}>
                        About Us
                    </Col>
                </Row> */}
                <Row>
                    <Col sm={12} md={{span: 4, offset: 1}} className={classes.Logo}>
                        <Image src="./PegLogoBig.png" style={{ width: '100%'}} />
                        <br />
                        <span className={classes.SubText}>SIM Online Recruitment</span>
                    </Col>

                    <Col sm={12} md={{span: 6, offset: 1}} className={classes.Description}>
                    <span className={classes.Title}>About Us</span>
<pre className={classes.DescriptionText}>
{`
Our team is FYP19-S3-11 and we are developing a website for CSCI321 Final Year Project

Project Assessor: Tan Kheng Teck

Project Supervisor: Dr Loo Poh Kok

This project was successfully completed by the following team members:

Siddharth Singh (UOW ID: 5922690)
Roles: Team Leader, Front-end development

Joshua Cheng Chee Yan (UOW ID: 5921971)
Roles: Front-end development

Zhi Ting Chia (UOW ID: 5655602)
Roles: Front-end development (Employer section)

Lum Soon Keong (UOW ID: 6096591)
Roles: Front-end development (Admin section)

Min Marn Oo (UOW ID: 5841021)
Roles: Back-end development (Emplyer section)

Min San (UOW ID: 6213558) 
Roles: Back-end development
`}
</pre>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AboutUs;