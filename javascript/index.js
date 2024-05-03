const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() 

function printMinutes() {
  return start(getMinutes(computeTwoDigitNumber(value)))
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.classList.contains("btn.start")){
    chronometer.start(printTime);
    btnLeftElement.textContent= "STOP";
    btnLeftElement.classList.replace("btn.start","btn.stop");
  } else {
    chronometer.stop();
    btnLeftElement.textContent = "START";
    btnLeftElement.classList.replace ("btn.stop", "btn.start");  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.classList.contains("btn.reset")){
    btnRightElement.textContent = "SPLIT";
    btnRightElement.classList.replace("btn.reset", "btn.split")
  } else {
    btnRightElement.textContent = "RESET";
    btnRightElement.classList.replace("btn.split", "btn.reset")
  }
});

