function sumIntervals(intervals) {
  return intervals
    .slice()
    .sort((a, b) => a[0] - b[0])
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
    .reduce((sum, interval) => sum + (interval[1] - interval[0]), 0);
}

module.exports = {
  sumIntervals
};
