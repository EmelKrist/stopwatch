let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("displayTime");
let timer = null;
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let resetBtn = document.getElementById("resetBtn");

/**
 * Stopwatch timer increase function.
 */
function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  // add optional leading zero
  let h = hours <= 9 ? "0" + hours : hours;
  let m = minutes <= 9 ? "0" + minutes : minutes;
  let s = seconds <= 9 ? "0" + seconds : seconds;
  displayTime.innerHTML = h + ":" + m + ":" + s;
}

/**
 * Function to start the stopwatch timer.
 */
function watchStart() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 1000);
}

/**
 * Function to stop the stopwatch timer.
 */
function watchStop() {
  clearInterval(timer);
}

/**
 * Function to reset the stopwatch timer.
 */
function watchReset() {
  clearInterval(timer);
  displayTime.innerHTML = "00:00:00";
  [seconds, minutes, hours] = [0, 0, 0];
}

// Listeners for buttons

startBtn.addEventListener("click", () => {
  watchStart();
});

stopBtn.addEventListener("click", () => {
  watchStop();
});

resetBtn.addEventListener("click", () => {
  watchReset();
});
