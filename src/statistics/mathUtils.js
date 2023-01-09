export const mapRange = (x, inMin, inMax, outMin, outMax, constrain = false) => {
  let newX = x;

  newX -= inMin;

  newX *= (outMax - outMin);
  newX /= (inMax - inMin);
  newX += outMin;

  // eslint-disable-next-line no-param-reassign
  if (outMin > outMax) [outMin, outMax] = [outMax, outMin];
  if (constrain && newX < outMin) return outMin;
  if (constrain && newX > outMax) return outMax;
  return newX;
};
