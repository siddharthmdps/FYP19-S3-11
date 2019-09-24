import React from 'react';
import classes from './RightBox.module.css';
import FormField from '../FormField/FormField';


const rightBox = (props) => {
    let personalParticulars = (
        <div>
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
            <FormField placeholder='University of Wollongong' attribute='University' />
            <FormField placeholder='MM/YY' attribute='Graduation Date' />
            <FormField placeholder='Diploma of example' attribute='Highest Qualifition' />
            <FormField placeholder='Computer Science' attribute='Specialization' />
            <FormField placeholder='PT/FT' attribute='Education Type' />
            <FormField placeholder='' attribute='Current Grade' />
        </div>
    );

    let workStyle = {
        FormField:  {
            flexFlow:'column'
        },
        input: {
            height: '30%'
        }
    };

    let workExp = (
        <React.Fragment>
            <FormField placeholder='Senior Developer' attribute='Position Title' />
            <FormField placeholder='Something Ptd Lte' attribute='Company Name' />
            <div className={classes.WorkDate}>
                <FormField placeholder='MM/YY' attribute='Worked from' />
                <FormField placeholder='MM/YY' attribute='Worked Till' />
            </div>
            <FormField placeholder='Full-time' attribute='Position level' />
            <FormField placeholder='IT' attribute='Industry' />
            <FormField placeholder='80,000' attribute='Salary'/>
            <FormField 
            formStyle={{flexFlow:'column'}}
            inStyle={{height:'85px'}}
            placeholder='Type here' 
            attribute='Describe Job Responsibility'/>
        </React.Fragment>
    )

    let jobPreference = (
        <React.Fragment>
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
            <FormField placeholder='Golden Reel Award' attribute='Award Name' />
            <div className={classes.WorkDate}>
                <FormField placeholder='YYYY' attribute='Date awarded (Year)' />
                <FormField placeholder='MMMM' attribute='Date awarded (Month)' />
            </div>
            <FormField 
            formStyle={{flexFlow:'column'}}
            inStyle={{height:'85px'}}
            placeholder='Type here' 
            attribute='Description' />
        </React.Fragment>
    )

    let certifications = (
        <React.Fragment>
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
            <FormField placeholder='Calculator app' attribute='Title' />
            <FormField placeholder='Completed' attribute='Status' />
            <FormField 
            formStyle={{flexFlow:'column'}}
            inStyle={{height:'85px'}}
            placeholder='Type here' 
            attribute='Description' />
            <FormField placeholder='Link to project' attribute='Link' />
        </React.Fragment>
    )

    let resume = {

    }

    let display = null;

    return (
        <div className={classes.RightBox}>
            {(() =>{switch (props.show) {
                case '2':
                    return [personalParticulars];
                    break;
                case '3':
                    return [education];
                    break;
                case '4':
                    return [workExp];
                    break;    
                case '6':
                    return [jobPreference];
                    break;
                case '7':
                    return [awards];
                    break;
                case '8':
                    return [certifications];
                    break;
                case '9':
                    return [projects];
                    break;
                default:
                    break;
            }})()}
            
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