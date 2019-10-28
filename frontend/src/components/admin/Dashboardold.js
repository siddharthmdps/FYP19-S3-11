import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Dashboardold extends Component {
  render() {
    return (
      <div>
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <h1>
              Dashboard
        <small>Control panel</small>
            </h1>

          </section>
          {/* Main content */}
          <section className="content">
            {/* Small boxes (Stat box) */}
            <div className="row">
              <div className="col-lg-3 col-xs-6">
                {/* small box */}
                <div className="small-box bg-aqua">
                  <div className="inner">
                    <h3>150</h3>
                    <p>All Employers</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-person" />
                  </div>
                  <Link to="/Employer" className="small-box-footer">More info <i className="fa fa-arrow-circle-right" /></Link>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-xs-6">
                {/* small box */}
                <div className="small-box bg-green">
                  <div className="inner">
                    <h3>53<sup style={{ fontSize: 20 }}></sup></h3>
                    <p>All Candidates</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-university" />
                  </div>
                  <Link to="/Candidate" className="small-box-footer">More info <i className="fa fa-arrow-circle-right" /></Link>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-xs-6">
                {/* small box */}
                <div className="small-box bg-yellow">
                  <div className="inner">
                    <h3>44</h3>
                    <p>All Jobs</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-levels" />
                  </div>
                  <Link to="/Jobs" className="small-box-footer">More info <i className="fa fa-arrow-circle-right" /></Link>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-xs-6">
                {/* small box */}
                <div className="small-box bg-red">
                  <div className="inner">
                    <h3>Generate</h3>
                    <p>Reports</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-pie-graph" />
                  </div>
                  <Link to="/Reports" className="small-box-footer">More info <i className="fa fa-arrow-circle-right" /></Link>
                </div>
              </div>
              {/* ./col */}
            </div>
            {/* /.row */}
            {/* Main row */}
            <div className="row">
              {/* Left col */}
              <section className="col-lg-7 connectedSortable">
                {/* Custom tabs (Charts with tabs)*/}
                <div className="nav-tabs-custom">
                  {/* Tabs within a box */}
                  <ul className="nav nav-tabs pull-right">
                    <li className="pull-left header"><i className="fa fa-inbox" /> Pending jobs</li>
                  </ul>
                  <div className="tab-content no-padding">
                    {/* Morris chart - Sales */}
                    <div className="chart tab-pane active" id="revenue-chart" style={{ position: 'relative', height: 300 }} />
                    <div className="chart tab-pane" id="sales-chart" style={{ position: 'relative', height: 300 }} />
                  </div>
                </div>
                {/* /.nav-tabs-custom */}
                {/* Chat box */}
                <div className="box box-success">
                  <div className="box-header">
                    <i className="fa fa-comments-o" />
                    <h3 className="box-title">Chat Box placeholder. For future if doing.</h3>
                    <div className="box-tools pull-right" data-toggle="tooltip" title="Status">
                      <div className="btn-group" data-toggle="btn-toggle">
                        <button type="button" className="btn btn-default btn-sm active"><i className="fa fa-square text-green" />
                        </button>
                        <button type="button" className="btn btn-default btn-sm"><i className="fa fa-square text-red" /></button>
                      </div>
                    </div>
                  </div>
                  <div className="box-body chat" id="chat-box">
                    {/* chat item */}
                    <div className="item">
                      <img src="dist/img/avatar5.png" alt="user image" className="online" />
                      <p className="message">
                        <a href="#" className="name">
                          <small className="text-muted pull-right"><i className="fa fa-clock-o" /> 2:15</small>
                          Min
        </a>
                        Im back from holiday!
      </p>
                      <div className="attachment">
                        <h4>Attachments:</h4>
                        <p className="filename">
                          OverseaTrip.jpg
        </p>
                        <div className="pull-right">
                          <button type="button" className="btn btn-primary btn-sm btn-flat">Open</button>
                        </div>
                      </div>
                      {/* /.attachment */}
                    </div>
                    {/* /.item */}
                    {/* chat item */}
                    <div className="item">
                      <img src="dist/img/avatar04.png" alt="user image" className="offline" />
                      <p className="message">
                        <a href="#" className="name">
                          <small className="text-muted pull-right"><i className="fa fa-clock-o" /> 5:15</small>
                          Min San
        </a>
                        Nice!
      </p>
                    </div>
                    {/* /.item */}
                    {/* chat item */}
                    <div className="item">
                      <img src="dist/img/user2-160x160.jpg" alt="user image" className="offline" />
                      <p className="message">
                        <a href="#" className="name">
                          <small className="text-muted pull-right"><i className="fa fa-clock-o" /> 5:30</small>
                          Soon Keong Lum
        </a>
                        Welcome back!
      </p>
                    </div>
                    {/* /.item */}
                  </div>
                  {/* /.chat */}
                  <div className="box-footer">
                    <div className="input-group">
                      <input className="form-control" placeholder="Type message..." />
                      <div className="input-group-btn">
                        <button type="button" className="btn btn-success"><i className="fa fa-plus" /></button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.box (chat box) */}


 
              </section>
              {/* /.Left col */}
              {/* right col (We are only adding the ID to make the widgets sortable)*/}
              <section className="col-lg-5 connectedSortable">
                {/* Map box */}
                <div className="box box-solid bg-light-blue-gradient">
                  <div className="box-header">
                    {/* tools box */}
                    <div className="pull-right box-tools">
                      <button type="button" className="btn btn-primary btn-sm daterange pull-right" data-toggle="tooltip" title="Date range">
                        <i className="fa fa-calendar" /></button>
                      <button type="button" className="btn btn-primary btn-sm pull-right" data-widget="collapse" data-toggle="tooltip" title="Collapse" style={{ marginRight: 5 }}>
                        <i className="fa fa-minus" /></button>
                    </div>
                    {/* /. tools */}
                    <i className="fa fa-map-marker" />
                    <h3 className="box-title">
                      Latest Added Candidates
              </h3>
                  </div>
                  <div className="box-body">
                    <div id="world-map" style={{ height: 250, width: '100%' }} />
                  </div>
                  {/* /.box-body*/}
                  <div className="box-footer no-border">

                    {/* /.row */}
                  </div>
                </div>
                {/* /.box */}
                {/* solid sales graph */}
                <div className="box box-solid bg-teal-gradient">
                  <div className="box-header">
                    <i className="fa fa-th" />
                    <h3 className="box-title">Latest Added Employers</h3>
                    <div className="box-tools pull-right">
                      <button type="button" className="btn bg-teal btn-sm" data-widget="collapse"><i className="fa fa-minus" />
                      </button>
                      <button type="button" className="btn bg-teal btn-sm" data-widget="remove"><i className="fa fa-times" />
                      </button>
                    </div>
                  </div>
                  <div className="box-body border-radius-none">
                    <div className="chart" id="line-chart" style={{ height: 250 }} />
                  </div>
                  {/* /.box-body */}
                  <div className="box-footer no-border">
                    <div className="row">
                      <div className="col-xs-4 text-center" style={{ borderRight: '1px solid #f4f4f4' }}>
                        <input type="text" className="knob" data-readonly="true" defaultValue={20} data-width={60} data-height={60} data-fgcolor="#39CCCC" />
                        <div className="knob-label">Mail-Orders</div>
                      </div>
                      {/* ./col */}
                      <div className="col-xs-4 text-center" style={{ borderRight: '1px solid #f4f4f4' }}>
                        <input type="text" className="knob" data-readonly="true" defaultValue={50} data-width={60} data-height={60} data-fgcolor="#39CCCC" />
                        <div className="knob-label">Online</div>
                      </div>
                      {/* ./col */}
                      <div className="col-xs-4 text-center">
                        <input type="text" className="knob" data-readonly="true" defaultValue={30} data-width={60} data-height={60} data-fgcolor="#39CCCC" />
                        <div className="knob-label">In-Store</div>
                      </div>
                      {/* ./col */}
                    </div>
                    {/* /.row */}
                  </div>
                  {/* /.box-footer */}
                </div>
                {/* /.box */}
                {/* Calendar */}

                {/* /.box */}
              </section>
              {/* right col */}
            </div>
            {/* /.row (main row) */}
          </section>
          {/* /.content */}
        </div>
        {/* /.content-wrapper */}
      </div>

    )
  }
}
