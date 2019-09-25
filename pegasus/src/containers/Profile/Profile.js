import React, {Component} from 'react';
import classes from './Profile.module.css';
import LeftBox from '../../components/LeftBox/LeftBox';
import RightBox from '../../components/RightBox/RightBox';

const Optionlist = ['View Profile', 'Personal Particulars', 'Education', 'Work Experience', 'Skills', 'Job Preference', 'Awards', 'Certifications', 'Projects', 'Resume'];

class Profile extends Component{
    state={
        active: '0'
    };

    activeHandler = (key) =>{
        this.setState({active: key});
    }
    
    render(){

        return(
            <div>
                <div className={classes.Heading}><h1>Profile</h1></div>
                <div className={classes.Profile}>
                    <div className={classes.LeftBox}>
                        <LeftBox activeHandler={this.activeHandler} active={this.state.active} list={Optionlist}/>
                    </div>
                    <div className={classes.RightBox}>
                        <RightBox show={this.state.active}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;