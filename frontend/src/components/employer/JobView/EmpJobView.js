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

    // fetch  applicants
    componentDidMount() {
        this.getApplicants(this.props.jobID)
        console.log(this.props.jobID)
    }

    //link will return an array of applicants (JSON Notation)
    
    getApplicants=(jobID)=>{
        const localhost = `http://localhost:3001/employer/jobview/${jobID}`
        const url = apiURL + 'employer/jobview/' + {jobID}

        fetch(localhost, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
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
                    </EmpJobCard>>
                </Row>
                <br/>
                <Row>
                    <Col sm={8} className = "mx-auto">
                        <EmpAppCard appName = "Maya Suplex" appSkills = "Rubbish Management" appContact= "91231011"/>
                    </Col>
                </Row>
                
                {/* Render */}
                { this.state.appList.length > 0 && !this.state.error && 
                    this.state.appList.map( (applicant) => (
                    <Row>
                            <Col sm={8} className = "mx-auto">
                                <EmpAppCard>
                                {/* appName = {applicant.firstname + " " + applicant.lastname}
                                appSkills = {applicant.skills} 
                                appContact={applicant.phone}> */}
                                </EmpAppCard>
                            </Col>
                        </Row>
                    )
                    )
                }

                
                
            
            </div>
        )
    }


}

export default EmpJobView;

