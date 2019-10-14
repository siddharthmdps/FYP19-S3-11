import React, {Component} from 'react';
import Navbar from '../common_assets/Navbar';
import Profile from './Container/Profile/Profile';

class Student extends Component {
    render () {
        return (
            <div>
                <Navbar />
                <Profile />
                
            </div>
        )
    }
}

export default Student