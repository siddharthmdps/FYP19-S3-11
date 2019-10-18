import React from 'react';

//This contains all the components for a form

const BasicFormField =(props)=> {
    return (
    <div className="row">
       <div className="col-sm-3">
            <label htmlFor="">{props.title}</label>
        </div>

        <div className="col-sm-9">
            <input type="text" className="form-control" id={props.pid} placeholder={props.placeholder}/>
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
                    <option value="Engineering">Engineering</option>
                    <option value="Business">Business</option>
                    <option value="Accountancy">Accountancy</option>
                    <option value="IT">IT</option>
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
                    <textarea className="form-control" id= {props.pid} rows="3" placeholder={props.placeholder}></textarea>
                </div>
            </div>
        </div>
    )
};

export {SelectFormField,AreaFormField};

export default BasicFormField;

