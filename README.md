# Sum of Intervals solution

This repository contains a solution to the "Sum of Intervals" problem, implemented in JavaScript. The goal is to sum the lengths of all the intervals provided, ensuring that overlapping intervals are only counted once.

## How to run

1. Ensure you have Node.js v16+ installed
2. `git clone https://github.com/ectuser/sum-of-intervals.git`
3. `cd sum-of-intervals`
4. `node index.js`

## Solution

The solution can be found in the `sum-intervals.js` file.

A functional and immutable approach was chosen to provide a clear overview and understanding of the function, even if it involves some additional space complexity.

The solution was designed with potential space optimization in mind if necessary. 

However since immutability is a key aspect of modern applications, the approach ensures that the input arguments are not modified.

The submitted version of the problem might be found in the Code Wars [website](https://www.codewars.com/kata/reviews/52b7ed099cdc285c300001d0/groups/670c43857748b22c3f397089)

### Explanation

First, we're sorting the intervals array because we want to process them in order based on their start points. 

```js
  return intervals
    .slice() // making a copy in order to avoid mutating the passed object via `.sort()` method
    .sort((a, b) => a[0] - b[0])
```

Next, we go through the sorted intervals and create a result array which should contain non-overlapping intervals.

For each interval:

- if the last point of the previous interval overlaps with the start of the current interval
- we merge them by adjusting the end point to the larger value of the two

This makes overlapping intervals are combined into one.

If there is no overlap, we add the current interval to the result array.

So the result array contains non-overlapping intervals.

```js
    .reduce((acc, currentInterval) => {
      const previousInterval = acc[acc.length - 1];

      if (previousInterval && previousInterval[1] >= currentInterval[0]) {
        const firstPoint = previousInterval[0];
        const secondPoint = Math.max(previousInterval[1], currentInterval[1]);

        acc[acc.length - 1] = [firstPoint, secondPoint];
      } else {
        acc.push(currentInterval);
      }

      return acc;
    }, [])
```

The last step is calculating the sum of the intervals that were added to the result array.

```js
.reduce((sum, interval) => sum + (interval[1] - interval[0]), 0);
```
