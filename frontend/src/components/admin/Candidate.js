import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Table, Form, Col, Row, Pagination } from 'react-bootstrap';

export default class Candidate extends Component {
  state = {
    isLoading: true,
    users: [],
    error: null
  };

  fetchUsers() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          users: data,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    const { isLoading, users, error } = this.state;

    if (isLoading)
      return <div>Loading...</div>

    const rows = users.map(row =>
      <tr>
        <td>{row.id}</td>
        <td>{row.username}</td>
        <td>{row.name}</td>
        <td>{row.email}</td>
        <td>Disable</td>
      </tr>
    )

    return (
      <React.Fragment>
        <br />
        <Row>
          <h1>Candidate Login Credentials <span style={{ marginLeft: '5px' }}><sub></sub></span></h1>
        </Row>
        <br />
        <Form.Group as={Row} md="2" controlId="exampleForm.ControlSelect1">
          <Form.Label >Show </Form.Label>
          <Col sm={2}><Form.Control size="sm" as="select" >
            <option>10</option>
            <option>20</option>
            <option>30</option>
            <option>40</option>
            <option>50</option>
          </Form.Control></Col>
          <Form.Label >Entries </Form.Label>
          <Col md={{ span: 2, offset: 7 }}><Form.Control size="sm" type="text" placeholder="Search" /></Col>
        </Form.Group>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Name</th>
                <th>Email</th>
                <th>Disable/Enable Account</th>

              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </Table>
          <Row>
            Showing 1 to 10 of 52 credentials
                    <Col md={{ span: 2, offset: 4 }}><Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item active>{12}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>
              <Pagination.Item disabled>{14}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination></Col></Row>
        </div>

      </React.Fragment>
    );
  }
}

ReactDOM.render(<Candidate />, document.getElementById("root"));