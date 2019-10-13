import React, {Component} from 'react';
import Navbar from '../common_assets/Navbar';
import Layout from './Components/Layout/Layout';
import Profile from './Container/Profile/Profile';

class Student extends Component {
    constructor () {
        super()
    }

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