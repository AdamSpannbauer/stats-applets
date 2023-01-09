/* eslint-disable react/prop-types */
import React from 'react';
import TextField from '@mui/material/TextField';

function SDInput(props) {
  const {
    value, setter, step, label, onChange: userOnChange,
  } = props;

  const cleanInput = (event) => {
    let v = event.target.value;
    if (v < 0) v = 0;
    setter(v);
  };

  let onChange;
  if (userOnChange === undefined) {
    onChange = (event) => {
      cleanInput(event);
    };
  } else {
    onChange = (event) => {
      cleanInput(event);
      userOnChange(event);
    };
  }

  return (
    <TextField
      type="number"
      label={label || 'Standard Deviation'}
      value={value}
      inputProps={{
        min: 0,
        step: step || 0.5,
      }}
      onChange={onChange}
    />
  );
}

export default SDInput;
