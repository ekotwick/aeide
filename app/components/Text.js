'use strict';

import React from 'react';
import { connect } from 'react-redux';

import ListButton from './ListButton';

import { transliterator } from '../language_parsers/transliterators';
import { buildSyllables } from '../language_parsers/parsers';

import { parseLines } from '../reducers/parseLines';
import { scanParsed } from '../reducers/scanLines';
import { toggleParser } from '../reducers/toggleParser';
import { toggleScanner } from '../reducers/toggleScanner';


export class Text extends React.Component {
  constructor(props) {
    super(props);

    this.toggleParser = this.toggleParser.bind(this);
    this.toggleScanner = this.toggleScanner.bind(this);
  }

  toggleParser() {
    let bool = !this.props.toggleParser;
    this.props.dispatchParserToggler(bool);

    let text = this.props.transliteratedText;
    this.props.dispatchParser(text);
  }

  toggleScanner() {
    let bool = !this.props.toggleScanner;
    this.props.dispatchScannerToggler(bool);

    let text = this.props.parsedLines !== '' ? this.props.parsedLines : buildSyllables(this.props.transliteratedText);
    this.props.dispatchScanner(text);
  }

  // componentWillReceiveProps() {

  // }

  render() {
    let parseBool = this.props.toggleParser;
    let scanBool = this.props.toggleScanner;
    let parsed = this.props.parsedLines;
    let scanned = this.props.scannedLines;
    let translit = this.props.transliteratedText;

    return (
      <div className='text'>
        <ul className='text-buttons'>
          <ListButton
            className='text-button'
            title="Build Syllables"
            cb={toggleParser}
          />
          <ListButton
            className='text-button'
            title="Display Lengths"
            cb={toggleScanner}
          />
        </ul>
        <h4 className="section-heading">Homer, <i>Iliad</i>, lines 1-7</h4>
        <br/>
        <br/>
        <br/>
        <p className='greek-content'>{ parseBool ? scanBool ? scanned : parsed : translit }</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  parsedLines: state.parsedLines,
  scannedLines: state.scannedLines,
  transliteratedText: state.transliteratedText,
  toggleParser: state.toggleParser,
  toggleScanner: state.toggleScanner
});

const mapDispatchToProps = dispatch => {
  return {
    dispatchParserToggler: (bool) => {
      dispatch(toggleParser(bool));
    },
    dispatchScannerToggler: (bool) => {
      dispatch(toggleScanner(bool));
    },
    dispatchParser: (text) => {
      dispatch(parseLines(text));
    },
    dispatchScanner: (text) => {
      dispatch(scanParsed(text));
    }
  }
}

export default connect()(Text);

