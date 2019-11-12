import React, {Component} from 'react';

class Navbar extends Component {
  constructor(props) {
    super()
    this.props = props
  }

  render(){
    return (
      <div className="container " id="navbar-container">
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark " id="navbar-main">
          <a className="navbar-brand" href="/">
            {/* <img src={logo} alt="" width="30" height="30"/> */}
            Pegasus
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
              {/* link this to profile management */}
                <a className="nav-link" href="#">{this.props.username}</a> 
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" id="About" onClick={
                  this.props.setRenderedContent
                  //() => console.log('clicked')
                }>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">Blog</a>
              </li>
              
            </ul>
    
            <div className="row search-box-container">
    
              <form id="search-box" className="form-inline mt-2 mt-md-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Enter keyword" aria-label="Search"/>
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
              </form>
    
              <button type="button" className="btn btn-dark" id="btn-logout" 
                onClick={ () => {
                    localStorage.clear()
                    document.location.reload(true)
                }
              }>Log Out</button>
    
            </div>
            
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;
