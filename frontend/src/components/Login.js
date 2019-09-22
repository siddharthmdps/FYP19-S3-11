import React from 'react'
import auth from '../utils/auth'
import './styles/Login.css'

const Login = (props) => (
    <div className="container login-container">
        <h1 className="h3 mb-3 font-weight-normal">PEGASUS</h1>
        <p className="font-weight-light">Don't miss your next opportunity. Sign in to stay updated on your professional world.</p>
        <form action="">
            <input type="text" className="form-control" placeholder="Username"/>
            <input type="text" className="form-control" placeholder="Password"/>


            <button className="btn btn-lg btn-primary btn-block" onClick={
                () => {
                    auth.login(() => {
                        props.history.push("/home")
                    })
                }
            }>Login</button> 
            <p>New to Pegasus? <a href="signup">Join Now</a></p>
        </form>

        {/* 

        
        <form className="form-signin">

            
        </form> */}
    </div>
)

export default Login
