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


function printTime() { 
    setInterval(()=>{
    printSeconds()
    printMinutes()
  }, 1000)
}
function printSeconds() {
  let seconds = chronometer.getSeconds()
  let formattedSeconds = chronometer.computeTwoDigitNumber(seconds);
  secDecElement.textContent = formattedSeconds[0]
  secUniElement.textContent = formattedSeconds[1]
}

function printMinutes(){
  let minutes = chronometer.getMinutes()
  let formattedMinutes = chronometer.computeTwoDigitNumber(minutes);
  minDecElement.textContent = formattedMinutes[0]
  minUniElement.textContent = formattedMinutes[1]
}

function printSplit() {
  const newSplit = document.createElement("li");
  const currentTime = chronometer.split();
  newSplit.textContent = currentTime;
  splitsElement.appendChild(newSplit)
}

btnRightElement.addEventListener("click",()=>{
  if(btnRightElement.textContent === "SPLIT"){
    printSplit();
  }
})

function clearSplits() {
  splitsElement.innerHTML = ""
}

function setStopBtn() {
  btnLeftElement.addEventListener("click",()=>{
    if(btnLeftElement.textContent==="STOP"){
      chronometer.stop()
    }
  })
}

function setStartBtn() {
  btnLeftElement.addEventListener("click", () => {
    return start() 
  })
}

function setResetBtn() {
    if(btnRightElement.textContent === "RESET"){
      chronometer.reset();
      clearSplits();
    }
  };

  btnRightElement.addEventListener("click", () => {
    setResetBtn()
  })

let btnLeft = document.getElementById('btnLeft');
let btnRight = document.getElementById('btnRight');

btnLeft.addEventListener('click', () => {
    if(btnLeft.classList.contains('start')) {
        btnLeft.textContent = 'STOP';
        btnLeft.className = 'btn stop';
        btnRight.textContent = 'SPLIT';
        btnRight.className = 'btn split';
        chronometer.start(printTime);
    }
    else if(btnLeft.classList.contains('stop')) {
        btnLeft.textContent = 'START';
        btnLeft.className = 'btn start';
        btnRight.textContent = 'RESET';
        btnRight.className = 'btn reset';
        chronometer.stop();
    }
});

