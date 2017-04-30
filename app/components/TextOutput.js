import React from 'react';
import { transliterator } from '../utility/transliterators';
import { buildSyllables } from '../utility/parsers';
import Paper from 'material-ui/Paper';

export default function TextOutPut (props) {

  const paperStyle = {
    height: 400,
  }

  const transliterated = props.currentTransliterated;
  let scanText = props.currentScanner;
  const syllables = props.syllables;

  const toggleScanner = () => {
    props.toggleScanner();
    const builtSyllables = buildSyllables(transliterated);
    props.setSyllables(builtSyllables);
    console.log('\n\nset syllables called\n\n')
    console.log(props.currentTransliterated)
  };

  return (
    <div>
      <Paper style={paperStyle} zDepth={3}>
        <pre className='output' rows='20'> {scanText ? syllables : transliterated } </pre>
        <button type='submit' className='btn' onClick={ toggleScanner }>Toggle Scanner</button>
      </Paper>
    </div>
  )
}