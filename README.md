### AEIDE

'aeide' (ancient Greek for 'sing') is an app for reading Homeric (hexametric poetry). 

It takes Greek text as an input and returns as an output the syllables that form the hexametric verse. This is fundamentally a _scanning_ app. To _scan_ poetry is to assign to each syllable of the verse an appropriate stress (in English) or length (in Greek). Scansion requires, first, building the syllables that compose the line, and second, determining the length of each syllable. 

The rules for building syllables of Greek verse are, so to speak, para-grammatical. To determine the syllables, the algorithm must take into account the entire line, rather than just a given word.

The rules for assigning length derive from a combination of how the syllable is formed (is the vowel intrinsically long or short? does the syllable end with a consonant?), how the syllables stand in relation to one another (does a syllable end in a plosive and is it followed by a syllable that begins with a liquid?), and also from the demands of dactylic hexametrical verse (each foot has either long-long or long-short-short rythmical pattern). 

This is a work in progress and there much still to be done:
 - add diacritical marks
 - add complete Greek alphabet
 - add conditions for measuring the rhythm of formal names 
 - *improve* the algorithm that assigns length to syllables 
 - fill out the writing and scanning guides
 - make the transliteration function more intuitive/inline with accepted Enlgish-Greek transliteration conventions
 - and much much else 
 
 https://git.heroku.com/aeide.git
