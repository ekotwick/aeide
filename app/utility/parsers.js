import { syllablesOneLine } from './syllable-builder';
import { scanLine } from './line-scanner';

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
