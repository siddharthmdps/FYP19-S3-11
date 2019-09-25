import React from 'react';
import classes from './RightBox.module.css';
import FormField from '../FormField/FormField';
import Button from '../UI/Button/Button';


const rightBox = (props) => {
    let personalParticulars = (
        <div>
            <h1>Personal Particulars</h1>
            <FormField placeholder='Neil Armstrong' attribute='Name' />
            <FormField placeholder='somebody@mailProvider.com' attribute='E-mail' />
            <FormField placeholder='+65 1234 1234' attribute='Phone No.' />
            <FormField placeholder='Singapore' attribute='Country of Residence' />
            <FormField placeholder='115A Commonwealth Drive #02-14, 149596, Singapore' attribute='Address' />
            <FormField placeholder='Singapore' attribute='City' />
            <FormField placeholder='149596' attribute='Postal Code' />
        </div>
    );

    let education = (
        <div>
            <h1>Education</h1>
            <FormField placeholder='University of Wollongong' attribute='University' />
            <FormField placeholder='MM/YY' attribute='Graduation Date' />
            <FormField placeholder='Diploma of example' attribute='Highest Qualifition' />
            <FormField placeholder='Computer Science' attribute='Specialization' />
            <FormField placeholder='PT/FT' attribute='Education Type' />
            <FormField placeholder='' attribute='Current Grade' />
        </div>
    );

    let workExp = (
        <React.Fragment>
            <h1>Work Experience</h1>
            <FormField placeholder='Senior Developer' attribute='Position Title' />
            <FormField placeholder='Something Ptd Lte' attribute='Company Name' />
            <div className={classes.SameLine}>
                <div className={classes.LeftSide}>
                    
                    <FormField placeholder='MM/YY' attribute='From' />
                </div>
                <div className={classes.RightSide}>
                    <FormField placeholder='MM/YY' attribute='Till' />
                </div>
            </div>
            <FormField placeholder='Full-time' attribute='Position level' />
            <FormField placeholder='IT' attribute='Industry' />
            <FormField placeholder='80,000' attribute='Salary'/>
            <FormField 
            placeholder='Type here' 
            attribute='Describe Job Responsibility'
            type='textarea'/>
        </React.Fragment>
    )

    let jobPreference = (
        <React.Fragment>
            <h1>Job Preference</h1>
            <FormField placeholder='Accounting' attribute='Industry' />
            <FormField placeholder='Senior-level' attribute='Position' />
            <FormField placeholder='PT/FT/Contract' attribute='Job Type' />
            <FormField placeholder='80,000' attribute='Salary' />
            <FormField placeholder='Orchard' attribute='Location' />
            <FormField placeholder='Immediate' attribute='Availability' />
        </React.Fragment>
    )

    let awards = (
        <React.Fragment>
            <h1>Awards</h1>
            <FormField placeholder='Golden Reel Award' attribute='Award Name' />
            <div className={classes.WorkDate}>
                <FormField placeholder='YYYY' attribute='Date awarded (Year)' />
                <FormField placeholder='MMMM' attribute='Date awarded (Month)' />
            </div>
            <FormField 
            placeholder='Type here' 
            attribute='Description'
            type='textarea' />
        </React.Fragment>
    )

    let certifications = (
        <React.Fragment>
            <h1>Certifications</h1>
            <FormField placeholder='Certified ScrumMaster' attribute='Name of Cert' />
            <FormField placeholder='Scrum Alliance' attribute='Issued by' />
            <div className={classes.WorkDate}>
                <FormField placeholder='YYYY' attribute='Validity Year' />
                <FormField placeholder='MMMM' attribute='Validity Month' />
            </div>
            <FormField placeholder='Yes/No' attribute='LifeTime' />
        </React.Fragment>
    )

    let projects = (
        <React.Fragment>
            <h1>Projects</h1>
            <FormField placeholder='Calculator app' attribute='Title' />
            <FormField placeholder='Completed' attribute='Status' />
            <FormField 
            placeholder='Type here' 
            attribute='Description'
            type='textarea' />
            <FormField placeholder='Link to project' attribute='Link' />
        </React.Fragment>
    )

    let resume = {

    }

    return (
        <div className={classes.RightBox}>
            {(() =>{switch (props.show) {
                case 1:
                    return [personalParticulars];
                    
                case 2:
                    return [education];
                    
                case 3:
                    return [workExp];
                case 4:    
                case 5:
                    return [jobPreference];
                    
                case 6:
                    return [awards];
                    
                case 7:
                    return [certifications];
                    
                case 8:
                    return [projects];
                    
                default:
                    break;
            }})()}
            <div className={classes.SameLine}>
                <Button btnType='Danger'>Cancel</Button>
                <Button btnType='Success'>Save</Button>
            </div>

            
            {/* {education} */}
            {/* {workExp} */}
            {/* {jobPreference} */}
            {/* {awards} */}
            {/* {certifications} */}
            {/* {projects} */}
        </div>
    );
}

export default rightBox;