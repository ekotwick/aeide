'use strict';

import React from 'react';

const ListButton = (props) => {
  const title = props.title;
  const cb = props.cb;
  return (
    <li>
      <button type='button' onClick={cb}>{title}</button>
    </li>
  )
};

export default ListButton;