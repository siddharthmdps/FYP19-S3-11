import React,{Component} from 'react';
import EmpJobCard,{EmpAppCard, BaseCard} from './EmpJobCard';
import apiURL from '../../../config';
import {Row,Col} from 'react-bootstrap';


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
        //console.log(this.props.jobskills)
        //console.log(this.props.jobtitle)
        return(
            <div>
                <Row>
                    <EmpJobCard 
                    title={this.props.jobtitle} 
                    companyName={this.employername} 
                    reqSkills = {this.props.jobskills}
                    joblocation ={this.props.joblocation}
                    jobindustry = {this.props.jobindustry}
                    dateposted={this.props.dateposted}>
                        {this.props.jobdescription}
                    </EmpJobCard>
                </Row>
                <br/>
                {/* Render */}
                { this.state.appList.length > 0 && !this.state.error && 
                    this.state.appList.map( (applicant) => (
                        <Row>
                            <Col sm={8} className = "mx-auto">
                                <EmpAppCard 
                                appName = "Maya Albarax"/*{applicant.name} */
                                appSkills = {applicant.skills} 
                                appContact={applicant.contact}>
                                    {applicant.background}
                                </EmpAppCard>
                            </Col>
                        </Row>

                                
                    ) )
                }
            </div>
        )
    }


}

export default EmpJobView;

