import React from 'react'
import auth from '../utils/auth'
import './styles/Login.css'


const Login = (props) => {
    return (
        <div className="container login-container">
            <h1 className="h3 mb-3 font-weight-normal">PEGASUS</h1>
            <p className="font-weight-light">Don't miss your next opportunity. Sign in to stay updated on your professional world.</p>

            <form action="">
                <input type="text" id="input-username" className="form-control" placeholder="Username"/>
                <input type="password" id="input-password" className="form-control" placeholder="Password"/>

                <button className="btn btn-lg btn-primary btn-block" onClick={
                    () => {
                        const username = document.getElementById("input-username").value
                        const password = document.getElementById("input-password").value

                        console.log(username, password)
                        
                        if (auth.isValid(username, password)) {
                            auth.login(() => {
                                props.history.push("/home")
                            })
                        }
                        else alert('Invalid username or password')
                    }
                }>Log in</button> 
                <p>New to Pegasus? <a href="/signup">Join Now</a></p>
            </form>
        </div>
    )
}





export default Login
