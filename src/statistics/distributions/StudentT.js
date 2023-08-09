import jstat from 'jstat';
import Distribution from '../Distribution';
import { mapRange } from '../mathUtils';

class StudentT extends Distribution {
  constructor(dof) {
    const symmetric = true;
    super(symmetric);

    this.distname = 'studentt';

    // eslint-disable-next-line no-param-reassign
    dof = Number(dof);

    this.dof = dof;

    this.pdf = (x) => jstat.studentt.pdf(x, dof);
    this.cdf = (x) => jstat.studentt.cdf(x, dof);
    this.inv = (x) => jstat.studentt.inv(x, dof);

    this.minX = mapRange(dof, 1, 30, -10, -4.5, true);
    this.maxX = mapRange(dof, 1, 30, 10, 4.5, true);
  }

  pFromAreaFillRanges(areaName, x1, x2) {
    let fillRanges = [];
    switch (areaName) {
      case 'below':
        fillRanges.push({ x1: this.minX, x2: x1 });
        break;
      case 'above':
        fillRanges.push({ x1, x2: this.maxX });
        break;
      case 'between':
        fillRanges.push({ x1, x2 });
        break;
      case 'outside':
        fillRanges.push({ x1: this.minX, x2: x1 });
        fillRanges.push({ x1: x2, x2: this.maxX });
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
      case 'between':
        fillRanges.push({ x1: -x, x2: x });
        break;
      case 'outside':
        fillRanges.push({ x1: this.minX, x2: -x });
        fillRanges.push({ x1: x, x2: this.maxX });
        break;
      default:
        fillRanges = [];
    }

    return fillRanges;
  }
}

export default StudentT;
