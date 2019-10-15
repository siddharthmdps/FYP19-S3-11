import React, {Component} from 'react'
import config from '../../config'
import './EmpFeed.css'

class EmpFeed extends Component {
    constructor(props){
        super()
        this.props = props

        this.state = {
            jobList: [],
            error: false
        }
    }

    // to fetch the job list from the given url
    updateJobList = () => {
        const apiURL = config.getAPIURL() + 'employer/joblist/1'  
//        const localApiUrl =  config.getLocalApiURL() + 'employer/joblist'
        fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            this.setState({ jobList : data })
            console.log(this.state.jobList)
        })
        .catch(error => {
            console.log(`Error: ${error}`)
            this.setState({ error: true })
        })
    }

    // once the component is rendered, fetch the job list from given url
    componentDidMount() {
        this.updateJobList()
    }

    
    render(){
        return(
            <main role="main" className="container" id="feed-container">
                <div className="my-3 p-3 bg-white rounded shadow-sm" id="feed-container">
                    <h6 className="border-bottom border-gray pb-2 mb-0">Advertised Jobs</h6>
                    {/* Loading */}
                    { this.state.jobList.length === 0 && !this.state.error &&
                        <div>
                            Loading...
                        </div>
                    }

                    {/* Render */}
                    { this.state.jobList.length > 0 && !this.state.error && 
                            this.state.jobList.map( (job) => (
                                <div className="media text-muted pt-3">
                                    <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                                    <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                    <div className="d-flex justify-content-between align-items-center w-100">
                                        <strong className="text-gray-dark" id="job-title-tag"><a href="#" >{job.title}</a></strong>
                                        
                                        {/* <a href="#">Follow</a> */}
                                    </div>
                                    <p>{job.desc}</p>
                                    <span className="d-block">{job.employerID}</span>
                                    </div>
                                </div>
                            ) )
                        }
                    {/* Error */}
                    { this.state.error === true && 
                        <div>Error</div>
                    }

                    <small className="d-block text-right mt-3">
                        <a href="#">All suggestions</a>
                    </small>
                </div>
            </main>
        )
    }
}


export default EmpFeed