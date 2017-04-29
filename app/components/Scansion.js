import React from 'react';
import { connect } from 'react-redux';

import TextInput from './TextInput';
import TextOutput from './TextOutput';

// ———————— COMPONENT ———————— // 

export default class Scansion extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }

    this.setInput = this.setInput.bind(this);
  }

  setInput(text) {
    this.setState({text});
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-6'>
            <TextInput 
              setInput={this.setInput}
              currentState={this.state.text}/>
          </div>
          <div className='col-lg-6'>
            <TextOutput 
              currentState={this.state.text}/>
          </div>
        </div>
      </div>
  )}
}


// ———————— CONNECT ———————— // 