import React, {Component} from 'react';
import Navbar from '../common_assets/Navbar2';
import Profile from './Container/Profile/Profile';
import AppliedJobs from './Container/AppliedJobs/AppliedJobs';

class Student extends Component {
    render () {
        return (
            <div>
                <Navbar />
                <Profile />
                {/* <AppliedJobs /> */}
            </div>
        )
    }
}

export default Student