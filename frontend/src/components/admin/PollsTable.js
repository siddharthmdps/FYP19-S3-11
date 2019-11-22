
import React, { Component } from 'react';
import $ from 'jquery'
import { Datatable } from 'datatables.net-dt'

import { Button, ButtonToolbar } from 'react-bootstrap'
import { AddPollModal } from './AddPollModal'
import { EditPollModal } from './EditPollModal'
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
                <td>{this.props.TRs.pollid}</td>
                <td>{this.props.TRs.question}</td>
                <td>{this.props.TRs.option1}</td>
                <td>{this.props.TRs.option1votes}</td>
                <td>{this.props.TRs.option2}</td>
                <td>{this.props.TRs.option2votes}</td>
                <td>{this.props.TRs.option3}</td>
                <td>{this.props.TRs.option3votes}</td>
                <td style={{ width: '90px' }}>
                    <a onClick={this.updateBtn} data-item={this.props.TRs.no} style={{ color: 'green' }}>Edit</a> /
                            <a onClick={this.deleteBtn} data-item={this.props.TRs.pollid} style={{ color: 'red' }}>Delete</a>
                </td>
            </tr>
        );
    }
}

export class PollsTable extends Component {
    constructor(props, Context) {
        super(props, Context);

        this.state = {
            TRs: [],
            isLoading: true, pollid: '', question: '', option1: '', option1votes: '', option2: '', option2votes: '', option3: '', option3votes: '', editModalShow: false, addModalShow: false,
        };
        this._isMounted = true;
        this.editRow = this.editRow.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
        this.refreshList = this.refreshList.bind(this);
    }
    deleteRow(pollid) {
        if (window.confirm('Are you sure you want to delete this poll?')) {
            fetch('https://pegasus-backend.herokuapp.com/admin/deletepoll/' + pollid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((result) => {
                //alert(result);
                this.setState({ snackbaropen: true, snackbarmsg: 'Successfully deleted poll!' });
                this.timer = setTimeout(() => { window.location.href = '/admin/polls' }, 1000);
            },
                (error) => {
                    //alert('Failed')
                    this.setState({ snackbaropen: true, snackbarmsg: 'Failed to delete poll...' });
                }
            )
        }
    }

    editRow(x) {
        this.setState(prevState => ({ editModalShow: true, pollid: prevState.TRs[x - 1].pollid, question: prevState.TRs[x - 1].question, option1: prevState.TRs[x - 1].option1, option1votes: prevState.TRs[x - 1].option1votes, option2: prevState.TRs[x - 1].option2, option2votes: prevState.TRs[x - 1].option2votes, option3: prevState.TRs[x - 1].option3, option3votes: prevState.TRs[x - 1].option3votes }));
    }

    refreshList() {
        fetch('https://pegasus-backend.herokuapp.com/admin/getallpolls')
            .then(response => response.json())
            .then(data => {
                var obj = [];
                for (var i = 0; i < data.length; i++) {
                    obj[i] = {
                        'no': i + 1,
                        'pollid': data[i].pollid,
                        'question': data[i].question,
                        'option1': data[i].option1,
                        'option1votes': data[i].option1votes,
                        'option2': data[i].option2,
                        'option2votes': data[i].option2votes,
                        'option3': data[i].option3,
                        'option3votes': data[i].option3votes,
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
            <TableBody onEdit={this.editRow} onDelete={this.deleteRow} TRs={tr} pollid={tr.pollid} />
        ))
        if (isLoading)
            return <div><h3 className="m-3 d-flex justify-content-center">Please wait while we load the data...</h3></div>
        return (
            <div>
                <h1 className="m-3 d-flex justify-content-center"><b>Polls</b></h1>
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
                        >Post New Poll</Button>
                        <AddPollModal show={this.state.addModalShow}
                            onHide={addModalClose}
                        />
                    </ButtonToolbar>
                    <div className='col-md-12'>

                        <table className="table table-hover table-striped table-bordered" id='tableSample' >
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Poll ID</th>
                                    <th>Question</th>
                                    <th>Option 1</th>
                                    <th>Option 1 Votes</th>
                                    <th>Option 2</th>
                                    <th>Option 2 Votes</th>
                                    <th>Option 3</th>
                                    <th>Option 3 Votes</th>
                                    <th>Options</th>
                                </tr>
                            </thead>
                            <tbody>{tRow}</tbody>
                        </table>
                    </div>
                    <EditPollModal show={this.state.editModalShow}
                        onHide={editModalClose}
                        pollid={this.state.pollid}
                        question={this.state.question}
                        option1={this.state.option1}
                        option1votes={this.state.option1votes}
                        option2={this.state.option2}
                        option2votes={this.state.option2votes}
                        option3={this.state.option3}
                        option3votes={this.state.option3votes}
                    />
                </div>
            </div>
        );
    }
}




