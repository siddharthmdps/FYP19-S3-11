import React, {Component} from 'react'
import Navbar from './Navbar'
import Feed from './Feed'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            
        }
    }

    render () {
        return (
            <div>
                <Navbar/>
                <Feed/>
            </div>
        )
    }
}

export default Home