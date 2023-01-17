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
import RoundDigitsInput from '../components/inputs/numInputs/RoundDigitsInput';
import NInput from '../components/inputs/numInputs/NInput';
import SDInput from '../components/inputs/numInputs/SDInput';
import welchsDegreesOfFreedom from '../statistics/welchsDof';
import { myRound } from '../statistics/mathUtils';

function NumInputs(props) {
  const {
    // eslint-disable-next-line react/prop-types
    selected, selectedArea, p, setP, x1, setX1, x2, setX2,
    // eslint-disable-next-line react/prop-types
    s1, setS1, s2, setS2, n1, setN1, n2, setN2,
  } = props;

  if (selected === 'Find t using p-value') {
    return (
      <Grid item align="center" xs={12}>
        <AreaInput value={p} setter={setP} />
      </Grid>
    );
  }

  if (selected === 'Find p-value using t') {
    if (selectedArea === 'outside' || selectedArea === 'between') {
      return (
        <Grid item align="center" xs={12}>
          <XInput label="X1" value={x1} setter={setX1} />
          <XInput label="X2" value={x2} setter={setX2} />
        </Grid>
      );
    }

    return (
      <Grid item align="center" xs={12}>
        <XInput value={x1} setter={setX1} />
      </Grid>
    );
  }

  if (selected === "Calculate Welch's dof") {
    return (
      <>
        <Grid item align="center" xs={12}>
          <SDInput label="Std dev 1:" value={s1} setter={setS1} />
          <NInput label="Sample size 1:" value={n1} setter={setN1} />
        </Grid>

        <Grid item align="center" xs={12}>
          <SDInput label="Std dev 2:" value={s2} setter={setS2} />
          <NInput label="Sample size 2:" value={n2} setter={setN2} />
        </Grid>

      </>
    );
  }
}

function StudentTPage() {
  const selectInputChoices = [
    'Find t using p-value',
    'Find p-value using t',
    "Calculate Welch's dof",
  ];
  const [selected, setSelected] = useState(selectInputChoices[0]);
  const [roundDigits, setRoundDigits] = useState(2);

  const [dof, setDof] = useState(1);
  const [selectedArea, setSelectedArea] = useState('above');
  const [p, setP] = useState(0.95);

  const [x1, setX1] = useState(-1);
  const [x2, setX2] = useState(1);

  const [s1, setS1] = useState(1);
  const [s2, setS2] = useState(3);
  const [n1, setN1] = useState(10);
  const [n2, setN2] = useState(15);

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
              id="t-select-input"
              value={selected}
              setter={setSelected}
              choices={selectInputChoices}
            />
            <RoundDigitsInput value={roundDigits} setter={setRoundDigits} label="Round to:" />
          </Grid>
        </div>

        {selected === "Calculate Welch's dof" ? null
          : (
            <Grid item align="center" xs={12}>
              <DofInput value={dof} setter={setDof} />
            </Grid>

          )}

        <NumInputs
          selected={selected}
          selectedArea={selectedArea}
          p={p}
          setP={setP}
          x1={x1}
          setX1={setX1}
          x2={x2}
          setX2={setX2}
          s1={s1}
          setS1={setS1}
          s2={s2}
          setS2={setS2}
          n1={n1}
          setN1={setN1}
          n2={n2}
          setN2={setN2}
        />

        {selected === "Calculate Welch's dof" ? null
          : (
            <Grid item align="center" xs={12}>
              <CurveAreaRadioButtons
                setter={setSelectedArea}
                isSymmetric
              />
            </Grid>
          )}

        {selected !== "Calculate Welch's dof" ? null
          : (
            <Grid item align="center" xs={12}>
              <h2>
                {`Degrees of freedom = ${myRound(welchsDegreesOfFreedom(n1, s1, n2, s2), roundDigits)}`}
              </h2>
            </Grid>

          )}

        <Grid item align="center" xs={12}>
          <DistPlot
            makeDist={() => new StudentT(selected !== "Calculate Welch's dof" ? Number(dof) : welchsDegreesOfFreedom(n1, s1, n2, s2))}
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

export default StudentTPage;
