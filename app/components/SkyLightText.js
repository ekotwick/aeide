'use strict';

import React from 'react';

export const AboutApp = () => {
  return (
    <div>
      <h4>What is AEIDE?</h4>
      <br/>
      <p className='info-text'>
        AEIDE (the imperative for 'sing' in ancient Greek) is an app for reading Homeric (hexametric) poetry. (Homer wrote in hexameter, but that is not the only meter the Greek language supported.) The app takes a line of Greek poetry, parses it, and splits the line into its component syllables. This allows users to see how lines of ancient Greek poetry are rhythmically built and, hopefully, better hear it as well. It does this without requiring the reader to know how to parse and scan lines of ancient Greek (though reading knowledge is presumed).
      </p>
      <br/>
      <p className='info-text'>
        The app was built by Edmond Kotwick as part of his education at Fullstack Academy of Code. It is a Javascript application built using React, Express, React-Redux, Bootstrap, Webpack, and a Greek parsing algorithm that Edmond built by hand. For further information, <a href='https://www.youtube.com/watch?v=rpqSlhLx7iE&t=1s' target='_blank'>please watch</a>!
      </p>
    </div>
  )
}

export const AboutHexameter = () => {
  return (
    <div>
      <h4>The Hexameter</h4>
      <br/>
      <p className='info-text'>
        'Meter' describes how a line of poetry is built rhythmically. A 'hexameter' is a line of poetry built from six rhythmic units called 'feet'. The Greek hexametric unit is always composed of one long syllable followed by either another long syllable or two short syllables.
      </p>
      <br/>
      <p className='info-text'>
        Unlike English, Greek the rhythm of words is not determined by stress; instead it is determined by length. Further, the Greek language is much more fluid than English, with the boundaries of words often blending into one another when spoken. The consequence of this is that individual words do not alone determine what a syllable will look like. Rather, the syllable can be formed using sounds from adjacent words. This added considerable difficulty when building the parsing algorithm.
      </p>
    </div>
  )
}

export const ComingSoon = () => {
  return (
    <div>
      <h4>Coming Soon</h4>
      <br/>
      <p className='info-text'>
        Right now the app is only built to demonstrate the parsing algorithm. The following future features are planned:
      </p>
      <br/>
      <ul className='info-list-ul'>
        <li className='info-list'>improvement of parsing algorithm to work with upper case characters and diacritical marks</li>
        <li className='info-list'>completion of the algorithm that assigns length to each syllable</li>
        <li className='info-list'>pesistent users</li>
        <li className='info-list'>user permission to input their own Greek text using English language characters</li>
        <li className='info-list'>more lines from Homer</li>
      </ul>
    </div>
  )
}