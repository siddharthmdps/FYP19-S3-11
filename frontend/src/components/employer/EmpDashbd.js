import React from 'react';
import Navbar from '../Navbar';
import ProfileContainer from './ProfileContainer';
import StatBoard from './StatBoard';
import './EmpDashbd.css';
import Feed from '../Feed';
import PostJob from './PostJob';
import Home from '../Home';

//This is the dashboard which the employer will see after successfully logging in.
// It contains a Navbar (header bar), a Profile Container and a Statistics Board.

class EmpDashbd extends React.Component{
    constructor (props){
        super (props);
        this.state = {
            homeVisible:true,
            postJobVisible:false,
            messageVisible:false
        };
        this.pjClickHandler=this.pjClickHandler.bind(this);
        this.messagesClickHandler = this.messagesClickHandler.bind(this);
    }

    render(){
        if (this.state.homeVisible){
            return (
            <div>
                <Navbar pjHandler= {this.pjClickHandler} messageHandler ={this.messagesClickHandler }/>
                <div className= "wrapper">
                    <ProfileContainer username="PegasusSim" buttonText="Edit Profile"/>
                    <div className="lineSeparator"/>
                    <StatBoard pjHandler= {this.pjClickHandler} messageHandler ={this.messagesClickHandler }/>
                </div>
                
            </div>
            )
    }
    else if (this.state.postJobVisible){
        return (
            <div>
                 <Navbar pjHandler= {this.pjClickHandler} messageHandler ={this.messagesClickHandler } />
                <PostJob/>
            </div>
           
        )
    }
    else if (this.state.messageVisible){
        return (
            <div>
                <Navbar pjHandler= {this.pjClickHandler} />
                <Feed/>
            </div>
        )
    }
    else{
        return(
            <Home/>

        )
        }
    }

    pjClickHandler(){
        this.setState({
            postJobVisible: true,
            homeVisible:false
        });
    }

    messagesClickHandler(){
        this.setState({
            messageVisible:true,
            homeVisible:false
        });
    }
};



export default EmpDashbd;
