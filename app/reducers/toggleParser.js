'use strict';

const TOGGLE_PARSER = 'TOGGLE_PARSER';

const reducer = (state=false, action) => {
  switch(action.type) {
    case TOGGLE_PARSER:
      return action.data;
  }
  return state;
}

export const toggleParser = data => ({
  type: TOGGLE_PARSER, data
});

export default reducer;
