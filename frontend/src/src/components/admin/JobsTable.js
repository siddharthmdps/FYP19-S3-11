
import React, { Component } from 'react';
import $ from 'jquery'
import { Datatable } from 'datatables.net-dt'

import { Button, ButtonToolbar } from 'react-bootstrap'
import { AddJobModal } from './AddJobModal'
import { EditJobModal } from './EditJobModal'
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
                <td>{this.props.TRs.empid}</td>
                <td>{this.props.TRs.title}</td>
                <td>{this.props.TRs.industry}</td>
                <td>{this.props.TRs.description}</td>
                <td>{this.props.TRs.requiredskills}</td>
                <td>{this.props.TRs.dateposted}</td>
                <td>{this.props.TRs.location}</td>
                <td>{this.props.TRs.yearsofexperience}</td>
                <td style={{ width: '90px' }}>
                    <a onClick={this.updateBtn} data-item={this.props.TRs.no} style={{ color: 'green' }}>Edit</a> /
                            <a onClick={this.deleteBtn} data-item={this.props.TRs.key} style={{ color: 'red' }}>Delete</a>
                </td>
            </tr>
        );
    }
}

export class JobsTable extends Component {
    constructor(props, Context) {
        super(props, Context);

        this.state = {
            TRs: [],
            isLoading: true, id: '', empid: '', title: '', industry: '', description: '', requiredskills: '', dateposted: '', location: '', yearsofexperience: '', editModalShow: false, addModalShow: false,
        };
        this._isMounted = true;
        this.editRow = this.editRow.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
        this.refreshList = this.refreshList.bind(this);
    }
    deleteRow(jobid) {
        if (window.confirm('Are you sure you want to delete this job listing?')) {
            fetch('https://pegasus-backend.herokuapp.com/admin/deletejob/' + jobid, {
                method: 'PUT',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((result) => {
                //alert(result);
                this.setState({ snackbaropen: true, snackbarmsg: 'Successfully deleted job listing!' });
                this.timer = setTimeout(() => { window.location.href = '/admin/jobs' }, 1000);
            },
                (error) => {
                    //alert('Failed')
                    this.setState({ snackbaropen: true, snackbarmsg: 'Failed to delete job listing...' });
                }
            )
        }
    }

    editRow(x) {
        this.setState(prevState => ({ editModalShow: true, id: prevState.TRs[x - 1].key, empid: prevState.TRs[x - 1].empid, title: prevState.TRs[x - 1].title, industry: prevState.TRs[x - 1].industry, description: prevState.TRs[x - 1].description, requiredskills: prevState.TRs[x - 1].requiredskills, dateposted: prevState.TRs[x - 1].dateposted, location: prevState.TRs[x - 1].location, yearsofexperience: prevState.TRs[x - 1].yearsofexperience }));
    }

    refreshList() {
        fetch('https://pegasus-backend.herokuapp.com/admin/getalljobs')
            .then(response => response.json())
            .then(data => {
                var obj = [];
                for (var i = 0; i < data.length; i++) {
                    obj[i] = {
                        'no': i + 1,
                        'key': data[i].id,
                        'empid': data[i].empid,
                        'title': data[i].title,
                        'industry': data[i].industry,
                        'description': data[i].description,
                        'requiredskills': data[i].requiredskills,
                        'dateposted': data[i].dateposted.slice(0, 10),
                        'location': data[i].location,
                        'yearsofexperience': data[i].yearsofexperience,
                    };
                }

                this._isMounted && this.setState({ TRs: obj, isLoading: false });
                $("#tableSample").DataTable();
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
                <h1 className="m-3 d-flex justify-content-center"><b>Job Listing</b></h1>
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
                        >Create New Job Listing</Button>
                        <AddJobModal show={this.state.addModalShow}
                            onHide={addModalClose}
                        />
                    </ButtonToolbar>
                    <div className='col-md-12'>

                        <table className="table table-hover table-striped table-bordered" id='tableSample' >
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Employer ID</th>
                                    <th>Title</th>
                                    <th>Industry</th>
                                    <th>Description</th>
                                    <th>Required Skills</th>
                                    <th>Date Posted</th>
                                    <th>Location</th>
                                    <th>Years of experience</th>
                                    <th>Options</th>
                                </tr>
                            </thead>
                            <tbody>{tRow}</tbody>
                        </table>
                    </div>
                    <EditJobModal show={this.state.editModalShow}
                        onHide={editModalClose}
                        id={this.state.id}
                        empid={this.state.empid}
                        title={this.state.title}
                        industry={this.state.industry}
                        description={this.state.description}
                        requiredskills={this.state.requiredskills}
                        dateposted={this.state.dateposted}
                        location={this.state.location}
                        yearsofexperience={this.state.yearsofexperience}
                    />
                </div>
            </div>
        );
    }
}




