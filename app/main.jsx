'use strict'
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from './store';
import Routes from './routes';

// render (
//   <Provider store={store}>
//     <Routes />
//   </Provider>,
//   document.getElementById('main')
// );

const Main = () => (
  <MuiThemeProvider>
    <Provider store={store}>
      <Routes />
    </Provider>
  </MuiThemeProvider>
)

render (
  <Main />,
  document.getElementById('main')
)