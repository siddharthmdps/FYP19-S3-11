import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
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

    handleJD(jd) {
        if (jd.length > 70)
            jd = jd.substr(0, 69) + "..."
        // console.log(jd)
        return jd
    }

    handleData(data) {
        //loop through job details array
        // format data
        // handleJD
        let jobsPosted = this.handleUndefined(data)

        for (let i = 0; i < jobsPosted.length; i++) {
            jobsPosted[i].description = this.handleJD(jobsPosted[i].description)
            jobsPosted[i].dateposted = this.adjustDate(jobsPosted[i].dateposted, "dd-mm-yyyy")
        }

        return jobsPosted
    }

    // jobsContent() {
    //     let jobsPosted = this.handleData(this.state.jobs)
    //     if (this.state.isLoading) {
    //         return (
    //             <div class="d-flex justify-content-center">
    //                 <div class="spinner-border" role="status">
    //                     <span class="sr-only">Loading...</span>
    //                 </div>
    //             </div>
    //         )
    //     }

    //     if (!jobsPosted.length) {
    //         return <div>No Records found</div>
    //     }

    //     return (
    //         jobsPosted.map(job => {
    //             job.dateposted = job.dateposted.substr(0, 10)
    //             console.log(job)
    //             return (
    //                 < tr >
    //                     <td>{job.title}</td>
    //                     <td>{job.industry}</td>
    //                     <td>{job.description}</td>
    //                     <td>{job.requiredskills}</td>
    //                     <td>{job.yearsofexperience}</td>
    //                     <td>{job.dateposted}</td>

    //                 </tr >
    //             )


    //         })
    //     )

    // }

    jobsTable2() {
        // let jobsPosted = this.handleUndefined(this.state.jobs)
        let jobsPosted = this.handleData(this.state.jobs)
        console.log(jobsPosted)

        return (
            <MaterialTable
                style={{
                    boxShadow: '0px 0px 17px 2px rgb(199, 194, 199)'
                }}
                title="Jobs Posted"
                columns={[
                    {
                        title: "#",
                        field: "id"
                    },
                    {
                        title: "Job Title",
                        field: "title"
                    },
                    {
                        title: "Industry",
                        field: "industry"
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
                    },
                    {
                        title: "Job Description",
                        field: "description"
                    }
                ]}
                data={jobsPosted}
                onRowClick={(event, rowData) => {
                    // console.log(rowData)
                    // console.log(rowData.id)
                    let target = `/employer/viewjob/${rowData.id}`
                    // console.log(target)
                    this.props.history.push(target)
                }}
            // this.handleRowClicked(rowData.jobId)
            />
        )
    }

    handleRowClicked(jobId) {
        // reroute to /employer/viewjob/{jobId}
    }

    render() {
        document.body.style =
            'background: linear-gradient(to right, #0f2027, #203a43, #2c5364);';
        return (
            <div>
                <Row>
                    <Col md={2} />
                    <Col style={{ marginTop: '15px' }} md={8}>
                        {this.jobsTable2()}
                    </Col>
                    <Col md={2} />
                </Row>
            </div >
        )
    }
}

export default JobsList;
