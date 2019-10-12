import React, {Component} from 'react'
// Employer exclusive components
import EmpNavbar from './EmpNavbar'
import PostJob from './PostJob'
import ProfileContainer from './ProfileContainer'
import StatBoard from './StatBoard'
import EmpProfileView from './ProfileView/EmpProfileView'
import EmpFeed from './EmpFeed'

// Common assets
import About from '../common_assets/About'



class Employer extends Component {
    constructor () {
        super()
        this.state = {
            username : localStorage.getItem('username'),
            mainContent : null
        }
    }

    /*
    This is the function which will be listening to
    Navbar.
    Depending on what is clicked on the Navbar, this function will
    set the state of the Employer.js and trigger it to render a different component
    */
    setMainContent = (event) => {
        //console.log(`Triggered by : ${event.target.id}`)

        this.setState( {
            mainContent: event.target.id
        })
    }

    mainContent = () => {
        const contentID = this.state.mainContent
        switch (contentID) {
            case 'editprofile' : return <EmpProfileView/>
            case 'about' : return <About/>
            case 'blog' : return <h3>blog</h3>
            case 'postjob' : return <PostJob/>

            default : return (
            <div>
                <ProfileContainer/>
                <StatBoard/>
                <EmpFeed/>
            </div>
            )   
            case '*' : return <h3>{contentID} not found</h3>
        }
    }

    render () {
        return (
        <div>
            {/* Fixed component */}
            <EmpNavbar
                username={this.state.username}
                setMainContent={this.setMainContent}
            /> 

            {/* Flexible content */}
            <this.mainContent/>
        </div>
        )
    }
}

export default Employer