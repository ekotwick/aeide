import React from 'react';
import { transliterator } from '../utility/transliterators';

export default function TextOutPut (props) {

  let scanText = props.currentScanner;

  const toggleScanner = () => {
    props.toggleScanner();
  };

  const toProcess = props.currentState;
  const transliterated = transliterator(toProcess);
  const scanned = 'scan text!';

  return (
    <div>
      <pre className='output' rows='20'> {scanText ? scanned : transliterated} </pre>
      <button type='submit' className='btn' onClick={ toggleScanner }>Toggle Scanner</button>
    </div>
  )
}