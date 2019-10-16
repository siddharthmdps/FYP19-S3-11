import React, {Component} from 'react'
import '../styles/PostJob.css'
import config from '../../config'

class PostJob extends Component {
    constructor (props) {
        super()
        this.props = props
    }

    postJob = () => {
        const job = {
            empid: localStorage.getItem('id'),
            title: document.getElementById('job-title').value,
            description: document.getElementById('job-desc').value,
            industry: document.getElementById('job-industry').value,
            requiredskills: document.getElementById('job-skills').value
        }
        
        if( job.title === "" || job.desc === "" || job.industry === "" || job.skills === "" ) alert('Please fill in all the required fields')
        else {
            const apiurl = config.getAPIURL() + "employer/postjob"
            const localhost = 'http://localhost:3001/employer/postjob/'

            fetch (apiurl , {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json'
               },
               body: JSON.stringify(job)
            })
            .then(res => res.json())
            .then(data => {
                if(data.message === 'success') {
                    alert('Job posted!')
                    document.location.reload(true)
                }
            })
            .catch(error => console.log(error))
        }
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
                                <select className="custom-select" id="job-industry">
                                    <option selected>Choose...</option>
                                    <option value="Engineering">Engineering</option>
                                    <option value="Business">Business</option>
                                    <option value="Account">Account</option>
                                </select>
                            </div>

                            <div className="w-100"></div>
                            <div className="col-sm-3">
                                <label htmlFor="">Required Skills</label>
                            </div>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="job-skills"/>
                            </div>

                            <div className="w-100"></div>
                            <button className="btn btn-dark btn-lg btn-block post-job-btn" onClick={this.postJob}>
                                Submit
                            </button>
                        </div>
                </div>
        )
    }
}


export default PostJob