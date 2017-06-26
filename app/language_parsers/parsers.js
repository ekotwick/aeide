import { syllablesOneLine } from './syllable-builder';
import { scanLine } from './line-scanner';
import { alphabet } from './dictionary';

export const buildSyllables = str => {
  return str.split('\n').map(line => {
    let trimmed = line.trim();
    return syllablesOneLine(trimmed);
  }).join('\n');
};

export const scanLines = str => {
  return str.split('\n').map(line => {
    let trimmed = line.trim();
    return scanLine(trimmed);
  }).join('\n');
}

export const mapScanToSyllables = (syllables, lengths) => {
  if (!syllables || !lengths) return undefined;

  let syllArray = syllables.split('\n');
  let lenArray = lengths.split('\n')

  let result = '';

  for (let i = 0; i < lenArray.length; i++) {

    let syll = syllArray[i];
    let len = lenArray[i].split(',');
    let measures = '';
    measures += '\u0336';


    let k = 1;
    for (let j = 1; j < syll.length; j++) {

      if (syll[j-1] === ' ' && alphabet.includes(syll[j])) {
        if (len[k] === 'L') {
          measures += '\u0336';
        } else {
          measures += 'v';
        }
        k += 1;
      } else {
        measures += ' ';
      }
    }
    result += `${measures} \n ${syll} \n\n`;
  };

  return result;

};