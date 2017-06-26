'use strict';

import React from 'react';

export const displayLines = (parsed) => {
  if (!parsed) return;
  return parsed
          .split('\n')
          .map(line => line.trim())
          .map((line, idx) => (
            <p key={idx.toString()}>
              {line}
            </p>
          ));
}

