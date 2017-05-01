import React from 'react';
import { connect } from 'react-redux';

import TextInput from './TextInput';
import TextOutput from './TextOutput';
import Sidebar from './ScansionSidebar'; 
import Header from './ScansionHeader';
import { transliterator } from '../utility/transliterators';
import { buildSyllables, scanLines } from '../utility/parsers';

export default class Scansion extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      text: '',
      transliterated: '',
      syllables: '',
      showSyllables: false,
      showLengths: false,
      lengths: ''
    }

    this.setText = this.setText.bind(this);
    this.setTransliterated = this.setTransliterated.bind(this);
    this.setSyllables = this.setSyllables.bind(this);
    this.showSyllables = this.showSyllables.bind(this);
    this.showLengths = this.showLengths.bind(this);
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
    console.log(this.state.syllables)
    console.log(lengths);
    this.setState({lengths})
  }

  showLengths() {
    this.setState({showLengths: !this.state.showLengths})
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
              showLengths={this.showLengths}
              setLengths={this.setLengths}
            />
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
              currentScanner={this.state.showSyllables}
              syllables={this.state.syllables}/>
          </div>
        </div>
      </div>
  )}
}
