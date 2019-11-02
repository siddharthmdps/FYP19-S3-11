//These are components used by EmpJobView.js.

//Pending: 
// AppCard
import React from 'react';
import {Card,Header,Button,Col,Row} from'react-bootstrap';
import '../ProfileView/Card.css';

const BaseCard =(props)=> {
    return (
            <div className="card" >
                {props.children}
            </div>
            
    )
};

//Future Enhancement: Adding nav for students

const EmpJobCard =(props)=> {
    return (
            <div className = "col-sm-8 mx-auto">
                <Card>
                    <Card.Header>
                        <Card.Title>
                            <Row>
                                <Col sm={10}>{props.title}</Col>
                                <Col sm={2}>
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

                        <Card.Text>{props.dateposted}</Card.Text>
                        
                    </Card.Body>

                </Card>
                
            </div>
            
    )
};


const EmpAppCard = (props) =>{
    return (
        <div className= "col-sm-8">
        <BaseCard>
            
                <div className="card-body">
                    <h5 className ="card-title">{props.appName}</h5>
                    <p className = "card-text">
                        <ul>
                            <li>{props.degree} </li>
                            <li>{props.university}</li>
                            <li>{props.gpa}</li>
                        </ul>
                    </p>

                    <p className="card-text">
                        <ul>
                            <li>{props.position}</li>
                            <li>{props.company}</li>
                        </ul>

                    </p>

                    <p className= "card-text">
                        <ul>
                            <li>{props.awardName}</li>
                            <li>{props.awardDate}</li>
                        </ul>
                    </p>

                    <p className = "card-text">
                        <ul>
                            <li>{props.certName}</li>
                            <li>{props.certABody}</li>
                        </ul>
                    </p>

                    <p className= "card-text">
                        <ul>
                            <li>{props.projectTitle}</li>
                        </ul>
                    </p>

                    <p className="card-text"> {props.children}</p>
                    
                    <p className = "card-text"> {props.appSkills}</p>
                    <p className ="card-text">{props.appContact}</p>
                </div>
            
        </BaseCard>
    </div>
    )
}

export {EmpAppCard};
export default EmpJobCard;
