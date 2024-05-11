class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    if (typeof callback === 'function') {
      this.intervalId = setInterval(() => {
        this.currentTime++;
        callback();
      }, 1000);
    } else {
      this.intervalId = setInterval(() => {
        this.currentTime++;
      }, 1000);
    }
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
   return Math.floor(this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`; 
    } else {
      return `${value}`; 
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let formattedMinutes = this.computeTwoDigitNumber(this.getMinutes());
    let formattedSeconds = this.computeTwoDigitNumber(this.getSeconds());
    
    return `${formattedMinutes}:${formattedSeconds}`;
  }
}
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}