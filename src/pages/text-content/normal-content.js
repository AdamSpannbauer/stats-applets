const content = `
### Big ideas

The normal distribution is one of the fundamental concepts in statistics.
It is widely used to model real-world phenomena and is the foundation for many statistical methods.
This tool helps you use the normal distribution to calculate critical values, z-scores, and probabilities, 
essential for hypothesis testing, confidence intervals, and probability calculations.

The height of the distribution relates to how likely an outcome is to occur;
for a normal distribution, the most likely outcome is the mean!
We can use tools like this one to find the area under a normal curve to see 
the probability of observing data within that range.

**Note about the "Standard Normal"**: When the mean (μ) is 0 and the standard deviation (σ)
is 1, we call this the "standard normal."  Values on the x-axis in the standard normal are called
z-scores, enabling us to compare and interpret values across different datasets!

### Understanding the inputs

- **Mean (μ):** Enter the mean of the distribution. It represents the center of the distribution.
- **Standard Deviation (σ):** Enter the standard deviation of the distribution. It determines the spread or variability of the distribution.
- **Area / X:** Enter these values depending on the selected tool.
  - **Area** (when using "Find x using probability"): Enter the area (probability) that you want to find associated x (or z values) for.
  - **X** or **X1 & X2** (when using "Find probability using x"): Enter in the x value(s) that you want to find associated probabilities for.
- **Region**:
  - **Above**: Select this option when you are interested in exploring the probability *above* a certain value. You'll use this method for one-tailed hypothesis tests!
  - **Below**: Select this option when you are interested in exploring the probability *below* a certain value. You'll use this method for one-tailed hypothesis tests!
  - **Between**: Select this option when you are interested in exploring the probability *between* two values. You'll use this method for constructing confidence intervals!
  - **Outside**: Select this option when you are interested in exploring the probability *outside* of two values. You'll use this method for two-tailed hypothesis tests!

### Understanding the two separate tools

**"Find x using probability"**: This is useful when you have a significance level or confidence level and need to 
determine the "critical value" (x or z) to construct confidence intervals or perform hypothesis tests.
Enter the desired area (probability) and the tool will compute and display the corresponding critical value.

**"Find probability using x"**: This is useful to determine the probability of observing a certain value or range in a normally distributed dataset.
These probabilities are often abbreviated to "p-values" when testing hypotheses. Enter an observed value or a calculated 
test statistic, and the tool will compute the corresponding probability.
`;

export default content;
