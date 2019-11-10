import React, { Component } from 'react'
import { Table } from 'react-bootstrap';


export default class Employer extends Component {
  render() {
    return (
      <div>
        <h1>Employer login credentials</h1>
        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <td>Edit</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Mark</td>
                                    <td>Mark12345@gmail.com</td>
                                    <td>Edit</td>
                                </tr>
                                <tr>
                                <td>Mark</td>
                                    <td>Mark12345@gmail.com</td>
                                    <td>Edit</td>
                                </tr>
                                <tr>
                                <td>Mark</td>
                                    <td>Mark12345@gmail.com</td>
                                    <td>Edit</td>
                                </tr>
                                <tr>
                                <td>Mark</td>
                                    <td>Mark12345@gmail.com</td>
                                    <td>Edit</td>
                                </tr>
                                <tr>
                                <td>Mark</td>
                                    <td>Mark12345@gmail.com</td>
                                    <td>Edit</td>
                                </tr>
                            </tbody>
                        </Table>
      </div>

    )
  }
}
