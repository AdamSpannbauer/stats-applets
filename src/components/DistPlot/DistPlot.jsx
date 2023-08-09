/* eslint-disable react/prop-types */
import React from 'react';
import Plot from 'react-plotly.js';
import { myRound } from '../../statistics/mathUtils';
import { plotlyCurveFill, plotlyCurveLine } from './plotlyUtils';

function DistPlot(props) {
  let {
    // eslint-disable-next-line prefer-const
    makeDist, p, x1, x2, selectedArea, selectedTypeId, roundDigits,
  } = props;

  roundDigits = Number(roundDigits);

  x1 = Number(x1);
  x2 = Number(x2);
  p = Number(p);

  const dist = makeDist();

  const plotlyData = [plotlyCurveLine(dist.x, dist.y)];

  // [{x1,x2}, {x1,x2}, ....]
  const fillRanges = [];

  let answerText = '';
  let answerDescriptionText = '';
  if (selectedTypeId === 0) {
    const ranges = dist.xFromAreaFillRanges(selectedArea, p);
    fillRanges.push(...ranges);

    const x = dist.xFromArea(selectedArea, p);

    const roundedX = myRound(x, roundDigits);
    const roundedPerc = (p * 100).toFixed(roundDigits - 2 >= 0 ? roundDigits - 2 : 0);

    let absbar = '';
    if (selectedArea === 'outside' || selectedArea === 'between') {
      absbar = '|';
    }

    let ansSymbol = '';
    if (dist.distname === 'normal') {
      if (dist.mean === 0 && dist.sd === 1) {
        ansSymbol = 'z';
      } else {
        ansSymbol = 'x';
      }
    } else if (dist.distname === 'studentt') {
      ansSymbol = 't';
    } else if (dist.distname === 'chisquare') {
      ansSymbol = 'χ²';
    }

    answerText = `${absbar}${ansSymbol}${absbar}=${roundedX}`;

    if (selectedArea === 'above' || selectedArea === 'below') {
      answerDescriptionText = `${roundedPerc}% of the data is ${selectedArea} ${roundedX}`;
    } else if (selectedArea === 'outside') {
      const { x2: a } = fillRanges[0];
      const { x1: b } = fillRanges[1];
      answerDescriptionText = `${roundedPerc}% of the data is outside ${a.toFixed(2)} and ${b.toFixed(2)}`;
    } else if (selectedArea === 'between') {
      const { x1: a, x2: b } = fillRanges[0];
      answerDescriptionText = `${roundedPerc}% of the data is between ${a.toFixed(2)} and ${b.toFixed(2)}`;
    }
  } else if (selectedTypeId === 1) {
    const ranges = dist.pFromAreaFillRanges(selectedArea, x1, x2);
    fillRanges.push(...ranges);

    const pi = dist.pFromArea(selectedArea, x1, x2);

    const roundedX1 = myRound(x1, roundDigits);
    const roundedX2 = myRound(x2, roundDigits);
    const roundedP = myRound(pi, roundDigits);
    const roundedPerc = myRound(pi * 100, roundDigits - 2);

    answerText = `p=${roundedP}`;

    if (selectedArea === 'above' || selectedArea === 'below') {
      answerDescriptionText = `${roundedPerc}% of the data is ${selectedArea} ${roundedX1}`;
    } else if (selectedArea === 'outside') {
      answerDescriptionText = `${roundedPerc}% of the data is outside ${roundedX1} and ${roundedX2}`;
    } else if (selectedArea === 'between') {
      answerDescriptionText = `${roundedPerc}% of the data is between ${roundedX1} and ${roundedX2}`;
    }
  }

  if (fillRanges.length === 0) {
    plotlyData[0].fill = 'tozeroy';
  } else {
    const fillData = fillRanges.map(({ x1: a, x2: b }) => plotlyCurveFill(dist.x, dist.y, a, b));
    plotlyData.push(...fillData);
  }

  return (
    <div className="my-plot-container">
      <h1>{answerText}</h1>
      <h3>{answerDescriptionText}</h3>
      <Plot
        data={plotlyData}
        useResizeHandler
        layout={{
          xaxis: { zeroline: false },
          showlegend: false,
          margin: {
            l: 50, r: 40, b: 50, t: 40, pad: 4,
          },
        }}
        config={{ displayModeBar: false }}
        style={{ maxWidth: '700px' }}
      />
    </div>
  );
}

export default DistPlot;
