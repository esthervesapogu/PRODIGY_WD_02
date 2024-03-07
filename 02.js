let isRunning = false;
let interval;
let seconds = 0;
let minutes = 0;
let hours = 0;

function toggleStartStop() {
  if (isRunning) {
    stopStopwatch();
  } else {
    startStopwatch();
  }
}

function startStopwatch() {
  isRunning = true;
  interval = setInterval(updateDisplay, 1000);
  document.getElementById("startStopBtn").innerText = "Stop";
}

function stopStopwatch() {
  isRunning = false;
  clearInterval(interval);
  document.getElementById("startStopBtn").innerText = "Start";
}

function resetStopwatch() {
  stopStopwatch();
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
}

function updateDisplay() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  document.getElementById("display").innerText = formattedTime;
}

function pad(value) {
  return value < 10 ? `0${value}` : value;
}
