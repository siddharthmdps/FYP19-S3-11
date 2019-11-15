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
                    <Row className={classes.ProjectMM}>
                        <Col sm={3} className={classes.LeftSide}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                            <Nav.Link eventKey="10">Project Meeting 10 - 18th Nov 2019 <br /> (1430 hrs - 1530 hrs)</Nav.Link>
                            </Nav.Item>
                            <br />
                            <Nav.Item>
                            <Nav.Link eventKey="9">Project Meeting 9 - 18th Nov 2019 <br /> (1430 hrs - 1530 hrs)</Nav.Link>
                            </Nav.Item>
                            <br />
                            <Nav.Item>
                            <Nav.Link eventKey="8">Project Meeting 8 - 18th Nov 2019 <br /> (1430 hrs - 1530 hrs)</Nav.Link>
                            </Nav.Item>
                            <br />
                            <Nav.Item>
                            <Nav.Link eventKey="7">Project Meeting 7 - 18th Nov 2019 <br /> (1430 hrs - 1530 hrs)</Nav.Link>
                            </Nav.Item>
                            <br />
                            <Nav.Item>
                            <Nav.Link eventKey="6">Project Meeting 6 - 18th Nov 2019 <br /> (1430 hrs - 1530 hrs)</Nav.Link>
                            </Nav.Item>
                            <br />
                            <Nav.Item>
                            <Nav.Link eventKey="5">Project Meeting 5 - 18th Nov 2019 <br /> (1430 hrs - 1530 hrs)</Nav.Link>
                            </Nav.Item>
                            <br />
                            <Nav.Item>
                            <Nav.Link eventKey="4">Project Meeting 4 - 18th Nov 2019 <br /> (1430 hrs - 1530 hrs)</Nav.Link>
                            </Nav.Item>
                            <br />
                            <Nav.Item>
                            <Nav.Link eventKey="3">Project Meeting 3 - 18th Nov 2019 <br /> (1430 hrs - 1530 hrs)</Nav.Link>
                            </Nav.Item>
                            <br />
                            <Nav.Item>
                            <Nav.Link eventKey="2">Project Meeting 2 - 18th Nov 2019 <br /> (1430 hrs - 1530 hrs)</Nav.Link>
                            </Nav.Item>
                            <br />
                            <Nav.Item>
                            <Nav.Link eventKey="1">Project Meeting 1 - 18th Nov 2019 <br /> (1430 hrs - 1530 hrs)</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                        <Col sm={9} className={classes.RightSide}>
                        <Tab.Content>
                            <Tab.Pane eventKey="10">
                            <iframe className={classes.RightSideContent} src="https://docs.google.com/document/d/e/2PACX-1vQxUiRxiCuC_2hHQ7megViUcZkltuk2o4kYb0MFzCYl1lGi1c_XDEK1gv5BtVA-tAJ-MqZma9C5xsxU/pub?embedded=true"></iframe>
                            </Tab.Pane>
                            <Tab.Pane eventKey="9">
                            <iframe className={classes.RightSideContent} src="https://docs.google.com/document/d/e/2PACX-1vQxUiRxiCuC_2hHQ7megViUcZkltuk2o4kYb0MFzCYl1lGi1c_XDEK1gv5BtVA-tAJ-MqZma9C5xsxU/pub?embedded=true"></iframe>
                            </Tab.Pane>
                            <Tab.Pane eventKey="8">
                            <iframe className={classes.RightSideContent} src="https://docs.google.com/document/d/e/2PACX-1vQxUiRxiCuC_2hHQ7megViUcZkltuk2o4kYb0MFzCYl1lGi1c_XDEK1gv5BtVA-tAJ-MqZma9C5xsxU/pub?embedded=true"></iframe>
                            </Tab.Pane>
                            <Tab.Pane eventKey="7">
                            <iframe className={classes.RightSideContent} src="https://docs.google.com/document/d/e/2PACX-1vQxUiRxiCuC_2hHQ7megViUcZkltuk2o4kYb0MFzCYl1lGi1c_XDEK1gv5BtVA-tAJ-MqZma9C5xsxU/pub?embedded=true"></iframe>
                            </Tab.Pane>
                            <Tab.Pane eventKey="6">
                            <iframe className={classes.RightSideContent} src="https://docs.google.com/document/d/e/2PACX-1vQxUiRxiCuC_2hHQ7megViUcZkltuk2o4kYb0MFzCYl1lGi1c_XDEK1gv5BtVA-tAJ-MqZma9C5xsxU/pub?embedded=true"></iframe>
                            </Tab.Pane>
                            <Tab.Pane eventKey="5">
                            <iframe className={classes.RightSideContent} src="https://docs.google.com/document/d/e/2PACX-1vQxUiRxiCuC_2hHQ7megViUcZkltuk2o4kYb0MFzCYl1lGi1c_XDEK1gv5BtVA-tAJ-MqZma9C5xsxU/pub?embedded=true"></iframe>
                            </Tab.Pane>
                            <Tab.Pane eventKey="4">
                            <iframe className={classes.RightSideContent} src="https://docs.google.com/document/d/e/2PACX-1vQxUiRxiCuC_2hHQ7megViUcZkltuk2o4kYb0MFzCYl1lGi1c_XDEK1gv5BtVA-tAJ-MqZma9C5xsxU/pub?embedded=true"></iframe>
                            </Tab.Pane>
                            <Tab.Pane eventKey="3">
                            <iframe className={classes.RightSideContent} src="https://docs.google.com/document/d/e/2PACX-1vQxUiRxiCuC_2hHQ7megViUcZkltuk2o4kYb0MFzCYl1lGi1c_XDEK1gv5BtVA-tAJ-MqZma9C5xsxU/pub?embedded=true"></iframe>
                            </Tab.Pane>
                            <Tab.Pane eventKey="2">
                            <iframe className={classes.RightSideContent} src="https://docs.google.com/document/d/e/2PACX-1vQxUiRxiCuC_2hHQ7megViUcZkltuk2o4kYb0MFzCYl1lGi1c_XDEK1gv5BtVA-tAJ-MqZma9C5xsxU/pub?embedded=true"></iframe>
                            </Tab.Pane>
                            <Tab.Pane eventKey="1">
                            <iframe className={classes.RightSideContent} src="https://docs.google.com/document/d/e/2PACX-1vQxUiRxiCuC_2hHQ7megViUcZkltuk2o4kYb0MFzCYl1lGi1c_XDEK1gv5BtVA-tAJ-MqZma9C5xsxU/pub?embedded=true"></iframe>
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