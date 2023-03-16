const seriesDurations = [
  {
    title: 'Community',
    days: 1,
    hours: 16,
    minutes: 20,
  },
  {
    title: 'Stranger things',
    days: 1,
    hours: 4,
    minutes: 20,
  },
  {
    title: 'Parks and Recreation',
    days: 1,
    hours: 21,
    minutes: 50,
  },
];

function logOutSeriesText(arr) {
  let total = 0;
  for (const item of arr) {
    const seriesTime = (
      ((item.days * 24 * 60 + item.hours * 60 + item.minutes) /
        (80 * 365 * 24 * 60)) *
      100
    ).toFixed(3);
    total += +seriesTime;
    console.log(`${item.title} took ${seriesTime}% of my life`);
  }
  console.log(`In total that is ${total}% of my life`);
}

logOutSeriesText(seriesDurations);
