import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Dropdown, Image} from 'react-bootstrap';
import Logo from './Logo';
import classes from './Navbar2.module.css';

const navbar = props => (
    <Navbar bg="dark" expand="lg" sticky='top'>
  <Navbar.Brand href="#home" className={classes.Logo}><Logo /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  <Navbar.Collapse id="basic-navbar-nav">
    {/* <Nav className="mr-auto">
        
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
    </Nav> */}
    <Nav className="mr-auto"></Nav>
    <Nav className="justify-content-end" className={classes.Nav}>
        <Dropdown>
            <Dropdown.Toggle  id="dropdown-basic" className={classes.Test}>
                <Image src="https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg" />
            </Dropdown.Toggle>
            <Dropdown.Menu className={classes.DropdownMenu}>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
      {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
    </Nav>
  </Navbar.Collapse>
</Navbar>
);

export default navbar;