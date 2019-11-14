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
                    <Row>
                        <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                        <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                            abcd
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            abad
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