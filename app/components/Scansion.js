import React from 'react';
import { connect } from 'react-redux';

// ———————— COMPONENT ———————— // 

export default class Scansion extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-6'>
            <h1> TEXT ENTER </h1>
          </div>
          <div className='col-lg-6'>
            <h1> TEXT OUTPUT </h1>
          </div>
        </div>
      </div>
  )}
}


// ———————— CONNECT ———————— // 