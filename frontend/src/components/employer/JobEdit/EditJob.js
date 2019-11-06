
import React,{Component} from 'react';
import {Card,Form,Button,Col,Row} from'react-bootstrap';
import '../ProfileView/Card.css';
import apiURL from '../../../config';

class EditJob extends Component {
    constructor (props) {
        super()
        this.props = props
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            jobtitle: props.jobtitle,
            jobdescription: props.jobdescrition,
            joblocation:props.joblocation,
            jobindustry: props.jobindutry,
            jobskills: props.jobskills
        }
        this.employername = localStorage.getItem('username')
    }

    MyForm =()=>{
        return(
        <Card>
            <Card.Header>
                <Card.Title>
                    <Form.Group controlId="jobtitle">
                        <Form.Label>Job Title</Form.Label>
                        <Form.Control type='text'  placeholder ={this.state.jobtitle} onChange={this.handleChange} />
                    </Form.Group> 
                    
                </Card.Title>
            </Card.Header>
            
            <Card.Body>
                <Card.Text>
                <Form>
                <Form.Group as={Row} controlId="formPlaintextCompanyName">
                    <Form.Label column sm="2">
                    Company Name
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control plaintext readOnly defaultValue= {this.employername} />
                    </Col>
                </Form.Group>
                    <Form.Group controlId="formJobLocation">
                        <Form.Label>Job Location</Form.Label>
                        <Form.Control type="text" placeholder={this.props.joblocation} onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group controlId="formJobIndustry">
                        <Form.Label>Industry</Form.Label>
                        <Form.Control type="text" placeholder={this.props.jobindustry} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formJobDescription">
                        <Form.Label>Job Description</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder={this.props.jobdescription} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formSkillsRequired">
                        <Form.Label>Skills Required</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder={this.props.jobskills} onChange={this.handleChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Save
                    </Button>
                    </Form>
                </Card.Text>

            {/* update props.dateposted */}                
            </Card.Body>

        </Card>
        )
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    handleSave(event){
        const job={
            empid: localStorage.getItem('id'),
            title: this.state.jobtitle,
            description: this.state.jobdescription,
            industry: this.state.jobindustry,
            requiredskills: this.state.jobskills
        }

        const url = apiURL + "employer/postjob"
        const localhost = 'http://localhost:3001/employer/savejob/'

        fetch (localhost , {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(job)
        })
        .then(res => res.json())
        .then(data => {
            if(data.message === 'success') {
                alert('Job updated!')
                document.location.reload(true)
            }
        })
        .catch(error => console.log(error))

    }

    render() {
        return (
            <Col sm={8} className= "mx-auto">
                {this.MyForm()}
            </Col>
        )}
    };


export default EditJob;
