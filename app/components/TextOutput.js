import React from 'react';
import { transliterator } from '../utility/transliterators';
import { buildSyllables } from '../utility/parsers';

export default function TextOutPut (props) {

  let scanText = props.currentScanner;

  const toProcess = props.currentState;
  const transliterated = transliterator(toProcess);

  const scanned = 'scan text!';

  const toggleScanner = () => {
    props.toggleScanner();
  };

  // do something with `setScanned` function

  return (
    <div>
      <pre className='output' rows='20'> {scanText ? scanned : transliterated} </pre>
      <button type='submit' className='btn' onClick={ toggleScanner }>Toggle Scanner</button>
    </div>
  )
}