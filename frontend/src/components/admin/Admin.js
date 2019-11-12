import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './Home'
import Navigation from './NavigationAdmin'
import Footer from './Footer'
import Dashboard from './Dashboard'
import Candidate from './Candidate'
import { AdminEmployer } from './Employer'
import Jobs from './Jobs'
import Reports from './Reports'
import Settings from './Settings'




class Admin extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="container" style={{maxWidth: '1300px'}}>
          <br />
          <br />
          <br />
          <br />

        </div>
    )
  }
}

export default Admin