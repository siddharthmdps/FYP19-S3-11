import React, {Component} from 'react'
import '../styles/Login.css'
import apiURL from '../../config'


class LoginForm extends Component {
    constructor(props) {
        super()
        this.props = props
        this.state = {
            loading : false
        }
    }

    validateUser = () => {
        const username = document.getElementById("input-username").value.toLowerCase()
        const password = document.getElementById("input-password").value
        const usertype = document.getElementById("input-usertype").value

        const loginParticulars = { username, password, usertype }
        
        //console.log('Login particulars', loginParticulars)

        const url = apiURL + 'login/'
        const localhost = "http://localhost:3001/login"

        if(username && password && usertype) {
            this.setState({ loading: true })


            fetch(url, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(loginParticulars)
            })
            .then(res => res.json())
            .then(data => {
                this.setState({ loading: false })

                console.log(data.message)


                const userInfo = data.body[0]

                if(data.message === 'success'){
                    localStorage.setItem('isAuthenticated', true)
                    localStorage.setItem('username', username)
                    localStorage.setItem('userType', usertype)
                    localStorage.setItem('id', userInfo.id)

                    this.props.updateLoginState()
                }
            })
            .catch(error => {
                alert (`Log in failed. Please try again`)
            }) 
        }
        else {
            alert ('Please fill in all the required fields')
        }
        
    }

    setLoadingSpin = () => {
        if (this.state.loading) {
            return (
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }
        else return null
    }

    render () {
        return (
            <div className="container login-container">
                
                <h1 className="h3 mb-3 font-weight-normal">PEGASUS</h1>
                <p className="font-weight-light">Don't miss your next opportunity. Sign in to stay updated on your professional world.</p>
        
                <form action="">
                    <input type="text" id="input-username" className="form-control" placeholder="Username"/>
                    <input type="password" id="input-password" className="form-control" placeholder="Password"/>
                    <select id="input-usertype" className="form-control">
                        <option value="student">Student</option>
                        <option value="employer">Employer</option>
                        <option value="admin">Admin</option>
                    </select>
                    
                    <button type="button" className="btn btn-lg btn-primary btn-block" 
                        onClick={ this.validateUser }>
                        Log in 
                    </button>
                    <this.setLoadingSpin/>

                    <p>New to Pegasus? <a href="/signup">Join Now</a></p>
                </form>
            </div>
        )
    }

}
export default LoginForm
