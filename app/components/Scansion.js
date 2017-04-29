import React from 'react';
import { connect } from 'react-redux';

import TextInput from './TextInput';
import TextOutput from './TextOutput';
import { transliterator } from '../utility/transliterators';

// ———————— COMPONENT ———————— // 

export default class Scansion extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      text: '',
      transliterated: '',
      scan: false
    }

    this.setText = this.setText.bind(this);
    this.setTransliterated = this.setTransliterated.bind(this);
    this.toggleScanner = this.toggleScanner.bind(this);
  }

  setText(text) {
    this.setState({text});
  }

  setTransliterated(toTransliterate) {
    const transliterated = transliterator(toTransliterate)
    this.setState({transliterated});
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
              currentText={this.state.text}
              setTransliterated={this.setTransliterated}/>
          </div>
          <div className='col-lg-6'>
            <TextOutput 
              currentTransliterated={this.state.transliterated}
              currentScanner={this.state.scan}
              toggleScanner={this.toggleScanner}/>
          </div>
        </div>
      </div>
  )}
}


// ———————— CONNECT ———————— // 