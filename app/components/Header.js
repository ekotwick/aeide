'use strict';

import React from 'react';

const Header = () => {

  const title = '\u03B1\u03B5\u03B9\u03B4\u03B5'

  return (
    <div className='header'>
      <h3 className='header-left'><strong><span style={{fontSize: '1.5em'}}>{title}</span></strong> - an app for Homeric poetry</h3>
    </div>
  )
}

export default Header;