//These are components used by EmpJobView.js.

import React from 'react';
import '../ProfileView/Card.css';

/*const BaseCard =(props)=> {
    return (
            <div className="card mar15">
                <div className="card-body">
                   {props.children}
                </div>
            </div>
            
    )
};*/

const BaseCard =(props)=> {
    return (
            <div className="card" >
                {props.children}
            </div>
            
    )
};

//original
/*const EmpJobCard =(props)=> {
    return (
            <BaseCard>
                <h5 className ="card-title">{props.title}</h5>
                <p className="card-text"> {props.companyName}</p>
                
                <p className = "card-text"> {props.children}</p>
                <p className ="card-text">{props.reqSkills}</p>
            </BaseCard>
            
    )
};*/

const EmpJobCard =(props)=> {
    return (
            <div className = "col-sm-8 mx-auto">
                <BaseCard>
                    <div className="card-header">
                        <h5>{props.title}</h5>
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
        <div className= "col-sm-4">
        <BaseCard>
            
                <div className="card-body">
                    <h5 className ="card-title">{props.appName}</h5>
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
