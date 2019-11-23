import React, { Component } from 'react';
import classes from './ViewProfile.module.css';
import LeftSide from '../../Components/ViewProfile/LeftSide/LeftSide';
import { Card, Container, Col, Row, CardColumns } from 'react-bootstrap';
// import { Timeline, Event } from '../../../common_assets/Timeline/Timeline';
import { ViewCard, Element } from '../../Components/ViewProfile/ViewCard/ViewCard';
import Axios from 'axios';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import StarIcon from '@material-ui/icons/Star';

import Tabs from './IconLabelTabs';
import apiURL from '../../../../config';

// const PersonalParticularsShell = {
//     "StudentID": 0,
//     "FirstName": "",
//     "MiddleName": "",
//     "LastName": "",
//     "Email": "",
//     "Phone": "",
//     "Country": "",
//     "City": "",
//     "CurrentAddress": "",
//     "PostalCode": "",
//     "Nationality": ""
// }

// const EducationShell = {
//     "EducationID": 0,
//     "University": "",
//     "Degree": "",
//     "FieldOfStudy": "",
//     "Major": "",
//     "StartDate": "",
//     "EndDate": "",
//     "Mode": "",
//     "GPA": ""
// }

// const WorkExpShell = {
//     "WorkExpID": 0,
//     "Position": "",
//     "Company": "",
//     "StartDate": "",
//     "EndDate": "",
//     "Mode": "",
//     "Industry": "",
//     "AnnualSalary": 0,
//     "Description": ""
// }

// // const JobPreferenceShell = {
// //     "JobPreferenceID": 0,
// //     "Industry": "",
// //     "Position": "",
// //     "JobType": "",
// //     "ExpectedSalary": 0,
// //     "Location": "",
// //     "Availability": ""
// // }

// const AwardsShell = {
//     "AwardID": 0,
//     "Award": "",
//     "Date": "",
//     "Description": ""
// }

// const CertificationShell = {
//     "CertificateID": 0,
//     "Name": "",
//     "IssuedBy": "",
//     "IssueDate": "",
//     "ValidUntil": ""
// }

// const SkillsShell = {
//     "SkillID": 0,
//     "SkillName": "",
//     "Edit": false
// }

// const ProjectsShell = {
//     "ProjectID": 0,
//     "Title": "",
//     "Status": "",
//     "Description": "",
//     "Link": ""
// }

// const DocumentShell = {
//     "DocumentID": 0,
//     "Title": "",
//     "Link": ""
// }

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

class Profile extends Component {
    state = {
        "StudentID": this.props.match.params.SID,
        "ProfileImage": "default.png",
        "PersonalParticulars": {},
        "Education": [],
        "WorkExp": [],
        // "JobPreference": [],
        "Awards": [],
        "Certification": [],
        "Skills": [],
        "Projects": [],
        "Document": [],
        "isActive": [],
        "activatedToggle": "-1",
        'ActiveTab': 'Education'
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

    // Handling Form Inputs starts here

    componentDidMount() {
        // Axios.get('http://localhost:3000/studentProfile')
        //     .then(receivedData => {
        //         console.log(receivedData.data);
        //         let tempPP = { ...PersonalParticularsShell }
        //         for (let key in tempPP) {
        //             console.log(key, receivedData.data.PersonalParticulars[key]);
        //             tempPP[key] = receivedData.data.PersonalParticulars[key];
        //         }
        //         this.setState({ PersonalParticulars: tempPP });

        //         let tempEducation = [];
        //         for (let i in receivedData.data.Education) {
        //             let tempE = { ...EducationShell }
        //             for (let key in tempE) {
        //                 console.log(key, receivedData.data.Education[i][key]);
        //                 tempE[key] = receivedData.data.Education[i][key];
        //             }
        //             tempEducation.push(tempE);
        //         }
        //         this.setState({ Education: tempEducation });


        //         this.setState({ WorkExp: receivedData.data.WorkExp });
        //         this.setState({ JobPreference: receivedData.data.JobPreference });
        //         this.setState({ Awards: receivedData.data.Awards });
        //         this.setState({ Certification: receivedData.data.Certification });
        //         this.setState({ Skills: receivedData.data.Skills });
        //         this.setState({ Projects: receivedData.data.Projects });
        //         this.setState({ Document: receivedData.data.Document });
        //     });
            
        // Axios.get(`${apiURL}student/studentinfo/1`)
        //     .then(receivedData => {
        //         console.log(receivedData.data.PersonalParticulars);
        //         let tempPP = { ...PersonalParticularsShell }
        //         for (let key in tempPP) {
        //             console.log(key, receivedData.data.PersonalParticulars[key]);
        //             tempPP[key] = receivedData.data.PersonalParticulars[key];
        //         }
        //         this.setState({ PersonalParticulars: tempPP });
        //     });

        // Axios.get(`${apiURL}student/studenteducation/1`)
        //     .then(receivedData => {
        //         console.log(receivedData.data.Education);
        //         let tempEducation = [];
        //         for (let i in receivedData.data.Education) {
        //             let tempE = { ...EducationShell }
        //             for (let key in tempE) {
        //                 console.log(key, receivedData.data.Education[i][key]);
        //                 tempE[key] = receivedData.data.Education[i][key];
        //             }
        //             let tempDate = new Date(tempE["StartDate"]);
        //             tempE.StartDate = `${tempDate.getFullYear()}-${tempDate.getMonth()+1}-${tempDate.getDate()}`;
        //             tempDate = new Date(tempE["EndDate"]);
        //             tempE.EndDate = `${tempDate.getFullYear()}-${tempDate.getMonth()+1}-${tempDate.getDate()}`;
        //             tempEducation.push(tempE);
        //         }
        //         this.setState({ Education: tempEducation });
        //     });

        // Axios.get(`${apiURL}student/studentworkexp/1`)
        //     .then(receivedData => {
        //         console.log(receivedData.data.WorkExp);
        //         let tempWorkExp = [];
        //         for (let i in receivedData.data.WorkExp) {
        //             let tempW = { ...WorkExpShell }
        //             for (let key in tempW) {
        //                 console.log(key, receivedData.data.WorkExp[i][key]);
        //                 tempW[key] = receivedData.data.WorkExp[i][key];
        //             }
        //             let tempDate = new Date(tempW["StartDate"]);
        //             tempW.StartDate = `${tempDate.getFullYear()}-${tempDate.getMonth()+1}-${tempDate.getDate()}`;
        //             tempDate = new Date(tempW["EndDate"]);
        //             tempW.EndDate = `${tempDate.getFullYear()}-${tempDate.getMonth()+1}-${tempDate.getDate()}`;
        //             tempWorkExp.push(tempW);
        //         }
        //         this.setState({ WorkExp: tempWorkExp });
        //     });

        //     // Axios.get(`${apiURL}student/studentjobpref/1`)
        //     // .then(receivedData => {
        //     //     console.log(receivedData.data.JobPreference);
        //     //     let tempJobPreference = [];
        //     //     for (let i in receivedData.data.JobPreference) {
        //     //         let tempJP = { ...JobPreferenceShell }
        //     //         for (let key in tempJP) {
        //     //             console.log(key, receivedData.data.JobPreference[i][key]);
        //     //             tempJP[key] = receivedData.data.JobPreference[i][key];
        //     //         }
        //     //         tempJobPreference.push(tempJP);
        //     //     }
        //     //     this.setState({ JobPreference: tempJobPreference });
        //     // });

        //     Axios.get(`${apiURL}student/studentawards/1`)
        //     .then(receivedData => {
        //         console.log(receivedData.data.Awards);
        //         let tempAwards = [];
        //         for (let i in receivedData.data.Awards) {
        //             let tempA = { ...AwardsShell }
        //             for (let key in tempA) {
        //                 console.log(key, receivedData.data.Awards[i][key]);
        //                 tempA[key] = receivedData.data.Awards[i][key];
        //             }
        //             tempAwards.push(tempA);
        //         }
        //         this.setState({ Awards: tempAwards });
        //     });

        //     Axios.get(`${apiURL}student/studentcertificate/1`)
        //     .then(receivedData => {
        //         console.log(receivedData.data.Certification);
        //         let tempCertification = [];
        //         for (let i in receivedData.data.Certification) {
        //             let tempC = { ...CertificationShell }
        //             for (let key in tempC) {
        //                 console.log(key, receivedData.data.Certification[i][key]);
        //                 tempC[key] = receivedData.data.Certification[i][key];
        //             }
        //             tempCertification.push(tempC);
        //         }
        //         this.setState({ Certification: tempCertification });
        //     });

        //     Axios.get(`${apiURL}student/studentproject/1`)
        //     .then(receivedData => {
        //         console.log(receivedData.data.Projects);
        //         let tempProjects = [];
        //         for (let i in receivedData.data.Projects) {
        //             let tempP = { ...ProjectsShell }
        //             for (let key in tempP) {
        //                 console.log(key, receivedData.data.Projects[i][key]);
        //                 tempP[key] = receivedData.data.Projects[i][key];
        //             }
        //             tempProjects.push(tempP);
        //         }
        //         this.setState({ Projects: tempProjects });
        //     });            

        console.log(this.props.match.params.SID);

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
                // this.props.enqueueSnackbar('Error getting Personal Particulars!', { variant: 'error' });
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
                // this.props.enqueueSnackbar('Error getting Education details!', { variant: 'error' });
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
                // this.props.enqueueSnackbar('Error getting Work Experience details!', { variant: 'error' });
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
                // this.props.enqueueSnackbar('Error getting Job Preference details!', { variant: 'error' });
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
                // this.props.enqueueSnackbar('Error getting Award details!', { variant: 'error' });
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
                // this.props.enqueueSnackbar('Error getting Certification details!', { variant: 'error' });
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
                // this.props.enqueueSnackbar('Error getting Project details!', { variant: 'error' });
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
                // this.props.enqueueSnackbar('Error getting Skills!', { variant: 'error' });
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
                // this.props.enqueueSnackbar('Error getting Document details!', { variant: 'error' });
            });
    }

    updateActiveTab() {
        
    }

    render() {
        return (
            <Container fluid>
                <br />
                <Row >
                    <Col md={{ span: 3 }} className={classes.LeftSide}>
                        <LeftSide imageLink={this.state.ProfileImage} details={this.state.PersonalParticulars} documents={this.state.Document}/>

                    </Col>
                    <Col md={{ span: 9 }} >
                        {/* <CardColumns className={classes.CardColumn}>
                            <Timeline title={"Education"}>
                                {this.state.Education.map(educationDetail => {
                                    return (
                                        <React.Fragment key={educationDetail.EducationID}>
                                            <Event 
                                            interval={educationDetail.StartDate + " - " + educationDetail.EndDate}
                                            title={educationDetail.Degree + " in " +
                                            educationDetail.FieldOfStudy + " (" +
                                            educationDetail.Major + ")"}
                                            subtitle={educationDetail.University}
                                            >
                                                {educationDetail.GPA}
                                            </Event>
                                        </React.Fragment>
                                    );
                                })}
                            </Timeline>
                            <Timeline title={"Work Experience"}>
                                {this.state.WorkExp.map(workDetail => {
                                    return (
                                        <React.Fragment key={workDetail.WorkExpID}>
                                            <Event interval={workDetail.StartDate + " - " + workDetail.EndDate} title={workDetail.Position + " at " + workDetail.Company + " (" + workDetail.Mode + ")"} subtitle={workDetail.Industry + ", " + workDetail.AnnualSalary}>
                                                {workDetail.Description}
                                            </Event>
                                        </React.Fragment>
                                    );
                                })}
                            </Timeline>

                            <ViewCard title={"Awards"}>
                                {this.state.Awards.map(awardDetail => {
                                    return (
                                        <React.Fragment key={awardDetail.AwardID}>
                                            <Element interval={awardDetail.Date} title={awardDetail.Award}>
                                                {awardDetail.Des}
                                            </Element>
                                        </React.Fragment>
                                    );
                                })}
                            </ViewCard>

                            <ViewCard title={"Awards"}>
                                {this.state.Awards.map(awardDetail => {
                                    return (
                                        <React.Fragment key={awardDetail.AwardID}>
                                            <Element interval={awardDetail.Date} title={awardDetail.Award}>
                                                {awardDetail.Des}
                                            </Element>
                                        </React.Fragment>
                                    );
                                })}
                            </ViewCard>
                            <Timeline title={"Work Experience"}>
                                {this.state.Education.map(educationDetail => {
                                    return (
                                        <React.Fragment key={educationDetail.EducationID}>
                                            <Event interval={educationDetail.StartDate + " - " + educationDetail.EndDate} title={educationDetail.Degree + " in " + educationDetail.FieldOfStudy + " (" + educationDetail.Major + ")"} subtitle={educationDetail.University}>
                                                {educationDetail.GPA}
                                            </Event>
                                        </React.Fragment>
                                    );
                                })}
                            </Timeline>
                        </CardColumns> */}

                        {/* <body > */}
                        {/* <Tabs variant="scrollable"> */}
                        <Tabs activeTab={this.state.ActiveTab} 
                        click={this.updateActiveTab} 
                        Education={this.state.Education} 
                        WorkExp = {this.state.WorkExp} 
                        Certification={this.state.Certification} 
                        Awards = {this.state.Awards} 
                        Projects={this.state.Projects} Skills={this.state.Skills}>
                            
                            {/* <VerticalTimeline education>
                                {this.state.Education.map(educationDetail => {
                                    return (
                                        <VerticalTimelineElement
                                            className="vertical-timeline-element--work"
                                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                            date={educationDetail.StartDate + " - " + educationDetail.EndDate}
                                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                            icon={<WorkIcon />}
                                        >
                                            <h3 className="vertical-timeline-element-title">{educationDetail.Degree + " in " +
                                                educationDetail.FieldOfStudy + " (" +
                                                educationDetail.Major + ")"}</h3>
                                            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                                            <p>
                                                {educationDetail.University}
                                                <br />
                                                {educationDetail.GPA}
                                            </p>
                                        </VerticalTimelineElement>
                                    );
                                })}
                            </VerticalTimeline> */}
                            {/* </Tab> */}
                        </Tabs>

                        {/* <VerticalTimeline> */}
                            {/* {this.state.Education.map(educationDetail => {
                                return (
                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                        date={educationDetail.StartDate + " - " + educationDetail.EndDate}
                                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                        icon={<WorkIcon />}
                                    >
                                        <h3 className="vertical-timeline-element-title">{educationDetail.Degree + " in " +
                                            educationDetail.FieldOfStudy + " (" +
                                            educationDetail.Major + ")"}</h3>
                                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                                        <p>
                                            {educationDetail.University}
                                            <br />
                                            {educationDetail.GPA}
                                        </p>
                                    </VerticalTimelineElement>
                                );
                            })} */}

                            {/* {this.state.WorkExp.map(workDetail => {
                                return (
                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                        date={workDetail.StartDate + " - " + workDetail.EndDate}
                                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                        icon={<WorkIcon />}
                                    >
                                        <h3 className="vertical-timeline-element-title">{workDetail.Position + " at " +
                                            workDetail.Company + " (" + workDetail.Mode + ")"} </h3>
                                        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                                        <p>
                                            {workDetail.Industry + ", " + workDetail.AnnualSalary}
                                            <br />
                                            {workDetail.Description}
                                        </p>
                                    </VerticalTimelineElement>
                                );
                            })} */}

                            {/* <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2008 - 2010"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">Web Designer</h3>
                                <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                                <p>
                                    User Experience, Visual Design
                                    </p>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2006 - 2008"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">Web Designer</h3>
                                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                                <p>
                                    User Experience, Visual Design
                                    </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                date="April 2013"
                                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                                icon={<SchoolIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                                <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                                <p>
                                    Strategy, Social Media
                                    </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                date="November 2012"
                                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                                icon={<SchoolIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                                <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                                <p>
                                    Creative Direction, User Experience, Visual Design
                                    </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                date="2002 - 2006"
                                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                                icon={<SchoolIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                                <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                                <p>
                                    Creative Direction, Visual Design
                                    </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                                icon={<StarIcon />}
                            />
                        </VerticalTimeline> */}
                        {/* </body> */}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Profile;