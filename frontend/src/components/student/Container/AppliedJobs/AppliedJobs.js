import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import classes from './AppliedJobs.module.css';

class AppliedJobs extends Component {
    state = {
        "active": false
    };

    toggle = () => this.setState({ "active": !this.state.active });

    render() {
        const active = this.state.active;
        const unfav = <i class="far fa-star" />
        const fav = <i class="fas fa-star" style={{ "color": "#FFCA28" }} />
        return (
            <Container >
                <br />
                <Row className={classes.Title}>
                    Applied Jobs
                </Row>
                <br />

                <Card md={{ span: 12 }} className={classes.Card}>
                    <Card.Body style={{ height: '185px' }}>
                        <Card.Title>
                            <Row className={classes.Row} style={{ fontWeight: '600' }}>Software Developer</Row>
                            <Row className={classes.Row}>Accenture</Row>
                            <Row>
                                <Col className={classes.CardCol}>Location</Col>
                                <Col className={classes.CardCol}>Industry</Col>
                                <Col className={classes.CardCol}>Work Exp Req</Col>
                            </Row>
                        </Card.Title>
                        <Card.Text className={classes.Description}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Card.Text>
                    </Card.Body>
                    <Card.Footer className={classes.Footer}>
                        {/* <Col md={{ span: 12 }}> */}
                        <div className={classes.ButtonDiv}>
                            <Button className={classes.Applied} disabled >Applied</Button>
                        </div>
                            <div className={classes.StarDiv}>
                                <span className={classes.Star} onClick={this.toggle}>
                                    {active ? fav : unfav}
                                </span>
                            </div>
                        {/* </Col> */}
                    </Card.Footer>
                </Card>

            </Container>
        );
    }
}

export default AppliedJobs;