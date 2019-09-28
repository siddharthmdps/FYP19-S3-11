import React from 'react'

import './styles/SignUp.css'

const Signup = () => {
    return (
        <div className="container create-account main">
            <div className="py-5 text-center">
                <h2>Pegasus</h2>
                <p className="font-weight-light ">Kick start your professional career</p>
            </div>

            <div className="container create-account">
                <form className="needs-validation" novalidate="">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label for="firstName">First name</label>
                            <input type="text" className="form-control" id="firstName" placeholder="" value="" required=""/>
                            <div className="invalid-feedback">
                            Valid first name is required.
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label for="lastName">Last name</label>
                            <input type="text" className="form-control" id="lastName" placeholder="" value="" required=""/>
                            <div className="invalid-feedback">
                            Valid last name is required.
                            </div>
                        </div>
                        </div>

                    <div className="mb-3">
                        <label for="username">Username</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">@</span>
                            </div>
                            <input type="text" className="form-control" id="username" placeholder="Username" required=""/>
                            <div className="invalid-feedback">
                            Your username is required.
                            </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label for="email">Email <span className="text-muted">(Optional)</span></label>
                        <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
                        <div className="invalid-feedback">
                            Please enter a valid email address for shipping updates.
                        </div>
                    </div>

                    <div className="mb-3">
                        <label for="address">Address</label>
                        <input type="text" className="form-control" id="address" placeholder="1234 Main St" required=""/>
                        <div className="invalid-feedback">
                            Please enter your shipping address.
                        </div>
                    </div>

                    <div className="dropdown job-category">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Job Industry
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Engineering</a>
                            <a className="dropdown-item" href="#">Information Technology</a>
                            <a className="dropdown-item" href="#">Accounting</a>
                            <a className="dropdown-item" href="#">Marketing</a>
                        </div>
                    </div>
                    <div className="mb-3 job-experience">
                        <label for="job-experience">Job Experience <span className="text-muted">(Optional)</span></label>
                        <input type="text" className="form-control" id="job-experience" placeholder="Describe your past experience"/>
                    </div>

                    <button className="btn btn-dark btn-lg btn-block create-account" type="submit">Create Account</button>
                </form>
            </div>
        </div>
    )
}

export default Signup