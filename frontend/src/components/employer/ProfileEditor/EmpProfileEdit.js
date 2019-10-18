import React from 'react';
import ProfileContainer from '../ProfileContainer';
import BasicFormField,{SelectFormField,AreaFormField} from './Form';
import '../ProfileView/Card.css'
import apiURL from '../../../config'



//This is the edit profile page for employers.
const EmpProfileEdit =(props)=> {

    const updateProfile = () => {
        //console.log(`Updating profile of ${props.empID}`)
        const newEmpInfo = {
            companyname         : document.getElementById("CompanyName").value,
            companyphone        : document.getElementById("CompanyPhone").value,
            industry            : document.getElementById("CompanyIndustry").value,
            companydescription  : document.getElementById("CompanyDescription").value
        }
    
        const url = `${apiURL}employer/${props.empID}`
        //const localhost = `http://localhost:3001/employer/${props.empID}`
        fetch(url, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newEmpInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data.message)
            alert('Profile Editted')
            document.location.reload(true)
        })
        .catch(error => {console.log(error)})
    }

    return (
    <div>
        <div className= "wrapper">
            <ProfileContainer companyName={props.companyName} buttonText="Find out more"/>
            <div className="card pad100 mar50">
                <div className="card-body centered">
                    <BasicFormField pid="CompanyName" title="Company Name" placeholder={props.companyName}/> 
                    <br/>
                    <BasicFormField pid="CompanyPhone" title="Company Phone" placeholder={props.companyPhone}/> 
                    <br/> 
                    <SelectFormField pid="CompanyIndustry" title="Industry" />
                    <br/>
                    <AreaFormField pid="CompanyDescription" title= "Company Description" placeholder={props.companyDescription}/>
                    <br/>
                    <button className="btn btn-outline-secondary" 
                    onClick={updateProfile}>
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    </div>

    )
};

export default EmpProfileEdit;
