'use strict';

import { buildSyllables } from '../language_parsers/parsers';

const SET_PARSED_LINES = 'SET_PARSED_LINES';

const reducer = (state='', action) => {
  switch(action.type) {
    case SET_PARSED_LINES:
      return action.data;
  }
  return state;
}

export const setParsedLines = (data) => ({
  type: SET_PARSED_LINES, data
});

export const parseLines = (unparsed) => 
  dispatch => {
    const parsed = buildSyllables(unparsed);
    dispatch(setParsedLines(parsed));
  }

export default reducer;