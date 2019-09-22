import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// importing Components
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import NoMatch from './components/NoMatch'

// testing
import FetchRandomUser from './components/FetchRandomUser'
import LandingPage from './components/LandingPage'
import AppLayout from './components/AppLayout'

// importing CSS
import './App.css';


const App = () => {
  return (
    <Router>
      
      <Route exact path="/" component={LandingPage}></Route>
      <Route exact path="/home" component={Home}></Route>
    </Router>
    
    // <React.Fragment>
    //   <Navbar/>
    //   <Router>
    //     <Switch>
    //       <Route exact path="/fetch" component={FetchRandomUser} />
    //       <Route exact path="/" component={Home} />
    //       <Route exact path="/about" component={About} />
    //       <Route component={NoMatch} />
    //     </Switch>
    //   </Router>
    // </React.Fragment>
  )
}

export default App
