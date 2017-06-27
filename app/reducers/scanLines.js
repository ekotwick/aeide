'use strict'

import { scanLines } from '../language_parsers/parsers';

const SET_SCANNED_LINED = 'SET_SCANNED_LINED';

const reducer = (state='', action) => {
  switch(action.type) {
    case SET_SCANNED_LINED:
      return action.data;
  }
  return state;
}

export const setScannedLines = (data) => ({
  type: SET_SCANNED_LINED, data
});

export const scanParsed = (parsed) => 
  dispatch => {
    const scanned = scanLines(parsed);
    dispatch(setScannedLines(scanned));
  }

export default reducer;