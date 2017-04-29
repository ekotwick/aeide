import React from 'react';
import { transliterator } from '../utility/transliterators';

export default function TextInput (props) {

  const textEnter = e => {
    console.log(e.target.value)
    // props.setInput(transliterator(e.target.value)); // setting the state with greek text
    props.setInput(e.target.value);
  }

  const handleSubmit = () => {
    let currentState = props.currentState;
    console.log(currentState);
  }

  return (
    <div>
      <form className='form-vertical' onSubmit={ handleSubmit }>
        <fieldset>
          <textarea className='form-control input' rows='20' placeholder='Enter transliterated Greek here' onChange={ textEnter } />
          <button type="submit" className="btn">
            Save Session
          </button>
        </fieldset>
      </form>
    </div>
  )
}