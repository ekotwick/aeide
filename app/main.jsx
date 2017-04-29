'use strict'
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import store from './store';
import Routes from './routes';

render (
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('main')
);