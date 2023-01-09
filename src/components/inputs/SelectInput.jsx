/* eslint-disable react/prop-types */
import React from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function MySelectInput(props) {
  const {
    id, label, value, setter, choices,
  } = props;

  const onChange = (event) => {
    setter(event.target.value);
  };

  return (
    <div style={{ marginTop: '1em' }}>
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id={`${id}-label` || 'select-input'}>{label || 'Select Tool'}</InputLabel>
        <Select
          labelId={`${id}-label` || 'select-input'}
          id={id || 'select-input'}
          value={value}
          onChange={onChange}
          autoWidth
          label={label || 'Select Tool'}
        >
          {choices.map((choice) => <MenuItem value={choice} key={choice}>{choice}</MenuItem>)}
        </Select>
      </FormControl>
    </div>
  );
}

export default MySelectInput;
