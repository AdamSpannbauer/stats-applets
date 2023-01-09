import { mapRange } from './mathUtils';

const ZERO = 0.00001;
const N_X_POINTS = 512;

class Distribution {
  constructor(symmetric = true) {
    this.ZERO = ZERO;
    this.symmetric = symmetric;

    this.dof = null;
    this.mean = null;
    this.sd = null;

    this.pdf = null;
    this.cdf = null;
    this.inv = null;

    this.minX = null;
    this.maxX = null;

    this.xVal = null;
    this.yVal = null;
  }

  // p value from x
  pFromArea(areaName, x1, x2) {
    // eslint-disable-next-line no-param-reassign
    x1 = Number(x1);
    // eslint-disable-next-line no-param-reassign
    x2 = Number(x2);

    let p;
    switch (areaName) {
      case 'below':
        p = this.pFromAreaBelow(x1);
        break;
      case 'above':
        p = this.pFromAreaAbove(x1);
        break;
      case 'between':
        p = this.pFromAreaBetween(x1, x2);
        break;
      case 'outside':
        p = this.pFromAreaOutside(x1, x2);
        break;
      default:
        p = NaN;
    }

    return p;
  }

  pFromAreaBelow(x) {
    return this.cdf(x, this.params);
  }

  pFromAreaAbove(x) {
    return 1 - this.cdf(x, this.params);
  }

  pFromAreaBetween(x1, x2) {
    // eslint-disable-next-line no-param-reassign
    if (x2 < x1) [x1, x2] = [x2, x1];

    const p1 = this.pFromAreaBelow(x1, this.params);
    const p2 = this.pFromAreaBelow(x2, this.params);

    return p2 - p1;
  }

  pFromAreaOutside(x1, x2) {
    // eslint-disable-next-line no-param-reassign
    if (x2 < x1) [x1, x2] = [x2, x1];

    const p1 = this.pFromAreaBelow(x1, this.params);
    const p2 = this.pFromAreaAbove(x2, this.params);

    return p2 + p1;
  }

  // crit val from prob
  xFromArea(areaName, area) {
    // eslint-disable-next-line no-param-reassign
    area = Number(area);
    let x = null;
    switch (areaName) {
      case 'below':
        x = this.xFromAreaBelow(area);
        break;
      case 'above':
        x = this.xFromAreaAbove(area);
        break;
      case 'between':
        x = this.xFromAreaBetween(area);
        break;
      case 'outside':
        x = this.xFromAreaOutside(area);
        break;
      default:
        x = NaN;
    }

    return x;
  }

  xFromAreaBelow(area) {
    if (area >= 1) return this.maxX;
    return this.inv(area, this.params);
  }

  xFromAreaAbove(area) {
    if (area >= 1) return this.minX;
    return this.inv(1 - area, this.params);
  }

  xFromAreaBetween(area) {
    if (!this.symmetric) return NaN;

    if (area >= 1) return [this.minX, this.maxX];
    const stat = this.xFromAreaBelow((1 - area) / 2, this.params);
    return Math.abs(stat);
  }

  xFromAreaOutside(area) {
    if (!this.symmetric) return NaN;

    if (area >= 1) return [ZERO, -ZERO];
    const stat = this.xFromAreaBelow(area / 2, this.params);
    return Math.abs(stat);
  }

  genPDFXY(nSteps = N_X_POINTS, force = false) {
    if (force || this.xVal === null || this.yVal === null) {
      const steps = Array.from({ length: nSteps }).map((_, i) => i);
      this.xVal = steps.map((n) => mapRange(n, 0, nSteps - 1, this.minX, this.maxX));
      this.yVal = this.xVal.map((xi) => this.pdf(xi));
    }

    return { x: this.xVal, y: this.yVal };
  }

  get x() {
    if (this.xVal === null) this.genPDFXY();
    return this.xVal;
  }

  get y() {
    if (this.yVal === null) this.genPDFXY();
    return this.yVal;
  }
}

export default Distribution;
