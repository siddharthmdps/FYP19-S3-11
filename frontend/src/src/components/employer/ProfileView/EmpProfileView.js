import React, { Component } from 'react';
import CompanyLogo from '../Components/LeftSide/CompanyInfo';
import classes from './EmpProfileView.module.css';
import { Card, Container, Row, Col } from 'react-bootstrap';

import apiURL from '../../../config'
import Axios from 'axios';


//This is the profile of the company the students will view when they click to find out more
// about the company

class EmpProfileView extends Component {

    empID = localStorage.getItem('id')
    state = {
        username: localStorage.getItem('username'),
        companyname: "",
        companyphone: "",
        companydescription: "",
        companyaddress: "",
        industry: "",
        loading: false
    }

    componentDidMount() {
        Axios.get(`${apiURL}employer/employerinfo/${this.empID}`)
            .then(response => {
                this.setState({
                    companyname: response.data.body[0].companyname,
                    companyphone: response.data.body[0].companyphone,
                    companydescription: response.data.body[0].companydescription,
                    companyaddress: response.data.body[0].companyaddress,
                    industry: response.data.body[0].industry
                })
                console.log(response.data);
            })
            .catch(error => {
                alert(`failed to fetch employer details : ${error}`)
            })
    }

    render() {
        document.body.style =
            'background: linear-gradient(to right, #0f2027, #203a43, #2c5364);';
        return (
            <React.Fragment>
                <Container className={classes.ViewProfile}>
                    <Card>
                        <Row >
                            <Col md={{ offset: 1, span: 4 }} className={classes.Company}>
                                    <Card.Body>
                                        <CompanyLogo companyName={this.state.companyname} buttonText="Find out more!" />
                                    </Card.Body>
                            </Col>
                            <Col md={{ offset: 0, span: 6 }} className={classes.CompanyInfoBox}>
                                    <Card.Body>
                                        <Card.Title>Company Phone</Card.Title>
                                        {this.state.companyphone}
                                    </Card.Body>
                                    <Card.Body>
                                        <Card.Title>Industry</Card.Title>
                                        {this.state.industry}
                                    </Card.Body>
                            </Col>
                        </Row>
                        <Row style={{height: '32vh'}}>
                            <Col md={{ offset: 1, span: 10 }}>
                                    <Card.Body>
                                        <Card.Title>Brief Overview</Card.Title>
<pre className={classes.Overview}>
    {`
${this.state.companydescription}
`}
</pre>
                                    </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Container>
            </React.Fragment>
            //             <React.Fragment>
            //                 <Container className={classes.ViewProfile}>
            //                     <Row>
            //                         <Col md={{ offset: 1, span: 4 }}>
            //                             <Card>
            //                                 <Card.Body>
            //                                     <CompanyLogo companyName={this.state.companyname} buttonText="Find out more!" />
            //                                 </Card.Body>
            //                             </Card>
            //                         </Col>
            //                         <Col md={{ offset: 0, span: 6 }}>
            //                             <Card>
            //                                 <Card.Body>
            //                                     <Card.Title>Company Phone</Card.Title>
            //                                     {this.state.companyphone}
            //                                 </Card.Body>
            //                             </Card>

            //                             <Card>
            //                                 <Card.Body>
            //                                     <Card.Title>Industry</Card.Title>
            //                                     {this.state.industry}
            //                                 </Card.Body>
            //                             </Card>
            //                         </Col>
            //                     </Row>
            //                     <br />
            //                     <Row>
            //                         <Col md={{ offset: 1, span: 10 }}>
            //                             <Card>
            //                                 <Card.Body>
            //                                     <Card.Title>Brief Overview</Card.Title>
            // <pre>
            // {`
            // ${this.state.companydescription}
            // `}
            // </pre>
            //                                 </Card.Body>
            //                             </Card>
            //                         </Col>
            //                     </Row>
            //                     <br />
            //                 </Container>
            //             </React.Fragment>
        )
    }
};

export default EmpProfileView;
