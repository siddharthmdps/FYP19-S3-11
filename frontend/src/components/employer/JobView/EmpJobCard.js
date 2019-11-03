//These are 2 components used by EmpJobView.js -> EmpJobCard and EmpAppCard

// EmpJobCard is the card that displays details about the job posted.
// It accepts parameters in the form of props such as title, companyName, joblocation, jobindustry and reqSkills.
// Job description is to be passed in as children.

//EmpAppCard is card that briefly summarises details about each applicant.
//It accepts parameters in the form of props such as 
/*appName,appSkills,appContact,degree,university, gpa, position,company,
awardname, awarddate, certname, certbody, projecttitle and dateapplied
*/

import React from 'react';
import {Card,Header,Button,Col,Row} from'react-bootstrap';
import '../ProfileView/Card.css';
import './EmpCard.css'

//Future Enhancement: Adding nav for students
//<div className = "col-sm-8 mx-auto">
const EmpJobCard =(props)=> {
    return (
        <Card>
            <Card.Header>
                <Card.Title>
                    <Row>
                        <Col sm={9}>{props.title}</Col>
                        <Col sm={3}>
                            <Button variant="primary"> 
                                Edit&nbsp;
                                <i class="fas fa-edit"></i>
                            </Button>
                        </Col>
                    </Row>
                    
                </Card.Title>
            </Card.Header>
            
            <Card.Body>

                <Card.Subtitle>{props.companyName}</Card.Subtitle>
                <br/>
                <Card.Text>
                    <Row>
                        <Col sm={6}>
                            <i class="fas fa-globe-asia"> </i>
                            &nbsp;
                            {props.joblocation}
                        </Col>
                        <Col sm={6}>
                        <i class="fas fa-industry"></i>
                        &nbsp;
                        {props.jobindustry}
                        </Col>
                    </Row>
                </Card.Text>

                <Card.Text> {props.children}</Card.Text>
                <Card.Text>
                    <i class="fas fa-tasks"></i> 
                    <em>&nbsp; Skills Required <br/></em> 
                    {props.reqSkills}
                </Card.Text>

                <Card.Text>
                    <small className="text-muted">
                        Last updated  {props.dateposted} 
                    </small>
                
                </Card.Text>
                
            </Card.Body>

        </Card>
    )
};

const EmpAppCard = (props) =>{
    return (
        <div className= "col-sm-8">
        <Card>
            <Card.Header>
                <Row>
                    <Col sm={9}>
                        <Card.Title>{props.appName}</Card.Title>
                    </Col>
                    <Col sm={3}>
                        <Button variant="primary"><i class="fas fa-file-download"></i></Button>
                    </Col>
                </Row>
            </Card.Header>
            
            <Card.Body>
                <Card.Text>
                    <i class="fas fa-book"></i> 
                    &nbsp; <em>Current/Highest Education Attained</em> 
                    <br/>
                    <ul className="cardul">
                        <li className= "cardli">{props.degree} </li>
                        <li className= "cardli">{props.university} | &nbsp; {props.gpa}</li>
                    </ul>
                </Card.Text>

                <Card.Text>
                    <i class="fas fa-briefcase"></i>
                    &nbsp; <em>Last Position Held</em>
                    <ul className ="cardul">
                        <li className="cardli">{props.position}</li>
                        <li className="cardli">{props.company}</li>
                    </ul>
                </Card.Text>

                <Card.Text>
                    <i class="fas fa-medal"></i>
                    &nbsp; <em>Award Highlight</em>
                    <ul className="cardul">
                        <li className = "cardli">{props.awardname}</li>
                        <li className = "cardli">{props.awarddate}</li>
                    </ul>
                </Card.Text>

                <Card.Text>
                    <i class="fas fa-stamp"></i>
                    &nbsp; <em>Professional Certifications Obtained</em>
                    <ul className= "cardul">
                        <li className= "cardli">{props.certname}</li>
                        <li className = "cardli">{props.certbody}</li>
                    </ul>
                </Card.Text>

                <Card.Text>
                    <i class="fas fa-folder-open"></i>
                    &nbsp; <em>Project Showcase</em>
                    <ul className = "cardul">
                        <li className = "cardli">{props.projecttitle}</li>
                    </ul>
                </Card.Text>

                {/*<Card.Text>{props.appSkills}</Card.Text>*/}
                <Card.Text><i class="fas fa-phone"></i> &nbsp;{props.appContact}</Card.Text>

                <Card.Text>
                    <small className="text-muted">
                        Applied {props.dateapplied} 
                    </small>
                
                </Card.Text>

            </Card.Body>
        </Card>
    </div>
    )
}

export {EmpAppCard};
export default EmpJobCard;
