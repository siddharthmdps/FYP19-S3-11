// essential
import React, {Component} from 'react';

// importing Components
import ViewController from './components/ViewController'
import LoginForm from './components/common_assets/LoginForm'

// importing CSS
import './App.css'

class App extends Component {
  constructor(){
    super()
    this.state = {
      isAuthenticated : localStorage.getItem('isAuthenticated'), // to check whether user is already logged in
      userType : localStorage.getItem('userType') // to check the user type (student, employer, admin)
    }
  }

  updateLoginState = () => {
    this.setState ({
      isAuthenticated : localStorage.getItem('isAuthenticated'),
      userType : localStorage.getItem('userType')
    })
  }

  getContentToRender = () => {
    // user is not logged in
    if (!this.state.isAuthenticated) {
      return <LoginForm updateLoginState={this.updateLoginState}/>
    }
    // if the user is logged in, render corresponding component for user (depending on the usertype)
    else {
      return <ViewController updateLoginState={this.updateLoginState}/>
    }
  }

  render() {
    return (
      <div>
        <this.getContentToRender/>
      </div>
    )
  }
}

export default App
