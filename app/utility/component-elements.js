import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';

// components listed alphabetically

// provides buttons for sidebar
export const button = (label, toggleFunction) => {
  return (
    <li>
      <span><FlatButton 
        hoverColor={'blue'}
        fullWidth={true}
        onTouchTap={toggleFunction}
        label={label}/></span>
    </li>
  )
}

