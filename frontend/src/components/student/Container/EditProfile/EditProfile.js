import React, { Component } from 'react';
import classes from './EditProfile.module.css';
import LeftSide from '../../Components/EditProfile/LeftSide/LeftSide';
import PersonalParticulars from '../../Components/EditProfile/PersonalParticulars/PersonalParticulars';
import Education from '../../Components/EditProfile/Education/Education';
import WorkExperience from '../../Components/EditProfile/WorkExperience/WorkExperience';
import JobPreference from '../../Components/EditProfile/JobPreference/JobPreference';
import Awards from '../../Components/EditProfile/Awards/Awards';
import Certification from '../../Components/EditProfile/Certification/Certification';
import Skills from '../../Components/EditProfile/Skills/Skills';
import Projects from '../../Components/EditProfile/Projects/Projects';
import Document from '../../Components/EditProfile/Document/Document';
import Button1 from '../../../common_assets/Button1/Button1';
import { Accordion, Card, Container, Col, Row, Form, Image } from 'react-bootstrap';
import ppClasses from '../../../common_assets/Validate.module.css';
import apiURL from '../../../../config';

import Modal from '../../Components/EditProfile/LeftSide/Modal'

import { withSnackbar } from 'notistack';

import Axios from 'axios';

const PersonalParticularsShell = {
    "StudentID": 0,
    "FirstName": "",
    "MiddleName": "",
    "LastName": "",
    "Email": "",
    "Phone": "",
    "Country": "",
    "City": "",
    "CurrentAddress": "",
    "PostalCode": "",
    "Nationality": "",
    "Availability": "",
    "LinkedIn": ""
}

const EducationShell = {
    "EducationID": 0,
    "University": "",
    "Degree": "",
    "FieldOfStudy": "",
    "Major": "",
    "StartDate": "",
    "EndDate": "",
    "Mode": "",
    "GPA": ""
}

const WorkExpShell = {
    "WorkExpID": 0,
    "Position": "",
    "Company": "",
    "StartDate": "",
    "EndDate": "",
    "Mode": "",
    "Industry": "",
    "AnnualSalary": 0,
    "Description": ""
}

const JobPreferenceShell = {
    "JobPreferenceID": 0,
    "Industry": "",
    "WorkExp": "",
    "Location": ""
}

const AwardsShell = {
    "AwardID": 0,
    "Award": "",
    "Date": "",
    "Description": ""
}

const CertificationShell = {
    "CertificateID": 0,
    "Name": "",
    "IssuedBy": "",
    "IssueDate": "",
    "ValidUntil": ""
}

const SkillsShell = {
    "SkillID": 0,
    "SkillName": "",
    "Edit": false
}

const ProjectsShell = {
    "ProjectID": 0,
    "Title": "",
    "Status": "",
    "Description": "",
    "Link": ""
}

const DocumentShell = {
    "DocumentID": 0,
    "Title": "",
    "Link": ""
}

class EditProfile extends Component {

    state = {
        "StudentID": localStorage.getItem('id'),
        "ProfileImage": "default.png",
        "NewProfile": {"Modal": false, "Location": ""},
        "PersonalParticulars": {},
        "Education": [],
        "WorkExp": [],
        "JobPreference": {},
        "Awards": [],
        "Certification": [],
        "Skills": [],
        "Projects": [],
        "Document": [],
        "isActive": [],
        "activatedToggle": "-1"
    }

    // Handling Form Inputs starts here

    changeNewProfile = event => {
        console.log(event.target.value);
        this.setState({NewProfile: {"Modal": true, "Location": event.target.files[0]}})
    }

    changePersonalParticulars = event => {
        console.log(event.target.id);

        let tempState = this.state.PersonalParticulars;
        tempState[event.target.id] = event.target.value;
        console.log(tempState);
        this.setState({PersonalPaticulars: tempState});
    }

    changeEducation = (event, elementID) => {
        console.log(event.target.value, event.target.id, elementID);
        let tempState = this.state.Education;
        tempState.forEach(element => {
            if (element.EducationID === elementID) {
                element[event.target.id] = event.target.value;
            }
        });
        this.setState({Education: tempState});
    }

    changeWorkExp = (event, elementID) => {
        console.log(event.target.value, event.target.id, elementID);
        let tempState = this.state.WorkExp;
        tempState.forEach(element => {
            if (element.WorkExpID === elementID) {
                element[event.target.id] = event.target.value;
            }
        });
        this.setState({WorkExp: tempState});
    }

    changeJobPreference = event => {
        console.log(event.target.id, event.target.value);

        let tempState = this.state.JobPreference;
        tempState[event.target.id] = event.target.value;

        this.setState({JobPreference: tempState});
    }

    changeAwards = (event, elementID) => {
        console.log(event.target.value, event.target.id, elementID);
        let tempState = this.state.Awards;
        tempState.forEach(element => {
            if (element.AwardID === elementID) {
                element[event.target.id] = event.target.value;
            }
        });
        this.setState({Awards: tempState});
    }

    changeCertification = (event, elementID) => {
        console.log(event.target.value, event.target.id, elementID);
        let tempState = this.state.Certification;
        tempState.forEach(element => {
            if (element.CertificateID === elementID) {
                element[event.target.id] = event.target.value;
            }
        });
        this.setState({Certification: tempState});
    }

    changeSkills = (event, elementID) => {
        console.log(event.target.value, event.target.id, elementID);
        let tempState = this.state.Skills;
        tempState.forEach(element => {
            if (element.SkillID === elementID) {
                if (event.key === 'Enter') {
                    element["Edit"] = false;
                }
                else
                    element["SkillName"] = event.target.value;
            }
        });
        this.setState({Skills: tempState});
    }

    changeProjects = (event, elementID) => {
        console.log(event.target.value, event.target.id, elementID);
        let tempState = this.state.Projects;
        tempState.forEach(element => {
            if (element.ProjectID === elementID) {
                element[event.target.id] = event.target.value;
            }
        });
        this.setState({Projects: tempState});
    }

    changeDocument = (event, elementID) => {
        let tempState = this.state.Document;
        if(event.target.id === "Title"){
            console.log(event.target.value, event.target.id, elementID);
            tempState.forEach(element => {
                if (element.DocumentID === elementID) {
                    element[event.target.id] = event.target.value;
                }
            });
        }
        else if(event.target.id === "Link"){
            if(event.target.files[0]["type"]!= "application/pdf")
                this.props.enqueueSnackbar('Only Pdf supported!', { variant: 'error' });
            else{
                console.log(event.target.value, event.target.files[0], elementID);
                tempState.forEach(element => {
                    if (element.DocumentID === elementID) {
                        element[event.target.id] = event.target.files[0];
                    }
                });
            }
        }
        this.setState({Document: tempState});
    }

    // Handling Form Inputs ends here

    togglePanel(i) {
        let isActive = [...this.state.isActive];
        isActive[i] = !isActive[i];
        let index;
        for (index = 0; index < isActive.length; index++) {
            if (index != i)
                isActive[index] = false;
        }

        this.setState({ isActive });
        if (this.state.activatedToggle == i)
            this.setState({ "activatedToggle": "-1" });
        else
            this.setState({ "activatedToggle": i.toString() });
    }

    // Adding new elements in the Profile starts here

    addNewEducation = () => {
        let temp = { ...EducationShell };
        if (this.state.Education.length === 0)
            temp.EducationID = 1;
        else
            temp.EducationID = this.state.Education[this.state.Education.length - 1]["EducationID"] + 1;
        let temp2 = this.state.Education;
        temp2.push(temp);
        this.setState({ "Education": temp2 });
    }

    addNewWorkExp = () => {
        let temp = { ...WorkExpShell };
        if (this.state.WorkExp.length === 0)
            temp.WorkExpID = 1;
        else
            temp.WorkExpID = this.state.WorkExp[this.state.WorkExp.length - 1]["WorkExpID"] + 1;
        let temp2 = this.state.WorkExp;
        temp2.push(temp);
        this.setState({ "WorkExp": temp2 });
    }

    addNewAwards = () => {
        let temp = { ...AwardsShell };
        if (this.state.Awards.length === 0)
            temp.AwardID = 1;
        else
            temp.AwardID = this.state.Awards[this.state.Awards.length - 1]["AwardID"] + 1;
        let temp2 = this.state.Awards;
        temp2.push(temp);
        this.setState({ "Awards": temp2 });
    }

    addNewCertificate = () => {
        let temp = { ...CertificationShell };
        if (this.state.Certification.length === 0)
            temp.CertificateID = 1;
        else
            temp.CertificateID = this.state.Certification[this.state.Certification.length - 1]["CertificateID"] + 1;
        let temp2 = this.state.Certification;
        temp2.push(temp);
        this.setState({ "Certification": temp2 });
    }

    addNewSkill = () => {
        let temp = { ...SkillsShell };
        if (this.state.Skills.length === 0)
            temp.SkillID = 1;
        else
            temp.SkillID = this.state.Skills[this.state.Skills.length - 1]["SkillID"] + 1;
        temp.Edit = true;
        let temp2 = this.state.Skills;
        temp2.push(temp);
        this.setState({ "Skills": temp2 });
    }

    addNewProjects = () => {
        let temp = { ...ProjectsShell };
        if (this.state.Projects.length === 0)
            temp.ProjectID = 1;
        else
            temp.ProjectID = this.state.Projects[this.state.Projects.length - 1]["ProjectID"] + 1;
        let temp2 = this.state.Projects;
        temp2.push(temp);
        this.setState({ "Projects": temp2 });
    }

    addNewDocument = () => {
        let temp = { ...DocumentShell };
        if (this.state.Document.length === 0)
            temp.DocumentID = 1;
        else
            temp.DocumentID = this.state.Document[this.state.Document.length - 1]["DocumentID"] + 1;
        let temp2 = this.state.Document;
        temp2.push(temp);
        this.setState({ "Document": temp2 });
    }

    // Adding new elements in the Profile ends here

    // Removing elements in the Profile starts here

    removeEducation = (eID) => {
        let temp = this.state.Education;
        let found = false;
        let eIndex = -1;
        temp.forEach((element, index) => {
            if (element["EducationID"] === eID) {
                found = true;
                eIndex = index;
            }
            if (found) {
                element["EducationID"]--;
            }
        });
        if (found)
            temp.splice(eIndex, 1);
        this.setState({ "Education": temp });
    }

    removeWorkExp = (wID) => {
        let temp = this.state.WorkExp;
        let found = false;
        let wIndex = -1;
        temp.forEach((element, index) => {
            if (element["WorkExpID"] === wID) {
                found = true;
                wIndex = index;
            }
            if (found) {
                element["WorkExpID"]--;
            }
        });
        if (found)
            temp.splice(wIndex, 1);
        this.setState({ "WorkExp": temp });
    }

    removeAwards = (aID) => {
        let temp = this.state.Awards;
        let found = false;
        let aIndex = -1;
        temp.forEach((element, index) => {
            if (element["AwardID"] === aID) {
                found = true;
                aIndex = index;
            }
            if (found) {
                element["AwardID"]--;
            }
        });
        if (found)
            temp.splice(aIndex, 1);
        this.setState({ "Awards": temp });
    }

    removeCertification = (cID) => {
        let temp = this.state.Certification;
        let found = false;
        let cIndex = -1;
        temp.forEach((element, index) => {
            if (element["CertificateID"] === cID) {
                found = true;
                cIndex = index;
            }
            if (found) {
                element["CertificateID"]--;
            }
        });
        if (found)
            temp.splice(cIndex, 1);
        this.setState({ "Certification": temp });
    }

    removeSkills = (sID) => {
        let temp = this.state.Skills;
        let found = false;
        let sIndex = -1;
        temp.forEach((element, index) => {
            if (element["SkillID"] === sID) {
                found = true;
                sIndex = index;
            }
            if (found) {
                element["SkillID"]--;
            }
        });
        if (found)
            temp.splice(sIndex, 1);
        this.setState({ "Skills": temp });
    }

    removeProjects = (pID) => {
        let temp = this.state.Projects;
        let found = false;
        let pIndex = -1;
        temp.forEach((element, index) => {
            if (element["ProjectID"] === pID) {
                found = true;
                pIndex = index;
            }
            if (found) {
                element["ProjectID"]--;
            }
        });
        if (found)
            temp.splice(pIndex, 1);
        this.setState({ "Projects": temp });
    }

    removeDocument = (dID) => {
        let temp = this.state.Document;
        let found = false;
        let dIndex = -1;
        temp.forEach((element, index) => {
            if (element["DocumentID"] === dID) {
                found = true;
                dIndex = index;
            }
            if (found) {
                element["DocumentID"]--;
            }
        });
        if (found)
            temp.splice(dIndex, 1);
        this.setState({ "Document": temp });
    }

    adjustDate = (date, format) => {
        let temp = new Date(date);
        let tempDate = temp.getDate();
        let tempMonth = temp.getMonth() + 1;
        let tempYear = temp.getFullYear();
        if(tempMonth<10)
            tempMonth = '0' + tempMonth;
        if(tempDate<10)
            tempDate = '0' + tempDate;
        
        if( isNaN(tempDate) || isNaN(tempMonth) || isNaN(tempYear)){
            console.log("Not a Number " + date);
            return "";
        }

        format = format.replace("dd", tempDate);
        format = format.replace("mm", tempMonth);
        format = format.replace("yyyy", tempYear);

        console.log("Formatted date: " + format);
        return format;
    }

    copy = o => {
        var output, v, key;
        output = Array.isArray(o) ? [] : {};
        for (key in o) {
            v = o[key];
            output[key] = (typeof v === "object") ? this.copy(v) : v;
        }
        return output;
     }

    // Removing elements in the Profile ends here

    //Validation of the Profile starts here

    validatePersonalParticulars = () => {
        if(this.state.PersonalParticulars.FirstName === ""){
            this.props.enqueueSnackbar('First Name cannot be empty!', { variant: 'error' });
            return false;
        }
        if(this.state.PersonalParticulars.LastName === ""){
            this.props.enqueueSnackbar('Last Name cannot be empty!', { variant: 'error' });
            return false;
        }
        if(this.state.PersonalParticulars.Email === ""){
            this.props.enqueueSnackbar('Email is not valid!', { variant: 'error' });
            return false;
        }
        if(this.state.PersonalParticulars.Phone === ""){
            this.props.enqueueSnackbar('Phone is not valid!', { variant: 'error' });
            return false;
        }
        if(this.state.PersonalParticulars.CurrentAddress === ""){
            this.props.enqueueSnackbar('Current Address is not valid!', { variant: 'error' });
            return false;
        }
        if(this.state.PersonalParticulars.City === ""){
            this.props.enqueueSnackbar('City is not valid!', { variant: 'error' });
            return false;
        }
        if(this.state.PersonalParticulars.Country === ""){
            this.props.enqueueSnackbar('Country is not valid!', { variant: 'error' });
            return false;
        }
        if(this.state.PersonalParticulars.PostalCode === ""){
            this.props.enqueueSnackbar('Postal Code is not valid!', { variant: 'error' });
            return false;
        }
        if(this.state.PersonalParticulars.Nationality === ""){
            this.props.enqueueSnackbar('Nationality is not valid!', { variant: 'error' });
            return false;
        }
        if(this.state.PersonalParticulars.Availability === ""){
            this.props.enqueueSnackbar('Availability is not valid!', { variant: 'error' });
            return false;
        }
        if(this.state.PersonalParticulars.LinkedIn === ""){
            this.props.enqueueSnackbar('LinkedIn is not valid!', { variant: 'error' });
            return false;
        }
        return true;

    }

    validateEducation = () => {
        for (let idk in this.state.Education) {
            if(this.state.Education[idk]['University'] === ""){
                this.props.enqueueSnackbar(`University of #${this.state.Education[idk]['EducationID']} is not valid!`, { variant: 'error' });
                return false;
            }
            if(this.state.Education[idk]['Degree'] === ""){
                this.props.enqueueSnackbar(`Degree of #${this.state.Education[idk]['EducationID']} is not valid!`, { variant: 'error' });
                return false;
            }
            if(this.state.Education[idk]['FieldOfStudy'] === ""){
                this.props.enqueueSnackbar(`FieldOfStudy of #${this.state.Education[idk]['EducationID']} is not valid!`, { variant: 'error' });
                return false;
            }
            if(this.state.Education[idk]['Major'] === ""){
                this.props.enqueueSnackbar(`Major of #${this.state.Education[idk]['EducationID']} is not valid!`, { variant: 'error' });
                return false;
            }
            if(this.state.Education[idk]['StartDate'] === ""){
                this.props.enqueueSnackbar(`StartDate of #${this.state.Education[idk]['EducationID']} is not valid!`, { variant: 'error' });
                return false;
            }
            if(this.state.Education[idk]['EndDate'] === ""){
                this.props.enqueueSnackbar(`EndDate of #${this.state.Education[idk]['EducationID']} is not valid!`, { variant: 'error' });
                return false;
            }
            if(this.state.Education[idk]['Mode'] === ""){
                this.props.enqueueSnackbar(`Mode of #${this.state.Education[idk]['EducationID']} is not valid!`, { variant: 'error' });
                return false;
            }
            if(this.state.Education[idk]['GPA'] === ""){
                this.props.enqueueSnackbar(`GPA of #${this.state.Education[idk]['EducationID']} is not valid!`, { variant: 'error' });
                return false;
            }
        }
        return true;
    }

    validateWorkExp = () => {
        for(let idk in this.state.WorkExp){
            if(this.state.WorkExp[idk]['Position']===""){
                this.props.enqueueSnackbar(`Position of #${this.state.WorkExp[idk]['WorkExpID']} is not valid!`, { variant: 'error' });
                return false;
            }
            if(this.state.WorkExp[idk]['Company']===""){
                this.props.enqueueSnackbar(`Company of #${this.state.WorkExp[idk]['WorkExpID']} is not valid!`, { variant: 'error' });
                return false;
            }
            if(this.state.WorkExp[idk]['StartDate']===""){
                this.props.enqueueSnackbar(`StartDate of #${this.state.WorkExp[idk]['WorkExpID']} is not valid!`, { variant: 'error' });
                return false;
            }
            if(this.state.WorkExp[idk]['EndDate']===""){
                this.props.enqueueSnackbar(`EndDate of #${this.state.WorkExp[idk]['WorkExpID']} is not valid!`, { variant: 'error' });
                return false;
            }
            if(this.state.WorkExp[idk]['Mode']===""){
                this.props.enqueueSnackbar(`Mode of #${this.state.WorkExp[idk]['WorkExpID']} is not valid!`, { variant: 'error' });
                return false;
            }
            if(this.state.WorkExp[idk]['Industry']===""){
                this.props.enqueueSnackbar(`Industry of #${this.state.WorkExp[idk]['WorkExpID']} is not valid!`, { variant: 'error' });
                return false;
            }
            if(this.state.WorkExp[idk]['AnnualSalary']===""){
                this.props.enqueueSnackbar(`AnnualSalary of #${this.state.WorkExp[idk]['WorkExpID']} is not valid!`, { variant: 'error' });
                return false;
            }
        }
        return true;
    }

    validateJobPreference = () => {
        if(this.state.JobPreference.Industry===""){
            this.props.enqueueSnackbar('Industry cannot be empty!', { variant: 'error' });
            return false;
        }
        if(this.state.JobPreference.WorkExp===""){
            this.props.enqueueSnackbar('WorkExp cannot be empty!', { variant: 'error' });
            return false;
        }
        if(this.state.JobPreference.Location===""){
            this.props.enqueueSnackbar('Location cannot be empty!', { variant: 'error' });
            return false;
        }
        return true;
    }

    validateAwards = () => {
        for(let idk in this.state.Awards){
            if(this.state.Awards[idk]['Award']===""){
                this.props.enqueueSnackbar(`Award of #${this.state.Awards[idk]['AwardID']} is not valid!`, { variant: 'error' });
                return false;
            }
            if(this.state.Awards[idk]['Date']===""){
                this.props.enqueueSnackbar(`Date of #${this.state.Awards[idk]['AwardID']} is not valid!`, { variant: 'error' });
                return false;
            }
            if(this.state.Awards[idk]['Description']===""){
                this.props.enqueueSnackbar(`Description of #${this.state.Awards[idk]['AwardID']} is not valid!`, { variant: 'error' });
                return false;
            }
        }
        return true;
    }

    validateCertification = () => {
        for(let idk in this.state.Certification){
            if(this.state.Certification[idk]['Name']===""){
                this.props.enqueueSnackbar(`Name of #${this.state.Certification[idk]['CertificateID']} is not valid!`, { variant: 'error' });
                return false;
            }
            if(this.state.Certification[idk]['IssuedBy']===""){
                this.props.enqueueSnackbar(`IssuedBy of #${this.state.Certification[idk]['CertificateID']} is not valid!`, { variant: 'error' });
                return false;
            }
            if(this.state.Certification[idk]['IssueDate']===""){
                this.props.enqueueSnackbar(`IssueDate of #${this.state.Certification[idk]['CertificateID']} is not valid!`, { variant: 'error' });
                return false;
            }
            if(this.state.Certification[idk]['ValidUntil']===""){
                this.props.enqueueSnackbar(`ValidUntil of #${this.state.Certification[idk]['CertificateID']} is not valid!`, { variant: 'error' });
                return false;
            }
        }
        return true;
    }

    validateProjects = () => {
        for(let idk in this.state.Projects){
            if(this.state.Projects[idk]['Title']===""){
                this.props.enqueueSnackbar(`Title of #${this.state.Projects[idk]['ProjectID']} is not valid!`, { variant: 'error' });
                return false;
            }
            if(this.state.Projects[idk]['Status']===""){
                this.props.enqueueSnackbar(`Status of #${this.state.Projects[idk]['ProjectID']} is not valid!`, { variant: 'error' });
                return false;
            }
            if(this.state.Projects[idk]['Description']===""){
                this.props.enqueueSnackbar(`Description of #${this.state.Projects[idk]['ProjectID']} is not valid!`, { variant: 'error' });
                return false;
            }
        }
        return true;
    }

    validateDocuments = () => {
        for(let idk in this.state.Document){
            if(this.state.Document[idk]['Title']===""){
                this.props.enqueueSnackbar(`Title of #${this.state.Document[idk]['DocumentID']} is not valid!`, { variant: 'error' });
                return false;
            }
            if(this.state.Document[idk]['Link']===""){
                this.props.enqueueSnackbar(`Select a file for #${this.state.Document[idk]['DocumentID']}!`, { variant: 'error' });
                return false;
            }
        }
        return true;
    }

    //Validation of the Profile ends here

    // Submit elements to put in Backend starts here
    submitNewProfile = () => {
        if(this.state.NewProfile.NewUpload){

            const fd = new FormData();
            fd.append('file', this.state.NewProfile.Location, this.state.NewProfile.Location.name);
            console.log(fd);
            Axios.post(`/uploadstudentpicture/${this.state.StudentID}`, fd)
            .then(response => {
                console.log(response);
            });
        }
    }

    submitPersonalParticulars = () => {
        if(this.validatePersonalParticulars()){
            const temp = {...this.state.PersonalParticulars};
            console.log(temp);
            Axios.put('https://pegasus-backend.herokuapp.com/student/studentinfo/updateStudent', temp)
            .then(response => {
                this.props.enqueueSnackbar('Personal Particulars uploaded!', { variant: 'success' });
                this.togglePanel(1);
            })
            .catch(error => {
                this.props.enqueueSnackbar('Error storing Personal Particulars!', { variant: 'error' });
            });
        }
    }

    submitEducation = () => {
        if(this.validateEducation()){
            let temp = this.copy(this.state.Education);
            console.log(temp)
            for (let idk in temp) {
                temp[idk]['StudentID'] = this.state.StudentID;
                temp[idk]['StartDate'] = this.adjustDate(temp[idk]['StartDate'], "dd/mm/yyyy");
                temp[idk]['EndDate'] = this.adjustDate(temp[idk]['EndDate'], "dd/mm/yyyy");
            }
            console.log(temp);
            Axios.put('https://pegasus-backend.herokuapp.com/student/putstudenteducation', temp)
                .then(response => {
                    this.props.enqueueSnackbar('Education details uploaded!', { variant: 'success' });
                    this.togglePanel(2);
                })
                .catch(error => {
                    this.props.enqueueSnackbar('Error storing Education!', { variant: 'error' });
                });
        }
    }

    submitWorkExp = () => {
        if(this.validateWorkExp()){
            let temp = this.copy(this.state.WorkExp);
            console.log(temp)
            for (let idk in temp) {
                temp[idk]['StudentID'] = this.state.StudentID;
                temp[idk]['StartDate'] = this.adjustDate(temp[idk]['StartDate'], "dd/mm/yyyy");
                temp[idk]['EndDate'] = this.adjustDate(temp[idk]['EndDate'], "dd/mm/yyyy");
            }
            console.log(temp);
            Axios.put('https://pegasus-backend.herokuapp.com/student/putstudentworkexp', temp)
                .then(response => {
                    this.props.enqueueSnackbar('Work Exp. details uploaded!', { variant: 'success' });
                    this.togglePanel(3);
                })
                .catch(error => {
                    this.props.enqueueSnackbar('Error storing Work Exp.!', { variant: 'error' });
                });
        }
    }

    submitJobPreference = () => {
        if(this.validateJobPreference()){
            const temp = {...this.state.JobPreference};
            temp['StudentID'] = this.state.StudentID;
            console.log(temp);
            Axios.put('https://pegasus-backend.herokuapp.com/student/putstudentjobpref', temp)
            .then(response => {
                this.props.enqueueSnackbar('Job Preference uploaded!', { variant: 'success' });
                this.togglePanel(4);
            })
            .catch(error => {
                this.props.enqueueSnackbar('Error storing Job Preference!', { variant: 'error' });
            });
        }
    }

    submitAwards = () => {
        if(this.validateAwards()){
            let temp = this.copy(this.state.Awards);
            for (let idk in temp) {
                temp[idk]['StudentID'] = this.state.StudentID;
                temp[idk]['Date'] = this.adjustDate(temp[idk]['Date'], "dd/mm/yyyy");
            }
            console.log(temp);
            Axios.put('https://pegasus-backend.herokuapp.com/student/puttstudentawards', temp)
                .then(response => {
                    this.props.enqueueSnackbar('Award details uploaded!', { variant: 'success' });
                    this.togglePanel(5);
                })
                .catch(error => {
                    this.props.enqueueSnackbar('Error storing Award!', { variant: 'error' });
                });
        }
    }

    submitCertification = () => {
        if(this.validateCertification()){
            let temp = this.copy(this.state.Certification);
            for (let idk in temp) {
                temp[idk]['StudentID'] = this.state.StudentID;
                temp[idk]['IssueDate'] = this.adjustDate(temp[idk]['IssueDate'], "dd/mm/yyyy");
                temp[idk]['ValidDate'] = this.adjustDate(temp[idk]['ValidDate'], "dd/mm/yyyy");
            }
            console.log(temp);
            Axios.put('https://pegasus-backend.herokuapp.com/student/putstudentcertificate', temp)
                .then(response => {
                    this.props.enqueueSnackbar('Certificate details uploaded!', { variant: 'success' });
                    this.togglePanel(6);
                })
                .catch(error => {
                    this.props.enqueueSnackbar('Error storing Certificate!', { variant: 'error' });
                });
        }
    }

    submitProjects = () => {
        if(this.validateProjects()){
            let temp = this.copy(this.state.Projects);
            for (let idk in temp) {
                temp[idk]['StudentID'] = this.state.StudentID;
            }
            console.log(temp);
            Axios.put('https://pegasus-backend.herokuapp.com/student/putstudentproject', temp)
                .then(response => {
                    this.props.enqueueSnackbar('Project details uploaded!', { variant: 'success' });
                    this.togglePanel(7);
                })
                .catch(error => {
                    this.props.enqueueSnackbar('Error storing Project!', { variant: 'error' });
                });
        }
    }

    submitSkills = () => {
        let temp = this.copy(this.state.Skills);
        for (let idk in temp) {
            temp[idk]['StudentID'] = this.state.StudentID;
        }
        console.log(temp);
        Axios.put('https://pegasus-backend.herokuapp.com/student/putstudentskills', temp)
            .then(response => {
                this.props.enqueueSnackbar('Skills details uploaded!', { variant: 'success' });
                this.togglePanel(8);
            })
            .catch(error => {
                this.props.enqueueSnackbar('Error storing Skills!', { variant: 'error' });
            });
    }

    submitDocuments = () => {
        if(this.validateDocuments){
            let temp = this.copy(this.state.Document);
            for (let idk in temp) {
                temp[idk]['StudentID'] = this.state.StudentID;
            }
            console.log(temp);
            Axios.put('https://pegasus-backend.herokuapp.com/student/putstudentdocument', temp)
                .then(response => {
                    this.props.enqueueSnackbar('Documents uploaded!', { variant: 'success' });
                    this.togglePanel(9);
                })
                .catch(error => {
                    this.props.enqueueSnackbar('Error storing Documents!', { variant: 'error' });
                });
        }
    }
    // Submit elements to put in Backend ends here

    removeEdit = (elementID) => {
        let tempState = this.state.Skills;
        tempState.forEach(element => {
            if (element.SkillID === elementID) {
                element["Edit"] = false;
            }
        });
        this.setState(tempState);
    }

    

    componentDidMount() {
        this.setState({"StudentID": localStorage.getItem('id')});


        Axios.get(`${apiURL}student/studentinfo/${this.state.StudentID}`)
            .then(receivedData => {
                console.log(receivedData.data.PersonalParticulars);
                let tempPP = { ...PersonalParticularsShell }
                for (let key in tempPP) {
                    console.log(key, receivedData.data.PersonalParticulars[key]);
                    if(receivedData.data.PersonalParticulars[key] != null)
                        tempPP[key] = receivedData.data.PersonalParticulars[key];
                }
                this.setState({ PersonalParticulars: tempPP });
            })
            .catch(error => {
                console.log(error);
                this.props.enqueueSnackbar('Error getting Personal Particulars!', { variant: 'error' });
            });

        Axios.get(`${apiURL}student/studenteducation/${this.state.StudentID}`)
            .then(receivedData => {
                console.log(receivedData.data.Education);
                let tempEducation = [];
                for (let i in receivedData.data.Education) {
                    let tempE = { ...EducationShell }
                    for (let key in tempE) {
                        console.log(key, receivedData.data.Education[i][key]);
                        if(receivedData.data.Education[i][key] != null)
                            tempE[key] = receivedData.data.Education[i][key];
                    }
                    tempE.StartDate = this.adjustDate(tempE.StartDate, "yyyy-mm-dd");
                    tempE.EndDate = this.adjustDate(tempE.EndDate, "yyyy-mm-dd");
                    tempEducation.push(tempE);
                }
                this.setState({ Education: tempEducation });
            })
            .catch(error => {
                console.log(error);
                this.props.enqueueSnackbar('Error getting Education details!', { variant: 'error' });
            });

        Axios.get(`${apiURL}student/studentworkexp/${this.state.StudentID}`)
            .then(receivedData => {
                console.log(receivedData.data.WorkExp);
                let tempWorkExp = [];
                for (let i in receivedData.data.WorkExp) {
                    let tempW = { ...WorkExpShell }
                    for (let key in tempW) {
                        console.log(key, receivedData.data.WorkExp[i][key]);
                        if(receivedData.data.WorkExp[i][key] != null)
                            tempW[key] = receivedData.data.WorkExp[i][key];
                    }
                    tempW.StartDate = this.adjustDate(tempW.StartDate, "yyyy-mm-dd");
                    tempW.EndDate = this.adjustDate(tempW.EndDate, "yyyy-mm-dd");
                    tempWorkExp.push(tempW);
                }
                this.setState({ WorkExp: tempWorkExp });
            })
            .catch(error => {
                console.log(error);
                this.props.enqueueSnackbar('Error getting Work Experience details!', { variant: 'error' });
            });

        Axios.get(`${apiURL}student/studentjobpref/${this.state.StudentID}`)
            .then(receivedData => {
                console.log(receivedData.data.JobPreference);
                let tempJP = { ...JobPreferenceShell};
                for (let key in tempJP) {
                    console.log(key, receivedData.data.JobPreference[key]);
                    if(receivedData.data.JobPreference[key]!=null)
                        tempJP[key] = receivedData.data.JobPreference[key];
                }
                this.setState({ JobPreference: tempJP });
            })
            .catch(error => {
                console.log(error);
                this.props.enqueueSnackbar('Error getting Job Preference details!', { variant: 'error' });
            });

        Axios.get(`${apiURL}student/studentawards/${this.state.StudentID}`)
            .then(receivedData => {
                console.log(receivedData.data.Awards);
                let tempAwards = [];
                for (let i in receivedData.data.Awards) {
                    let tempA = { ...AwardsShell }
                    for (let key in tempA) {
                        console.log(key, receivedData.data.Awards[i][key]);
                        if(receivedData.data.Awards[i][key]!=null)
                            tempA[key] = receivedData.data.Awards[i][key];
                    }
                    tempA.Date = this.adjustDate(tempA.Date, "yyyy-mm-dd");
                    tempAwards.push(tempA);
                }
                this.setState({ Awards: tempAwards });
            })
            .catch(error => {
                console.log(error);
                this.props.enqueueSnackbar('Error getting Award details!', { variant: 'error' });
            });

        Axios.get(`${apiURL}student/studentcertificate/${this.state.StudentID}`)
            .then(receivedData => {
                console.log(receivedData.data.Certification);
                let tempCertification = [];
                for (let i in receivedData.data.Certification) {
                    let tempC = { ...CertificationShell }
                    for (let key in tempC) {
                        console.log(key, receivedData.data.Certification[i][key]);
                        if(receivedData.data.Certification[i][key]!=null)
                            tempC[key] = receivedData.data.Certification[i][key];
                    }
                    tempC.IssueDate = this.adjustDate(tempC.IssueDate, "yyyy-mm-dd");
                    tempC.ValidUntil = this.adjustDate(tempC.ValidUntil, "yyyy-mm-dd");
                    tempCertification.push(tempC);
                }
                this.setState({ Certification: tempCertification });
            })
            .catch(error => {
                console.log(error);
                this.props.enqueueSnackbar('Error getting Certification details!', { variant: 'error' });
            });

        Axios.get(`${apiURL}student/studentproject/${this.state.StudentID}`)
            .then(receivedData => {
                console.log(receivedData.data.Projects);
                let tempProjects = [];
                for (let i in receivedData.data.Projects) {
                    let tempP = { ...ProjectsShell }
                    for (let key in tempP) {
                        console.log(key, receivedData.data.Projects[i][key]);
                        if(receivedData.data.Projects[i][key]!=null)
                            tempP[key] = receivedData.data.Projects[i][key];
                    }
                    tempProjects.push(tempP);
                }
                this.setState({ Projects: tempProjects });
            })
            .catch(error => {
                console.log(error);
                this.props.enqueueSnackbar('Error getting Project details!', { variant: 'error' });
            });

        Axios.get(`${apiURL}student/studentskills/${this.state.StudentID}`)
            .then(receivedData => {
                console.log(receivedData.data.Skills);
                let tempSkills = [];
                for (let i in receivedData.data.Skills) {
                    let tempS = { ...SkillsShell }
                    for (let key in tempS) {
                        console.log(key, receivedData.data.Skills[i][key]);
                        if(receivedData.data.Skills[i][key]!=null)
                            tempS[key] = receivedData.data.Skills[i][key];
                    }
                    tempSkills.push(tempS);
                }
                this.setState({ Skills: tempSkills });
            })
            .catch(error => {
                console.log(error);
                this.props.enqueueSnackbar('Error getting Skills!', { variant: 'error' });
            });

        Axios.get(`${apiURL}student/studentdocument/${this.state.StudentID}`)
            .then(receivedData => {
                console.log(receivedData.data.Document);
                let tempDocument = [];
                for (let i in receivedData.data.Document) {
                    let tempD = { ...DocumentShell }
                    for (let key in tempD) {
                        console.log(key, receivedData.data.Document[i][key]);
                        if(receivedData.data.Document[i][key]!=null)
                            tempD[key] = receivedData.data.Document[i][key];
                    }
                    tempDocument.push(tempD);
                }
                this.setState({ Document: tempDocument });
            })
            .catch(error => {
                console.log(error);
                this.props.enqueueSnackbar('Error getting Document details!', { variant: 'error' });
            });

        this.togglePanel(0);
    }

    render() {
        return (
            <Container fluid>
                <br />
                <Row >
                    <Col md={{ span: 3 }} className={classes.LeftSide}>
                        <LeftSide imageLink={this.state.ProfileImage} changeFn={event => this.changeNewProfile(event)} />
                        {this.state.NewProfile.Modal?<Modal
                            show={this.state.NewProfile.Modal}
                            onHide={() => this.setState({NewProfile: {"Modal": false, "Location": ""}})}
                            NewProfile={this.state.NewProfile.Location} 
                            click={this.submitNewProfile}
                        />: null}
                    </Col>
                    <Col md={{ offset: 3, span: 9 }} >
                        <Accordion className={classes.Accordian} activeKey={this.state.activatedToggle}>
                            <Card className={classes.background}>
                                <Accordion.Toggle
                                    as={Card.Header} eventKey="0"
                                    className={this.state.isActive[0] ? classes.Active : classes.CardHeader}
                                    onClick={() => this.togglePanel(0)}>
                                    Personal Particulars
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0" className={classes.Cards}>
                                    <Card.Body>
                                        <Form className={ppClasses.Validate}>
                                            <PersonalParticulars
                                                details={this.state.PersonalParticulars}
                                                changeFn={event => this.changePersonalParticulars(event)} />
                                        </Form>
                                        <div className={classes.ButtonSection}>
                                            <Button1 click={this.submitPersonalParticulars}>
                                                Next >
                                        </Button1>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card className={classes.Card}>
                                <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="1"
                                    className={this.state.isActive[1] ? classes.Active : classes.CardHeader}
                                    onClick={() => this.togglePanel(1)}>
                                    Education
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1" className={classes.Cards}>
                                    <Card.Body>
                                        {this.state.Education.map(educationDetail => {
                                            return (
                                                <React.Fragment key={educationDetail.EducationID}>
                                                    <Form className={ppClasses.Validate}>
                                                        <Education
                                                            details={educationDetail}
                                                            changeFn={event => this.changeEducation(event, educationDetail.EducationID)}
                                                            remove={this.removeEducation.bind(this, educationDetail["EducationID"])}
                                                        />
                                                    </Form>
                                                </React.Fragment>
                                            );
                                        })}
                                        <div className={classes.ButtonSection}>
                                            <Button1 click={this.addNewEducation}>+ Add More</Button1>
                                            <Button1 click={this.submitEducation}>Next ></Button1>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card className={classes.Card}>
                                <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="2"
                                    className={this.state.isActive[2] ? classes.Active : classes.CardHeader}
                                    onClick={() => this.togglePanel(2)}>
                                    Work Experience
                    </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2" className={classes.Cards}>
                                    <Card.Body>
                                        {this.state.WorkExp.map(workExpDetail => {
                                            return (
                                                <React.Fragment key={workExpDetail.WorkExpID}>
                                                    <Form className={ppClasses.Validate}>
                                                        <WorkExperience
                                                            details={workExpDetail}
                                                            changeFn={event => this.changeWorkExp(event, workExpDetail.WorkExpID)}
                                                            remove={this.removeWorkExp.bind(this, workExpDetail["WorkExpID"])}
                                                        />
                                                    </Form>
                                                </React.Fragment>
                                            );
                                        })}
                                        <div className={classes.ButtonSection}>
                                            <Button1 click={this.addNewWorkExp} clicked>+ Add More</Button1>
                                            <Button1 click={this.submitWorkExp}>Next ></Button1>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card className={classes.Card}>
                                <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="3"
                                    className={this.state.isActive[3] ? classes.Active : classes.CardHeader}
                                    onClick={() => this.togglePanel(3)}>
                                    Job Preference
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3" className={classes.Cards}>
                                    <Card.Body>
                                        <Form className={ppClasses.Validate}>
                                            <JobPreference
                                                details={this.state.JobPreference}
                                                changeFn={event => this.changeJobPreference(event)} />
                                        </Form>
                                            
                                        <div className={classes.ButtonSection}>
                                            {/* <Button1 click={this.addNewJobPref}>+ Add More</Button1> */}
                                            <Button1 click={this.submitJobPreference}>Next ></Button1>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card className={classes.Card}>
                                <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="4"
                                    className={this.state.isActive[4] ? classes.Active : classes.CardHeader}
                                    onClick={() => this.togglePanel(4)}>
                                    Awards
                    </Accordion.Toggle>
                                <Accordion.Collapse eventKey="4" className={classes.Cards}>
                                    <Card.Body>
                                        {this.state.Awards.map(awardDetail => {
                                            return (
                                                <React.Fragment key={awardDetail.AwardID}>
                                                    <Form className={ppClasses.Validate}>
                                                        <Awards
                                                            details={awardDetail}
                                                            changeFn={event => this.changeAwards(event, awardDetail.AwardID)}
                                                            remove={this.removeAwards.bind(this, awardDetail["AwardID"])}
                                                        />
                                                    </Form>
                                                </React.Fragment>
                                            );
                                        })}
                                        <div className={classes.ButtonSection}>
                                            <Button1 click={this.addNewAwards}>+ Add More</Button1>
                                            <Button1 click={this.submitAwards}>Next ></Button1>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card className={classes.Card}>
                                <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="5"
                                    className={this.state.isActive[5] ? classes.Active : classes.CardHeader}
                                    onClick={() => this.togglePanel(5)}>
                                    Certification
                    </Accordion.Toggle>
                                <Accordion.Collapse eventKey="5" className={classes.Cards}>
                                    <Card.Body>
                                        {this.state.Certification.map(certificateDetail => {
                                            return (
                                                <React.Fragment key={certificateDetail.CertificateID}>
                                                    <Form className={ppClasses.Validate}>
                                                        <Certification
                                                            details={certificateDetail}
                                                            changeFn={event => this.changeCertification(event, certificateDetail.CertificateID)}
                                                            remove={this.removeCertification.bind(this, certificateDetail["CertificateID"])}
                                                        />
                                                    </Form>
                                                </React.Fragment>
                                            );
                                        })}
                                        <div className={classes.ButtonSection}>
                                            <Button1 click={this.addNewCertificate}>+ Add More</Button1>
                                            <Button1 click={this.submitCertification}>Next ></Button1>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card className={classes.Card}>
                                <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="6"
                                    className={this.state.isActive[6] ? classes.Active : classes.CardHeader}
                                    onClick={() => this.togglePanel(6)}>
                                    Projects
                    </Accordion.Toggle>
                                <Accordion.Collapse eventKey="6" className={classes.Cards}>
                                    <Card.Body>
                                        {this.state.Projects.map(projectDetail => {
                                            return (
                                                <React.Fragment key={projectDetail.ProjectID}>
                                                    <Form className={ppClasses.Validate}>
                                                        <Projects
                                                            details={projectDetail}
                                                            changeFn={event => this.changeProjects(event, projectDetail.ProjectID)}
                                                            remove={this.removeProjects.bind(this, projectDetail["ProjectID"])}
                                                        />
                                                    </Form>
                                                </React.Fragment>
                                            );
                                        })}
                                        <div className={classes.ButtonSection}>
                                            <Button1 click={this.addNewProjects}>+ Add More</Button1>
                                            <Button1 click={this.submitProjects}>Next ></Button1>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card className={classes.Card}>
                                <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="7"
                                    className={this.state.isActive[7] ? classes.Active : classes.CardHeader}
                                    onClick={() => this.togglePanel(7)}>
                                    Skills
                    </Accordion.Toggle>
                                <Accordion.Collapse eventKey="7" className={classes.Cards}>
                                    <Card.Body>
                                        {this.state.Skills.map(skillDetail => {
                                            return (
                                                <React.Fragment key={skillDetail.SkillID}>
                                                    <Form className={ppClasses.Validate} className={classes.SkillInline}>
                                                        <Skills
                                                            details={skillDetail}
                                                            changeFn={event => this.changeSkills(event, skillDetail.SkillID)}
                                                            remove={this.removeSkills.bind(this, skillDetail["SkillID"])}
                                                            removeEdit={this.removeEdit.bind(this, skillDetail.SkillID)}
                                                        />
                                                    </Form>
                                                </React.Fragment>
                                            );
                                        })}
                                        <div className={classes.ButtonSection}>
                                            <Button1 click={this.addNewSkill}>+ Add More</Button1>
                                            <Button1 click={this.submitSkills}>Next ></Button1>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card className={classes.Card}>
                                <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="8"
                                    className={this.state.isActive[8] ? classes.Active : classes.CardHeader}
                                    onClick={() => this.togglePanel(8)}>
                                    Upload Documents
                    </Accordion.Toggle>
                                <Accordion.Collapse eventKey="8" className={classes.Cards}>
                                    <Card.Body>
                                        {this.state.Document.map(documentDetail => {
                                            return (
                                                <React.Fragment key={documentDetail.DocumentID}>
                                                    <Form className={ppClasses.Validate}>
                                                        <Document
                                                            details={documentDetail}
                                                            changeFn={event => this.changeDocument(event, documentDetail.DocumentID)}
                                                            remove={this.removeDocument.bind(this, documentDetail["DocumentID"])} />
                                                    </Form>
                                                </React.Fragment>
                                            );
                                        })}
                                        <div className={classes.ButtonSection}>
                                            <Button1 click={this.addNewDocument}>+ Add More</Button1>
                                            <Button1 click={this.submitDocuments}>Next ></Button1>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default withSnackbar(EditProfile);