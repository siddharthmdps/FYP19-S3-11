import React from 'react';

const SmallCard =(props)=> {
    return (
        <div className = "col-sm-4">
            <div className="card">
                <div className="card-body">
                    <h5 className ="card-title">{props.title}</h5>
                    <p className = "card-text"> {props.text}</p>
                </div>
            </div>
        </div>
            
    )
};



export default SmallCard;
