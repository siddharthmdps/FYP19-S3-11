import React, { Component } from 'react';
import classes from './Product.module.css';
import { Container, Row, Col, Image } from 'react-bootstrap';

class Product extends Component {

    componentDidMount(){
        this.props.useBlog(true);
    }

    render(){
        return(
            <Container fluid className={classes.Product}>
                <Row>
                    <Col sm={{span: 3, offset: 4}}>
                    <Image src="./PegLogoBig.png" style={{width: '100%'}}/>
                    </Col>
                </Row>
                    <br />
                <Row>
                    <Col sm={12} md={{span: 8, offset: 2}} className={classes.SubText}>
                    SIM Online Recruitment using Cloud Computing
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={{span: 8, offset: 2}} className={classes.DescriptionText}>
This project aims to develop an online automation system that is beneficial for SIM students and companies recruiting SIM graduates. This software has two login portals, one for students and the other for recruiting companies.
<br />
<br />

Students will enter all their personal as well as professional while registering themselves into the system. The students can also control the privacy settings of their accounts. The companies register with their company name, Job title, No. of vacancy, Job description, Job profile, Criteria, etc. The students can view and apply to the companies. The students will also be notified if job ads match with their interests and abilities, provided that they choose to make their information public. The companies can view the list of student profile who have applied to the particular company. An optional requirement is that the system allows users to communicate.
<br />
<br />

The admin of the system, has the access to all the portal. He handles all the logins credentials. The admin can add, delete or edit information when need be. The admin can also generate various reports (personal identity needs to be removed) for SIM management to understand the employability of SIM graduates. All the details are stored in the cloud which is very easy to access for the user any time. As, the project files and a database file will be stored into the Azure cloud (or Amazon AWS), the project will be accessed in the web browser through Azure link.
</Col>
                </Row>
                <br />
                <br />
                <Row>
                    <Col sm={12} md={{span: 3, offset: 2}} className={classes.DescriptionText}>
                        <span onClick={()=> window.open("https://google.com", "_blank")}>
                            <Image src='./technicalManual.png' style={{width: '100%'}} />
                        </span>
                            <br />
                            <span className={classes.SubText}>
                                Technical Manual
                            </span>
                    </Col>
                    <Col sm={12} md={{span: 3, offset: 2}} className={classes.DescriptionText}>
                        <span onClick={()=> window.open("https://google.com", "_blank")}>
                            <Image src='./userManual.jpg' style={{width: '100%'}} />
                        </span>
                        <br />
                            <span className={classes.SubText}>
                                User Manual
                            </span>
                    </Col>
                    </Row>
                    
            </Container>
        );
    }
}

export default Product;