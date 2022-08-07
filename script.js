const dateDisplay = document.querySelector('.date');

const today = new Date();

const date = today.getDate();

const day = today.getDay();

const fullYear = today.getFullYear();

const hours = today.getHours();

const isoString = today.toISOString();

console.log(isoString);

const returnHome = new Date('2022-10-01T14:42:17.833Z');

const millisecondsToOctober = returnHome - today;

const minutes = millisecondsToOctober / 60000;

console.log(minutes);

console.log(24 * 60);

dateDisplay.textContent = Math.round(minutes);
