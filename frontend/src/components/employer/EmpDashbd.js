import React, {Component} from 'react';
import ProfileContainer from './ProfileContainer';
// import StatBoard from './StatBoard';
import './EmpDashbd.css';

//This is the dashboard which the employer will see after successfully logging in.
// It contains a Navbar (header bar), a Profile Container and a Statistics Board.

class EmpDashbd extends Component{
    constructor (props){
        super (props);
    }

    render(){
        if (this.state.homeVisible){
            return (
            <div>
                
                <div className= "wrapper">
                    <ProfileContainer username="PegasusSim" buttonText="Edit Profile"/>
                    <div className="lineSeparator"/>
                    <StatBoard pjHandler= {this.pjClickHandler} />
                </div>
                
            </div>
            )
    }


};

export default EmpDashbd
