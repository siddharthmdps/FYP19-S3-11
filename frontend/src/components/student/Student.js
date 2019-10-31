import React, {Component} from 'react';
import Navbar from '../common_assets/Navbar2';
import Profile from './Container/EditProfile/EditProfile';
import ViewProfile from './Container/ViewProfile/ViewProfile'
import AppliedJobs from './Container/AppliedJobs/AppliedJobs';

class Student extends Component {
    render () {
        return (
            <div>
                <Navbar />
                {/* <Profile /> */}
                {/* <AppliedJobs /> */}
                <ViewProfile />
            </div>
        )
    }
}

export default Student;