import React, { Component } from 'react'
import { Table, Form, Col, Row } from 'react-bootstrap';


export default class Jobs extends Component {
  render() {
    return (
      <div>
        <h1>All Jobs</h1>
        <br />
        <Form.Group as={Row} md="2" controlId="exampleForm.ControlSelect1">
          
            <Form.Label >Show </Form.Label>
            <Col sm={2}><Form.Control as="select" >
              <option>10</option>
              <option>20</option>
              <option>30</option>
              <option>40</option>
              <option>50</option>
            </Form.Control></Col>
            <Form.Label >Entries </Form.Label>

          
          
        </Form.Group>
        <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Username</th>
              <th>Date Posted</th>
              <th>Job Position</th>
              <th>Job Information</th>
              <td>Edit</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>11/1/2019</td>
              <td>Writer</td>
              <td>Do job for me and get paid.</td>
              <td>Edit</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>12/4/2019</td>
              <td>Developer</td>
              <td>Do job for me and get paid.</td>
              <td>Edit</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>12/4/2019</td>
              <td>Engineer</td>
              <td>Do job for me and get paid.</td>
              <td>Edit</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>12/4/2019</td>
              <td>Thornton</td>
              <td>Do job for me and get paid.</td>
              <td>Edit</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>12/4/2019</td>
              <td>Thornton</td>
              <td>Do job for me and get paid.</td>
              <td>Edit</td>
            </tr>
          </tbody>
        </Table>
        </Row>
      </div>

    )
  }
}
