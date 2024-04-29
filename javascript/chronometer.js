class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.IntervalID = null;
  }

  start(callback) {
    if (typeof callback === 'function') {
      this.IntervalID = setInterval(() => {
        this.currentTime++;
        callback();
      }, 1000);
    } else {
      this.IntervalID = setInterval(() => {
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
    
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}