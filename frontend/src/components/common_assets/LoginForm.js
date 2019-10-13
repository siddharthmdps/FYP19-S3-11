import React, {Component} from 'react'
import '../styles/Login.css'
import config from '../../config'


class LoginForm extends Component {
    constructor(props) {
        super()
        this.props = props
    }

    validateUser = () => {
        const username = document.getElementById("input-username").value
        const password = document.getElementById("input-password").value
        const usertype = document.getElementById("input-usertype").value

        
        console.log(username, password, usertype)
        
        localStorage.setItem('isAuthenticated', true)
        localStorage.setItem('username', username)
        localStorage.setItem('userType', usertype)

        this.props.updateLoginState()
        // THIS CODE COMMUNICATES WITH BACKEND
        // var apiurl = config.getAPIURL()
        // if(username && password && usertype) {
        //     var url = apiurl + username + "/" + password + "/" + usertype
        //     fetch(url, {
        //         method: 'post',
        //         data: "{'username':'" + username + "',{'password':'" + password + "', 'usertype':'" + usertype + "'}",
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json'
        //         }
        //     }).then(res=>res.json())
        //     .then(res => {
        //         console.log(res)
        //         if (res.message && res.message.indexOf("Success") !== -1) {
        //             auth.login(() => {
        //                 props.history.push("/home")
        //             })
        //         }
        //         else {
        //             alert('Invalid username or password')
        //         }
        //     })
        // }
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
                        <option name="Student">Student</option>
                        <option name="Employer">Employer</option>
                        <option name="Admin">Admin</option>
                    </select>
                    
                    <button type="button" className="btn btn-lg btn-primary btn-block" 
                        onClick={ this.validateUser }>
                        Log in
                    </button>


                    <p>New to Pegasus? <a href="/signup">Join Now</a></p>
                </form>
            </div>
        )
    }

}
export default LoginForm
