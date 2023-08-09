import jstat from 'jstat';
import Distribution from '../Distribution';

class Normal extends Distribution {
  constructor(mean, sd) {
    const symmetric = true;
    super(symmetric);

    this.distname = 'normal';

    this.mean = Number(mean);
    this.sd = Number(sd);

    this.pdf = (x) => jstat.normal.pdf(x, this.mean, this.sd);
    this.cdf = (x) => jstat.normal.cdf(x, this.mean, this.sd);
    this.inv = (p) => jstat.normal.inv(p, this.mean, this.sd);

    this.minX = this.mean - this.sd * 5;
    this.maxX = this.mean + this.sd * 5;
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
    let z;
    switch (areaName) {
      case 'below':
        fillRanges.push({ x1: this.minX, x2: x });
        break;
      case 'above':
        fillRanges.push({ x1: x, x2: this.maxX });
        break;
      case 'between':
        z = Math.abs(x - this.mean) / this.sd;
        fillRanges.push({ x1: this.mean - z * this.sd, x2: this.mean + z * this.sd });
        break;
      case 'outside':
        z = Math.abs(x - this.mean) / this.sd;
        fillRanges.push({ x1: this.minX, x2: this.mean - z * this.sd });
        fillRanges.push({ x1: this.mean + z * this.sd, x2: this.maxX });
        break;
      default:
        fillRanges = [];
    }

    return fillRanges;
  }
}

export default Normal;
