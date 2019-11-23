import React, {Component} from 'react';
import classes from './Job.module.css';


import { Container, Row, Col, Card, Button, Alert, Spinner } from 'react-bootstrap';

<<<<<<< HEAD
import { withSnackbar } from 'notistack';

=======
>>>>>>> parent of 547dde06... Merge branch 'master' into soonkeong
import Axios from 'axios';

class JobCard extends Component {

    state={
        ID: "", 
        JobTitle: "", 
        Company: "", 
        Industry: "",  
        Location: "", 
        WorkExpReq: "", 
        Status: 'none', 
        Description: ""
    }

    changeStatus = (status) => {

        if(status==="pending"){
            Axios.post("https://pegasus-backend.herokuapp.com/student/applysavejob", {
                "StudentID":localStorage.getItem('id'),
                "JobID": `${this.props.match.params.JID}`,
                "Status":"pending"})
                .then(res => {
                    this.setState({Status: 'pending'});
                    this.props.enqueueSnackbar(`Applied!`, { variant: 'success' });
                    console.log(res);
                })
                .catch(err =>{
                    console.log(err);
                })
        }
        else if(status==="save"){
            if(this.state.Status==="none"){
                Axios.post("https://pegasus-backend.herokuapp.com/student/applysavejob", {
                "StudentID": localStorage.getItem('id'),
                "JobID": `${this.props.match.params.JID}`,
                "Status":"saved"})
                .then(res => {
                    this.setState({Status: 'saved'});
                    this.props.enqueueSnackbar(`Saved!`, { variant: 'success' });
                    console.log(res);
                })
                .catch(err =>{
                    console.log(err);
                })
            }
            else if(this.state.Status==="saved"){
                Axios.post(`https://pegasus-backend.herokuapp.com/student/unsavejob/${localStorage.getItem('id')}/${this.props.match.params.JID}`)
                .then(res => {
                    this.setState({Status: 'none'});
                    this.props.enqueueSnackbar(`Unsaved!`, { variant: 'success' });
                    console.log(res);
                })
                .catch(err =>{
                    console.log(err);
                })
            }
        }

        // {
        //     if(element.JobID === id){
        //         if(status==="Applied")
        //             element.Status = status;
        //         else{
        //             if(element.Status === "Saved"){
        //                 element.Status = "None"
        //             }
        //             else if(element.Status === "None"){
        //                 element.Status = "Saved"
        //             }
        //         }
        //     }
        // });
        console.log(status);
    };

    AppliedFooter = () => (
        <Alert variant="success">
            <i className="fas fa-check-circle"></i> You have applied for this job
        </Alert>
    );
    
    OtherFooter = () => {
    
        const unfav = <i className="far fa-star" />
        const fav = <i className="fas fa-star" style={{ color: "#FFCA28" }} />
        const waiting = <Spinner animation="border" variant="warning" />
        return (
            <React.Fragment>
                <div className={classes.ButtonDiv}>
                    <Button className={classes.Apply} onClick={() => this.changeStatus("pending")}>Apply</Button>
                </div>
                <div className={classes.StarDiv}>
                    <span className={classes.Star} onClick={() => this.changeStatus("save")}>
                        {this.state.Status === "saved" ? fav : unfav}
                    </span>
                </div>
            </React.Fragment>
        )
    };
    
    componentDidMount(){
        Axios.get(`https://pegasus-backend.herokuapp.com/employer/getjobinfo/${this.props.match.params.JID}`)
            .then(res => {
                let temp = res.data[0];
<<<<<<< HEAD
                this.setState({ID: temp.id, JobTitle: temp.title, Company: temp.companyname, Industry: temp.industry,  Location: temp.location, WorkExpReq: `${temp.yearsofexperience} years`, Description: temp.description})
=======
                this.setState({ID: temp.id, JobTitle: temp.title, Company: temp.empid, Industry: temp.industry,  Location: temp.location, WorkExpReq: `${temp.yearsofexperience} years`, Status: 'None', Description: temp.description})
>>>>>>> parent of 547dde06... Merge branch 'master' into soonkeong
                console.log(temp);
            })
            .catch(err => {
                console.log(err);
            })
<<<<<<< HEAD
        Axios.get(`https://pegasus-backend.herokuapp.com/student/getjobapplicationstatus/${localStorage.getItem('id')}/${this.props.match.params.JID}`)
        .then(res => {
            if(res.data.Status===null){
                this.setState({Status: "none"});    
            }
            else{
                this.setState({Status: res.data.Status});
            }
=======
        Axios.get(`http://192.168.43.251:3001/student/getjobapplicationstatus/${localStorage.getItem('id')}/${this.props.match.params.JID}`)
        .then(res => {
            this.setState({Status: res.data.Status});
>>>>>>> parent of 547dde06... Merge branch 'master' into soonkeong
            console.log(res.data.Status);
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    render(){
        return(
            <Container fluid>
                <br />
                <Row className={classes.Title}>
                    <Col md={{ offset: 1, span: 10 }}>
                    Job
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md={{ offset: 1, span: 10 }}>
                        <Card md={{ span: 12 }} className={classes.Card}>
                            <Card.Body className={classes.CardBody}>
                                <Card.Title>
                                    <Row className={classes.Row} style={{ fontWeight: '600' }}>{this.state.JobTitle}</Row>
                                    <Row className={classes.Row}>{this.state.Company}</Row>
                                    <Row>
                                        <Col md={{ span: 3 }} sm={{ span: 12 }} className={classes.CardCol}> <i className="fas fa-map-marker-alt"></i> {this.state.Location}</Col>
                                        <Col md={{ span: 6 }} sm={{ span: 12 }} className={classes.CardCol}> <i className="fas fa-building"></i> {this.state.Industry}</Col>
                                        <Col md={{ span: 3 }} sm={{ span: 12 }} className={classes.CardCol}> <i className="fas fa-briefcase"></i> {this.state.WorkExpReq}</Col>
                                    </Row>
                                </Card.Title>
                                <Card.Text className={classes.Description}>
                                    <div className={classes.Desc}>
                                        {this.state.Description}
                                    </div>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className={classes.Footer}>
<<<<<<< HEAD
                                {(this.state.Status==="none" || this.state.Status==="saved") ? this.OtherFooter() : this.AppliedFooter()}
=======
                                {this.state.Status==="applied" ? this.AppliedFooter() : this.OtherFooter()}
>>>>>>> parent of 547dde06... Merge branch 'master' into soonkeong
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
};

<<<<<<< HEAD
export default withSnackbar(JobCard);
=======
export default JobCard;
>>>>>>> parent of 547dde06... Merge branch 'master' into soonkeong
