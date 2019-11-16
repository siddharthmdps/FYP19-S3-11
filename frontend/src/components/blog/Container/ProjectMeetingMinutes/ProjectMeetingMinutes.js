import React, { Component } from 'react';
import { Container, Row, Col, Tab, Nav} from 'react-bootstrap';
import classes from './ProjectMeetingMinutes.module.css'

class VerticalTabs extends Component {
    state={
        value: ""
    }

  handleChange = (event, newValue) => {
    this.setState({value: newValue});
  };

    componentDidMount(){
        this.props.useBlog(true);
    }

    render(){
        return (
            <Container fluid>
                <Tab.Container id="tab">
                    <Row className={classes.ProjectMM} >
                        <Col sm={3} className={classes.LeftSide}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link className={classes.NavLink} eventKey="10">Project Meeting 10 - 18th Nov 2019 <br /> (1430 hrs - 1530 hrs)</Nav.Link>
                            </Nav.Item>
                            <br />
                            <Nav.Item>
                                <Nav.Link  className={classes.NavLink} eventKey="9">Project Meeting 9 - 18th Nov 2019 <br /> (1430 hrs - 1530 hrs)</Nav.Link>
                            </Nav.Item>
                            <br />
                            <Nav.Item>
                                <Nav.Link  className={classes.NavLink} eventKey="8">Project Meeting 8 - 18th Nov 2019 <br /> (1430 hrs - 1530 hrs)</Nav.Link>
                            </Nav.Item>
                            <br />
                            <Nav.Item>
                                <Nav.Link  className={classes.NavLink} eventKey="7">Project Meeting 7 - 18th Nov 2019 <br /> (1430 hrs - 1530 hrs)</Nav.Link>
                            </Nav.Item>
                            <br />
                            <Nav.Item>
                                <Nav.Link  className={classes.NavLink} eventKey="6">Project Meeting 6 - 18th Nov 2019 <br /> (1430 hrs - 1530 hrs)</Nav.Link>
                            </Nav.Item>
                            <br />
                            <Nav.Item>
                                <Nav.Link  className={classes.NavLink} eventKey="5">Project Meeting 5 - 18th Nov 2019 <br /> (1430 hrs - 1530 hrs)</Nav.Link>
                            </Nav.Item>
                            <br />
                            <Nav.Item>
                                <Nav.Link  className={classes.NavLink} eventKey="4">Project Meeting 4 - 18th Nov 2019 <br /> (1430 hrs - 1530 hrs)</Nav.Link>
                            </Nav.Item>
                            <br />
                            <Nav.Item>
                                <Nav.Link  className={classes.NavLink} eventKey="3">Project Meeting 3 - 18th Nov 2019 <br /> (1430 hrs - 1530 hrs)</Nav.Link>
                            </Nav.Item>
                            <br />
                            <Nav.Item>
                                <Nav.Link  className={classes.NavLink} eventKey="2">Project Meeting 2 - 18th Nov 2019 <br /> (1430 hrs - 1530 hrs)</Nav.Link>
                            </Nav.Item>
                            <br />
                            <Nav.Item>
                                <Nav.Link  className={classes.NavLink} eventKey="1">Project Meeting 1 - 18th Nov 2019 <br /> (1430 hrs - 1530 hrs)</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                        <Col sm={9} className={classes.RightSide}>
                            <Tab.Content style={{height: '100%'}}>
                                <Tab.Pane eventKey="10" style={{height: '100%'}}>
                                    <iframe className={classes.RightSideContent} src="https://docs.google.com/document/d/e/2PACX-1vQxUiRxiCuC_2hHQ7megViUcZkltuk2o4kYb0MFzCYl1lGi1c_XDEK1gv5BtVA-tAJ-MqZma9C5xsxU/pub?embedded=true"></iframe>
                                </Tab.Pane>
                                <Tab.Pane eventKey="9"  style={{height: '100%'}}>
                                    <iframe className={classes.RightSideContent} src="https://docs.google.com/document/d/e/2PACX-1vTK2xCTtud1cVN3Is4n9bjklsqSzffVpWQHMFbbHeSboO1ibg63D9JwrL2YBsDATnR0_j55G4j0O7Q2/pub?embedded=true"></iframe>
                                </Tab.Pane>
                                <Tab.Pane eventKey="8"  style={{height: '100%'}}>
                                    <iframe className={classes.RightSideContent} src="https://docs.google.com/document/d/e/2PACX-1vSqKgubjImtNpzYm5iXKxOjezeGAtJFOWTtgl1628r-lJxijCQZngq8YfiF9ZCpGgWnVUr1AzA4LcZu/pub?embedded=true"></iframe>
                                </Tab.Pane>
                                <Tab.Pane eventKey="7"  style={{height: '100%'}}>
                                    <iframe className={classes.RightSideContent} src="https://docs.google.com/document/d/e/2PACX-1vS9BzAd0qtYOxYQOVtX9ltzYVT8QEyRkwb7FWaHOr0_lDd-L8A5W0-5o6Ji4YmwZo8OGkVd32h8lNn2/pub?embedded=true"></iframe>
                                </Tab.Pane>
                                <Tab.Pane eventKey="6"  style={{height: '100%'}}>
                                    <iframe className={classes.RightSideContent} src="https://docs.google.com/document/d/e/2PACX-1vSiUokHKxAMqo01WWINaYH-Wooxn24mE9f8cfCu6sYjZvpyIWmNDqRGMwzFj9-9c7_xAXCHhZ8qoZTF/pub?embedded=true"></iframe>
                                </Tab.Pane>
                                <Tab.Pane eventKey="5"  style={{height: '100%'}}>
                                    <iframe className={classes.RightSideContent} src="https://docs.google.com/document/d/e/2PACX-1vQMejdnNVDIstAlXFq8om_sDe_21sAqbfvw5VTwoaXrXl7HKQ4c9b-3ksw0YoI8xBPmtVcCFPCenlGn/pub?embedded=true"></iframe>
                                </Tab.Pane>
                                <Tab.Pane eventKey="4"  style={{height: '100%'}}>
                                    <iframe className={classes.RightSideContent} src="https://docs.google.com/document/d/e/2PACX-1vQ3SG78GCVDtUNdhu_K91BHkONhavaStmtVx50mObZ5QDAbTyoLGl07R6Sb3swuaPJ1EV-6dxXoiYny/pub?embedded=true"></iframe>
                                </Tab.Pane>
                                <Tab.Pane eventKey="3"  style={{height: '100%'}}>
                                    <iframe className={classes.RightSideContent} src="https://docs.google.com/document/d/e/2PACX-1vQAMm2aQpTB3isInnNyzhOOLhpjm3Us_fYZ_H0ymvoAc90RoaXKASubotKLzUHxeLR8Vae39UsxQJl4/pub?embedded=true"></iframe>
                                </Tab.Pane>
                                <Tab.Pane eventKey="2"  style={{height: '100%'}}>
                                    <iframe className={classes.RightSideContent} src="https://docs.google.com/document/d/e/2PACX-1vSt3rNTDYUkRwL3VKPcdvnc8tgpH8OlVBfGejbuxqsBtxa_iZik-V1DGw7un1W2cemgQEmcB3i-6hhZ/pub?embedded=true"></iframe>
                                </Tab.Pane>
                                <Tab.Pane eventKey="1"  style={{height: '100%'}}>
                                    <iframe className={classes.RightSideContent} className={classes.RightSideContent} src="https://docs.google.com/document/d/e/2PACX-1vTQHpi63H0wiYT8MQHLjbIPT6qxB11d6vKU4HmM2qj_cXtIb61x3Ctzr39Q45gY0sljMRVHBDdzU5R8/pub?embedded=true"></iframe>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

export default VerticalTabs;