'use strict';

import React from 'react';
import SkyLight from 'react-skylight';

import Email from './SkyLightText';

class Footer extends React.Component {
  constructor(props) {
    super(props)

    this.displayEmail = this.displayEmail.bind(this);
  }

  displayEmail() {
    this.refs.email.show();
  }

  render() {
    return (
      <div className='footer'>
        <h4>App by Edmond Kotwick</h4>
        <ul className='share-buttons'>
          <li><a href='https://www.linkedin.com/in/edmondkotwick/' target='_blank' title='Connect on LinkedIn'><img alt='Connect on LinkedIn' src='https://s3-us-west-2.amazonaws.com/aeide/LinkedIn.png'/></a></li>
          <li><a href='https://github.com/ekotwick/' target='_blank' title='Check out other word'><img alt='Check out my GitHub' src='https://s3-us-west-2.amazonaws.com/aeide/GitHub-Mark-32px.png'/></a></li>
        </ul>
      </div>
    )
  }
}

export default Footer;