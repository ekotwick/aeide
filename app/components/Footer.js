'use strict';

import React from 'react';

import ListButton from './ListButton';

const Footer = () => {

  const gitHub = () => null;
  const linkedIn = () => null;

  return (
      <div className='footer'>
      <h4>App by E.Kotwick</h4>
      <ul className='footer-buttons'>
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