import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './NavigationAdmin'
import Footer from './Footer'
import Dashboard from './Dashboard'
import Candidate from './Candidate'
import Employer from './Employer'
import Jobs from './Jobs'
import Reports from './Reports'
import Settings from './Settings'


class Admin extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation />
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/Dashboard" component={Dashboard} />
              <Route exact path="/Candidate" component={Candidate} />
              <Route exact path="/Employer" component={Employer} />
              <Route exact path="/Jobs" component={Jobs} />
              <Route exact path="/Reports" component={Reports} />
              <Route exact path="/Settings" component={Settings} />
            </Switch>
          <Footer />
        </div>
      </Router >
    )
  }
}

export default Admin