import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Error404 extends Component {
    render() {
        return (
<div>
  {/* Content Wrapper. Contains page content */}
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <h1>
        404 Error Page
      </h1>     
    </section>
    {/* Main content */}
    <section className="content">
      <div className="error-page">
        <h2 className="headline text-red"> 404</h2>
        <div className="error-content">
          <h3><i className="fa fa-warning text-red" /> Oops! Page not found.</h3>
          <p>
            We could not find the page you were looking for.
            Meanwhile, you may <Link to="/dashboard">return to dashboard</Link>
          </p>
          
        </div>
        {/* /.error-content */}
      </div>
      {/* /.error-page */}
    </section>
    {/* /.content */}
  </div>
  {/* /.content-wrapper */}
</div>

        )
    }
}
