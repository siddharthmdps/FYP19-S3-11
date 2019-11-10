import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <header className="main-header">
          <nav className="navbar navbar-static-top">
            <div className="container">
              <div className="navbar-header">
                <Link to="/" className="navbar-brand"><b>Pegasus</b>@SIM</Link>
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                  <i className="fa fa-bars" />
                </button>
              </div>
              {/* Collect the nav links, forms, and other content for toggling */}
             
                <ul className="nav navbar-nav">
                  <li><Link to="/dashboard" activeClassName="sr-only">Dashboard</Link></li>
                  
                  <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="fake_url" activeClassName="sr-only">Login Credentials<span className="caret" /></a>
                    <ul className="dropdown-menu" role="menu">
                      <li><Link to="/Employer" activeClassName="sr-only">Employers</Link></li>
                      <li className="divider" />
                      <li><Link to="/Candidate" activeClassName="sr-only">Candidates</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/Jobs" activeClassName="sr-only">All Jobs</Link></li>
                  <li><Link to="/Reports" activeClassName="sr-only">Reports</Link></li>
                </ul>
                <form className="navbar-form navbar-left" role="search">
                  <div className="form-group">
                    <input type="text" className="form-control" id="navbar-search-input" placeholder="Search Jobs" />
                  </div>
                </form>
              
              {/* /.navbar-collapse */}
              {/* Navbar Right Menu */}
              <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                  {/* Messages: style can be found in dropdown.less*/}
   
 
                  
                       
                      
                  {/* User Account Menu */}
                  <li className="dropdown user user-menu">
                    {/* Menu Toggle Button */}
                    <Link to="fake_url" className="dropdown-toggle" data-toggle="dropdown">
                      {/* The user image in the navbar*/}
                      <img src="../../dist/img/user2-160x160.jpg" className="user-image" alt="User" />
                      {/* hidden-xs hides the username on small devices so only the image appears. */}
                      <span className="hidden-xs">Soon Keong Lum</span>
                    </Link>
                    <ul className="dropdown-menu">
                      {/* The user image in the menu */}
                      <li className="user-header">
                        <img src="../../dist/img/user2-160x160.jpg" className="img-circle" alt="User" />
                        <p>
                          Soon Keong Lum - Admin
                    <small>Member since Oct. 2019</small>
                        </p>
                      </li>

                      {/* Menu Footer*/}
                      <li className="user-footer">
                      <div className="pull-left">
                          <Link to="/Settings" className="btn btn-default btn-flat">Settings</Link>
                        </div>
                        <div className="pull-right">
                        <button type="button" className="btn btn-dark" id="btn-logout" 
                    onClick={ () => {
                        localStorage.clear()
                        document.location.reload(true)
                    }
                }>Log Out</button>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/* /.navbar-custom-menu */}
            </div>
            {/* /.container-fluid */}
          </nav>
        </header>
      </div>
    )
  }
}
