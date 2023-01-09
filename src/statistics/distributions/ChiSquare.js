import jstat from 'jstat';
import Distribution from '../Distribution';

class ChiSquare extends Distribution {
  constructor(dof) {
    const symmetric = false;
    super(symmetric);

    this.dof = dof;

    this.pdf = (x) => jstat.chisquare.pdf(x, dof);
    this.cdf = (x) => jstat.chisquare.cdf(x, dof);
    this.inv = (x) => jstat.chisquare.inv(x, dof);

    this.minX = 0;
    if (this.minX < 1) this.minX = 0;
    this.maxX = dof + dof * 1.5;
    if (this.maxX < 10) this.maxX = 10;
  }

  // eslint-disable-next-line no-unused-vars
  pFromAreaFillRanges(areaName, x1, x2) {
    let fillRanges = [];
    switch (areaName) {
      case 'below':
        fillRanges.push({ x1: this.minX, x2: x1 });
        break;
      case 'above':
        fillRanges.push({ x1, x2: this.maxX });
        break;
      default:
        fillRanges = [];
    }

    return fillRanges;
  }

  xFromAreaFillRanges(areaName, area) {
    const x = this.xFromArea(areaName, area);

    let fillRanges = [];
    switch (areaName) {
      case 'below':
        fillRanges.push({ x1: this.minX, x2: x });
        break;
      case 'above':
        fillRanges.push({ x1: x, x2: this.maxX });
        break;
      default:
        fillRanges = [];
    }

    return fillRanges;
  }
}

export default ChiSquare;
