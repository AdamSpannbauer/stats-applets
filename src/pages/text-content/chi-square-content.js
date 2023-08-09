const content = `
### Big ideas

The χ² (chi-squared) distribution is a fundamental concept in statistics. It is
often employed to analyze categorical data, test relationships between 
variables, and is used in applications like the "goodness of fit" test.

Like other distributions, the χ² distribution's shape unveils the 
likelihood of diverse outcomes. The peak of the curve signifies the most probable 
result, providing insight into the distribution of categorical variables. Use this 
tool to compute the area under the χ² distribution, unraveling the 
probability of observing data within specific categories.

**Note about χ² (chi-squared) distribution**: The χ² distribution 
differs based on the "degrees of freedom" parameter. The distribution appears right skewed for small degrees of 
freedom and gradually evolves into a 
symmetrical form as degrees of freedom increase.

### Understanding the Inputs

- **Degrees of Freedom (df):** Enter the degrees of freedom, which determine the shape of the χ²-distribution.
- **Area / X:** Enter these values depending on the selected tool.
  - **Area** (when using "Find t using p-value"): Enter the area (probability) that you want to find the associated t value for.
  - **X** or **X1 & X2** (when using "Find p-value using t"): Enter in the t value(s) that you want to find associated probabilities for.
- **Region**:
  - **Above**: Select this option when you are interested in exploring the probability *above* a certain value. You'll use this method for one-tailed hypothesis tests!
  - **Below**: Select this option when you are interested in exploring the probability *below* a certain value.

### Understanding the Two Tools

**"Find χ² using p-value"**: This is useful when you have a significance level or confidence level and need to 
determine the "critical value" (χ²) to construct confidence intervals or perform hypothesis tests.
Enter the desired area (probability) and the tool will compute and display the corresponding critical value.

**"Find p-value using χ²"**: This is useful to determine the probability of observing a certain χ² value.
These probabilities are often abbreviated to "p-values" when testing hypotheses. Enter an observed value or a calculated 
test statistic, and the tool will compute the corresponding probability. 
`;

export default content;
