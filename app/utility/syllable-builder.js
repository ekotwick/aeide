import { engToGrk, greekVowels, greekConsonants } from './dictionary';

export const findDipthongs = (ch1, ch2, ch3, s, i) => {
  switch (ch1) {
    case '\u03B1': 
      if(ch2 === '\u03CA') { // case aï
        return '\u03B1'
      }
      if(ch2 === '\u03C5') { // case au
        return '\u03B1\u03C5';
      } else if (ch2 === '\u03B9') { // case ai
        return '\u03B1\u03B9';
      }
      break;
  
    case '\u03B5': 
      if(ch2 === '\u03B9') { // case ei
        return '\u03B5\u03B9';
      } else if (ch2 === '\u03C9' && ch3 === '\u0020') { // case ew
        return '\u03B5\u03C9'
      } else if (ch2 === '\u03C9' && ch3 === '\u03BD') { // case ewn
        return '\u03B5\u03C9\u03BD'
      } else if (ch2 === '\u03C5') { // case eu
        return '\u03B5\u03C5';
      }
      break;

    case '\u03B7': // case hu
      if (ch2 === '\u03C5') {
        return '\u03B7\u03C5';
      }
      break;
      
    case '\u03BF': // 
      if(ch2 === '\u03B9') { // case oi
        if (checkPrefix(s,i)) return '\u03BF'; // except cases pro-i
        return '\u03BF\u03B9';
      } else if (ch2 === '\u03C5') { // case ou
        return '\u03BF\u03C5';
      }
      break;

    case '\u03C5':
      if (ch2 === '\u03B9') { // case ui
        return '\u03C5\u03B9';
      } 
      break;
    
    default: 
      return ch1;
  }
  return ch1

};

export const checkWhiteSpace = ch => {
  if (ch === '\u0020') return true;
  return false;
};

export const checkConsonants = (ch1, ch2, ch3) => {

  if (checkWhiteSpace(ch1)) {
    if (greekConsonants.includes(ch2) && greekConsonants.includes(ch3)) return ch2;
    return ch1;
  }
  if (checkWhiteSpace(ch2)) {
    if (greekConsonants.includes(ch3)) return ch1;
    return '';
  }
  if (greekConsonants.includes(ch2)) return ch1;
  return '';

};

export const checkVowels = (ch1, ch2, ch3, s, i) => {
  if (ch1 === '\u03B1' || ch1 === '\u03B5' || ch1 === '\u03BF') return findDipthongs(ch1, ch2, ch3, s, i);
  return ch1;
};

export const vowelCompletes = (ch1, ch2, ch3) => {
  let case1 = false;
  let case2 = false;
  if (checkWhiteSpace(ch1)) {
    case1 = true;
  }
  if (!(greekConsonants.includes(ch2) && greekConsonants.includes(ch3))) {
    case2 = true;
  }
  return case1 && case2;
};

export const checkPrefix = (s, i) => {
  if (s.substring(i-3,i) === '\u0020\u03C0\u03C1') return true; // case : '_pro-i'
  if (s.substring(i-5,i) === '\u03B1\u03C0\u03BF\u03C0\u03C1') return true // case: 'apopro-i'
  if (s.substring(i-5,i) === '\u03B5\u03C0\u03B9\u03C0\u03C1') return true // case: 'epipro-i'
  return false;
};

export const syllablesOneLine = s => {

  let parsed = '';

  let j = 0;
  let i = 0;
  console.log(i, s[i])
  while (i < s.length && j < 100) {
    j++

    // leading whitespace
    while (checkWhiteSpace(s[i])) {
      i++;
    }
    // leading vowel
    if (greekVowels.includes(s[i])) {

      let vowels = checkVowels(s[i], s[i+1], s[i+2], s, i);
      parsed += vowels;
      i += vowels.length;

      if (vowels.length && greekVowels.includes(s[i])) {
        parsed += ' \u00B7 '
        continue;
      }

      // vowel completes syllable
      if (vowelCompletes(s[i],s[i+1],s[i+2])) {
        parsed += ' \u00B7 ';
        continue;
      }

      // case: line ends with consonant
      if (i === s.length - 1 && greekConsonants.includes(s[i])) {
        parsed += s[i];
        i++;
        continue;
      }

      // when vowel swallows succeeding consonant
      let consonants = checkConsonants(s[i], s[i+1], s[i+2]);
      if (consonants.length || i === s.length - 1) {
        parsed += consonants; 
        i += consonants.length; 
        parsed += ' \u00B7 '
        continue;
      } else {
        parsed += ' \u00B7 '
        continue;
      }
    // leading consonants
    } else if (greekConsonants.includes(s[i])) {

      parsed += s[i];
      i++;
      // if two consonants (e.g., 'pneuma') 
      if(greekConsonants.includes(s[i])) {
        parsed += s[i];
        i++;
      }
      // consonant ends syllable (most likely unnecessary)
      while (checkWhiteSpace(s[i])) { 
        i++;
      }
      // vowel succeeds leading consonant(s); play vowel game again
      if (greekVowels.includes(s[i])) {
        let vowels = checkVowels(s[i], s[i+1], s[i+2], s, i);
        parsed += vowels;
        i += vowels.length;

        if (vowels.length && greekVowels.includes(s[i])) {
          parsed += ' \u00B7 '
          continue;
        }

        if (vowelCompletes(s[i],s[i+1],s[i+2])) {
          parsed += ' \u00B7 ';
          continue;
        }

        if (i === s.length - 1 && greekConsonants.includes(s[i])) {
          parsed += s[i];
          i++;
          continue;
        }

        let consonants = checkConsonants(s[i], s[i+1], s[i+2]);
        parsed += consonants;
        i += consonants.length; 
        if (checkWhiteSpace(s[i-1])) {
          i++;
        }

      }

    // overkill protection against infinite loops
    if (i >= s.length) {
      i++;
    } else {
      parsed += ' \u00B7 ';
    }

  } // end while loops
}
  return parsed;
}