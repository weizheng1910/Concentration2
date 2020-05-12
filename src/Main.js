import BackendLogic from "./BackendLogic.js";

class Main {

  constructor(){
    // CONSTANTS
    this.mapLevelToSize = {
      1: 4,
      2: 6,
    };

    this.stageOnePassingScore = Math.pow(this.mapLevelToSize["1"],2) / 2; 
    this.stageTwoPassingScore = this.stageOnePassingScore + (Math.pow(this.mapLevelToSize["2"],2) / 2);
    
    this.mapLevelToPassingScore = {
      1: this.stageOnePassingScore,
      2: this.stageTwoPassingScore
    }

    // GAME STATS
    this.currentStage = 1;
    this.currentScore = 0;
    this.level = "1";
    this.pastScores = [];

    // ACCESSING OTHER OBJECTS
    this.backEnd = null;
    this.frontEnd = null;

  }

  getLevel(){
    return this.level;
  }

  increaseLevel(){
    this.level = "2";
  }

  resetLevel(){
    this.level = "1";
  }

  getAccessToInterface(interfaceObject){
    this.frontEnd = interfaceObject;
  }

  start(level) {
    this.backEnd = new BackendLogic(this);
    this.backEnd.startGame(level);
  };

  increaseScore() {
    this.currentScore++;
  }

  resetScore(){
    this.currentScore = 0;
  }

  checkScore(currentLevel) {
    let passingScoreNeeded = this.mapLevelToPassingScore[currentLevel];
    if(this.currentScore >= passingScoreNeeded){
      this.moveNextLevel();
    }
  }

  getScore() {
    return this.currentScore;
  }

  getPastScores(){
    return this.pastScores;
  }

  addPastScore(name){
    this.pastScores.push({name: name, score: this.currentScore});
    if(this.pastScores.length >= 5){
        this.pastScores.shift()
      }
  }

  moveNextLevel(){
    if(this.level == "1"){
      this.backEnd.initializeBoard(2)
      this.increaseLevel();
    } else if(this.level == "2"){
      this.executeGameOverSequence();
    }
  }

  executeGameOverSequence(){
    this.frontEnd.showGameOver();
    this.frontEnd.showInputPrompt();
  }

}


let main = new Main();
main.start(1);

