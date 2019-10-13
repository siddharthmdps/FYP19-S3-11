import React, {Component} from 'react'

class Admin extends Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div>
                <h3>Hello Admin</h3>
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

export default Admin