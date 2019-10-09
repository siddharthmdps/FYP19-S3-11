import React, {Component} from 'react'
import Navbar from './common_assets/Navbar'
import About from './common_assets/About'
import Feed from './common_assets/Feed'

class ViewController extends Component {
    constructor(props) {
        super()
        this.props = props
        this.state = {
            username : localStorage.getItem('username'),
            usertype : localStorage.getItem('usertype'),
            toRender : null // Profile, Favorites, About, Blog, PostJob
        }
    }

    // selection on the 'navbar' will decide which component is to be displayed
    setRenderedContent = (event) => {
        this.setState ( {toRender: event.target.id} )
        //console.log(`${event.target.id} was clicked`)
    }

    mainContent = () => {
        switch (this.state.toRender) {
            case 'About' : return <About/>
            default : return <Feed/>
        }
    }

    render () {
        return (
            <div>
                <Navbar 
                    username={this.state.username}
                    usertype={this.state.usertype}
                    setRenderedContent={this.setRenderedContent}
                />
                <this.mainContent/>
            </div>
        )
    }
}

export default ViewController