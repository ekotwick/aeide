'use strict';

import React from 'react';
import { connect } from 'react-redux';

import ListButton from './ListButton';

import { buildSyllables, mapScanToSyllables } from '../language_parsers/parsers';

import { parseLines } from '../reducers/parseLines';
import { scanParsed } from '../reducers/scanLines';
import { toggleParser } from '../reducers/toggleParser';
import { toggleScanner } from '../reducers/toggleScanner';

import { displayLines } from '../utils/buildJSX';


export class Text extends React.Component {
  constructor(props) {
    super(props);

    this.toggleParser = this.toggleParser.bind(this);
    this.toggleScanner = this.toggleScanner.bind(this);
  }

  toggleParser() {
    let parseBool = this.props.toggleParser;
    this.props.dispatchParserToggler(!parseBool);

    let scanBool = this.props.toggleScanner;
    if (parseBool && scanBool) {
      this.props.dispatchScannerToggler(!scanBool);
    }

    let text = this.props.transliteratedText;
    this.props.dispatchParser(text);
  }

  toggleScanner() {
    let scanBool = this.props.toggleScanner;
    let parseBool = this.props.toggleParser;

    if (!parseBool && !scanBool) {
      this.props.dispatchParserToggler(!parseBool);
      this.props.dispatchScannerToggler(!scanBool);
    } else if (parseBool) {
      this.props.dispatchScannerToggler(!scanBool);
    }

    let text = this.props.parsedLines !== '' ? this.props.parsedLines : buildSyllables(this.props.transliteratedText);
    this.props.dispatchScanner(text);
  }

  render() {
    let parseBool = this.props.toggleParser;
    let scanBool = this.props.toggleScanner;

    let parsed = displayLines(this.props.parsedLines);
    let translit = displayLines(this.props.transliteratedText);

    let mappedLines = mapScanToSyllables(
                        this.props.parsedLines,
                        this.props.scannedLines
                       );
    let scanned = displayLines(mappedLines);

    return (
      <div className='text'>
        <ul className='text-buttons'>
          <ListButton
            className='text-button'
            title={parseBool ? "Show Lines" : "Show Syllables"}
            cb={this.toggleParser}
          />
          <ListButton
            className='text-button disabled-button'
            title="Display Lengths"
            cb={null}
          />
        </ul>
        <h4 className="section-heading">Homer, <em>Iliad</em>, lines 1-7</h4>
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

export default connect(mapStateToProps, mapDispatchToProps)(Text);

