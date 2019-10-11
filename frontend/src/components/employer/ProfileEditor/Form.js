import React from 'react';

//This contains all the components for a form

const BasicFormField =(props)=> {
    return (
    <div className="row">
    
       <div className="col-sm-3">
            <label htmlFor="">{props.title}</label>
        </div>

        <div className="col-sm-9">
            <input type="text" className="form-control" id={props.pid}/>
        </div> 
    </div>

    )
};

const SelectFormField =(props)=>{
    return (
        <div className="row">
            <div className="col-sm-3">
                <label htmlFor="">{props.title}</label>
            </div>
            <div className="col-sm-9">
                <select className="form-control" id={props.pid}>
                    <option selected>Choose...</option>
                    <option value="1">Engineering</option>
                    <option value="2">Business</option>
                    <option value="3">Accountancy</option>
                </select>
            </div>
        </div>
    )
    
        
};

const AreaFormField=(props)=>{
    return (
        <div>
            <div className="row">
                <div className= "col-sm-3">
                    <label htmlFor="">{props.title}</label>
                </div>

                <div className="col-sm-9">
                    <textarea className="form-control" id= {props.pid} rows="3"></textarea>
                </div>
            </div>
        </div>
    )
};

export {SelectFormField,AreaFormField};

export default BasicFormField;

