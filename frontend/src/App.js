// essential
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// importing Components
import Home from './components/Home'

// testing


// importing CSS
import './App.css'

class App extends Component {
  constructor(){
    super()
    this.state = {
    }
  }

  render() {
    return (
      // <Router>
      //   <Switch>
      //     <Route exact path="/" component={Login}></Route>
      //     <Route exact path="/signup" component={Signup}></Route>

      //     <ProtectedRoute exact path="/home" component={Home}></ProtectedRoute>
      //     <Route exact path="/about" component={About}></Route>
      //     <Route exact path="/postjob" component={PostJob}></Route>
      //     <Route path="*" component={NoMatch}/>
      //   </Switch>
      // </Router>
      <div>Hi</div>
    )
  }
}




export default App
