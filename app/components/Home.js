'use strict';

import React from 'react';

import { Col } from 'react-bootstrap';

import Info from './Info';
import Text from './Text'; 
import Header from './Header';
import Footer from './Footer';

const Home = () => {
  return (
    <div className='home'>
      {/*
        Header component
      */}
      <Header />
      {/*
        Info and Text components rendered in the same row
      */}
      <Col lg={12}>
        <Col lg={3}>
          <Info />
        </Col>
        <Col lg={9}>
          <Text />
        </Col>
      </Col>
      {/*
        Footer component rendered beneath Info and Text components; with text necessary to render page
      */}
      <Col lg={3} lgOffset={3}>
        <Footer />
        <h6>2017</h6>
      </Col>
    </div>
  )
}

export default Home;