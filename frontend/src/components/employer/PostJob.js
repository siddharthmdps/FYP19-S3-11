import React from 'react'
import Navbar from '../Navbar'
import '../styles/PostJob.css'

const PostJob = () => (
    <div>
        <Navbar/>
        <div className="container post-job main" id="postjob-container">
            <div className="py-3 text-center">
                <h2>Post A Job Opening</h2>
            </div>

            <div className="container post-job form-container">
                <form className="needs-validation" novalidate="">
                    <div>
                        <label for="job-industry">Job Industry</label>
                        <input type="text" className="form-control" id="job-industry" placeholder="" value="" required=""/>
                    </div>

                    <div>
                        <label for="job-title">Job Title</label>
                        <input type="text" className="form-control" id="job-title" placeholder="" value="" required=""/>
                    </div>

                    <div>
                        <label for="job-description">Job Description</label>
                        <input type="text" className="form-control" id="job-description" placeholder="" value="" required=""/>
                    </div>

                    <div>
                        <label for="seniority-level">Seniority Level</label>
                        <input type="text" className="form-control" id="seniority-level" placeholder="" value="" required=""/>
                    </div>


                    <div>
                        <label for="required-skills">Required Skills</label>
                        <input type="text" className="form-control" id="required-skills" placeholder="" value="" required=""/>
                    </div>


                    <button className="btn btn-dark btn-lg btn-block post-job-btn" type="submit">Post Job Opening</button>
                </form>
            </div>
        </div>
    </div>
    
)

export default PostJob