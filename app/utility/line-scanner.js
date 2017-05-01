import { greekVowels, 
         greekConsonants, 
         longVowels, 
         plosives, 
         liquids,
         wildcards,
         doubleConsonants
       } from './dictionary';

export const hasLongVowel = syllable => {
  for (let i = 0; i < longVowels.length; i++) {
    if (syllable.includes(longVowels[i])) return true;
  }
  return false;
};

export const hasDoubleConsonant = syllable => {
  for (let i = 0; i < doubleConsonants.length; i++) {
    if (syllable.includes(doubleConsonants[i])) return true;
  }
  return false;
};

export const hasGenetiveEnding = syllable => {
  if (syllable.includes('\u03B5\u03C9') || syllable.includes('\u03B5\u03C9\u03BD' )) {
    return true;
  }
};

export const scanLine = line => {

  const syllables = line.split(' \u00B7 ');
  const numSyll = syllables.length;
  const lengths = new Array(numSyll);

  const firstSyllable = syllables[0]

  for (let i = 0; i < syllables.length; i++) {

    if (i === 0) {
      lengths[i] = 'LONG';
      continue;
    }

    let curSyll = syllables[i];
    let currLen = curSyll.length;
    let prevSyll = syllables[i-1];
    let prevLen = prevSyll.length;

    // evaluate current syllable
    if (hasLongVowel(curSyll) || greekConsonants.includes(curSyll[currLen - 1])) {
      lengths[i] = 'LONG';
    } else {
      lengths[i] = 'SHORT';
    }

    // reevaluate previous syllable
    if (hasDoubleConsonant(curSyll)) {
      lengths[i-1] = 'LONG';
    }

    if (greekVowels.includes(curSyll[0]) && greekVowels.includes(prevSyll[prevLen-1]) && !hasGenetiveEnding(prevSyll)) {
      lengths[i-1] = 'SHORT';;
    }

    if (hasGenetiveEnding(curSyll)) {
      lengths[i] = 'LONG';
    }

    // possible exception to rule:
    // if (liquids.includes(curSyll[0]) && plosives.includes(prevSyll[prevLen-1]) && !hasLongVowel(prevSyll)) {
    //   console.log('D',curSyll)
    //   lengths[i-1] = 'shrt'
    // }

    // acceptable assumptions:
    // first syllable is _always_ long
    lengths[0] = 'LONG';
    // last foot _always_ has two syllables, the first of which is _always_ long
    lengths[numSyll - 2] = 'LONG';
    lengths[numSyll - 1] = 'LONG';
    // second from last foot is _almost always_ long-short-short
    lengths[numSyll - 3] = 'SHORT';
    lengths[numSyll - 4] = 'SHORT';
    lengths[numSyll - 5] = 'LONG';

  }

  return lengths;
};

// ##################################################### //
// ######                                        ####### //
// ######  CHECK LENGTHS AGAINST EXPECTED METER  ####### //
// ######                                        ####### //
// ##################################################### //

// const checkLength = (arrayOfLengths, lengths) => {
//   console.log('STRING', arrayOfLengths);
//   console.log('LENGHTS', lengths)
//   let syl = syllables.split(' \u00B7 ')
//   let scanned = lengths.slice();

//   let meter = lengths.join('');
//   let j = 0;
//   let i = 0; 
//   while (i < meter.length && j < 40) {
//     let feet4 = meter.slice(i, i+4);
//     let feet5 = meter.slice(i, i+5);
//     let feet6 = meter.slice(i, i+6);
//     console.log(i, feet4);

//     if (feet5 === '21222') {
//       console.log('first', i, meter[i])
//       let e = syl[i+2];
//       console.log(e)
//       if (!hasLongVowel(e) && !greekConsonants.includes(e[e.length - 1])){
//         console.log('here',scanned[i+2])
//         scanned[i+2] = 1;
//         console.log('here',scanned[i+2])
//       }
//       i += 3;
//     } 

//     if (feet4 === '2122') {
//       console.log('second', i, meter[i])
//       let e = syl[i+1]
//       console.log(e)
//       if(hasLongVowel(e) || greekConsonants.includes(e[e.length - 1])){
//         scanned[i+1] = 2;
//       }
//       i +=2;
//     }

//     if (feet5 === '21211') {
//       console.log('second', i, meter[i])
//       let e = syl[i+2];
//       if (hasLongVowel(e) || greekConsonants.includes(e[e.length - 1])){
//         scanned[i+1] = 2;
//       }
//       i += 2;
//     }

//     if (feet6 === '212211') {
//       console.log('third', i, meter[i])
//       let e = syl[i+2];
//       if (!hasLongVowel(e) && !greekConsonants.includes(e[e.length - 1])){
//         scanned[i+2] = 1;
//       }
//       i+= 3;
//     }

//     if (feet6 === '221211') {
//       console.log('fourth',i, meter[i])
//       let e = syl[i+1];
//       if (!hasLongVowel(e) && !greekConsonants.includes(e[e.length - 1])){
//         scanned[i+1] = 1;
//       }
//       i += 2;
//     }
//     j++;
//   }
//   return scanned;

// };