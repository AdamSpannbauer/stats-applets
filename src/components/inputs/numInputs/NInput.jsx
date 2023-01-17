/* eslint-disable react/prop-types */
import React from 'react';
import TextField from '@mui/material/TextField';

function NInput(props) {
  const {
    value, setter, step, label,
  } = props;

  const onChange = (event) => {
    let v = Number(event.target.value);
    v = Math.round(v);
    setter(v);
  };

  return (
    <TextField
      type="number"
      label={label || 'N'}
      value={value}
      inputProps={{
        step: step || 1.0,
      }}
      onChange={onChange}
    />
  );
}

export default NInput;
