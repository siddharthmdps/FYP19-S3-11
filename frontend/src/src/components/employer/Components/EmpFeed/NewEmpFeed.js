import React, { Component } from 'react'
import apiURL from '../../../../config'
import classes from './NewEmpFeed.module.css'
import { Container, Card, Form, Col, Row } from 'react-bootstrap';

import EmpJobView from '../../JobView/EmpJobView';

class EmpFeed extends Component {
    constructor(props) {
        super()
        this.props = props

        this.state = {
            jobList: [],
            error: false
        }
        this.employername = localStorage.getItem('username')
    }

    // to fetch the job list from the given url
    updateJobList = () => {
        const empID = localStorage.getItem('id')
        const url = apiURL + 'employer/joblist/' + empID
        const localhost = `http://192.168.43.1:3001/employer/joblist/${empID}`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({ jobList: data })
                //console.log(this.state.jobList)
                console.log(`total jobs : ${this.state.jobList.length}`)
                this.props.updateNumOfJobs(this.state.jobList.length)
            })
            .catch(error => {
                console.log(`Error: ${error}`)
                this.setState({ error: true })
            })
    }

    // once the component is rendered, fetch the job list from given url
    componentDidMount() {
        this.updateJobList()

    }


    feedContent = () => {
        // Loading
        if (this.state.jobList.length === 0 && !this.state.error) {
            return (
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }
        else if (this.state.jobList.length > 0 && !this.state.error) {
            return (
                this.state.jobList.map((job) => {
                    console.log(job);
                    job.dateposted = job.dateposted.substr(0, 10)
                    return (
                        <React.Fragment>
                            <Container >
                                <Row >
                                    <div className={classes.JobContainer} onClick={()=> {window.open(`/employer/viewjob/${job.id}`, "_blank");}}>
                                        <div className={classes.JobTitleBox}>
                                            <div className={classes.JobTitle}>{job.title}</div>
                                            {/* <a onClick={() => {
                                            this.props.viewJobHandler(job)
                                        }} className={classes.ViewJobTag}><i class="fas fa-plus"></i></a> */}
                                        </div>
                                        <div className={classes.JobDesc}>{job.description}</div>
                                        <div className={classes.Date}>{job.dateposted}</div>
                                    </div>
                                </Row>
                            </Container>
                        </React.Fragment>
                    )
                })
            )
        }
        else return <div>Error</div>
    }

    render() {
        document.body.style = 
        'background: linear-gradient(to right, #0f2027, #203a43, #2c5364);';
        return (
            <React.Fragment >
                <Card >
                    <Card.Body>
                        <div className={classes.Advert}>Advertised Jobs</div>
                        <this.feedContent />
                    </Card.Body>
                </Card>
            </React.Fragment>
        )
    }
}


export default EmpFeed