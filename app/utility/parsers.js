import { syllablesOneLine } from './syllable-builder';

export const buildSyllables = str => {
  return str.split('\n').map(line => {
    let trimmed = line.trim();
    return syllablesOneLine(trimmed);
  }).join('\n');
};
