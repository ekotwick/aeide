import React from 'react';

export default function TextOutPut (props) {

  const outPut = props.currentState;

  return (
    <div>
      <pre className='output' placeholder='See Greek script appear here' rows='20'> {outPut} </pre>
    </div>
  )
}