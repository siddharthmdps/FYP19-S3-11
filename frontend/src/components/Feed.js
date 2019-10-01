import React, {Component} from 'react'

class Feed extends Component {
    constructor(props){
        super()
        this.props = props

        this.state = {
            jobList: [],
            error: false
        }
    }

    updateJobList = (data) => {
        const list = data
        this.setState({ jobList : list })
        console.log(this.state.jobList)
    }

    componentDidMount() {
        const url = 'http://localhost:3030' // change the url here
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.updateJobList(data)
        })
        .catch(error => {
            console.log(`Error: ${error}`)
            this.setState({ error: true })
        })
    }

    render(){
        return(
            <main role="main" className="container" id="feed-container">
                <div className="my-3 p-3 bg-white rounded shadow-sm">
                    <h6 className="border-bottom border-gray pb-2 mb-0">Recent Updates</h6>
                    {/* Loading */}
                    { this.state.jobList.length === 0 && !this.state.error &&
                        <div>
                            Loading
                        </div>
                    }
                    {/* Render */}
                    { this.state.jobList.length > 0 && !this.state.error && 
                            this.state.jobList.map( (job) => (
                                <div className="media text-muted pt-3">
                                    <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                                    <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                    <div className="d-flex justify-content-between align-items-center w-100">
                                        <strong className="text-gray-dark">{job.title}</strong>
                                        
                                        <a href="#">Follow</a>
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


export default Feed