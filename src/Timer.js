export default class Timer {
  constructor(main){
    // CONSTANTS
    this.mapLevelToTime = {
      1: 90,
      2: 10,
    }
    // GAME STATS
    this.time;
    this.timerInterval = null;
    this.timeoutFunction = null;
    this.timerDisplay = null;
    // OTHER OBJECT
    this.main = main;
  }

  createDisplay() {
    this.timerDisplay = document.querySelector("#timerDisplay");
    this.timerDisplay.innerText = "Timer : " + this.time;
  };

  startCountDown(level) {
    this.stop();
    this.time = this.mapLevelToTime[level.toString()];
    this.createDisplay();
    this.setTimerInterval();
    this.setTimeOut();
  };

  setTimerInterval(){
    let thisTime = this.time;
    let thisTimerDisplay = this.timerDisplay;

    this.timerInterval = setInterval(function () {
      thisTime--;
      thisTimerDisplay.innerText = "Timer : " + thisTime;
    }, 1000);
  }

  setTimeOut(){
    let thisMain = this.main;
    let thisTimerInterval = this.timerInterval;
    let thisTime = this.time;

    this.timeoutFunction = setTimeout(function () {
      window.clearInterval(thisTimerInterval);
      thisMain.executeGameOverSequence();
    }, thisTime * 1000);
  }

  stop() {
    clearInterval(this.timerInterval);
    this.timerInterval = null;
    clearTimeout(this.timeoutFunction);
    this.timeoutFunction = null;
  };
}

