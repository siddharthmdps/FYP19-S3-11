import React, {Component} from 'react';
import classes from './Profile.module.css';
import LeftBox from '../../components/LeftBox/LeftBox';
import RightBox from '../../components/RightBox/RightBox';

class Profile extends Component{
    state={
        active: '1'
    };

    activeHandler = (key) =>{
        this.setState({active: key});
    }
    
    render(){

        return(
            <div className={classes.Profile}>
                <div className={classes.LeftBox}>
                    <LeftBox activeHandler={this.activeHandler}/>
                </div>
                <div className={classes.RightBox}>
                    <RightBox show={this.state.active}/>
                </div>
            </div>
        );
    }
}

export default Profile;