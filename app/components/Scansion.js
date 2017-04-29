import React from 'react';
import { connect } from 'react-redux';

import TextInput from './TextInput';
import TextOutput from './TextOutput';

// ———————— COMPONENT ———————— // 

export default class Scansion extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      text: '',
      scanned: '',
      scan: false
    }

    this.setText = this.setText.bind(this);
    this.setScanned = this.setScanned.bind(this);
    this.toggleScanner = this.toggleScanner.bind(this);
  }

  setText(text) {
    this.setState({text});
  }

  setScanned(scanned) {
    this.setState({scanned});
  }

  toggleScanner() {
    if (!this.state.scan) {
      this.setState({scan: true})
    } else {
      this.setState({scan: false})
    }
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-6'>
            <TextInput 
              setText={this.setText}
              currentState={this.state.text}/>
          </div>
          <div className='col-lg-6'>
            <TextOutput 
              currentState={this.state.text}
              currentScanner={this.state.scan}
              toggleScanner={this.toggleScanner}
              setScanned={this.setScanned}/>
          </div>
        </div>
      </div>
  )}
}


// ———————— CONNECT ———————— // 