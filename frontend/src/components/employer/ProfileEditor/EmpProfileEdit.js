import React from 'react';
import ProfileContainer from '../ProfileContainer';
import BasicFormField,{SelectFormField,AreaFormField} from './Form';
import '../ProfileView/Card.css'


//This is the edit profile page for employers.
const EmpProfileEdit =(props)=> {
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
                    <button className="btn btn-outline-secondary" /*onClick = {}*/>Save Changes</button>
                </div>
            </div>
        </div>
    </div>

    )
};

export default EmpProfileEdit;
