/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { Box, Grid } from '@mui/material';
import DistPlot from '../components/DistPlot/DistPlot';
import StudentT from '../statistics/distributions/StudentT';

import MySelectInput from '../components/inputs/SelectInput';
import CurveAreaRadioButtons from '../components/inputs/CurveAreaRadioButtons';
import DofInput from '../components/inputs/numInputs/DofInput';
import XInput from '../components/inputs/numInputs/XInput';
import AreaInput from '../components/inputs/numInputs/AreaInput';

function NumInputs(props) {
  const {
    // eslint-disable-next-line react/prop-types
    selected, selectedArea, p, setP, x1, setX1, x2, setX2,
  } = props;

  if (selected === 'Find t using p-value') {
    return (<AreaInput value={p} setter={setP} />);
  } if (selected === 'Find p-value using t') {
    if (selectedArea === 'outside' || selectedArea === 'between') {
      return (
        <>
          <XInput label="X1" value={x1} setter={setX1} />
          <XInput label="X2" value={x2} setter={setX2} />
        </>
      );
    }

    return (<XInput value={x1} setter={setX1} />);
  } if (selected === "Calculate Welch's dof") {
    return null;
  }
}

function StudentTPage() {
  const selectInputChoices = [
    'Find t using p-value',
    'Find p-value using t',
    "Calculate Welch's dof",
  ];
  const [selected, setSelected] = useState(selectInputChoices[0]);

  const [dof, setDof] = useState(1);
  const [selectedArea, setSelectedArea] = useState('below');
  const [p, setP] = useState(0.95);

  const [x1, setX1] = useState(-1);
  const [x2, setX2] = useState(1);

  return (
    <div className="page">
      <Box
        component="form"
        sx={{
          width: 'auto',
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <Grid item align="center" xs={12}>
          <MySelectInput
            id="t-select-input"
            value={selected}
            setter={setSelected}
            choices={selectInputChoices}
          />
        </Grid>

        <hr />

        <Grid item align="center" xs={12}>
          <DofInput value={dof} setter={setDof} />
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

        <Grid item align="center" xs={12}>
          <DistPlot
            makeDist={() => new StudentT(Number(dof))}
            p={p}
            x1={x1}
            x2={x2}
            selectedTypeId={selectInputChoices.indexOf(selected)}
            selectedArea={selectedArea}
          />
        </Grid>
      </Box>
    </div>
  );
}

export default StudentTPage;
