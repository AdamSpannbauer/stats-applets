/* eslint-disable react/prop-types */
import React from 'react';
import TextField from '@mui/material/TextField';

function AreaInput(props) {
  const { value, setter, step } = props;

  const onChange = (event) => {
    let v = event.target.value;
    if (v < 0) v = 0;
    if (v > 1) v = 1;
    setter(v);
  };

  return (
    <TextField
      type="number"
      label="Area"
      value={value}
      inputProps={{
        min: 0,
        max: 1,
        step: step || 0.01,
      }}
      onChange={onChange}
    />
  );
}

export default AreaInput;
