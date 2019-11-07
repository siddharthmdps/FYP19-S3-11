//import 'bootstrap/dist/css/bootstrap.min.css';

import React, {Component} from 'react'
// Employer exclusive components
import EmpNavbar from './EmpNavbar'
import PostJob from './PostJob'
import EmpPanel from './EmpPanel'
import EmpProfileView from './ProfileView/EmpProfileView'
import EmpFeed from './EmpFeed'
import EmpProfileEdit from './ProfileEditor/EmpProfileEdit'
import EmpJobView from './JobView/EmpJobView'
import EditJob from './JobEdit/EditJob'

// Common assets
import About from '../common_assets/About'

const herokuURL = require('../../config')



class Employer extends Component {
    constructor () {
        super()
        this.state = {
            id: localStorage.getItem('id'),
            username: localStorage.getItem('username'),
            companyName: null,
            companyPhone: null,
            companyEmail: null,
            companyAddress: null,
            companyDescription: null,
            industry: null,
            mainContent : null,
            numOfJobs: null,
            numOfApplicants: null
        
        }
        
    }

    /*
    This is the function which will be listening to
    Navbar.
    Depending on what is clicked on the Navbar, this function will
    set the state of the Employer.js and trigger it to render a different component
    */
    setMainContent = (event) => {
        //console.log(`Triggered by : ${event.target.id}`)

        this.setState( {
            mainContent: event.target.id
        })
    }

    updateNumOfJobs = (numJob) => {
        this.setState({ numOfJobs: numJob })
        //console.log(`num of jobs = ${this.state.numOfJobs}`)
    }

    viewJobHandler = (job) => {
        console.log(`triggered by`, job)
        
        //declaring global variable job details
        window.jobDetails= {
            jobid: job.id,
            jobpostdate: job.dateposted,
            jobdescription: job.description,
            jobindustry:job.industry,
            joblocation: job.location,
            jobrequiredskills: job.requiredskills,
            jobtitle: job.title 
        };

        this.setState({mainContent : 'viewjob'})
    }

    editJobHandler = (job) => {
        // console.log(`triggered by`, job)
        
        // //declaring global variable job details
        // window.jobEditDetails= {
        //     jobid: job.id,
        //     jobpostdate: job.dateposted,
        //     jobdescription: job.description,
        //     jobindustry:job.industry,
        //     joblocation: job.location,
        //     jobrequiredskills: job.requiredskills,
        //     jobtitle: job.title 
        // };

        this.setState({mainContent : 'editjob'})
    }

    mainContent = () => {
        const contentID = this.state.mainContent
        switch (contentID) {
            case 'viewprofile' : 
                return <EmpProfileView companyName={this.state.companyName}/>
            case 'editprofile' : 
                return <EmpProfileEdit empID={this.state.id} companyName={this.state.companyName}
                        companyPhone={this.state.companyPhone} companyAddress={this.state.companyAddress}
                        industry={this.state.industry} companyDescription={this.state.companyDescription}/>
            case 'about' : 
                return <About/>
            case 'blog' : 
                return <h3>blog</h3>
            case 'postjob' : 
                return <PostJob/>
            case 'viewjob' :
                return <EmpJobView
                jobID={window.jobDetails.jobid}
                jobtitle={window.jobDetails.jobtitle} 
                jobskills={window.jobDetails.jobrequiredskills} 
                jobdescription={window.jobDetails.jobdescription} 
                joblocation = "Singapore"/*{this.state.joblocation}*/
                jobindustry={window.jobDetails.jobindustry}
                dateposted={window.jobDetails.jobpostdate}
                editJobHandler={this.editJobHandler}
                
                 />
     
            case 'editjob':
                return <EditJob
                jobtitle={window.jobDetails.jobtitle} 
                jobskills={window.jobDetails.jobrequiredskills} 
                jobdescription={window.jobDetails.jobdescription} 
                joblocation = "Singapore"/*{this.state.joblocation}*/
                jobindustry={window.jobDetails.jobindustry}
                dateposted={window.jobDetails.jobpostdate}
                
                />

            default : 
                return (
                <div className="row mb-2">
                    <div className="col-md-3">
                        <EmpPanel companyName={this.state.companyName}
                            numOfJobs={this.state.numOfJobs}
                        />
                    </div>
                    <div className="col-md-9">
                        <EmpFeed updateNumOfJobs={this.updateNumOfJobs} viewJobHandler={this.viewJobHandler}/>
                    </div>
                </div>
                )    
            case '*' : return <h3>{contentID} not found</h3>
        }
    }

    fetchEmployerDetails = () => {
        const apiURL = `${herokuURL}employer/${this.state.id}`
        const localhost = `http://localhost:3001/employer/${this.state.id}`
        console.log("EMPIDv1: " + this.state.id)
        fetch( localhost, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => {
            console.log('response', data.body[0])
            const empInfo = data.body[0]

            this.setState({
                companyName:        empInfo.companyname,
                companyPhone:       empInfo.companyphone,
                companyEmail:       empInfo.companyemail,
                companyAddress:     empInfo.companyaddress,
                companyDescription: empInfo.companydescription,
                industry:           empInfo.industry
            })
        }).catch(error => console.log(error))
    }
    

    componentDidMount() {
        //this.fetchEmployerDetails()
        console.log(this.state)
    }

    render () {
        return (
        <div>
            {/* Fixed component */}
            <EmpNavbar
                username={this.state.username}
                setMainContent={this.setMainContent}/> 

            {/* Flexible content */}
            <this.mainContent/>
        </div>
        )
    }
}

export default Employer
