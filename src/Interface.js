import Timer  from "./Timer.js";

export default class Interface {
  constructor(level,main,back){
    // CONSTANTS
    this.waitTime = 550;
    this.rowWidth = "700px";
    this.rowHeightForLevelOne = "190px";
    this.rowHeightForLevelTwo = "110px";
    this.colHeightForLevelOne = "190px";
    this.colWidthForLevelOne = "140px";
    this.colHeightForLevelTwo = "100px";
    this.colWidthForLevelTwo = "73.68px";
    this.mapLevelToSize = {
      1: 4,
      2: 6,
    };
    // GAME STATS
    this.hasGameStarted = false;
    this.currentLevel = level;
    // ACCESSING OTHER OBJECTS
    this.timer = new Timer(main);
    this.main = main;
    this.back = back;
  }

  grantAccessToMain(){
    this.main.getAccessToInterface(this)
  }

  resetGame(){
    this.hasGameStarted = false;
  }

  destroyMainBoard() {
    let mainBoard = document.querySelector('#mainBoard');
    if(mainBoard != null){
      mainBoard.parentNode.removeChild(mainBoard);
    }
  }

  createMainBoard(level) {
    this.timer.stop()
    this.resetGame();
    this.currentLevel = level;
    let mainBoard = document.createElement("div");
    mainBoard.classList.add("mainblock");
    mainBoard.classList.add("container");
    mainBoard.id = "mainBoard";
    this.createRowsWithinBoard(
      this.mapLevelToSize[level.toString()],
      mainBoard
    );
    document.body.appendChild(mainBoard);
  };

  createRowsWithinBoard(size, mainBoard) {
    for (let i = 0; i < size; i++) {
      var row = document.createElement("div");
      row.classList.add("row");
      row.id = "row-" + i;
      row.style.width = this.rowWidth;

      if (this.currentLevel == 1) {
        row.style.height = this.rowHeightForLevelOne;
      }

      if (this.currentLevel == 2) {
        row.style.height = this.rowHeightForLevelTwo;
      }

      this.createColumnsWithinRow(size, row);
      mainBoard.appendChild(row);
    }
  };

  createColumnsWithinRow(size, row) {
    let rowId = row.getAttribute("id").charAt(4);

    for (let j = 0; j < size; j++) {
      let col = document.createElement("div");
      col.classList.add("col");
      col.id = "col-" + rowId + j;

      col.innerHTML = 
      `<div class=\"flipper\">
          <div class=\"front\"></div>
          <div class=\"back\"></div>
        </div>`;

      if (this.currentLevel == 1) {
        col.style.height = this.colHeightForLevelOne;
        col.style.width = this.colWidthForLevelOne;
      }

      if (this.currentLevel == 2) {
        col.style.height = this.colHeightForLevelTwo;
        col.style.width = this.colWidthForLevelTwo;
      }

      row.appendChild(col);
    }
  };

  populateCards(backendObject){
    let allCol = document.querySelectorAll('.col');
    for(const currCol of allCol){
      //col-00 means JSBoard[0][0]
      let r = currCol.id.charAt(4);
      let c = currCol.id.charAt(5);

      let board = backendObject.accessJsBoard()
      let cardObject = board[r][c];
      let imgLink = cardObject.link

      let frontImg = document.createElement('img')
      frontImg.setAttribute('src',imgLink);

      let backImg = document.createElement('img')
      backImg.setAttribute('src','Cards/cardBack_red5.png');

      this.setImage(frontImg);
      this.setImage(backImg);

      let flipperDiv = currCol.children[0]
      let frontDiv = flipperDiv.children[0]
      let backDiv = flipperDiv.children[1]
      frontDiv.appendChild(backImg)
      backDiv.appendChild(frontImg)
    }
  }

  setImage(imgObj){
    if(this.currentLevel == 1){
      imgObj.setAttribute('height',this.colHeightForLevelOne);
      imgObj.setAttribute('width',this.colWidthForLevelOne);
    }

    if(this.currentLevel == 2){
      imgObj.setAttribute('height',this.colHeightForLevelTwo);
      imgObj.setAttribute('width',this.colWidthForLevelTwo);
    }
  }


  startTimer(level){
    if(this.hasGameStarted == false){
      this.timer.startCountDown(level);
      this.hasGameStarted = true;
    }
  }

  addEventListener(backendObject){
    let allCol = document.querySelectorAll('.col');
    let getLevel = this.currentLevel;
    let getWaitTime = this.waitTime;
    let that = this;
    //
    for(const currCol of allCol){
      currCol.addEventListener('click', function(){
        that.startTimer(getLevel)
        let row = this.id.charAt(4);
        let col = this.id.charAt(5);
        backendObject.addCardIntoPlay(row,col);
        backendObject.clickingSameCardTwiceShouldNotMatch();
        if(backendObject.currCardIsNotTheThirdCard()){
          this.classList.add('flipped');
        }
        if(backendObject.twoCardsInTheArray() == true){
          setTimeout(function(){ backendObject.checkMatch();backendObject.clearCardsInPlay() }, getWaitTime);
        }
      })
    }
  }

  flipCardBack(){
    let allCol = document.querySelectorAll('.col');
    for(const currCol of allCol){
      if( currCol.classList.contains('flipped') === true ) {
        currCol.classList.remove('flipped');
      }
    }
  }

  clearCard(row,col){
     let cardToRemove = document.querySelector('#col-'+row+col);
     cardToRemove.removeChild(cardToRemove.childNodes[0]);
  }

  showInputPrompt(){
    this.appendDomToMainBoard(this.createNameInputDom());
  }

  appendDomToMainBoard(dom){
    let mainBoard = document.querySelector('#mainBoard');
    mainBoard.appendChild(dom)
  }

  createNameInputDom(){
    let nameInput = document.createElement('input');
    nameInput.id = "nameInput"
    nameInput.setAttribute("type", "text");

    let getMain = this.main;
    let getBack = this.back;
    let that = this;

    nameInput.addEventListener('change', function(){  
      let currentName = event.target.value;
      getMain.addPastScore(currentName);
      let mainBoard = document.querySelector('#mainBoard');
      mainBoard.parentNode.removeChild(mainBoard);
      
      that.showPastScores();

      getBack.initializeBoard(1);
      getMain.resetLevel();
      getMain.resetScore();

    })
    return nameInput;
  }


  showGameOver(){
    let mainBoard = document.querySelector('#mainBoard');
    mainBoard.innerHTML = "";

    let gameStatement = document.createElement('p');
    gameStatement.id = "gameStatement";
    gameStatement.innerText = "Your score is "+this.main.getScore()+"\n Enter your name below to submit your score."
    this.appendDomToMainBoard(gameStatement);
  }

  displayCurrentScore(){
    console.log('displayCurrentScore')
    let scoreDisplay = document.querySelector("#scoreDisplay");
    let score = this.main.getScore();
    scoreDisplay.innerText = "Score: "+ score;
  }

  showPastScores(){
    let pastScore = document.querySelector('#PastScore');
    pastScore.innerHTML = ""
    let pastScores = this.main.getPastScores();
    console.log(pastScores)
    for(const eachScore of pastScores){
      let record = document.createElement('li')
      record.innerText = eachScore.name+" "+eachScore.score
      pastScore.appendChild(record)
    }
  }

}


