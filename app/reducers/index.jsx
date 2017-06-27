import { combineReducers } from 'redux';

import parserReducer from './parseLines';
import scannerReducer from './scanLines';
import transliteratorReducer from './setTransliteration';
import toggleParserReducer from './toggleParser';
import toggleScannerReducer from './toggleScanner';

const rootReducer = combineReducers({
  parsedLines: parserReducer,
  scannedLines: scannerReducer,
  transliteratedText: transliteratorReducer,
  toggleParser: toggleParserReducer,
  toggleScanner: toggleScannerReducer
});

export default rootReducer;