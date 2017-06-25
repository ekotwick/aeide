'use strict';

import React from 'react';
import { connect } from 'react-redux';

import ListButton from './ListButton';

const Info = () => {

  const aboutApp = () => null;

  const aboutHexameter = () => null;

  return (
    <div className='info'>
      <ul className='vert-buttons'>
        <ListButton 
          title="About this app"
          cb={aboutApp}
        />
        <ListButton 
          title="About Greek hexameter"
          cb={aboutHexameter}
        />
      </ul>
    </div>
  )
};

export default Info;