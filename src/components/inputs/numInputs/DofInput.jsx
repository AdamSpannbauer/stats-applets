/* eslint-disable react/prop-types */
import React from 'react';
import TextField from '@mui/material/TextField';

function DofInput(props) {
  const { value, setter, step } = props;

  const onChange = (event) => {
    let v = event.target.value;
    if (v < 0) v = 1;
    setter(v);
  };

  return (
    <TextField
      type="number"
      label="Degrees of Freedom"
      value={value}
      inputProps={{
        step: step || 1.0,
      }}
      onChange={onChange}
    />
  );
}

export default DofInput;
