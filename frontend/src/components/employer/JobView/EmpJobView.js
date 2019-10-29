import React,{Component} from 'react';
import EmpJobCard,{EmpAppCard, BaseCard} from './EmpJobCard';
import apiURL from '../../../config';


//This component is the employer' posted job view (individual)
// An employer can view all the applicants that have applied under a particular job posted.

//TO BE UPDATED 
// EmpJobCard fields: jobPostID, companyName, jobDescription, reqSkills
// EmpAppCard fields: appName, appBackground, appSkills, appContact.

//Please treat this as a private class for now. Working on fetch. 

/*

//when I fetch a job 
// I should get this.

job{
    int jobID;
    String companyName;
    String jobDescription;
    String [] reqSkills;
    String location;
    String industry;
    String workExperience;

}

application{
    int jobID;
    int studentID;

}*/

/*
    this.state={
        job: [],
        appList: [],
        error:false
    }

*/

class EmpJobView extends Component{
    constructor(props){
        super()
        this.props = props;

        this.state = {
            jobTitle: "Software Engineer",
            jobID: 1234,
            jobDescription: "Determines operational feasibility by evaluating analysis, problem definition, requirements, solution development, and proposed solutions.Documents and demonstrates solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments and clear code. Prepares and installs solutions by determining and designing system specifications, standards, and programming",
            jobSkills:"Java, HTML, CSS3 and Javascript",
            jobLocation: "Singapore",
            jobIndustry: "Medical",
            jobExperience: "Fresh Graduate",
            appList: [],
            error: false
        }
        this.employername = localStorage.getItem('username')
    }

    // fetch the job post and its applicants
    componentDidMount() {
        this.getJob()
        this.getApplicants()
    }

    getJob=()=>{
        const empID = localStorage.getItem('id')
        const url = apiURL + 'employer/joblist/' + empID

        fetch(url)
        .then(response => response.json())
        .then(data => {
            
           // this.setState({appList:data})
            
        })
        .catch(error => {
            console.log(`Error: ${error}`)
            this.setState({ error: true })
        })
    }
    //step 1: retrieve array of appID (application table)
    // step 2: getInfo from applicants (applicants table)
    
    getApplicants=()=>{
        const empID = localStorage.getItem('id')
        const url = apiURL + 'employer/joblist/' + empID

        fetch(url)
        .then(response => response.json())
        .then(data => {
            //console.log(response)
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
                    <EmpJobCard title={this.state.jobTitle} companyName={this.employername} reqSkills = {this.state.jobSkills}>
                        {this.state.jobDescription}
                    </EmpJobCard>
                </div>
                <br/>
                {/* Render */}
                { this.state.appList.length > 0 && !this.state.error && 
                            this.state.appList.map( (applicant) => (
                                <div className = "row">
                                    <div className = "col-sm-8 mx-auto">
                                        <EmpAppCard appName={applicant.name} appSkills = {applicant.skills} appContact={applicant.contact}>
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
/*
const EmpJobView=(props)=> {
    return (
        <div>
            <div className = "row">
                <EmpJobCard title="Software Engineer" companyName="Employer Com Ltd" reqSkills = "Java, HTML, CSS3 and Javascript">
                Determines operational feasibility by evaluating analysis, problem definition, requirements, solution development, and proposed solutions.
                Documents and demonstrates solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments and clear code.
                Prepares and installs solutions by determining and designing system specifications, standards, and programming.
                Improves operations by conducting systems analysis; recommending changes in policies and procedures.
                Obtains and licenses software by obtaining required information from vendors; recommending purchases; testing and approving products.
                Updates job knowledge by studying state-of-the-art development tools, programming techniques, and computing equipment; participating in educational opportunities; reading professional publications; maintaining personal networks; participating in professional organizations.
                Protects operations by keeping information confidential.
                Provides information by collecting, analyzing, and summarizing development and service issues.
                Accomplishes engineering and organization mission by completing related results as needed.
                Develops software solutions by studying information needs; conferring with users; studying systems flow, data usage, and work processes; investigating problem areas; following the software development lifecycle.
            </EmpJobCard>
            </div>
            <br/>
            <div className = "row">
                <div className = "col-sm-8 mx-auto">
                    <div className = "row">
                    
                    <EmpAppCard appName="Lady Rara" appSkills = "Singing, dancing, decomposing" appContact="82828261">
                        Having sold 27 million albums and 146 million singles as of January 2016, 
                        Gaga is one of the world's best-selling music artists. 
                        Her achievements include several Guinness world records, 
                        nine Grammy Awards, and awards from the Songwriters Hall of Fame 
                        and the Council of Fashion Designers of America...
                    </EmpAppCard>

                    <EmpAppCard appName="Lady Rara" appSkills = "Singing, dancing, decomposing" appContact="82828261">
                        Having sold 27 million albums and 146 million singles as of January 2016, 
                        Gaga is one of the world's best-selling music artists. 
                        Her achievements include several Guinness world records, 
                        nine Grammy Awards, and awards from the Songwriters Hall of Fame 
                        and the Council of Fashion Designers of America...
                    </EmpAppCard>

                    <EmpAppCard appName="Lady Rara" appSkills = "Singing, dancing, decomposing" appContact="82828261">
                        Having sold 27 million albums and 146 million singles as of January 2016, 
                        Gaga is one of the world's best-selling music artists. 
                        Her achievements include several Guinness world records, 
                        nine Grammy Awards, and awards from the Songwriters Hall of Fame 
                        and the Council of Fashion Designers of America...    
                    </EmpAppCard>
                    </div>
                </div>
            </div>
          
        </div>

    )
}*/



//STEP 1: TRY LOCALLY





//to fetch this for the job card.
//title, description, industry, required skills, 
/*
getJob=()=>{
    //const jobID = localstorage.getItem('jobId')
    //const url = apiURL + 'employer/joblist/'+empId
    //const localhost = `http://localhost:3001/employer/joblist/${jobID}`
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(response)
        /*this.setState({ jobList : data })
        //console.log(this.state.jobList)
        console.log(`total jobs : ${this.state.jobList.length}`)
        this.props.updateNumOfJobs(this.state.jobList.length)
    })
    .catch(error => {
        console.log(`Error: ${error}`)
        //this.setState({ error: true })
    })
}
/*
// to fetch the job list from the given url
updateJobApplicantList = () => {
    //get job post id
    //access job post id
    const jobID = localStorage.getItem('jobId')
    const url = apiURL + 'employer/joblist/' + empID
    const localhost =   `http://localhost:3001/employer/joblist/${empID}`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        this.setState({ jobList : data })
        //console.log(this.state.jobList)
        console.log(`total jobs : ${this.state.jobList.length}`)
        this.props.updateNumOfJobs(this.state.jobList.length)
    })
    .catch(error => {
        console.log(`Error: ${error}`)
        this.setState({ error: true })
    })
}*/

//get jobId

//GET /apps?id={jobID}
// add them into a number array of application numbers

export default EmpJobView;
