import React from 'react';
import { transliterator } from '../utility/transliterators';
import { buildSyllables } from '../utility/parsers';
import Paper from 'material-ui/Paper';

export default function TextOutPut (props) {

  const paperStyle = {
    height: 1000,
  }

  const showScansion = props.showScansion; 
  const scannedLines = props.scannedLines;
  const transliterated = props.currentTransliterated;
  const showSyllables = props.showSyllables;
  const syllables = props.syllables;

  return (
    <div>
      <Paper style={paperStyle} zDepth={3}>
        <pre className='output' rows='20'> {showSyllables ? syllables : showScansion ? scannedLines : transliterated } </pre>
      </Paper>
    </div>
  )
}
