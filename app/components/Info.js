'use strict';

import React from 'react';
import { connect } from 'react-redux';

import { Row } from 'react-bootstrap';

import ListButton from './ListButton';

const Info = () => {

  const aboutApp = () => null;

  const aboutHexameter = () => null;

  const comingSoon = () => null;

  return (
    <div className='info'>
      <ul className='vert-buttons'>
        <ListButton
          className='vert-button'
          title="About this app"
          cb={aboutApp}
        />
        <ListButton
          className='vert-button'
          title="About Greek hexameter"
          cb={aboutHexameter}
        />
        <ListButton
          className='vert-button'
          title="Coming soon"
          cb={comingSoon}
        />
      </ul>
    </div>
  )
};

export default Info;