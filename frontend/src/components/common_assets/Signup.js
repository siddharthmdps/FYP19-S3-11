import React from 'react'
import './SignUp.css'

const Signup = () => {

    return (
        <div className="container create-account main">
            <div className="py-3 text-center" id="header-div">
                <h2>Pegasus</h2>
                <p className="font-weight-light ">Kick start your professional career</p>
            </div>

            <div className="container" id="create-account">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label for="firstName">First name</label>
                            <input type="text" className="form-control" id="firstname"  required=""/>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label for="lastName">Last name</label>
                            <input type="text" className="form-control" id="lastname"  required=""/>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label for="email">Email (Username)</label>
                        <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
                        <div className="invalid-feedback">
                            Please enter a valid email address for shipping updates.
                        </div>
                    </div>

                    <div className="mb-3">
                        <label for="address">Address</label>
                        <input type="text" className="form-control" id="address" placeholder="1234 Main St" required=""/>
                    </div>

                    <select id="usertype" className="form-control">
                        <option name="Student">Student</option>
                        <option name="Employer">Employer</option>
                    </select>

                    <div className="mb-3 job-experience">
                        <label for="job-experience">Job Experience <span className="text-muted">(Optional)</span></label>
                        <input type="text" className="form-control" id="jobexp" placeholder="Describe your past experience"/>
                    </div>

                    <button className="btn btn-dark btn-lg btn-block create-account" onClick={createAccount}>Create Account</button>
            </div>
        </div>
    )
}

const createAccount = () => {
    // grab content from DOM
    const userDetails = {
        firstname: document.getElementById('firstname').value,
        lastname: document.getElementById('lastname').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        usertype: document.getElementById('usertype').value,
        jobexp: document.getElementById('jobexp').value,
    }
    // verify
    // post to backend
    const url = "http://localhost:3030/createaccount" // REPLACE URL here
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(userDetails)
    })
    .then(response => response.json)
    .then(data => console.log(data))
    .catch(error => console.log(`Error: `, error))
    console.log(userDetails)
}

export default Signup