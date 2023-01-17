/* eslint-disable react/prop-types */
import React from 'react';
import TextField from '@mui/material/TextField';

function RoundDigitsInput(props) {
  const {
    value, setter, label, step,
  } = props;

  const onChange = (event) => {
    let v = Number(event.target.value);
    v = Math.round(v);
    setter(v);
  };

  return (
    <TextField
      className="round-digits-input"
      type="number"
      color="warning"
      variant="filled"
      focused
      sx={{
        marginTop: '0px', marginBottom: '1em', background: '#ffffff', borderRadius: '3px',
      }}
      label={label || 'Degrees of Freedom'}
      value={value}
      inputProps={{
        step: step || 1.0,
      }}
      onChange={onChange}
    />
  );
}

export default RoundDigitsInput;
