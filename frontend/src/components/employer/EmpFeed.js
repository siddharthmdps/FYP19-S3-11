import React, {Component} from 'react'
import apiURL from '../../config'
import './EmpFeed.css'

class EmpFeed extends Component {
    constructor(props){
        super()
        this.props = props

        this.state = {
            jobList: [],
            error: false
        }
        this.employername = localStorage.getItem('username')
    }

    // to fetch the job list from the given url
    updateJobList = () => {
        const empID = localStorage.getItem('id')
        const url = apiURL + 'employer/joblist/' + empID
        const localhost =   `http://localhost:3001/employer/joblist/${empID}`
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState({ jobList : data })
            //console.log(this.state.jobList)
            //console.log(`total jobs : ${this.state.jobList.length}`)
            this.props.updateNumOfJobs(this.state.jobList.length)
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

    
    feedContent = () => {
        // Loading
        if (this.state.jobList.length === 0 && !this.state.error){
            return (
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }
        else if (this.state.jobList.length > 0 && !this.state.error) {
            return (
                this.state.jobList.map( (job) => {
                    job.dateposted = job.dateposted.substr(0,10)
                    return (
                        <div className="media text-muted pt-3">
                            <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" 
                            preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32">
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#007bff"></rect>
                                <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
                                </svg>
                            <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                            <div className="d-flex justify-content-between align-items-center w-100">
                                <strong className="text-gray-dark" id="job-title-tag"><a href="#" >{job.title}</a></strong>
                                
                                
                                <a onClick={() => {
                                    this.props.viewJobHandler(job)
                                }} id="viewjob-tag"> + </a>
                            </div>
                            <p>{job.description}</p>
                            <span className="d-block">{job.dateposted}</span>
                            </div>
                        </div>
                    )
                })
            )
        }
        else return <div>Error</div>
    }


    render(){
        return(
            <main role="main" className="container" id="feed-container">
                <div className="my-3 p-3 bg-white rounded shadow-sm" id="feed-container">
                    <h6 className="border-bottom border-gray pb-2 mb-0">Advertised Jobs</h6>

                    <this.feedContent/>

                </div>
            </main>
        )
    }
}


export default EmpFeed