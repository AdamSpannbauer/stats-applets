/* eslint-disable react/prop-types */
import React from 'react';
import TextField from '@mui/material/TextField';

function XInput(props) {
  const {
    value, setter, step, label,
  } = props;

  return (
    <TextField
      type="number"
      label={label || 'X'}
      value={value}
      inputProps={{
        step: step || 1.0,
      }}
      onChange={(event) => setter(event.target.value)}
    />
  );
}

export default XInput;
