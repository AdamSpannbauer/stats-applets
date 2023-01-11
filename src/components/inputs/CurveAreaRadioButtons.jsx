/* eslint-disable react/prop-types */
import * as React from 'react';

import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { Grid } from '@mui/material';

function CurveAreaRadioButtons(props) {
  const { setter, defaultValue, isSymmetric } = props;

  const onChange = (event) => {
    setter(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel style={{ paddingTop: '1em' }} id="curve-region-radio-buttons-group">Region</FormLabel>
      <RadioGroup
        onChange={onChange}
        aria-labelledby="curve-region-radio-buttons-group-label"
        defaultValue={defaultValue || 'above'}
        name="curve-region-radio-buttons-group"
      >

        <Grid container wrap="wrap" spacing={0.5}>
          <Grid item xs={12} sm={3}>
            <FormControlLabel value="above" control={<Radio />} label="Above" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControlLabel value="below" control={<Radio />} label="Below" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControlLabel value="between" control={<Radio disabled={!isSymmetric} />} label="Between" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControlLabel value="outside" control={<Radio disabled={!isSymmetric} />} label="Outside" />
          </Grid>
        </Grid>

      </RadioGroup>
    </FormControl>
  );
}

export default CurveAreaRadioButtons;
