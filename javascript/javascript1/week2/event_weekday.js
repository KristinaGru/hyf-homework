function getEventWeekday(day) {
  const dayOfWeek = new Date().getDay();
  const weekday = (dayOfWeek + day) % 7;
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  switch (weekday) {
    case 0:
      return weekdays[0];
      break;
    case 1:
      return weekdays[1];
      break;
    case 2:
      return weekdays[2];
      break;
    case 3:
      return weekdays[3];
      break;
    case 4:
      return weekdays[4];
      break;
    case 5:
      return weekdays[5];
      break;
    case 6:
      return weekdays[6];
      break;
  }
}

const eventButton = document.getElementById('event-btn');

eventButton.addEventListener('click', () => {
  const paragraph = document.getElementById('event-weekday');
  const eventDay = +document.getElementById('event-day').value;
  const eventWeekday = getEventWeekday(eventDay);
  paragraph.textContent = `The event will be held on ${eventWeekday}`;
});
