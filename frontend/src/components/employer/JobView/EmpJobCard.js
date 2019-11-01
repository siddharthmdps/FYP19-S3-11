//These are components used by EmpJobView.js.

//just backing up
import React from 'react';
import '../ProfileView/Card.css';

const BaseCard =(props)=> {
    return (
            <div className="card" >
                {props.children}
            </div>
            
    )
};

const EmpJobCard =(props)=> {
    return (
            <div className = "col-sm-8 mx-auto">
                <BaseCard>
                    <div className="card-header">
                        <h5>{props.title}<i class="fas fa-edit"></i></h5>

                    </div>
                
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">{props.companyName}</li>
                        <li class="list-group-item">{props.children}</li>
                        <li class="list-group-item">{props.reqSkills}</li>
                    </ul>
                </BaseCard>
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

export {BaseCard,EmpAppCard};
export default EmpJobCard;
