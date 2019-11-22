
import React, { Component } from 'react';
import $ from 'jquery'
import { Datatable } from 'datatables.net-dt'

import { Button, ButtonToolbar } from 'react-bootstrap'
import { AddCanModal } from './AddCanModal'
import { EditCanModal } from './EditCanModal'
import Snackbar from '@material-ui/core/SnackBar'
import IconButton from '@material-ui/core/IconButton'

class TableBody extends Component {
    constructor(props, context) {
        super(props, context);
        this.updateBtn = this.updateBtn.bind(this);
        this.deleteBtn = this.deleteBtn.bind(this);
    }

    updateBtn(e) {
        this.props.onEdit(e.target.dataset.item);
    }

    deleteBtn(e) {
        this.props.onDelete(e.target.dataset.item);
    }

    render() {
        return (
            <tr id={'tr-' + this.props.TRs.no} >
                <td>{this.props.TRs.no}</td>
                <td>{this.props.TRs.username}</td>
                <td>{this.props.TRs.firstname}</td>
                <td>{this.props.TRs.middlename}</td>
                <td>{this.props.TRs.lastname}</td>
                <td>{this.props.TRs.email}</td>
                <td>{this.props.TRs.phone}</td>
                <td>{this.props.TRs.country}</td>
                <td>{this.props.TRs.city}</td>
                <td>{this.props.TRs.currentaddress}</td>
                <td>{this.props.TRs.postalcode}</td>
                <td>{this.props.TRs.nationality}</td>
                <td style={{ width: '90px' }}>
                    <a onClick={this.updateBtn} data-item={this.props.TRs.no} style={{ color: 'green' }}>Edit</a> /
                            <a onClick={this.deleteBtn} data-item={this.props.TRs.key} style={{ color: 'red' }}>Delete</a>
                </td>
            </tr>
        );
    }
}

export class CandidateTable extends Component {
    constructor(props, Context) {
        super(props, Context);

        this.state = {
            TRs: [],
            isLoading: true, id: '', firstname: '', middlename: '', lastname: '', email: '', phone: '', country: '', city: '', currentaddress: '', postalcode: '', nationality: '', username: '', editModalShow: false, addModalShow: false,
        };
        this._isMounted = true;
        this.editRow = this.editRow.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
        this.refreshList = this.refreshList.bind(this);
    }
    deleteRow(canid) {
        if (window.confirm('Are you sure you want to delete this student account?')) {
            fetch('https://pegasus-backend.herokuapp.com/admin/deletestudent/' + canid, {
                method: 'PUT',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((result) => {
                //alert(result);
                this.setState({ snackbaropen: true, snackbarmsg: 'Successfully deleted student account!' });
                this.timer = setTimeout(() => { window.location.href = '/admin/student' }, 1000);
            },
                (error) => {
                    //alert('Failed')
                    this.setState({ snackbaropen: true, snackbarmsg: 'Failed to delete student account...' });
                }
            )
        }
    }

    editRow(x) {
        this.setState(prevState => ({ editModalShow: true, id: prevState.TRs[x - 1].key, firstname: prevState.TRs[x - 1].firstname, middlename: prevState.TRs[x - 1].middlename, lastname: prevState.TRs[x - 1].lastname, email: prevState.TRs[x - 1].email, phone: prevState.TRs[x - 1].phone, country: prevState.TRs[x - 1].country, city: prevState.TRs[x - 1].city, currentaddress: prevState.TRs[x - 1].currentaddress, postalcode: prevState.TRs[x - 1].postalcode, nationality: prevState.TRs[x - 1].nationality, username: prevState.TRs[x - 1].username }));
    }

    refreshList() {
        fetch('https://pegasus-backend.herokuapp.com/admin/getallstudents')
            .then(response => response.json())
            .then(data => {
                var obj = [];
                for (var i = 0; i < data.length; i++) {
                    obj[i] = {
                        'no': i + 1,
                        'key': data[i].id,
                        'firstname': data[i].firstname,
                        'middlename': data[i].middlename,
                        'lastname': data[i].lastname,
                        'email': data[i].email,
                        'phone': data[i].phone,
                        'country': data[i].country,
                        'city': data[i].city,
                        'currentaddress': data[i].currentaddress,
                        'postalcode': data[i].postalcode,
                        'nationality': data[i].nationality,
                        'username': data[i].username,
                    };
                }

                this._isMounted && this.setState({ TRs: obj, isLoading: false });
                console.log(this.state);
                $("#table_candidate").DataTable();
            });
    }
    componentDidUpdate() {
        this._isMounted = true;
        this._isMounted && this.refreshList();
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    componentDidMount() {
        this.refreshList();
    }
    render() {
        const { isLoading } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false })
        let editModalClose = () => this.setState({ editModalShow: false })
        let refresh = () => { this.refreshList() }
        const tRow = this.state.TRs.map(tr => (
            <TableBody onEdit={this.editRow} onDelete={this.deleteRow} TRs={tr} key={tr.key} />
        ))
        if (isLoading)
            return <div><h3 className="m-3 d-flex justify-content-center">Please wait while we load the data...</h3></div>
        return (
            <div>
                <h1 className="m-3 d-flex justify-content-center"><b>Student Account Credentials</b></h1>
                <hr />
                <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    open={this.state.snackbaropen}
                    autoHideDuration={5000}
                    onClose={this.snackbarClose}

                    message={<span id="message-id">{this.state.snackbarmsg}</span>}
                    action={[
                        <IconButton
                            key="close"
                            arial-label="close"
                            color="inherit"
                            onClick={this.snackbarClose}
                        >
                            x
                </IconButton>
                    ]}
                />
                <div className='row margin-top'>
                    <ButtonToolbar>
                        <Button variant='outline-success'
                            onClick={() => this.setState({ addModalShow: true })}
                        >Create New Student Account</Button>
                        <AddCanModal show={this.state.addModalShow}
                            onHide={addModalClose}
                        />
                    </ButtonToolbar>
                    <div className='col-md-12'>

                        <table className="table table-hover table-striped table-bordered" id='table_candidate' >
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Username</th>
                                    <th>First Name</th>
                                    <th>Middle Name</th>
                                    <th>Last Name</th>
                                    <th>E-mail</th>
                                    <th>Phone</th>
                                    <th>Country</th>
                                    <th>City</th>
                                    <th>Address</th>
                                    <th>Postal Code</th>
                                    <th>Nationality</th>
                                    <th>Options</th>
                                </tr>
                            </thead>
                            <tbody>{tRow}</tbody>
                        </table>
                    </div>
                    <EditCanModal show={this.state.editModalShow}
                        onHide={editModalClose}
                        id={this.state.id}
                        firstname={this.state.firstname}
                        middlename={this.state.middlename}
                        lastname={this.state.lastname}
                        email={this.state.email}
                        phone={this.state.phone}
                        country={this.state.country}
                        city={this.state.city}
                        currentaddress={this.state.currentaddress}
                        postalcode={this.state.postalcode}
                        nationality={this.state.nationality}
                        username={this.state.username}
                    />
                </div>
            </div>
        );
    }
}