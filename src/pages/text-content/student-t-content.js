const content = `
### Big ideas

The Student's t-distribution is a vital statistical concept
akin to the normal distribution, often used in scenarios involving 
small sample sizes. It underpins 
hypothesis testing, confidence intervals, and more. This interactive tool 
helps you navigate the t-distribution and calculate critical values, 
t-scores, and probabilities for informed statistical analysis.

Like the normal distribution, the shape of the t-distribution's curve 
reveals the likelihood of different outcomes. The peak of the curve, 
representing the mean, signifies the most probable value. Utilize tools 
like this to compute the area under the t-distribution curve, offering 
insights into the probability of observing data within a particular range.

**Note about Student-t**: When the degrees of freedom are low, the t-distribution
will have a narrower peak and fatter tails than a normal distribution. As the 
degrees of freedom rise, the t-distribution will start to look more and more like
a normal distribution. Use the inputs to compare how degrees of freedom values 1 & 100
compare to what you see on the normal distribution page.


### Understanding the Inputs

- **Degrees of Freedom (df):** Enter the degrees of freedom, which determine the shape of the t-distribution.
- **Area / X:** Enter these values depending on the selected tool.
  - **Area** (when using "Find t using probability"): Enter the area (probability) that you want to find the associated t value for.
  - **X** or **X1 & X2** (when using "Find probability using t"): Enter in the t value(s) that you want to find associated probabilities for.
- **Region**:
  - **Above**: Select this option when you are interested in exploring the probability *above* a certain value. You'll use this method for one-tailed hypothesis tests!
  - **Below**: Select this option when you are interested in exploring the probability *below* a certain value. You'll use this method for one-tailed hypothesis tests!
  - **Between**: Select this option when you are interested in exploring the probability *between* two values. You'll use this method for constructing confidence intervals!
  - **Outside**: Select this option when you are interested in exploring the probability *outside* of two values. You'll use this method for two-tailed hypothesis tests!


### Understanding the Two Tools

**"Find t using probability"**: This is useful when you have a significance level or confidence level and need to 
determine the "critical value" (t) to construct confidence intervals or perform hypothesis tests.
Enter the desired area (probability) and the tool will compute and display the corresponding critical value.

**"Find probability using t"**: This is useful when you want to determine the probability of observing a certain t value.
These probabilities are often abbreviated to "p-values" when testing hypotheses. Enter an observed value or a calculated 
test statistic, and the tool will compute the corresponding probability. 
`;

export default content;
