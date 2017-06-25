'use strict';

import React from 'react';

import ListButton from './ListButton';

const Footer = () => {

  const gitHub = () => null;
  const linkedIn = () => null;

  return (
      <div>
      <p className='dev'>App by E.Kotwick</p>
      <ul>
        <ListButton
          title="GitHub"
          cb={gitHub}
        />
        <ListButton
          title="LinkedIn"
          cb={linkedIn}
        />
      </ul> 
    </div>
  )
}

export default Footer;