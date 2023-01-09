/* eslint-disable react/prop-types */
import React from 'react';
import TextField from '@mui/material/TextField';

function MeanInput(props) {
  const { value, setter, step } = props;

  return (
    <TextField
      type="number"
      label="Mean"
      value={value}
      inputProps={{
        step: step || 1.0,
      }}
      onChange={(event) => setter(event.target.value)}
    />
  );
}

export default MeanInput;
