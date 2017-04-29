import React from 'react';
import { transliterator } from '../utility/transliterators';
import { buildSyllables } from '../utility/parsers';

export default function TextOutPut (props) {

  const transliterated = props.currentTransliterated;
  let scanText = props.currentScanner;

  const scanned = 'scan text!';

  const toggleScanner = () => {
    props.toggleScanner();
    console.log(props.currentTransliterated)
  };

  return (
    <div>
      <pre className='output' rows='20'> {scanText ? scanned : transliterated } </pre>
      <button type='submit' className='btn' onClick={ toggleScanner }>Toggle Scanner</button>
    </div>
  )
}