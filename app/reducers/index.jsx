import { combineReducers } from 'redux';

import parserReducer from './parseLines';
import scannerReducer from './scanLines';
import transliteratorReducer from './setTransliteration';
import toggleParserReducer from './toggleParser';
import toggleScannerReducer from './toggleScanner';

const rootReducer = combineReducers({
  parseLines: parserReducer,
  scanLines: scannerReducer,
  transliterateText: transliteratorReducer,
  toggleParser: toggleParserReducer,
  toggleScanner: toggleScannerReducer
});

export default rootReducer;