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
    <div className="select-tool-container">
      <FormControl
        color="warning"
        focused
        variant="filled"
        sx={{ marginBottom: '1em', background: '#ffffff', borderRadius: '3px' }}
      >
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
