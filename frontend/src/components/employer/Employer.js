import React, {Component} from 'react'
// Employer exclusive components
import EmpNavbar from './EmpNavbar'
import PostJob from './PostJob'
import EmpPanel from './EmpPanel'
import EmpProfileView from './ProfileView/EmpProfileView'
import EmpFeed from './EmpFeed'
import EmpProfileEdit from './ProfileEditor/EmpProfileEdit'

// Common assets
import About from '../common_assets/About'
import config from '../../config'


class Employer extends Component {
    constructor () {
        super()
        this.state = {
            id: localStorage.getItem('id'),
            username: localStorage.getItem('username'),
            companyName: null,
            companyPhone: null,
            companyEmail: null,
            companyAddress: null,
            industry: null,
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
            case 'viewprofile' : return <EmpProfileView companyName={this.state.companyName}/>
            case 'editprofile' : return <EmpProfileEdit companyName={this.state.companyName}/>
            case 'about' : return <About/>
            case 'blog' : return <h3>blog</h3>
            case 'postjob' : return <PostJob/>

            default : return (
            <div className="row mb-2">
                <div className="col-md-3"><EmpPanel companyName={this.state.companyName}/></div>
                <div className="col-md-9"><EmpFeed/></div>
            </div>
            )   
            case '*' : return <h3>{contentID} not found</h3>
        }
    }

    fetchEmployerDetails = () => {
        const apiURL = config.getAPIURL() + "employer"
        const localhost = `http://localhost:3001/employer/${this.state.id}`

        fetch( localhost, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => {
            console.log('response', data.body[0])
            const empInfo = data.body[0]

            this.setState({
                companyName: empInfo.companyname,
                companyPhone: empInfo.companyphone,
                companyEmail: empInfo.companyemail,
                companyAddress: empInfo.companyaddress,
                industry: empInfo.industry
            })
        })
        .catch(error => console.log(error))

        console.log(this.state)
    }

    componentDidMount() {
        this.fetchEmployerDetails()
        console.log(this.state)
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