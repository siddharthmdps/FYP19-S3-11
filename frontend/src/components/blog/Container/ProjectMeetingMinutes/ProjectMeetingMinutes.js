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
                                <Nav.Link className={classes.NavLink} eventKey="21">Project Meeting 21 - 18th Nov 2019 <br /> (1430 hrs - 1530 hrs)</Nav.Link>
                            </Nav.Item>
                            <br />
                            <Nav.Item>
                                <Nav.Link className={classes.NavLink} eventKey="20">Project Meeting 20 - 18th Nov 2019 <br /> (1430 hrs - 1530 hrs)</Nav.Link>
                            </Nav.Item>
                            <br />
                            <Nav.Item>
                                <Nav.Link  className={classes.NavLink} eventKey="19">Project Meeting 19 - 18th Nov 2019 <br /> (1430 hrs - 1530 hrs)</Nav.Link>
                            </Nav.Item>
                            <br />
                            <Nav.Item>
                                <Nav.Link  className={classes.NavLink} eventKey="18">Project Meeting 18 - 18th Nov 2019 <br /> (1430 hrs - 1530 hrs)</Nav.Link>
                            </Nav.Item>
                            <br />
                            <Nav.Item>
                                <Nav.Link  className={classes.NavLink} eventKey="17">Project Meeting 17 - 18th Nov 2019 <br /> (1430 hrs - 1530 hrs)</Nav.Link>
                            </Nav.Item>
                            <br />
                            <Nav.Item>
                                <Nav.Link  className={classes.NavLink} eventKey="16">Project Meeting 16 - 18th Nov 2019 <br /> (1430 hrs - 1530 hrs)</Nav.Link>
                            </Nav.Item>
                            <br />
                            <Nav.Item>
                                <Nav.Link  className={classes.NavLink} eventKey="15">Project Meeting 15 - 18th Nov 2019 <br /> (1430 hrs - 1530 hrs)</Nav.Link>
                            </Nav.Item>
                            <br />
                            <Nav.Item>
                                <Nav.Link  className={classes.NavLink} eventKey="14">Project Meeting 14 - 18th Nov 2019 <br /> (1430 hrs - 1530 hrs)</Nav.Link>
                            </Nav.Item>
                            <br />
                            <Nav.Item>
                                <Nav.Link  className={classes.NavLink} eventKey="13">Project Meeting 13 - 18th Nov 2019 <br /> (1430 hrs - 1530 hrs)</Nav.Link>
                            </Nav.Item>
                            <br />
                            <Nav.Item>
                                <Nav.Link  className={classes.NavLink} eventKey="12">Project Meeting 12 - 18th Nov 2019 <br /> (1430 hrs - 1530 hrs)</Nav.Link>
                            </Nav.Item>
                            <br />
                            <Nav.Item>
                                <Nav.Link  className={classes.NavLink} eventKey="11">Project Meeting 11 - 18th Nov 2019 <br /> (1430 hrs - 1530 hrs)</Nav.Link>
                            </Nav.Item>
                            <br />
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
                                <Tab.Pane eventKey="21" style={{height: '100%'}}>
                                    <iframe className={classes.RightSideContent} src="https://docs.google.com/document/d/e/2PACX-1vQUdGO8swoy6GRMgtcukTbwB-CqEsDGQD3ss03vPAsBW_mrrXiBqto5ajjILlYCUpZGgq3uA4AYfwCq/pub?embedded=true"></iframe>
                                </Tab.Pane>
                                <Tab.Pane eventKey="20" style={{height: '100%'}}>
                                    <iframe className={classes.RightSideContent} src="https://docs.google.com/document/d/e/2PACX-1vR5ZvhOXsQ54RVKDEWXK-IgOc1KWVpS5dl5MtWO0v2EfSWU9hmWJfyLe5FHSuc-5LmFOAimCkQu2Bul/pub?embedded=true"></iframe>
                                </Tab.Pane>
                                <Tab.Pane eventKey="19" style={{height: '100%'}}>
                                    <iframe className={classes.RightSideContent} src="https://docs.google.com/document/d/e/2PACX-1vQPlxOUsFFyZTzzrvDxANJnopsEpnvVGsSQCYo6TjhIAv0GLLktYvTtAQYJU5Uh0H-JQCe0uxSKOgjB/pub?embedded=true"></iframe>
                                </Tab.Pane>
                                <Tab.Pane eventKey="18" style={{height: '100%'}}>
                                    <iframe className={classes.RightSideContent} src="https://docs.google.com/document/d/e/2PACX-1vQdpCrXCOQUAI1sPJKkufhPtVUGaOIQ87hOSvOAJflKOJ90Ru9t2R9JtL1Stz3-FThCXisSek9j0KJ2/pub?embedded=true"></iframe>
                                </Tab.Pane>
                                <Tab.Pane eventKey="17" style={{height: '100%'}}>
                                    <iframe className={classes.RightSideContent} src="https://docs.google.com/document/d/e/2PACX-1vReL9bjVLdE5CEcS_tfu-R-p3Sw42HHSlLOVFSvcVZJpQbHgmuXR5cBL1lbR_IyVZJ-XPAVdpTLFtVV/pub?embedded=true"></iframe>
                                </Tab.Pane>
                                <Tab.Pane eventKey="16" style={{height: '100%'}}>
                                    <iframe className={classes.RightSideContent} src="https://docs.google.com/document/d/e/2PACX-1vRy9_pWzNCi_DHYZMMBI4Elus82Zc43h7O1DjbBofZnF3q25Bbda1gueKidRh6KSgRXS1KTnDQ4Cseo/pub?embedded=true"></iframe>
                                </Tab.Pane>
                                <Tab.Pane eventKey="15" style={{height: '100%'}}>
                                    <iframe className={classes.RightSideContent} src="https://docs.google.com/document/d/e/2PACX-1vTkd6zCsyl26kuE8ohgXpL4LVoT5pII_N6EuB9RN1oSK4hGrfvFa11blDJvLuVXGKDEuYgTtO6s_exp/pub?embedded=true"></iframe>
                                </Tab.Pane>
                                <Tab.Pane eventKey="14" style={{height: '100%'}}>
                                    <iframe className={classes.RightSideContent} src="https://docs.google.com/document/d/e/2PACX-1vSWGMwLPj-HtCUT9Uk30xinQZj237ZctupOwrIKnZOjMGwjL6KeShkRR-xcJg_YMvkU3G_soI6DNNh1/pub?embedded=true"></iframe>
                                </Tab.Pane>
                                <Tab.Pane eventKey="13" style={{height: '100%'}}>
                                    <iframe className={classes.RightSideContent} src="https://docs.google.com/document/d/e/2PACX-1vTdTrm8FBqDquYKjWiZCXci5C0Le9BoJN_NV_ft4i-SYVCwKDgKwU08rxfYYeBbslqK-wGmBOaIXBwt/pub?embedded=true"></iframe>
                                </Tab.Pane>
                                <Tab.Pane eventKey="12" style={{height: '100%'}}>
                                    <iframe className={classes.RightSideContent} src="https://docs.google.com/document/d/e/2PACX-1vR2Dqob7v4k4-Pz3R1282rmXqhP25bTXnvGHLcqr0cNzKDQQRLFNCb_tnj4tI4Zh0qshwe_gzZnIUzt/pub?embedded=true"></iframe>
                                </Tab.Pane>
                                <Tab.Pane eventKey="11" style={{height: '100%'}}>
                                    <iframe className={classes.RightSideContent} src="https://docs.google.com/document/d/e/2PACX-1vQgrZ9aG4ODPVO4emQX-BSwvH4UUyHqhH3Rh4dO0RH7HF9iJqkLBF7DC6hadZPIrrzhmjPNhnWEFquZ/pub?embedded=true"></iframe>
                                </Tab.Pane>
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