
import React, { Component } from 'react';
import $ from 'jquery'
import { Datatable } from 'datatables.net-dt'

import { Button, ButtonToolbar } from 'react-bootstrap'
import { AddEmpModal } from './AddEmpModal'
import { EditEmpModal } from './EditEmpModal'
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
                <td>{this.props.TRs.key}</td>
                <td>{this.props.TRs.username}</td>
                <td>{this.props.TRs.companyname}</td>
                <td>{this.props.TRs.companyphone}</td>
                <td>{this.props.TRs.companyemail}</td>
                <td>{this.props.TRs.companydescription}</td>
                <td>{this.props.TRs.companyaddress}</td>
                <td>{this.props.TRs.industry}</td>
                <td style={{ width: '90px' }}>
                    <a onClick={this.updateBtn} data-item={this.props.TRs.no} style={{ color: 'green' }}>Edit</a> /
                            <a onClick={this.deleteBtn} data-item={this.props.TRs.key} style={{ color: 'red' }}>Delete</a>
                </td>
            </tr>
        );
    }
}

export class EmployerTable extends Component {
    constructor(props, Context) {
        super(props, Context);

        this.state = {
            TRs: [],
            isLoading: true, id: '', username: '', companyname: '', companyphone: '', companyemail: '', companydescription: '', companyaddress: '', industry: '', editModalShow: false, addModalShow: false,
        };
        this._isMounted = true;
        this.editRow = this.editRow.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
        this.refreshList = this.refreshList.bind(this);
    }
    deleteRow(empid) {
        if (window.confirm('Are you sure you want to delete this employer account?')) {
            fetch('https://pegasus-backend.herokuapp.com/admin/deleteemployer/' + empid, {
                method: 'PUT',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((result) => {
                //alert(result);
                this.setState({ snackbaropen: true, snackbarmsg: 'Successfully deleted employer account!' });
                this.timer = setTimeout(() => { window.location.href = '/admin/employer' }, 1000);
            },
                (error) => {
                    //alert('Failed')
                    this.setState({ snackbaropen: true, snackbarmsg: 'Failed to delete employer account...' });
                }
            )
        }
    }

    editRow(x) {
        this.setState(prevState => ({ editModalShow: true, id: prevState.TRs[x - 1].key, username: prevState.TRs[x - 1].username, companyname: prevState.TRs[x - 1].companyname, companyphone: prevState.TRs[x - 1].companyphone, companyemail: prevState.TRs[x - 1].companyemail, companydescription: prevState.TRs[x - 1].companydescription, companyaddress: prevState.TRs[x - 1].companyaddress, industry: prevState.TRs[x - 1].industry }));
    }

    refreshList() {
        fetch('https://pegasus-backend.herokuapp.com/admin/getallemployers')
            .then(response => response.json())
            .then(data => {
                var obj = [];
                for (var i = 0; i < data.length; i++) {
                    obj[i] = {
                        'no': i + 1,
                        'key': data[i].id,
                        'username': data[i].username,
                        'companyname': data[i].companyname,
                        'companyphone': data[i].companyphone,
                        'companyemail': data[i].companyemail,
                        'companydescription': data[i].companydescription,
                        'companyaddress': data[i].companyaddress,
                        'industry': data[i].industry,
                    };
                }

                this._isMounted && this.setState({ TRs: obj, isLoading: false });
                $("#tableSample").DataTable(
                    //{'scrollX': true}
                );
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
                <h1 className="m-3 d-flex justify-content-center"><b>Employer Login Credentials</b></h1>
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
                        >Create New Employer Account</Button>
                        <AddEmpModal show={this.state.addModalShow}
                            onHide={addModalClose}
                        />
                    </ButtonToolbar>
                    <div className='col-md-12'>

                        <table className="table table-hover table-striped table-bordered" id='tableSample' >
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Employer ID</th>
                                    <th>Username</th>
                                    <th>Company Name</th>
                                    <th>Company Phone Number</th>
                                    <th>Company E-mail</th>
                                    <th>Company Description</th>
                                    <th>Company Address</th>
                                    <th>Company Industry</th>
                                    <th>Options</th>
                                </tr>
                            </thead>
                            <tbody>{tRow}</tbody>
                        </table>
                    </div>
                    <EditEmpModal show={this.state.editModalShow}
                        onHide={editModalClose}
                        id={this.state.id}
                        username={this.state.username}
                        companyname={this.state.companyname}
                        companyphone={this.state.companyphone}
                        companyemail={this.state.companyemail}
                        companydescription={this.state.companydescription}
                        companyaddress={this.state.companyaddress}
                        industry={this.state.industry}
                    />
                </div>
            </div>
        );
    }
}




