import React, { Component } from 'react'
import { CandidateTable } from './CandidateTable.js'

export class AdminCandidate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container" style={{ maxWidth: '1300px' }}>
        <CandidateTable />
      </div>
    )
  }
}
