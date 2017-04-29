import React from 'react';

export default function TextInput (props) {

  const textEnter = e => {
    console.log(e.target.value);
  }

  const handleSubmit = () => {
    console.log('submit handled');
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