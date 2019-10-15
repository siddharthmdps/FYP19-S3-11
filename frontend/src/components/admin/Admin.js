import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from '../common_assets/Navigation'
import Footer from './Footer'
import Dashboard from './Dashboard'
import Candidate from './Candidate'
import Employer from './Employer'
import Error404 from './Error404'
import Jobs from './Jobs'
import Reports from './Reports'
import Settings from './Settings'
import Signout from './Signout'
import Chat from './Chat'
import {Layout} from './Layout'

class Admin extends Component {
    constructor () {
        super()
    }

    render () {
        return (
            <Router>
        <div>
        
          <Navigation />
          <Layout>
          <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route exact path="/Candidate" component={Candidate} />
          <Route exact path="/Employer" component={Employer} />
          <Route exact path="/Reports" component={Reports} />
          <Route exact path="/Jobs" component={Jobs} />
          
          <Route exact path="/Chat" component={Chat} />
          <Route exact path="/Settings" component={Settings} />
          <Route exact path="/Signout" component={Signout} />

          <Route component={Error404} />
          
          
          
          </Switch>
          </Layout>
          <Footer />
        </div>
      </Router >
        )
    }
}

export default Admin