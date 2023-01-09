const welchsDegreesOfFreedom = (n1, s1, n2, s2) => {
  // Compute these intermediate values.
  const s1Squared = s1 ** 2;
  const s2Squared = s2 ** 2;

  const denom1 = ((s1Squared / n1) ** 2) / (n1 - 1);
  const denom2 = ((s2Squared / n2) ** 2) / (n2 - 1);
  const denominator = denom1 + denom2;

  const numerator = (s1Squared / n1 + s2Squared / n2) ** 2;

  return numerator / denominator;
};

export default welchsDegreesOfFreedom;
