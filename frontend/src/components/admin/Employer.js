import React, { Component } from 'react'
import { EmployerTable } from './EmployerTable.js'
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';

export class AdminEmployer extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div className="container" style={{ maxWidth: '1300px' }}>
                <EmployerTable />
            </div>
        )
    }
}