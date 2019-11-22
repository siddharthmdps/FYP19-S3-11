
import React, { Component } from 'react';
import $ from 'jquery'
import { Datatable } from 'datatables.net-dt'

import { Button, ButtonToolbar } from 'react-bootstrap'
import { AddTipModal } from './AddTipModal'
import { EditTipModal } from './EditTipModal'
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
                <td>{this.props.TRs.title}</td>
                <td>{this.props.TRs.url}</td>
                <td>{this.props.TRs.dateposted}</td>
                <td style={{ width: '90px' }}>
                    <a onClick={this.updateBtn} data-item={this.props.TRs.no} style={{ color: 'green' }}>Edit</a> /
                            <a onClick={this.deleteBtn} data-item={this.props.TRs.key} style={{ color: 'red' }}>Delete</a>
                </td>
            </tr>
        );
    }
}

export class TipsTable extends Component {
    constructor(props, Context) {
        super(props, Context);

        this.state = {
            TRs: [],
            isLoading: true, id: '', title: '', url: '', dateposted: '', editModalShow: false, addModalShow: false,
        };
        this._isMounted = true;
        this.editRow = this.editRow.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
        this.refreshList = this.refreshList.bind(this);
    }
    deleteRow(tipid) {
        if (window.confirm('Are you sure you want to delete this career tip?')) {
            fetch('https://pegasus-backend.herokuapp.com/admin/deletecareertip/' + tipid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((result) => {
                //alert(result);
                this.setState({ snackbaropen: true, snackbarmsg: 'Successfully deleted career tip!' });
                this.timer = setTimeout(() => { window.location.href = '/admin/careertips' }, 1000);
            },
                (error) => {
                    //alert('Failed')
                    this.setState({ snackbaropen: true, snackbarmsg: 'Failed to delete career tip...' });
                }
            )
        }
    }

    editRow(x) {
        this.setState(prevState => ({ editModalShow: true, id: prevState.TRs[x - 1].key, title: prevState.TRs[x - 1].title, url: prevState.TRs[x - 1].url, dateposted: prevState.TRs[x - 1].dateposted }));
    }

    refreshList() {
        fetch('https://pegasus-backend.herokuapp.com/admin/getallcareertips')
            .then(response => response.json())
            .then(data => {
                var obj = [];
                for (var i = 0; i < data.length; i++) {
                    obj[i] = {
                        'no': i + 1,
                        'key': data[i].id,
                        'title': data[i].title,
                        'url': data[i].url,
                        'dateposted': data[i].dateposted.slice(0, 10),
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
                <h1 className="m-3 d-flex justify-content-center"><b>Career Tips</b></h1>
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
                        >Create New Career Tip</Button>
                        <AddTipModal show={this.state.addModalShow}
                            onHide={addModalClose}
                        />
                    </ButtonToolbar>
                    <div className='col-md-12'>

                        <table className="table table-hover table-striped table-bordered" id='tableSample' >
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>URL</th>
                                    <th>Date Posted</th>
                                    <th>Options</th>
                                </tr>
                            </thead>
                            <tbody>{tRow}</tbody>
                        </table>
                    </div>
                    <EditTipModal show={this.state.editModalShow}
                        onHide={editModalClose}
                        id={this.state.id}
                        title={this.state.title}
                        url={this.state.url}
                        dateposted={this.state.dateposted}
                    />
                </div>
            </div>
        );
    }
}




