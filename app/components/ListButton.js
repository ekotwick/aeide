'use strict';

import React from 'react';

const ListButton = (props) => {
  const className = props.className || 'button';
  const title = props.title;
  const cb = props.cb;
  return (
    <li>
      <button className={className} type='button' onClick={cb}>{title}</button>
    </li>
  )
};

export default ListButton;