import React,{Component} from 'react';
import EmpJobCard,{EmpAppCard, BaseCard} from './EmpJobCard';
import apiURL from '../../../config';


//This component is the employer' posted job view (individual)
// An employer can view all the applicants that have applied under a particular job posted.

//TO BE UPDATED 
// EmpJobCard fields: jobPostID, companyName, jobDescription, reqSkills
// EmpAppCard fields: appName, appBackground, appSkills, appContact.

//refer to employer.js --> detailedjob handler --> console

/* jobTitle: "Software Engineer",
            jobID: 1234,
            jobDescription: "Determines operational feasibility by evaluating analysis, problem definition, requirements, solution development, and proposed solutions.Documents and demonstrates solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments and clear code. Prepares and installs solutions by determining and designing system specifications, standards, and programming",
            jobSkills:"Java, HTML, CSS3 and Javascript",
            jobLocation: "Singapore",
            jobIndustry: "Medical",
            jobExperience: "Fresh Graduate",
*/
// just backing up
class EmpJobView extends Component{
    constructor(props){
        super()
        this.props = props;

        this.state = {
            appList: [],
            error: false
        }
        this.employername = localStorage.getItem('username')
    }

    // fetch the job post and its applicants
    componentDidMount() {
        this.getApplicants(this.props.jobID)
    }

    //link will return an array of applicants (JSON Notation)
    
    getApplicants=(jobID)=>{
        const url = apiURL + 'employer/jobview/' + {jobID}

        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState({appList:data})
        })

        .catch(error => {
            console.log(`Error: ${error}`)
            this.setState({ error: true })
        })
    }

    render(){
        return(
            <div>
                <div className = "row">
                    <EmpJobCard 
                    title={this.props.jobTitle} 
                    companyName={this.props.employername} 
                    reqSkills = {this.props.jobSkills}>
                        {this.props.jobDescription}
                    </EmpJobCard>
                </div>
                <br/>
                {/* Render */}
                { this.state.appList.length > 0 && !this.state.error && 
                    this.state.appList.map( (applicant) => (
                        <div className = "row">
                            <div className = "col-sm-8 mx-auto">
                                <EmpAppCard 
                                appName={applicant.name} 
                                appSkills = {applicant.skills} 
                                appContact={applicant.contact}>
                                    {applicant.background}
                                </EmpAppCard>
                            </div>
                        </div>

                                
                    ) )
                }
            </div>
        )
    }


}

export default EmpJobView;

