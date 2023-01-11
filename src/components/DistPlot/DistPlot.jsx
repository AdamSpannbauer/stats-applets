/* eslint-disable react/prop-types */
import React from 'react';
import Plot from 'react-plotly.js';
import { plotlyCurveFill, plotlyCurveLine } from './plotlyUtils';

function DistPlot(props) {
  let {
    // eslint-disable-next-line prefer-const
    makeDist, p, x1, x2, selectedArea, selectedTypeId,
  } = props;

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

    if (dist.mean === 0 && dist.sd === 1) {
      answerText = `z=${x.toFixed(2)}`;
    } else {
      answerText = `x=${x.toFixed(2)}`;
    }

    if (selectedArea === 'above' || selectedArea === 'below') {
      answerDescriptionText = `${(p * 100).toFixed(1)}% of the data is ${selectedArea} ${x.toFixed(2)}`;
    } else if (selectedArea === 'outside') {
      const { x2: a } = fillRanges[0];
      const { x1: b } = fillRanges[1];
      answerDescriptionText = `${(p * 100).toFixed(2)}% of the data is outside ${a.toFixed(2)} and ${b.toFixed(2)}`;
    } else if (selectedArea === 'between') {
      const { x1: a, x2: b } = fillRanges[0];
      answerDescriptionText = `${(p * 100).toFixed(2)}% of the data is between ${a.toFixed(2)} and ${b.toFixed(2)}`;
    }
  } else if (selectedTypeId === 1) {
    const ranges = dist.pFromAreaFillRanges(selectedArea, x1, x2);
    fillRanges.push(...ranges);

    const pi = dist.pFromArea(selectedArea, x1, x2);
    answerText = `p=${pi.toFixed(4)}`;

    if (selectedArea === 'above' || selectedArea === 'below') {
      answerDescriptionText = `${(pi * 100).toFixed(2)}% of the data is ${selectedArea} ${x1.toFixed(2)}`;
    } else if (selectedArea === 'outside') {
      answerDescriptionText = `${(pi * 100).toFixed(2)}% of the data is outside ${x1.toFixed(2)} and ${x2.toFixed(2)}`;
    } else if (selectedArea === 'between') {
      answerDescriptionText = `${(pi * 100).toFixed(2)}% of the data is between ${x1.toFixed(2)} and ${x2.toFixed(2)}`;
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
