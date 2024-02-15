import React, { useState } from 'react';
import MuiMarkdown from 'mui-markdown';

import { Box, Grid } from '@mui/material';
import DistPlot from '../components/DistPlot/DistPlot';
import ChiSquare from '../statistics/distributions/ChiSquare';

import MySelectInput from '../components/inputs/SelectInput';
import CurveAreaRadioButtons from '../components/inputs/CurveAreaRadioButtons';
import DofInput from '../components/inputs/numInputs/DofInput';
import XInput from '../components/inputs/numInputs/XInput';
import AreaInput from '../components/inputs/numInputs/AreaInput';
import RoundDigitsInput from '../components/inputs/numInputs/RoundDigitsInput';

import content from './text-content/chi-square-content';

function NumInputs(props) {
  const {
    // eslint-disable-next-line react/prop-types
    selected, selectedArea, p, setP, x1, setX1, x2, setX2,
  } = props;

  if (selected === 'Find χ² using p-value') {
    return (<AreaInput value={p} setter={setP} />);
  } if (selected === 'Find p-value using χ²') {
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

function ChiSquarePage() {
  const selectInputChoices = [
    'Find p-value using χ²',
    'Find χ² using p-value',
  ];
  const [selected, setSelected] = useState(selectInputChoices[0]);
  const [roundDigits, setRoundDigits] = useState(2);

  const [dof, setDof] = useState(1);
  const [selectedArea, setSelectedArea] = useState('above');
  const [p, setP] = useState(0.95);

  const [x1, setX1] = useState(0);
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
              id="chi-select-input"
              value={selected}
              setter={setSelected}
              choices={selectInputChoices}
            />
            <RoundDigitsInput value={roundDigits} setter={setRoundDigits} label="Round to:" />
          </Grid>
        </div>

        <div className="main-page-area">

          <Grid item align="center" xs={12}>
            <DofInput value={dof} setter={setDof} />
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
              isSymmetric={false}
            />
          </Grid>

          <Grid item align="center" xs={12}>
            <DistPlot
              makeDist={() => new ChiSquare(Number(dof))}
              p={p}
              x1={x1}
              x2={x2}
              roundDigits={roundDigits}
              selectedTypeId={selectInputChoices.indexOf(selected)}
              selectedArea={selectedArea}
            />
          </Grid>

          <Box display="flex" justifyContent="center" alignItems="center">
            <Box width="70%" p={3}>
              <MuiMarkdown>{content}</MuiMarkdown>
            </Box>
          </Box>
        </div>
      </Box>
    </div>
  );
}

export default ChiSquarePage;
