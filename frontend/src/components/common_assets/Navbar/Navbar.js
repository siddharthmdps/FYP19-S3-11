import React, { Component } from 'react';
import { Navbar, Nav, Dropdown, Image, NavDropdown, Form, FormControl } from 'react-bootstrap';
import Logo from '../Logo';
import classes from './Navbar.module.css';
import { SwipeableDrawer, AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Slide from 'react-reveal/Slide';

import auth from '../../../utils/auth';

import Axios from 'axios';

class TopNavbar extends Component {

  state = {
    NavLeftSide: {},
    NavRightSide: {},
    Navbar: "",
    ProfileImage: "default.png"
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
        "Recommended": "/student/recommendedjobs",
        "Saved Jobs": "/student/savedjobs",
        "Applied Jobs": "/student/appliedjobs",
        "Logout": "/",
      };

      this.setState({ NavLeftSide: tempLeft, NavRightSide: tempRight, Navbar: "Student" });

      Axios.get(`https://pegasus-backend.herokuapp.com/getstudentprofilepicture/${localStorage.getItem('id')}`)
            .then(res => {
                console.log("Image: ", res.data.ProfileImage.ProfileImage, res.data.ProfileImage.FileType);
                if(res.data.ProfileImage.ProfileImage===null){}
                else{
                    this.setState({"ProfileImage": `data:${res.data.ProfileImage.FileType};base64, ${res.data.ProfileImage.ProfileImage}`})
                }
                console.log("YesQ", this.state.ProfileImage)
            })
            .catch(err => {
                console.log(err);
                this.setState({"ProfileImage": "default.png"});
            });

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

      this.setState({ NavLeftSide: tempLeft, NavRightSide: tempRight, Navbar: "Employer", ProfileImage: "default3.png" });
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
                  <Image className={classes.Img} src={this.state.ProfileImage} />
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