import React, { useState } from 'react';

import { Box, Grid } from '@mui/material';
import MySelectInput from '../components/inputs/SelectInput';

import DistPlot from '../components/DistPlot/DistPlot';
import Normal from '../statistics/distributions/Normal';
import CurveAreaRadioButtons from '../components/inputs/CurveAreaRadioButtons';
import XInput from '../components/inputs/numInputs/XInput';
import AreaInput from '../components/inputs/numInputs/AreaInput';
import MeanInput from '../components/inputs/numInputs/MeanInput';
import SDInput from '../components/inputs/numInputs/SDInput';
import RoundDigitsInput from '../components/inputs/numInputs/RoundDigitsInput';

function NumInputs(props) {
  const {
    // eslint-disable-next-line react/prop-types
    selected, selectedArea, p, setP, x1, setX1, x2, setX2,
  } = props;

  if (selected === 'Find x using p-value') {
    return (<AreaInput value={p} setter={setP} />);
  } if (selected === 'Find p-value using x') {
    if (selectedArea === 'outside' || selectedArea === 'between') {
      return (
        <>
          <XInput label="X1" value={x1} setter={setX1} />
          <XInput label="X2" value={x2} setter={setX2} />
        </>
      );
    }

    return (<XInput value={x1} setter={setX1} />);
  }
}

function NormalPage() {
  const selectInputChoices = [
    'Find x using p-value',
    'Find p-value using x',
  ];
  const [selected, setSelected] = useState(selectInputChoices[0]);
  const [roundDigits, setRoundDigits] = useState(2);

  const [mean, setMean] = useState(0);
  const [sd, setSD] = useState(1);

  const [selectedArea, setSelectedArea] = useState('above');
  const [p, setP] = useState(0.95);

  const [x1, setX1] = useState(-1);
  const [x2, setX2] = useState(1);

  return (
    <div className="page">
      <Box
        component="form"
        sx={{
          width: '100%',
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="select-tool-container">
          <Grid item align="center" xs={12}>
            <MySelectInput
              id="z-select-input"
              value={selected}
              setter={setSelected}
              choices={selectInputChoices}
            />
            <RoundDigitsInput value={roundDigits} setter={setRoundDigits} label="Round to:" />
          </Grid>
        </div>

        <Grid item align="center" xs={12}>
          <MeanInput value={mean} setter={setMean} />
          <SDInput value={sd} setter={setSD} />
        </Grid>

        <Grid item align="center" xs={12}>
          <NumInputs
            selected={selected}
            selectedArea={selectedArea}
            p={p}
            setP={setP}
            x1={x1}
            setX1={setX1}
            x2={x2}
            setX2={setX2}
          />
        </Grid>

        <Grid item align="center" xs={12}>
          <CurveAreaRadioButtons
            setter={setSelectedArea}
            isSymmetric
          />
        </Grid>

        <Grid item align="center">
          <DistPlot
            makeDist={() => new Normal(Number(mean), Number(sd))}
            p={p}
            x1={x1}
            x2={x2}
            roundDigits={roundDigits}
            selectedTypeId={selectInputChoices.indexOf(selected)}
            selectedArea={selectedArea}
          />
        </Grid>
      </Box>
    </div>
  );
}

export default NormalPage;
