import React, {Component} from 'react'
import '../styles/PostJob.css'

class PostJob extends Component {
    constructor (props) {
        super()
        this.props = props
    }

    render() {
        return(
                <div className="container rounded shadow-sm" id="postjob-container">
                        <div className="row">
                            <div className="col-sm-3">
                                <label htmlFor="">Job Title</label>
                            </div>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="job-title"/>
                            </div>


                            <div className="w-100"></div>
                            <div className="col-sm-3">
                                <label htmlFor="">Description</label>
                            </div>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="job-desc" align="left|top"/>
                            </div>

                            <div className="w-100"></div>
                            <div className="col-sm-3">
                                <label htmlFor="">Industry</label>
                            </div>
                            <div className="col-sm-9">
                                <select className="custom-select" id="inputGroupSelect01">
                                    <option selected>Choose...</option>
                                    <option value="1">Engineering</option>
                                    <option value="2">Business</option>
                                    <option value="3">Account</option>
                                </select>
                            </div>



                            <div className="w-100"></div>
                            <div className="col-sm-3">
                                <label htmlFor="">Required Skills</label>
                            </div>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="required-skills"/>
                            </div>

                            <div className="w-100"></div>
                            <button className="btn btn-dark btn-lg btn-block post-job-btn">Submit</button>
                        </div>
                </div>
        )
    }
}


export default PostJob