import React from 'react';
import { connect } from 'react-redux';

import TextInput from './TextInput';
import TextOutput from './TextOutput';

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
            <TextInput />
          </div>
          <div className='col-lg-6'>
            <TextOutput />
          </div>
        </div>
      </div>
  )}
}


// ———————— CONNECT ———————— // 