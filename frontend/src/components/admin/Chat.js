import React, { Component } from 'react'

export default class Chat extends Component {
    render() {
        return (
            <div>
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
            </div>
        )
    }
}
