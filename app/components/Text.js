'use strict';

import React from 'react';

import ListButton from './ListButton';

const Text = () => {

  const showSyllables = () => null;

  const showLength = () => null

  return (
    <div className='text'>
      <ul className='toggles'>
        <ListButton
          title="Build Syllables"
          cb={showSyllables}
        />
        <ListButton
          title="Display Lengths"
          cb={showLength}
        />
      </ul>
      <h4 className="section-heading">SAMPLE</h4>
      <br/>
      <br/>
      <p>SAMPLESAMPLESAMPLESAMPLESAMPLESAMPLESAMPLESAMPLESAMPLESAMPLESAMPLESAMPLESAMPLESAMPLESAMPLESAMPLESAMPLESAMPLESAMPLESAMPLE</p>
    </div>
  )
}

export default Text;