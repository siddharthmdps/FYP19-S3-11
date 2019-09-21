import React from 'react';

function Navbar() {
  return (
    <div className="container navbar-container">
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark" id="navbar-main">
        <a className="navbar-brand" href="/">Pegasus@SIM</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">@Username <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Favorites</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Messages</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/postjob">Post A New Job</a>
            </li>
          </ul>

          <div className="row search-box-container">
            <form id="search-box" className="form-inline mt-2 mt-md-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Enter keyword" aria-label="Search"/>
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
            <button type="button" className="btn btn-dark" id="btn-logout">Log Out</button>
          </div>
          
        </div>
      </nav>
    </div>
    
  );
}

export default Navbar;
