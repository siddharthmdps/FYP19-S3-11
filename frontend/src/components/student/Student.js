import React, {Component} from 'react'

class Student extends Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div>
                <h3>Hello Student</h3>
                <button type="button" className="btn btn-dark" id="btn-logout" 
                    onClick={ () => {
                        localStorage.clear()
                        document.location.reload(true)
                    }
                }>Log Out</button>
            </div>
        )
    }
}

export default Student