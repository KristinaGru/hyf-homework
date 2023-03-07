function getEventWeekday(day) {
  const dayOfWeek = new Date().getDay();
  const weekday = (dayOfWeek + day) % 7;
  switch (weekday) {
    case 0:
      return 'Sunday';
      break;
    case 1:
      return 'Monday';
      break;
    case 2:
      return 'Tuesday';
      break;
    case 3:
      return 'Wednesday';
      break;
    case 4:
      return 'Thursday';
      break;
    case 5:
      return 'Friday';
      break;
    case 6:
      return 'Saturday';
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
