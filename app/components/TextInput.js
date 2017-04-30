import React from 'react';
import Paper from 'material-ui/Paper';
// import { transliterator } from '../utility/transliterators'; // REMOVE

export default function TextInput (props) {

  const paperStyle = {
    height: 1000,
  }

  const textEnter = e => {
    props.setText(e.target.value);
    props.setTransliterated(e.target.value);
  }

  return (
    <div>
      <Paper style={paperStyle} zDepth={3}>
        <textarea className='form-control input' rows='200' placeholder='Enter transliterated Greek here' onChange={ textEnter } />
      </Paper>
    </div>
  )
}