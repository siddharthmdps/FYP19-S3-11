// essential
import React, {Component} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// importing Components
import Navbar from './components/common_assets/Navbar2'
import LoginForm from './components/common_assets/LoginForm'
import Employer from './components/employer/Employer'
import Student from './components/student/Student'
import Admin from './components/admin/Admin'
import SignUp from './components/common_assets/Signup'
import EditProfile from './components/student/Container/EditProfile/EditProfile'
import ViewProfile from './components/student/Container/ViewProfile/ViewProfile'
import AppliedJobs from './components/student/Container/AppliedJobs/AppliedJobs'
import SavedJobs from './components/student/Container/SavedJobs/SavedJobs'
import SearchJobs from './components/student/Container/SearchJobs/SearchJobs'

import { SnackbarProvider } from 'notistack';

// importing CSS
import './App.css'

let NavLeftSide={
  "Job Search": "/searchjobs",
  "Companies": "/",
  "Blog": "/"
}

let NavRightSide={
  "View Profile": "/viewprofile",
  "Edit Profile": "/editprofile",
  "Saved Jobs": "/savedjobs",
  "Applied Jobs": "/appliedjobs",
  "Logout": "/",
}
/* 
App will first check the 'localStorage' to check whether the user already logged in or not.
If the user is already logged in, the app will redirect to corresponding app (student.js, employer.js or admin.js)
*/
class App extends Component {
  constructor(){
    super()
    this.state = {
      isAuthenticated : localStorage.getItem('isAuthenticated'), // to check whether user is already logged in
      userType : localStorage.getItem('userType') // to check the user type (student, employer, admin)
    }
  }

  updateLoginState = () => {
    this.setState ({
      isAuthenticated : localStorage.getItem('isAuthenticated'),
      userType : localStorage.getItem('userType')
    })
  }

  getContentToRender = () => {
    // user is not logged in
    if (!this.state.isAuthenticated) {
      return <LoginForm updateLoginState={this.updateLoginState}/>
    }
    // if the user is logged in, render the corresponding component (based on the usertype)
    else {
      // PLACE YOUR APP HERE
      switch (this.state.userType) {
        case 'student' : return <Student/>;
        case 'employer' : return <Employer/>;
        case 'admin' : return <Admin/>;

        default : return <h3>usertype not known</h3>
      }
    }
  }

  render() { 
    return (
      <SnackbarProvider maxSnack={3}>
      <Router>
        <Navbar NavLeftSide = {NavLeftSide} NavRightSide={NavRightSide}/>
        <Switch>
          <Route exact path="/" component={Student}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
          <Route exact path="/editprofile" component={EditProfile}></Route>
          <Route exact path="/viewprofile" component={ViewProfile}></Route>
          <Route exact path="/appliedjobs" component={AppliedJobs}></Route>
          <Route exact path="/savedjobs" component={SavedJobs}></Route>
          <Route exact path="/searchjobs" component={SearchJobs}></Route>
        </Switch>
      </Router>
      </SnackbarProvider>
    )
  }
}

export default App
