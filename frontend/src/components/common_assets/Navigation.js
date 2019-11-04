import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav, Form, FormControl, Button, NavDropdown} from 'react-bootstrap'
import Jobs from '../admin/Jobs'

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="/">Pegasus@SIM</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Dashboard</Nav.Link>
      <NavDropdown title="Login Credentials" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Employers</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Candidates</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#Jobs">All Jobs</Nav.Link>
      <Nav.Link href="#Reports">Generate Reports</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
    <button type="button" className="btn btn-dark" id="btn-logout" 
                    onClick={ () => {
                        localStorage.clear()
                        document.location.reload(true)
                    }
                }>Log Out</button>
  </Navbar>
      </div>
    )
  }
}
