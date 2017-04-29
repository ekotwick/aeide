import React from 'react';

export default function TextInput (props) {

  const textEnter = e => {
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
          <button type="submit" className="btn btn-success">
            Save Session
          </button>
        </fieldset>
      </form>
    </div>
  )
}