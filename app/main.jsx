'use strict'
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Routes from './routes';

const Main = () => (
    <Provider store={store}>
      <Routes />
    </Provider>
)

render (
  <Main />,
  document.getElementById('main')
)