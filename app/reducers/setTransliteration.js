'use strict';

const SET_TRANSLITERATED_TEXT = 'SET_TRANSLITERATED_TEXT';

////////  DEMO ONLY
////////
////////////
import { transliterator } from '../language_parsers/transliterators';
const english = "mEnin aeide Tea pElEiadeO axilEoc \n oulomenEn E muri axaiois alge eTEke \n pollas diPTimous Suxas aïdi proiaPen \n ErOOn autous de elOria teuxe kunessin \n oiOnoisi te pasi dios d'eteleieto boulE \n eX ou dE ta prOta diastEtEn episante \n ateidEs te anaX andrOn kai dios axilleus"
const defaultState = transliterator(english);
////////////
////////////
////////////

const reducer = (state=defaultState, action) => {
  switch(action.type) {
    case SET_TRANSLITERATED_TEXT:
      return action.data;
  }
  return state;
}

export const setTransliteratedText = (data) => ({
  type: SET_TRANSLITERATED_TEXT, data
});

export default reducer;