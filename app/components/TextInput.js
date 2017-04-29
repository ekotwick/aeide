import React from 'react';
// import { transliterator } from '../utility/transliterators'; // REMOVE

export default function TextInput (props) {

  const textEnter = e => {
    props.setText(e.target.value);
    props.setTransliterated(e.target.value);
  }

  const handleSubmit = () => {
    let currentText = props.currentText;
    console.log(currentText);
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