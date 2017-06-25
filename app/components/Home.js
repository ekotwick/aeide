'use strict';

import React from 'react';

import Info from './Info';
import Text from './Text'; 
import Footer from './Footer';

const Home = () => {
  return (
    <div className='home'>
      <div className='header'>
        <h3 className='header-left'>AEIDE</h3>
        <h4 className='header-right'>An App for Ancient Greek Poetry</h4>
      </div>
      <Info />
      <Text />
      <Footer />
    </div>
  )
}

export default Home;