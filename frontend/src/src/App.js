// essential
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// importing Common Components
import Navbar2 from './components/common_assets/Navbar/Navbar'
import LoginForm from './components/common_assets/Login/Login'
import SignUp from './components/common_assets/Signup'
import About from './components/common_assets/About';
import CareerTips from './components/common_assets/CareerTips/CareerTips';
import Polls from './components/common_assets/Polls/Polls';

// importing Employer Components
import Employer from './components/employer/Container/Employer'
import EmpNavbar from './components/employer/EmpNavbar'
import EmpViewProfile from './components/employer/ProfileView/EmpProfileView'
import EmpEditProfile from './components/employer/ProfileEditor/EmpEditProfile'
import PostJob from './components/employer/PostJob'
import ViewJob from './components/employer/JobView/EmpJobView'
import EditJob from './components/employer/JobEdit/EditJob'

// importing Student Components
import Student from './components/student/Student'
import EditProfile from './components/student/Container/EditProfile/EditProfile'
import ViewProfile from './components/student/Container/ViewProfile/ViewProfile'
import RecommendedJobs from './components/student/Container/RecommendedJobs/RecommendedJobs'
import AppliedJobs from './components/student/Container/AppliedJobs/AppliedJobs'
import SavedJobs from './components/student/Container/SavedJobs/SavedJobs'
import SearchJobs from './components/student/Container/SearchJobs/SearchJobs'
import Job from './components/student/Container/Job/Job'

// importing Admin Components
import Admin from './components/admin/Admin'
import Home from './components/admin/Home'
import { AdminEmployer } from './components/admin/Employer'
import { AdminCandidate } from './components/admin/Candidate'
import Navigation from './components/admin/NavigationAdmin'
import FooterPage from './components/admin/Footer'
import Dashboard from './components/admin/Dashboard'
import { AdminJobs } from './components/admin/Jobs'
import Reports from './components/admin/Reports'
import {Tips} from './components/admin/Tips'
import {AdminPolls} from './components/admin/Polls'

// importing Blog Components
import Blog from './components/blog/Container/Blog'
import Product from './components/blog/Container/Product/Product'
import ContactUs from './components/blog/Container/ContactUs/ContactUs'
import AboutUs from './components/blog/Container/AboutUs/AboutUs'
import ProjectMM from './components/blog/Container/ProjectMeetingMinutes/ProjectMeetingMinutes'
import PersonalDiaries from './components/blog/Container/PersonalDiaries/PersonalDiaries'

// importing utils
import { ProtectedRoute } from './utils/protected.routes'
import { SnackbarProvider } from 'notistack';

// importing CSS
import './App.css'
import auth from './utils/auth';
import JobsList from './components/employer/ViewJobsPosted/ViewJobsPostedListPage';

/* 
App will first check the 'localStorage' to check whether the user already logged in or not.
If the user is already logged in, the app will redirect to corresponding app (student.js, employer.js or admin.js)
*/
class App extends Component {
  // constructor(){
  //   super()
  // }

  state = {
    NavLeftSide: {},
    NavRightSide: {},
    Navbar: "",
    Blog: false
  }

  componentDidMount() {
    if (localStorage.getItem('usertype') == 'admin') {
      var link = document.createElement("link");
      link.href = "https://use.fontawesome.com/releases/v5.8.2/css/all.css";
      link.rel = "stylesheet";
      link.media = "all";

      document.getElementsByTagName("head")[0].appendChild(link);

      var link2 = document.createElement("link");
      link2.href = "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css";
      link2.rel = "stylesheet";
      link2.media = "all";

      document.getElementsByTagName("head")[0].appendChild(link2);

      var link3 = document.createElement("link");
      link3.href = "https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.8.10/css/mdb.min.css";
      link3.rel = "stylesheet";
      link3.media = "all";

      document.getElementsByTagName("head")[0].appendChild(link3);
    }
  }
  useBlogNavbar = allow => {
    console.log("useBlog called", allow);
    this.setState({ Blog: allow });
  }

  ContentToRender = () => {
    if (!auth.isAuthenticated()) return <LoginForm />
    else {
      switch (localStorage.getItem('usertype')) {
        case 'student': return <Student />
        case 'employer': return <Employer />
        case 'admin': return <Admin />
      }
    }
  }

  // render accordingly depending on the usertype
  NavbarToRender = () => {
    if (!auth.isAuthenticated()) return null
    switch (localStorage.getItem('usertype')) {
      case 'student': return <Navbar2 Student Blog={this.state.Blog} />
      case 'employer': return <Navbar2 Employer Blog={this.state.Blog} />
      case 'admin': return <Navigation />
    }
  }

  FooterToRender = () => {
    if (!auth.isAuthenticated()) return null
    switch (localStorage.getItem('usertype')) {
      case 'student': return null
      case 'employer': return null
      case 'admin': return <FooterPage />
    }

  }

  render() {
    return (
      <SnackbarProvider maxSnack={3}>
        <div>

          <Router>
            <this.NavbarToRender />
            <Switch>
              {/* Public Routes */}
              <Route exact path="/" component={this.ContentToRender}></Route>
              <Route exact path="/login" component={LoginForm}></Route>
              <Route exact path="/signup" component={SignUp}></Route>
              <Route exact path="/careertips" component={CareerTips}></Route>
              <Route exact path="/polls" component={Polls}></Route>


              {/* Employer Routes */}
              <ProtectedRoute exact path="/employer" component={Employer}></ProtectedRoute>
              <ProtectedRoute exact path="/employer/viewprofile" component={EmpViewProfile}></ProtectedRoute>
              <ProtectedRoute exact path="/employer/editprofile" component={EmpEditProfile}></ProtectedRoute>
              <ProtectedRoute exact path="/employer/about" component={About}></ProtectedRoute>
              <ProtectedRoute exact path="/employer/postjob" component={PostJob}></ProtectedRoute>
              <ProtectedRoute exact path="/employer/viewjob/:jobid" component={ViewJob}></ProtectedRoute>
              <ProtectedRoute exact path="/employer/editjob/:jobid" component={EditJob}></ProtectedRoute>
              <ProtectedRoute exact path="/employer/viewjobs" component={JobsList}></ProtectedRoute>


              {/* Student Routes */}
              <ProtectedRoute exact path="/student" component={EditProfile}></ProtectedRoute>
              <ProtectedRoute exact path="/student/editprofile" component={EditProfile}></ProtectedRoute>
              <Route exact path="/student/viewprofile/:SID" component={ViewProfile}></Route>
              <ProtectedRoute exact path="/student/recommendedjobs" component={RecommendedJobs}></ProtectedRoute>
              <ProtectedRoute exact path="/student/appliedjobs" component={AppliedJobs}></ProtectedRoute>
              <ProtectedRoute exact path="/student/savedjobs" component={SavedJobs}></ProtectedRoute>
              <ProtectedRoute exact path="/student/searchjobs" component={SearchJobs}></ProtectedRoute>
              <ProtectedRoute exact path="/student/job/:JID" component={Job}></ProtectedRoute>

              {/* Admin Routes */}
              <ProtectedRoute exact path="/admin" component={Home}></ProtectedRoute>
              <ProtectedRoute exact path="/admin/dashboard" component={Dashboard}></ProtectedRoute>
              <ProtectedRoute exact path="/admin/student" component={AdminCandidate}></ProtectedRoute>
              <ProtectedRoute exact path="/admin/employer" component={AdminEmployer}></ProtectedRoute>
              <ProtectedRoute exact path="/admin/jobs" component={AdminJobs}></ProtectedRoute>
              <ProtectedRoute exact path="/admin/reports" component={Reports}></ProtectedRoute>
              <ProtectedRoute exact path="/admin/careertips" component={Tips}></ProtectedRoute>
              <ProtectedRoute exact path="/admin/polls" component={AdminPolls}></ProtectedRoute>

              {/* Blog Routes */}
              <Route exact path="/blog" render={props => <Blog {...props} useBlog={(allow) => this.useBlogNavbar(allow)} />}></Route>
              <Route exact path="/blog/product" render={props => <Product {...props} useBlog={(allow) => this.useBlogNavbar(allow)} />}></Route>
              <Route exact path="/blog/contactus" render={props => <ContactUs {...props} useBlog={(allow) => this.useBlogNavbar(allow)} />}></Route>
              <Route exact path="/blog/aboutus" render={props => <AboutUs {...props} useBlog={(allow) => this.useBlogNavbar(allow)} />}></Route>
              <Route exact path="/blog/projectmeetingminutes" render={props => <ProjectMM {...props} useBlog={(allow) => this.useBlogNavbar(allow)} />}></Route>
              <Route exact path="/blog/personaldiaries" render={props => <PersonalDiaries {...props} useBlog={(allow) => this.useBlogNavbar(allow)} />}></Route>
            </Switch>
            <this.FooterToRender />
          </Router>
        </div>
      </SnackbarProvider>
    )
  }
}

export default App
