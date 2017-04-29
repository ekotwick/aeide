import { engToGrk, greekVowels, greekConsonants } from './dictionary';

export const findDipthongs = (ch1, ch2, ch3) => {
  console.log(ch1, ch2, ' - inside findDipthongs');
  switch (ch1) {
    case '\u03B1': // case alpha: first au; second ai
      if(ch2 === '\u03C5') { // u
        return '\u03B1\u03B5';
      } else if (ch2 === '\u03B9') { // i 
        return '\u03B1\u03B9';
      }
      console.log(ch1, '- no pairs')
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
      console.log(ch1, '- no pairs')
      break;

    case '\u03B7': // case eta: hu
      if (ch2 === '\u03C5') {
        return '\u03B7\u03C5';
      }
      console.log(ch1, '- no pairs')
      break;
      
    case '\u03BF': // case omicron: first oi: second ou
      if(ch2 === '\u03B9') {
        return '\u03BF\u03B9';
      } else if (ch2 === '\u03C5') {
        return '\u03BF\u03C5';
      }
      console.log(ch1, '- no pairs')
      break;

    case '\u03C5':
      if (ch2 === '\u03B9') {
        return '\u03C5\u03B9';
      } 
      console.log(ch1, '- no pairs')
      break;
    
    default: 
      return ch1;
  }
  return ch1
  // return toReturn;
};

export const checkWhiteSpace = ch => {
  if (ch === '\u0020') return true;
  return false;
};

export const checkConsonants = (ch1, ch2, ch3) => {

  if (checkWhiteSpace(ch2)) {
    if (greekConsonants.includes(ch3)) return ch1;
    return '';
  }
  if (greekConsonants.includes(ch2)) return ch1;
  return '';

};

export const checkVowels = (ch1, ch2, ch3) => {
  console.log(ch1, ch2, ' - inside checkVowels');
  if (ch1 === '\u03B1' || ch1 === '\u03B5' || ch1 === '\u03BF') return findDipthongs(ch1, ch2, ch3);
  console.log(ch1, ' - vowel followed by consonant');
  return ch1;
};

export const syllablesOneLine = s => {
  console.log(s[s.length])

  let parsed = '';

  let i = 0; 
  let j = 0;
  while (i < s.length && j < 100) {
    j++

    console.log('#################### STARTING: ', s[i])

    // leading whitespace
    while (checkWhiteSpace(s[i])) {
      console.log('126 - LEADING WHITESPACE')
      i++;
    }
    // leading vowels
    if (greekVowels.includes(s[i])) {
      // add vowels to parsed
      console.log('132 - LEADING VOWEL')

      let vowels = checkVowels(s[i], s[i+1], s[i+2]);
      parsed += vowels;
      i += vowels.length;
      console.log('137 - ', s[i])

      // console.log(parsed)
      if (greekVowels.includes(s[i])) {
        parsed += ' \u2053 ';
        continue;
      } else if (checkWhiteSpace(s[i])){
        // console.log(s[i])
        i++;
      }
      // check consonants: take one consonant to parsed if two successive consonants
      console.log('145 - checking consonants')
      let consonants = checkConsonants(s[i], s[i+1], s[i+2]);
      if (consonants.length || i === s.length - 1) {
        console.log('ENDING')
        console.log(parsed, s[i])
        parsed += s[i];
        i++;
        continue;
      } else {
        parsed += ' \u2053 '
        continue;
      }
      console.log('154 - ', s[i])
    // end leading vowels
    // leading consonants
    } else if (greekConsonants.includes(s[i])) {
      console.log('158 - LEADING CONSONANT')
      // add consonant to parsed
      parsed += s[i];
      i++;
      console.log('162 - ',s[i])
      // if two consonants (e.g., 'pneuma') add the second to parsed 
      if(greekConsonants.includes(s[i])) {
        console.log('165 - succeeding consonant')
        parsed += s[i];
        console.log('167 - ', s[i])
        i++;
      }
      // jump to next iteration if whitespace is next character
      while (checkWhiteSpace(s[i])) {
        i++;
        console.log('leading consonant - breaking cuz whitespace')
        // parsed += ' \u2053 '
        // continue;
      }
      // next character must be vowel: play the same vowel game as above
      if (greekVowels.includes(s[i])) {
        console.log('179 - CLOSING THE SYLLABLE')
        let vowels = checkVowels(s[i], s[i+1], s[i+2]);
        parsed += vowels;
        i += vowels.length;
        console.log('183 - ', s[i])

        if (greekVowels.includes(s[i])) {
          parsed += ' \u2053 ';
          continue;
        } else if (checkWhiteSpace(s[i])){
          // console.log(s[i])
          i++;
        }




        // if (checkWhiteSpace(s[i]) || greekVowels.includes(s[i])) {
        //   console.log('185 - breaking out')
        //   console.log(parsed)
        //   parsed += ' \u2053 '
        //   continue;
        // }

        let consonants = checkConsonants(s[i], s[i+1], s[i+2]);
        if (consonants.length || i === s.length - 1) {
          console.log('ENDING')
          console.log(parsed, s[i])
          parsed += s[i];
          i++
          continue;
        } else {
          parsed += ' \u2053 '
          continue;
        }

      }
    // end leading consonants
    // now add spacer and move to next
    if (i >= s.length) {
      i++;
    } else {
      parsed += ' \u2053 ';
    }
    console.log(parsed)

  } // end while loops
}
  return parsed;
}