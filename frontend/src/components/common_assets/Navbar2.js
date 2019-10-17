import React from 'react';
import {Navbar, Nav, Form, FormControl, Dropdown, Image, InputGroup} from 'react-bootstrap';
import Logo from './Logo';
import classes from './Navbar2.module.css';

const navbar = props => (
  <Navbar bg="dark" expand="lg" sticky='top'>
  <Navbar.Brand href="#home" className="mr-sm-2" className={classes.Logo}><Logo /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Form inline>
  <InputGroup >
    <InputGroup.Prepend>
      <InputGroup.Text className={classes.SearchIcon}>
      <i class="fas fa-search"></i>
      </InputGroup.Text>
      
    </InputGroup.Prepend>
    <FormControl type="text" xs={1} className={classes.SearchBox}/>
  </InputGroup>
    </Form>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto"></Nav>
    <Nav className="justify-content-end" className={classes.Nav}>
        <Dropdown>
            <Dropdown.Toggle  id="dropdown-basic" className={classes.NavProfile}>
                <Image src="https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg" />
            </Dropdown.Toggle>
            <Dropdown.Menu className={classes.DropdownMenu}>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        
        <Nav className="mr-auto" className={classes.MobileMenu}>
        
          <Nav.Link href="#home">Action</Nav.Link>
          <Nav.Link href="#link">Another Action</Nav.Link>
          <Nav.Link href="#link">Something else</Nav.Link>
        </Nav>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);

export default navbar;