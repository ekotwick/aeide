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
      <Col md={12}>
        <Col md={2}>
          <Info />
        </Col>
        <Col md={10}>
          <Text />
        </Col>
      </Col>
      {/*
        Footer component rendered beneath Info and Text components; with text necessary to render page
      */}
      <Footer />
      <h6>2017</h6>
    </div>
  )
}

export default Home;