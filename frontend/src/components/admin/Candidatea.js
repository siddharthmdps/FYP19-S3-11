import React, { Component } from 'react'
import { Table } from 'react-bootstrap';


export default class Candidate extends Component {
  render() {
    return (
      <div>
        <h1>Candidate login credentials</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Username</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>School</th>
              <th>Course</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Email</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Mark</td>
              <td>Tay</td>
              <td>SIM/UOW</td>
              <td>BBIS</td>
              <td>Male</td>
              <td>24</td>
              <td>Mark12345@gmail.com</td>
              <td>Edit</td>
            </tr>
            <tr>
            <td>Mark</td>
              <td>Mark</td>
              <td>Tay</td>
              <td>SIM/UOW</td>
              <td>BBIS</td>
              <td>Male</td>
              <td>24</td>
              <td>Mark12345@gmail.com</td>
              <td>Edit</td>
            </tr>
            <tr>
            <td>Mark</td>
              <td>Mark</td>
              <td>Tay</td>
              <td>SIM/UOW</td>
              <td>BBIS</td>
              <td>Male</td>
              <td>24</td>
              <td>Mark12345@gmail.com</td>
              <td>Edit</td>
            </tr>
            <tr>
            <td>Mark</td>
              <td>Mark</td>
              <td>Tay</td>
              <td>SIM/UOW</td>
              <td>BBIS</td>
              <td>Male</td>
              <td>24</td>
              <td>Mark12345@gmail.com</td>
              <td>Edit</td>
            </tr>
            <tr>
            <td>Mark</td>
              <td>Mark</td>
              <td>Tay</td>
              <td>SIM/UOW</td>
              <td>BBIS</td>
              <td>Male</td>
              <td>24</td>
              <td>Mark12345@gmail.com</td>
              <td>Edit</td>
            </tr>
          </tbody>
        </Table>
      </div>

    )
  }
}
