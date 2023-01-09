const DEFAULT_LINE_COLOR = '#f77f00';
const DEFAULT_FILL_COLOR = '#f77f00';

export const plotlyCurveLine = (x, y, color, hover, fill = false) => {
  const plotData = {
    x,
    y,
    type: 'scatter',
    mode: 'lines',
    hovertemplate: hover || '(%{x:.2f}, %{y:.2f})<extra></extra>',
    line: { color: color || DEFAULT_LINE_COLOR },
  };

  if (fill) {
    plotData[0].fill = 'tozeroy';
  }

  return plotData;
};

export const plotlyCurveFill = (x, y, x1, x2, color) => {
  // eslint-disable-next-line no-param-reassign
  if (x1 > x2) [x1, x2] = [x2, x1];

  const filteredX = x.filter((xi) => xi >= x1 && xi <= x2);
  const filteredY = y.filter((_yi, i) => x[i] >= x1 && x[i] <= x2);

  return {
    x: filteredX,
    y: filteredY,
    type: 'scatter',
    mode: 'lines',
    fill: 'tozeroy',
    hoverinfo: 'skip',
    line: { color: color || DEFAULT_FILL_COLOR },
  };
};
