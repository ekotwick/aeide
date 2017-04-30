import React from 'react';
import { connect } from 'react-redux';

import TextInput from './TextInput';
import TextOutput from './TextOutput';
import Sidebar from './ScansionSidebar'; 
import Header from './ScansionHeader';
import { transliterator } from '../utility/transliterators';
// import { buildSyllables } from '../utility/parsers';

// ———————— COMPONENT ———————— // 

export default class Scansion extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      text: '',
      transliterated: '',
      syllables: '',
      scan: false
    }

    this.setText = this.setText.bind(this);
    this.setTransliterated = this.setTransliterated.bind(this);
    this.setSyllables = this.setSyllables.bind(this);
    this.toggleScanner = this.toggleScanner.bind(this);
  }

  setText(text) {
    this.setState({text});
  }

  setTransliterated(toTransliterate) {
    const transliterated = transliterator(toTransliterate)
    this.setState({transliterated});
  }

  setSyllables(syllables){
    // const transliterated = this.state.transliterated;
    // const syllables = buildSyllables(syllables);
    this.setState({syllables})
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
        <div>
          <Header />
        </div>
        <div className='row'>
          <div className='col-lg-2'>
            <Sidebar />
          </div>
          <div className='col-lg-5'>
            <TextInput 
              setText={this.setText}
              currentText={this.state.text}
              setTransliterated={this.setTransliterated}/>
          </div>
          <div className='col-lg-5'>
            <TextOutput 
              currentTransliterated={this.state.transliterated}
              currentScanner={this.state.scan}
              toggleScanner={this.toggleScanner}
              setSyllables={this.setSyllables}
              syllables={this.state.syllables}/>
          </div>
        </div>
      </div>
  )}
}


// ———————— CONNECT ———————— // 