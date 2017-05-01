import { engToGrk, greekVowels, greekConsonants } from './dictionary';

export const findDipthongs = (ch1, ch2, ch3, s, i) => {
  switch (ch1) {
    case '\u03B1': // case alpha: first au; second ai
      if(ch2 === '\u03CA') {
        return '\u03B1'
      }
      if(ch2 === '\u03C5') { // u
        return '\u03B1\u03C5';
      } else if (ch2 === '\u03B9') { // i 
        return '\u03B1\u03B9';
      }
      break;
  
    case '\u03B5': // case epsilon: first ei; second eu
      if(ch2 === '\u03B9') { // i 
        return '\u03B5\u03B9';
      } else if (ch2 === '\u03C9' && ch3 === '\u0020') { //whitespace
        return '\u03B5\u03C9'
      } else if (ch2 === '\u03C9' && ch3 === '\u03BD') { //nu
        return '\u03B5\u03C9\u03BD'
      } else if (ch2 === '\u03C5') { // u 
        return '\u03B5\u03C5';
      }
      break;

    case '\u03B7': // case eta: hu
      if (ch2 === '\u03C5') {
        return '\u03B7\u03C5';
      }
      break;
      
    case '\u03BF': // case omicron: first oi: second ou
      if(ch2 === '\u03B9') {
        if (checkPrefix(s,i)) return '\u03BF';
        return '\u03BF\u03B9';
      } else if (ch2 === '\u03C5') {
        return '\u03BF\u03C5';
      }
      break;

    case '\u03C5':
      if (ch2 === '\u03B9') {
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
    // leading vowels
    if (greekVowels.includes(s[i])) {

      let vowels = checkVowels(s[i], s[i+1], s[i+2], s, i);
      parsed += vowels;
      i += vowels.length;

      if (vowels.length && greekVowels.includes(s[i])) {
        parsed += ' \u00B7 '
        continue;
      }

      // jump to next iteration
      if (vowelCompletes(s[i],s[i+1],s[i+2])) {
        parsed += ' \u00B7 ';
        continue;
      }

      // check ending consonants
      if (i === s.length - 1 && greekConsonants.includes(s[i])) {
        parsed += s[i];
        i++;
        continue;
      }

      // check consonants: take one consonant to parsed if two successive consonants
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
    // end leading vowels
    // leading consonants
    } else if (greekConsonants.includes(s[i])) {
      // add consonant to parsed
      parsed += s[i];
      i++;
      // if two consonants (e.g., 'pneuma') add the second to parsed 
      if(greekConsonants.includes(s[i])) {
        parsed += s[i];
        i++;
      }
      // jump to next iteration if whitespace is next character
      while (checkWhiteSpace(s[i])) { // this case does not happen
        i++;
      }
      // next character must be vowel: play the same vowel game as above
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
    // end leading consonants
    // now add spacer and move to next
    if (i >= s.length) {
      i++;
    } else {
      parsed += ' \u00B7 ';
    }

  } // end while loops
}
  return parsed;
}