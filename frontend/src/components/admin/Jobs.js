import React, { Component } from 'react'

export default class Jobs extends Component {
    render() {
        return (
            <div>
  <div className="row">
    <div className="col-xs-12">
      <div className="box">
        <div className="box-header">
          <h3 className="box-title">All Jobs</h3>
          <div className="box-tools">
            <div className="input-group input-group-sm hidden-xs" style={{width: 150}}>
              <input type="text" name="table_search" className="form-control pull-right" placeholder="Search" />
              <div className="input-group-btn">
                <button type="submit" className="btn btn-default"><i className="fa fa-search" /></button>
              </div>
            </div>
          </div>
        </div>
        {/* /.box-header */}
        <div className="box-body table-responsive no-padding">
          <table className="table table-hover">
            <tbody><tr>
                <th>ID</th>
                <th>User</th>
                <th>Date</th>
                <th>Status</th>
                <th>Reason</th>
              </tr>
              <tr>
                <td>183</td>
                <td>John Doe</td>
                <td>11-7-2014</td>
                <td><span className="label label-success">Approved</span></td>
                <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
              </tr>
              <tr>
                <td>219</td>
                <td>Alexander Pierce</td>
                <td>11-7-2014</td>
                <td><span className="label label-warning">Pending</span></td>
                <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
              </tr>
              <tr>
                <td>657</td>
                <td>Bob Doe</td>
                <td>11-7-2014</td>
                <td><span className="label label-primary">Approved</span></td>
                <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
              </tr>
              <tr>
                <td>175</td>
                <td>Mike Doe</td>
                <td>11-7-2014</td>
                <td><span className="label label-danger">Denied</span></td>
                <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
              </tr>
            </tbody></table>
        </div>
        {/* /.box-body */}
      </div>
      {/* /.box */}
    </div>
  </div>
</div>

        )
    }
}
