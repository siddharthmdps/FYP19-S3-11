import React, { Component } from 'react';
import { Navbar, Nav, Dropdown, Image, NavDropdown, Form, FormControl } from 'react-bootstrap';
import Logo from '../Logo';
import classes from './Navbar.module.css';
import { SwipeableDrawer, AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Slide from 'react-reveal/Slide';

import auth from '../../../utils/auth';

class TopNavbar extends Component {

  state = {
    NavLeftSide: {},
    NavRightSide: {},
    Navbar: ""
  }

  useStudentNavbar() {
    if (this.state.Navbar !== "Student") {
      let tempLeft = {
        "Job Search": "/student/searchjobs",
        "Career Tips": "/careertips",
        "Polls": "/polls",
        "Blog": "/blog"
      };

      let tempRight = {
        "View Profile": `/student/viewprofile/${localStorage.getItem('id')}`,
        "Edit Profile": "/student/editprofile",
        "Recommended Jobs": "/student/recommendedjobs",
        "Saved Jobs": "/student/savedjobs",
        "Applied Jobs": "/student/appliedjobs",
        "Logout": "/",
      };

      this.setState({ NavLeftSide: tempLeft, NavRightSide: tempRight, Navbar: "Student" });
    }
  }

  useEmployerNavbar() {
    if (this.state.Navbar !== "Employer") {
      let tempLeft = {
        "Employer": "/employer/viewprofile",
        "Edit Profile": "/employer/editprofile",
        "Post a new Job": "/employer/postjob",
        "View Jobs": "/employer/viewjobs",
        "Polls": "/polls",
        "Blog": "/blog"
      };

      let tempRight = {
        "Logout": "/"
      };

      this.setState({ NavLeftSide: tempLeft, NavRightSide: tempRight, Navbar: "Employer" });
    }
  }

  useBlogNavbar() {
    if (this.state.Navbar !== "Blog") {
      let tempLeft = {
        "< Back to Site": "/",
        "Product": "/blog/product",
        "Project Meeting Minutes": "/blog/projectmeetingminutes",
        "Personal Diary": "/blog/personaldiaries",
        "About Us": "/blog/aboutus",
        "Contact Us": "/blog/contactus",
      };

      let tempRight = {};

      this.setState({ NavLeftSide: tempLeft, NavRightSide: tempRight, Navbar: "Blog" });
    }
  }

  componentDidMount() {
    console.log(this.props);
    if (this.props.Blog) {
      this.useBlogNavbar();
    }
    else if (this.props.Student) {
      this.useStudentNavbar();
    }
    else if (this.props.Employer) {
      this.useEmployerNavbar();
    }
  }

  componentDidUpdate() {
    console.log(this.props);
    if (this.props.Blog && this.state.Navbar !== "Blog") {
      console.log(this.props);
      this.useBlogNavbar();
    }
  }

  render() {
    return (
      <React.Fragment>

        <Navbar className={classes.Nav} sticky='top' expand="md">
          <Navbar.Brand href="/" className="mr-sm-2"><Logo /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav as='ul' className={[classes.Navli, "mr-auto"]} >
              {Object.keys(this.state.NavLeftSide).map((element, idk) => (
                <Nav.Item as="li" key={idk}>
                  <Nav.Link href={this.state.NavLeftSide[element]} className={classes.NavItem}>{element}</Nav.Link>
                </Nav.Item>
              ))}
            </Nav>

            {Object.getOwnPropertyNames(this.state.NavRightSide).length === 0 ? null : (
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className={classes.NavProfile}>
                  <Image className={classes.Img} src="data:image/jpeg;base64,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" />
                </Dropdown.Toggle>
                <Slide down>
                  <div>
                    <Dropdown.Menu className={classes.DropdownMenu}>
                      {Object.keys(this.state.NavRightSide).map((element, idk) => (
                        element === "Logout" ?
                          <Dropdown.Item key={idk} onClick={auth.logout} className={classes.DropDownItem}>{element}</Dropdown.Item> :
                          <Dropdown.Item key={idk} href={this.state.NavRightSide[element]} className={classes.DropDownItem}>{element}</Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </div>
                </Slide>
              </Dropdown>
            )}

            <Nav className="mr-auto" className={[classes.Navli, classes.MobileMenu]}>
              {Object.keys(this.state.NavRightSide).map((element, idk) => (
                element === "Logout" ?
                  <Nav.Link key={idk} onClick={auth.logout} className={classes.DropDownItem}>{element}</Nav.Link> :
                  <Nav.Link key={idk} href={this.state.NavRightSide[element]} className={classes.DropDownItem}>{element}</Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    )
  }
}

export default TopNavbar;