'use strict';

import React from 'react';

import Info from './Info';
import Text from './Text'; 

// const Home = () => (
//   <div className='home'>
//     <Info />
//     <Text />
//   </div>
// );
const Home = () => {
  return (
    <div className='home'>
      <div className='header'>
        <h3 className='name'>AEIDE</h3>
        <p className='dev'>App by E.Kotwick</p>
        <ul>
          <li>LinkedIn</li>
          <li>GitHub</li>
        </ul> 
      </div>
      <Info />
      <Text />
    </div>
  )
}

export default Home;