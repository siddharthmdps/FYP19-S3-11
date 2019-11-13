import React from 'react';
import ProfileContainer from '../Components/LeftSide/CompanyInfo';
import BasicFormField,{SelectFormField,AreaFormField} from './Form';
import '../ProfileView/Card.css'
import apiURL from '../../../config'


class EmpEditProfile extends React.Component {
    constructor() {
        super()
        this.empID = localStorage.getItem('id')
        this.state = {
            username: localStorage.getItem('username'),
            companyname: null,
            companyphone: null,
            companydescription: null,
            companyaddress: null,
            industry: null,
            loading: false
        }
    }

    updateProfile = () => {
        this.setState({ loading: true})
        //console.log(`Updating profile of ${props.empID}`)
        const newEmpInfo = {
            companyname         : document.getElementById("CompanyName").value,
            companyphone        : document.getElementById("CompanyPhone").value,
            industry            : document.getElementById("CompanyIndustry").value,
            companydescription  : document.getElementById("CompanyDescription").value
        }
    
        const url = `${apiURL}employer/${this.empID}`
        //const localhost = `http://localhost:3001/employer/${props.empID}`
        fetch(url, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newEmpInfo)
        })
        .then(res => res.json())
        .then(data => {
            this.setState({ loading: false})
            console.log(data.message)
            alert('Profile Editted')
            document.location.reload(true)
        })
        .catch(error => {console.log(error)})
    }

    getEmployerDetails = () => {
        const url = `${apiURL}employer/employerinfo/${this.empID}`
        fetch(url, {
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => {
            //console.log(data.body[0])
            const empInfo = data.body[0]
            this.setState({
                companyname     : empInfo.companyname,
                companyphone    : empInfo.companyphone,
                companydescription  : empInfo.companydescription,
                companyaddress  : empInfo.companyaddress,
                industry        : empInfo.industry
            })
        })
        .catch((error) => {
            alert(`failed to fetch employer details : ${error}`)
        })
    }

    componentDidMount() {
        this.getEmployerDetails()
    }

    SpinningWheel = () => {
        if(this.state.loading) {
            return(
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            )
        } else return null
    }

    EditForm = () => {

        return(
            <div>
                <div className= "wrapper">
                    <ProfileContainer companyName={this.state.companyname} buttonText="Find out more"/>
                    <div className="card pad100 mar50">
                        <div className="card-body centered">
                            <BasicFormField pid="CompanyName" title="Company Name" placeholder={this.state.companyname}/> 
                            <br/>
                            <BasicFormField pid="CompanyPhone" title="Company Phone" placeholder={this.state.companyphone}/> 
                            <br/> 
                            <SelectFormField pid="CompanyIndustry" title="Industry" />
                            <br/>
                            <AreaFormField pid="CompanyDescription" title= "Company Description" placeholder={this.state.companydescription}/>
                            <br/>
                            <button className="btn btn-outline-secondary" 
                            onClick={this.updateProfile}>
                                Save Changes
                            </button>
                            <this.SpinningWheel/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return <this.EditForm/>
    }
}



export default EmpEditProfile;
