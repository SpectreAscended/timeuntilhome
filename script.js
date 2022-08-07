const dayDisplay = document.getElementById('days');
const minuteDisplay = document.getElementById('minutes');

const displayTime = () => {
  const today = new Date();
  const returnHome = new Date('2022-10-01T08:00:00.833Z');
  const millisecondsTilReturn = returnHome - today;
  const minutes = millisecondsTilReturn / 60000;

  const days = minutes / 1440;
  dayDisplay.textContent = `${Math.round(days)}`;
  minuteDisplay.textContent = `${Math.round(minutes)}`;
};

displayTime();

setInterval(displayTime, 60000);
