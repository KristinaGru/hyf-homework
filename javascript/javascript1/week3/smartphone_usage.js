const activities = [];

function addActivity(activity, duration) {
  const obj = {
    date: new Date().toLocaleDateString('en-GB'),
    activity: activity,
    duration: duration,
  };
  activities.push(obj);
}

addActivity('Youtube', 30);
addActivity('Netflix', 35);

function showStatus(arr, limit) {
  let duration = 0;
  let activitiesToday = 0;
  for (const item of arr) {
    if (item.date === new Date().toLocaleDateString('en-GB')) {
      duration += +item.duration;
      activitiesToday++;
    }
  }
  console.log(
    `You have added ${+activitiesToday} activities for today. They amount to ${duration} min. of usage`
  );
  if (duration >= limit) {
    console.log('You have reached your limit, no more smartphoning for you!');
  }
}

showStatus(activities, 50);

function calcLongestActivity(activities) {
  let longestDuration = 0;
  let longestActivity;
  for (const item of activities) {
    if (item.duration > longestDuration) {
      longestDuration = item.duration;
      longestActivity = item.activity;
    }
  }
  return `Your longest activity was using ${longestActivity}. It took ${longestDuration} minutes.`;
}

console.log(calcLongestActivity(activities));
