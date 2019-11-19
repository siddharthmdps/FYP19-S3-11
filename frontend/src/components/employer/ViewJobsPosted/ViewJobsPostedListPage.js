//These are 2 components used by EmpJobView.js -> EmpJobCard and EmpAppCard

// EmpJobCard is the card that displays details about the job posted.
// It accepts parameters in the form of props such as title, companyName, joblocation, jobindustry and reqSkills.
// Job description is to be passed in as children.

//installed @material-ui/core
// installed material-table
//installed @material-ui/icons -- to uninstall

//to uninstall react-table


import React, { Component } from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import '../ProfileView/Card.css';
import apiURL from '../../../config'

//import MaterialUITable
import MaterialTable from 'material-table'


class JobsList extends Component {
    constructor(props) {
        super()
        this.props = props;
        // console.log(props.appID)

        this.state = {
            jobs: [],
            showAlert: false,
            // error: false,
            isLoading: true
        }


    }

    getJobs() {
        const empID = localStorage.getItem('id')
        const url = apiURL + 'employer/joblist/' + empID
        const localhost = `http://localhost:3001/employer/joblist/${empID}`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    jobs: data,
                    isLoading: false
                })
                //console.log(this.state.jobList)
                // console.log(`total jobs : ${this.state.jobList.length}`)
                // this.props.updateNumOfJobs(this.state.jobList.length)
            })
            .catch(error => {
                console.log(`Error: ${error}`)
                this.setState({ error: true })
            })
    }

    componentDidMount() {
        this.getJobs()

    }
    //handles empty table returned.
    handleUndefined(item) {
        if (item === undefined)
            return []
        return item
    }

    adjustDate = (date, format) => {
        let temp = new Date(date);
        let tempDate = temp.getDate();
        let tempMonth = temp.getMonth() + 1;
        let tempYear = temp.getFullYear();
        if (tempMonth < 10)
            tempMonth = '0' + tempMonth;
        if (tempDate < 10)
            tempDate = '0' + tempDate;

        format = format.replace("dd", tempDate);
        format = format.replace("mm", tempMonth);
        format = format.replace("yyyy", tempYear);

        console.log("Formatted date: " + format);
        return format;
    }

    jobsContent() {
        // appsReceived = handleUndefined(this.state.applications)
        // console.log(this.state.applications)
        let jobsPosted = this.handleUndefined(this.state.jobs)
        if (this.state.isLoading) {
            return (
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }

        if (!jobsPosted.length) {
            return <div>No Records found</div>
        }

        return (
            jobsPosted.map(job => {
                job.dateposted = job.dateposted.substr(0, 10)
                console.log(job)
                return (
                    < tr >
                        <td>{job.title}</td>
                        <td>{job.industry}</td>
                        <td>{job.description}</td>
                        <td>{job.requiredskills}</td>
                        <td>{job.yearsofexperience}</td>
                        <td>{job.dateposted}</td>

                    </tr >
                )


            })
        )

    }

    // jobsTable() {
    //     let jobsPosted = this.handleUndefined(this.state.jobs)

    //     return (
    //         <ReactTable
    //             data={jobsPosted}
    //             columns={[
    //                 // {
    //                 //     Header: "#",
    //                 //     accessor: "{index+1}
    //                 // },
    //                 {
    //                     Header: "Job Title",
    //                     accessor: "title"
    //                 },
    //                 {
    //                     Header: "Industry",
    //                     accessor: "industry"
    //                 }
    //             ]}
    //             defaultSorted={[
    //                 {
    //                     id: "title",
    //                     desc: true
    //                 }
    //             ]}
    //             defaultPageSize={10}
    //             className="-striped -highlight"
    //         />


    //     )
    // }

    jobsTable2() {
        let jobsPosted = this.handleUndefined(this.state.jobs)

        // < td > { job.description }</td>
        //     <td>{job.requiredskills}</td>
        //     <td>{job.yearsofexperience}</td>
        //     <td>{job.dateposted}</td>

        return (
            <MaterialTable
                title="Jobs Posted"
                columns={[
                    {
                        title: "Job Title",
                        field: "title"
                    },
                    {
                        title: "Industry",
                        field: "industry"
                    },
                    {
                        title: "Job Description",
                        field: "description"
                    },
                    {
                        title: "Work Experience",
                        field: "yearsofexperience"
                    },
                    {
                        title: "Date Posted",
                        field: "dateposted"
                    }
                    ,
                    {
                        title: "Location",
                        field: "location"
                    }
                ]}
                data={jobsPosted}
            />
        )
    }

    render() {
        return (
            <div>
                {/* <Row>
                    <Col md={2} />
                    <Col md={8}>
                        <Table striped bordered hover variant="light">
                            <thead>
                                <tr>
                                    <th>Job Title</th>
                                    <th>Industry</th>
                                    <th>Job Description</th>
                                    <th>Skills Required</th>
                                    <th>Experience Required (Years)</th>
                                    <th>Date Posted</th>
                                </tr>
                            </thead>

                            <tbody>
                                {this.jobsContent()}

                            </tbody>
                        </Table>
                    </Col>
                    <Col md={2} /> 
                </Row> */}
                <Row>
                    <Col md={2} />
                    <Col md={8}>
                        {this.jobsTable2()}
                    </Col>
                    <Col md={2} />
                </Row>
            </div >
        )
    }
}

export default JobsList;
