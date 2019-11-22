import React from 'react';
import './Card.css';

const LargeCard =(props)=> {
    return (
            <div className="card mar15">
                <div className="card-body">
                    <h5 className ="card-title">{props.title}</h5>
                    <p className = "card-text"> {props.children}</p>
                </div>
            </div>
            
    )
};



export default LargeCard;
