import React, { Component } from 'react';
import { Container, Row, Col, Tab, Nav, ResponsiveEmbed, Image } from 'react-bootstrap';
import classes from './PersonalDiaries.module.css'
import Logo from '../../../common_assets/Logo'

class VerticalTabs extends Component {
    state = {
        value: "",
        dp: "default2.png"
    }

    handleChange = (event, newValue) => {
        this.setState({ value: newValue });
    };

    DPhandler = (name) => {
        if (name === 'Sid')
            this.setState({ dp: "Sid.jpeg" });
        else if (name === 'Joshua')
            this.setState({ dp: "Joshua.jpeg" });
        else if (name === 'MinMarn')
            this.setState({ dp: "MinMarn.jpeg" });
        else if (name === 'Soon')
            this.setState({ dp: "Soon.jpeg" });
        else if (name === 'Zhiting')
            this.setState({ dp: "Zhiting.jpeg" });
        else if (name === 'MinSan')
            this.setState({ dp: "MinSan.jpeg" });

    }

    componentDidMount() {
        this.props.useBlog(true);
    }

    render() {
        return (
            <Container fluid>
                <Tab.Container id="tab">
                    <Row className={classes.ProjectMM}>
                        <Col md={2} className={classes.LeftSide}>
                            <ResponsiveEmbed aspectRatio="1by1">
                                <Image src={this.state.dp} className={classes.Image} />
                            </ResponsiveEmbed>
                            <Nav 
                            style= {{
                                whiteSpace: 'nowrap',
                                marginTop: '15px'
                            }}
                            variant="pills" className="flex-column" onSelect={(event) => { this.DPhandler(event) }}>
                                <Nav.Item>
                                    <Nav.Link className={classes.NavLink} eventKey="Sid">Siddharth Singh</Nav.Link>
                                </Nav.Item>
                                <br />
                                <Nav.Item>
                                    <Nav.Link className={classes.NavLink} eventKey="Joshua">Joshua Cheng Chee Yan</Nav.Link>
                                </Nav.Item>
                                <br />
                                <Nav.Item>
                                    <Nav.Link className={classes.NavLink} eventKey="Soon">Lum Soon Keong</Nav.Link>
                                </Nav.Item>
                                <br />
                                <Nav.Item>
                                    <Nav.Link className={classes.NavLink} eventKey="MinMarn">Min Marn OO</Nav.Link>
                                </Nav.Item>
                                <br />
                                <Nav.Item>
                                    <Nav.Link className={classes.NavLink} eventKey="MinSan">Min San</Nav.Link>
                                </Nav.Item>
                                <br />
                                <Nav.Item>
                                    <Nav.Link className={classes.NavLink} eventKey="Zhiting">Zhi Ting Chia</Nav.Link>
                                </Nav.Item>
                                <br />
                            </Nav>
                        </Col>
                        <Col md={10} className={classes.RightSide}>
                            <Tab.Content>
                                <Tab.Pane eventKey="Sid">
                                    <iframe className={classes.RightSideContent} src="https://docs.google.com/document/d/e/2PACX-1vSXjv_9TNgPMMhZrB98EWBuHojauvrv14qMGQ6HnIvMWGW316khuZy2zJfhVQHKE0qeV9psA_jh6jJ5/pub?embedded=true"></iframe>
                                </Tab.Pane>
                                <Tab.Pane eventKey="Joshua">
                                    <iframe className={classes.RightSideContent} src="https://docs.google.com/document/d/e/2PACX-1vSZoy1QRMjfQGmEx_OvaMd2OrSoLuEFDVwXa7ElyQS3yXxfxDEtXjpBKI6vf6n4db7TQqnNwCLRk__3/pub?embedded=true"></iframe>
                                </Tab.Pane>
                                <Tab.Pane eventKey="Soon">
                                    <iframe className={classes.RightSideContent} src="https://docs.google.com/document/d/e/2PACX-1vRB-ShuwmCKsa5mboP7DSfnKSj-bPF31D_ZHuxcKvkI8MY6Z6PlzpRawJwIeODfq1qURNBhKmuImyiK/pub?embedded=true"></iframe>
                                </Tab.Pane>
                                <Tab.Pane eventKey="MinMarn">
                                    <iframe className={classes.RightSideContent} src="https://docs.google.com/document/d/e/2PACX-1vSjgx5MkAwSKf5H9Xb_XJgBefojPWMrr45UC2M3-P8OrKdFKk11Ap_W2qwzrILRT74dRGPgDeyI5bHT/pub?embedded=true"></iframe>
                                </Tab.Pane>
                                <Tab.Pane eventKey="MinSan">
                                    <iframe className={classes.RightSideContent} src="https://docs.google.com/document/d/e/2PACX-1vTTKNr2nL3AVRYOS7aEiEoBQElN05SM5OtwT2HuYQfSdblh50B5by-TXi4Y4IhgHOuqVwWbN2DcFv-Z/pub?embedded=true"></iframe>
                                </Tab.Pane>
                                <Tab.Pane eventKey="Zhiting">
                                    <iframe className={classes.RightSideContent} src="https://docs.google.com/document/d/e/2PACX-1vRQulEDbH5CyxhPYTgk0fuDIkGyBgw8kh7Y9-s-LGlWeeRJH2ijpaaXEd1_zZknBNNhpMB5dZcoevST/pub?embedded=true"></iframe>
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