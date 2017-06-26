'use strict';

import React from 'react';
import { connect } from 'react-redux';
import SkyLight from 'react-skylight';

import { Row } from 'react-bootstrap';

import ListButton from './ListButton';
import { AboutApp, AboutHexameter, ComingSoon } from './SkyLightText';

class Info extends React.Component {
  constructor(props) {
    super(props);

    this.aboutApp = this.aboutApp.bind(this);
    this.aboutHexameter = this.aboutHexameter.bind(this);
    this.comingSoon = this.comingSoon.bind(this);
  }

  aboutApp() {
    this.refs.aboutApp.show();

    this.refs.aboutHexameter.hide();
    this.refs.soon.hide();
  }

  aboutHexameter() {
    this.refs.aboutHexameter.show();

    this.refs.aboutApp.hide();
    this.refs.soon.hide();
  }

  comingSoon() {
    this.refs.soon.show();

    this.refs.aboutApp.hide();
    this.refs.aboutHexameter.hide();
  }

  render() {
    return (
      <div className='info'>
        <ul className='vert-buttons'>
          <ListButton
            className='vert-button'
            title="About this app"
            cb={this.aboutApp}
          />
          <ListButton
            className='vert-button'
            title="About Greek hexameter"
            cb={this.aboutHexameter}
          />
          <ListButton
            className='vert-button'
            title="Coming soon"
            cb={this.comingSoon}
          />
        </ul>
          <SkyLight className='skylight' dialogStyles={styles.myDialog} hideOnOverlayClicked ref='aboutApp'>
            <AboutApp />
          </SkyLight>
          <SkyLight className='skylight' dialogStyles={styles.myDialog} hideOnOverlayClicked ref='aboutHexameter'>
            <AboutHexameter />
          </SkyLight>
          <SkyLight className='skylight' dialogStyles={styles.myDialog} hideOnOverlayClicked ref='soon'>
            <ComingSoon />
          </SkyLight>
      </div>
    )
  }
};

export default Info;

const styles = {
  myDialog: {
    backgroundColor: 'rgba(50, 0, 96, 0.9)',
    color: '#ffffff',
    width: '85%',
    height: '85%',
    fontSize: '1.5em',
    padding: '2em',
    position: 'fixed',
    zIndex: 500,
    lineHeight: '2em',
    // vertical alignment
    top:0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
  }
};