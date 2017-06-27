import { engToGrk } from './dictionary';

export const transliterator = str => {
  return str.split('\n').map(line => {
    return line.split('').map(ch => engToGrk[ch]).join('');
  }).join('\n');
};
