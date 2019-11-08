import React,{Component} from 'react';
import EmpJobCard,{EmpAppCard} from './EmpJobCard';
import apiURL from '../../../config';
import {Row,Col,Card} from 'react-bootstrap';


//This component is the employer' posted job view (individual)
// An employer can view all the applicants that have applied under a particular job posted.

//EmpJobCard is ready to be deployed.
//Pending: EmpAppCard Linkage.

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

    //link will return an array of applicants (JSON Notation)
    
    getApplicants=(jobID)=>{
        console.log("JOB ID :" + jobID)
        const localhost = `http://localhost:3001/employer/jobview/${jobID}`
        const url = apiURL + 'employer/jobview/' + {jobID}

       fetch(localhost)
        .then(response => response.json())
        .then(data => {
            this.setState({appList:data}) 
            console.log(`total applicants : ${this.state.appList.length}`)
        })

        .catch(error => {
            console.log(`Error at getApplicants : ${error}`)
            this.setState({ error: true })
        })
    }

    // fetch  applicants
    componentDidMount() {
        this.getApplicants(this.props.jobID)
        console.log(this.props.jobID)
    }

    applicantContent=()=>{
        console.log(this.state.appList)
         // Loading
         if (this.state.appList.length === 0 && !this.state.error){
            return (
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }
        else if (this.state.appList.length > 0 && !this.state.error) {
            return (
                this.state.appList.map( (applicant) => {
                    // job.dateposted = job.dateposted.substr(0,10)
                    return (
                        <Row>  
                            <EmpAppCard appName = {applicant.firstname.concat(" ",applicant.lastname)} appSkills = {applicant.skills} appPhone={applicant.phone} appEmail = {applicant.email}/> 
                        </Row>
                        
                    )
                })
            )
        }
        else return <div>Error</div>
    }

    render(){
        return(
            <div>
                <Row>
                    <EmpJobCard 
                    title={this.props.jobtitle} 
                    companyName={this.employername} 
                    reqSkills = {this.props.jobskills}
                    joblocation ={this.props.joblocation}
                    jobindustry = {this.props.jobindustry}
                    dateposted={this.props.dateposted}
                    editJobHandler={this.props.editJobHandler}
                    >
                        {this.props.jobdescription}
                    </EmpJobCard>
                </Row>
                <br/>
                <this.applicantContent/>
            </div>
        )
    };


}

export default EmpJobView;

