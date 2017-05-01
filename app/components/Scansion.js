import React from 'react';
import { connect } from 'react-redux';

import TextInput from './TextInput';
import TextOutput from './TextOutput';
import Sidebar from './ScansionSidebar'; 
import Header from './ScansionHeader';
import { transliterator } from '../utility/transliterators';
import { buildSyllables, scanLines, mapScanToSyllables } from '../utility/parsers';

export default class Scansion extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      text: '',
      transliterated: '',
      syllables: '',
      showSyllables: false,
      showScansion: false,
      lengths: '',
      scannedLines: ''
    }

    this.setText = this.setText.bind(this);
    this.setTransliterated = this.setTransliterated.bind(this);
    this.setSyllables = this.setSyllables.bind(this);
    this.showSyllables = this.showSyllables.bind(this);
    this.showScansion = this.showScansion.bind(this);
    this.setLengths = this.setLengths.bind(this);
  }

  setText(text) {
    this.setState({text});
  }

  setTransliterated(toTransliterate) {
    const transliterated = transliterator(toTransliterate)
    this.setState({transliterated});
  }

  setSyllables() {
    const transliterated = this.state.transliterated;
    const syllables = buildSyllables(transliterated);
    this.setState({syllables})
  }

  showSyllables() {
    this.setState({showSyllables: !this.state.showSyllables})
  }

  setLengths () {
    const syllables = this.state.syllables;

    const lengths = scanLines(syllables);
    this.setState({lengths})
    console.log(this.state.scannedLines);
    const scannedLines = mapScanToSyllables(syllables, lengths);
    this.setState({scannedLines});
  }

  showScansion() {
    this.setState({showScansion: !this.state.showScansion})
  }

  render() {
    return (
      <div className='container-fluid'>
        <div>
          <Header />
        </div>
        <div className='row'>
          <div className='col-lg-2'>
            <Sidebar 
              currentTransliterated={this.state.transliterated}
              setSyllables={this.setSyllables}
              showSyllables={this.showSyllables}
              syllables={this.state.syllables}
              showScansion={this.showScansion}
              setLengths={this.setLengths}
            />
          </div>
          <div className='col-lg-5'>
            <TextInput 
              setText={this.setText}
              currentText={this.state.text}
              setTransliterated={this.setTransliterated}
            />
          </div>
          <div className='col-lg-5'>
            <TextOutput 
              currentTransliterated={this.state.transliterated}
              showSyllables={this.state.showSyllables}
              syllables={this.state.syllables}
              showScansion={this.state.showScansion}
              scannedLines={this.state.scannedLines}
            />
          </div>
        </div>
      </div>
  )}
}
