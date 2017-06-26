'use strict';

import React from 'react';

import ListButton from './ListButton';

import { transliterator } from '../language_parsers/transliterators';
import { buildSyllables } from '../language_parsers/parsers';

const Text = () => {

  const parsed = false;
  const scanned = false;

  const Iliad = "mEnin aeide Tea pElEiadeO axilEoc \n oulomenEn E muri axaiois alge eTEke \n pollas diPTimous Suxas aïdi proiaPen \n ErOOn autous de elOria teuxe kunessin \n oiOnoisi te pasi dios d'eteleieto boulE \n eX ou dE ta prOta diastEtEn episante \n ateidEs te anaX andrOn kai dios axilleus"

  const transliterated = transliterator(Iliad);
  const syllables = buildSyllables(transliterated);

  console.log(transliterated);
  console.log(syllables);

  const showSyllables = () => null;

  const showLength = () => null

  return (
    <div className='text'>
      <ul className='text-buttons'>
        <ListButton
          className='text-button'
          title="Build Syllables"
          cb={showSyllables}
        />
        <ListButton
          className='text-button'
          title="Display Lengths"
          cb={showLength}
        />
      </ul>
      <h4 className="section-heading">Homer, <i>Iliad</i>, lines 1-7</h4>
      <br/>
      <br/>
      <br/>
      <p className='greek-content'>{ scanned ? transliterated : syllables }</p>
    </div>
  )
}

export default Text;