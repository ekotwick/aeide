'use strict';

const TOGGLE_SCANNER = 'TOGGLE_SCANNER';

const reducer = (state={}, action) => {
  switch(action.type) {
    case TOGGLE_SCANNER:
      return action.data;
  }
  return state;
}

export const toggleScanner = data => ({
  type: TOGGLE_SCANNER, data
});

export default reducer;
