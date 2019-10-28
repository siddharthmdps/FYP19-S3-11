import React from 'react';
import { Navbar, Nav, Form, FormControl, Dropdown, Image, InputGroup, NavItem } from 'react-bootstrap';
import Logo from './Logo';
import classes from './Navbar2.module.css';

const navbar = props => (
  <Navbar className={classes.Nav} sticky='top'>
    <Navbar.Brand href="#home" className="mr-sm-2" ><Logo /></Navbar.Brand>
    <Nav as='ul' className={classes.Navli} >
      <Nav.Item as="li">
        <Nav.Link href="/home" className={classes.NavItem}>Job Search</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1" className={classes.NavItem}>Companies</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2" className={classes.NavItem}>About Us</Nav.Link>
      </Nav.Item>
    </Nav>
    <Navbar.Toggle aria-controls="basic" />
    {/* <Form inline>
  <InputGroup >
    <InputGroup.Prepend>
      <InputGroup.Text className={classes.SearchIcon}>
      <i className="fas fa-search"></i>
      </InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl type="text" xs={1} className={classes.SearchBox}/>
  </InputGroup>
    </Form> */}
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto"></Nav>
      <Nav className="justify-content-end">
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" className={classes.NavProfile}>
            <Image className={classes.Img} src="https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg" />
          </Dropdown.Toggle>
          <Dropdown.Menu className={classes.DropdownMenu}>
            <Dropdown.Item href="#/action-1" className={classes.DropDownItem}>View Public Profile</Dropdown.Item>
            <Dropdown.Item href="#/action-2" className={classes.DropDownItem}>Edit Profile</Dropdown.Item>
            <Dropdown.Item href="#/action-3" className={classes.DropDownItem}>Log out</Dropdown.Item>
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