import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

// components listed alphabetically

// provides buttons for sidebar
export const button = (label, toggleFunction) => {
  return (
    <li>
      <span><FlatButton 
        fullWidth={true}
        onTouchTap={toggleFunction}
        label={label}/></span>
    </li>
  )
}

export const toggle = (label, toggleFunction) => {
  return (
    <li>
      <span><Toggle
        label={label}
        onToggle={toggleFunction}
      /></span>
    </li>
  )
}