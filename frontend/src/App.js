import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// importing Components
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import NoMatch from './components/NoMatch'

// importing CSS
import './styles/Styles.css'


function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App
