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

  let syllArray = syllables.split('\n');
  let lenArray = lengths.split('\n')

  let result = '';

  for (let i = 0; i < lenArray.length; i++) {

    let syll = syllArray[i];
    let len = lenArray[i];
    let measures = new Array(syll.length);

    measures[0] = '\u0336';

    for (let j = 1; j < syll.length; j++) {
      let k = 1;
      if (syll[j-1] === ' ' && alphabet.includes(syll[j])) {
        measures[j] = len[k];
        k++
      } else {
        measures[j] = ' ';
      }
    }

    result += ` ${measures.join('')} \n ${syll} \n`;
  };

  console.log(result);
  return result;

};