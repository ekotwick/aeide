import React from 'react';
import { transliterator } from '../utility/transliterators';

export default function TextOutPut (props) {

  const toProcess = props.currentState;
  const output = transliterator(toProcess);

  return (
    <div>
      <pre className='output' placeholder='See Greek script appear here' rows='20'> {output} </pre>
    </div>
  )
}