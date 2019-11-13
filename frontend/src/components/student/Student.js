import React, { Component } from 'react';
import Navbar from '../common_assets/Navbar/Navbar';
import Profile from './Container/EditProfile/EditProfile';
import ViewProfile from './Container/ViewProfile/ViewProfile'
import SavedJobs from './Container/SavedJobs/SavedJobs';
import AppliedJobs from './Container/AppliedJobs/AppliedJobs';
import Tab from './Container/ViewProfile/IconLabelTabs';

class Student extends Component {
    render() {
        return (
            <div>
                {/* <Profile /> */}
                {/* <AppliedJobs /> */}
                {/* <SavedJobs /> */}
                <ViewProfile />
            </div>
        )
    }
}

export default Student;