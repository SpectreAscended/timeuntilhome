const dayDisplay = document.getElementById('days');
const minuteDisplay = document.getElementById('minutes');

const today = new Date();

const returnHome = new Date('2022-10-01T14:42:17.833Z');

const millisecondsTilReturn = returnHome - today;

const minutes = millisecondsTilReturn / 60000;

const days = minutes / 1440;

console.log(minutes);

console.log(24 * 60);

dayDisplay.textContent = `${Math.round(days)}`;
minuteDisplay.textContent = `${Math.round(minutes)}`;
