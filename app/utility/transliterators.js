import { engToGrk } from './dictionary';

// export const transliterator = str => {
//   const lineBreak = str.match(/\n/g);
//   const output = lineBreak ? 'true' : 'false';
//   return output;
// }

export const transliterator = str => {
  return str.split('\n').map(line => {
    return line.split('').map(ch => engToGrk[ch]).join('');
  }).join('\n');
};

// export const transliterateCharacter = ch => {
//   return engToGrk[ch]
// }