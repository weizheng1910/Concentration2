/*
  Things I would do differently next time:
    1. Make an effort to think of the most appropriate name for the variable
    2. Modularisation: - abstracting out repetitive pieces of code into a function
    3. Listing functions in order: as we read the code down the page, we shouldn't see a function which definition we havent seen the
       yet. 
    4. Particularly for CSS: thoroughly understanding a code before using it. (Show code here)
    5. Abstracting out the variables before so that it can be frequently tested. 
    6. Thinking through your code and removing unnececessary code:
      For example:
        Game losing condition, you do not have to loop through (Show code here)
    7. Learning and writing more efficient code - with less runtime.Instead of looping through the code. 

  Things that went well: 
    1. Listing variables on top and functions below.
    2. Commenting on what each variable does. 
    3. Plotting out what I am supposed to do with a piece of paper.
    

  Post Mortem:
    Good. Keeping my mental workspace neat - closing unnecessary windows.
    Bad. Not using Git Checkout and the VC Tool.
    Bad. Do more commits.

*/

/*
Only use const when the variable wont change.
cards is re-assigned everytime it is shuffled thats why its declaration has to be let. 
*/
const STAGE1TIMER = 3;
const STAGE2TIMER = 3;

// Lag time before card is flipped back 
const WAITTIME = 550;

// An array of object which have 
const pastScores = [];

// An array of cards
let cards = [
  {
  id: 0,
  suit: "clubs",
  number: 2,
  link:"Cards/cardClubs2.png"
  },
  {
  id: 1,
  suit: "clubs",
  number: 3,
  link: "Cards/cardClubs3.png"
  },
  {
  id: 2,
  suit: "clubs",
  number: 4,
  link: "Cards/cardClubs4.png"
  },
  {
  id: 3,
  suit: "clubs",
  number: 5,
  link: "Cards/cardClubs5.png"
  },
  {
  id: 4,
  suit: "clubs",
  number: 6,
  link: "Cards/cardClubs6.png"
  },
  {
  id: 5,
  suit: "clubs",
  number: 7,
  link: "Cards/cardClubs7.png"
  },
  {
  id: 6,
  suit: "clubs",
  number: 8,
  link: "Cards/cardClubs8.png"
  },
  {
  id: 7,
  suit: "clubs",
  number: 9,
  link: "Cards/cardClubs9.png"
  },
  {
  id: 8,
  suit: "clubs",
  number: 10,
  link: "Cards/cardClubs10.png"
  },
  {
  id: 9,
  suit: "clubs",
  number: 11,
  link: "Cards/cardClubsJ.png"
  },
  {
  id: 10,
  suit: "clubs",
  number: 13,
  link: "Cards/cardClubsK.png"
  },
  {
  id: 11,
  suit: "clubs",
  number: 12,
  link: "Cards/cardClubsQ.png"
  },
  {
  id: 12,
  suit: "clubs",
  number: 1,
  link: "Cards/cardClubsA.png"
  },
  {
  id: 13,
  suit: "diamonds",
  number: 2,
  link: "Cards/cardDiamonds2.png"
  },
  {
  id: 14,
  suit: "diamonds",
  number: 3,
  link: "Cards/cardDiamonds3.png"
  },
  {
  id: 15,
  suit: "diamonds",
  number: 4,
  link: "Cards/cardDiamonds4.png"
  },
  {
  id: 16,
  suit: "diamonds",
  number: 5,
  link: "Cards/cardDiamonds5.png"
  },
  {
  id: 17,
  suit: "diamonds",
  number: 6,
  link: "Cards/cardDiamonds6.png"
  },
  {
  id: 18,
  suit: "diamonds",
  number: 7,
  link: "Cards/cardDiamonds7.png"
  },
  {
  id: 19,
  suit: "diamonds",
  number: 8,
  link: "Cards/cardDiamonds8.png"
  },
  {
  id: 20,
  suit: "diamonds",
  number: 9,
  link: "Cards/cardDiamonds9.png"
  },
  {
  id: 21,
  suit: "diamonds",
  number: 10,
  link: "Cards/cardDiamonds10.png"
  },
  {
  id: 22,
  suit: "diamonds",
  number: 11,
  link: "Cards/cardDiamondsJ.png"
  },
  {
  id: 23,
  suit: "diamonds",
  number: 12,
  link: "Cards/cardDiamondsQ.png"
  },
  {
  id: 24,
  suit: "diamonds",
  number: 13,
  link: "Cards/cardDiamondsK.png"
  },
  {
  id: 25,
  suit: "diamonds",
  number: 1,
  link: "Cards/cardDiamondsA.png"
  },
  {
  id: 26,
  suit: "hearts",
  number: 2,
  link: "Cards/cardHearts2.png"
  },
  {
  id: 27,
  suit: "hearts",
  number: 3,
  link: "Cards/cardHearts3.png"
  },
  {
  id: 28,
  suit: "hearts",
  number: 4,
  link: "Cards/cardHearts4.png"
  },
  {
  id: 29,
  suit: "hearts",
  number: 5,
  link: "Cards/cardHearts5.png"
  },
  {
  id: 30,
  suit: "hearts",
  number: 6,
  link: "Cards/cardHearts6.png"
  },
  {
  id: 31,
  suit: "hearts",
  number: 7,
  link: "Cards/cardHearts7.png"
  },
  {
  id: 32,
  suit: "hearts",
  number: 8,
  link: "Cards/cardHearts8.png"
  },
  {
  id: 33,
  suit: "hearts",
  number: 9,
  link: "Cards/cardHearts9.png"
  },
  {
  id: 34,
  suit: "hearts",
  number: 10,
  link: "Cards/cardHearts10.png"
  },
  {
  id: 35,
  suit: "hearts",
  number: 11,
  link: "Cards/cardHeartsJ.png"
  },
  {
  id: 36,
  suit: "hearts",
  number: 12,
  link: "Cards/cardHeartsQ.png"
  },
  {
  id: 37,
  suit: "hearts",
  number: 13,
  link: "Cards/cardHeartsK.png"
  },
  {
  id: 38,
  suit: "hearts",
  number: 1,
  link: "Cards/cardHeartsA.png"
  },
  {
  id: 39,
  suit: "spades",
  number: 2,
  link: "Cards/cardSpades2.png"
  },
  {
  id: 40,
  suit: "spades",
  number: 3,
  link: "Cards/cardSpades3.png"
  },
  {
  id: 41,
  suit: "spades",
  number: 4,
  link: "Cards/cardSpades4.png"
  },
  {
  id: 42,
  suit: "spades",
  number: 5,
  link: "Cards/cardSpades5.png"
  },
  {
  id: 43,
  suit: "spades",
  number: 6,
  link: "Cards/cardSpades6.png"
  },
  {
  id: 44,
  suit: "spades",
  number: 7,
  link: "Cards/cardSpades7.png"
  },
  {
  id: 45,
  suit: "spades",
  number: 8,
  link: "Cards/cardSpades8.png"
  },
  {
  id: 46,
  suit: "spades",
  number: 9,
  link: "Cards/cardSpades9.png"
  },
  {
  id: 47,
  suit: "spades",
  number: 10,
  link: "Cards/cardSpades10.png"
  },
  {
  id: 48,
  suit: "spades",
  number: 11,
  link: "Cards/cardSpadesJ.png"
  },
  {
  id: 49,
  suit: "spades",
  number: 12,
  link: "Cards/cardSpadesQ.png"
  },
  {
  id: 50,
  suit: "spades",
  number: 13,
  link: "Cards/cardSpadesK.png"
  },
  {
  id: 51, 
  suit: "spades",
  number: 1,
  link: "Cards/cardSpadesA.png"
  }
]

// Self-explanatory
const ding = new sound("ding.mp3");
const flip = new sound("flip.mp3");

// A temporary array which stores the selected matching pairs
// before transferring them into the actual JS Board
let tempArray = [];

// Global variable which keeps track of the score 
let score = 0;

// Global variable which keeps track of the time
let time;

// Global variable which keeps track of the stage
let stage;

// Check if game has started, so that we only call 
// the timer function once
let hasGameStarted = false;
  
// Variable to store the number of matches needed to win 
let matchesToWin;

//Declared this timerInterval as a global variable so that we can use it in different functions.
let timerInterval;

//Countdown to new Game
const refreshCount = 5;

// var shuffledCards;

// JSBoard is the board in which the check for match will be done. 
let JSBoard = [];

// An array to store the chosen cards to see if they match 
let cardsInPlay = [];

// Global variable to keep track if the player wins or loses
let winOrLose = "Lose"

//Sound effects
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}

let createDomElements = (n) => {
  //Make a main div to contain the board first
  var mainBoard = document.createElement('div');
  
  // Add class and id to the main div
  mainBoard.classList.add('mainblock')
  mainBoard.classList.add('container');
  mainBoard.id = "mainBoard";

  // Create n rows in the DOM board
  for(let i = 0; i < n; i++){
    var row = document.createElement('div');
    row.classList.add('row');
      row.id = "row-"+i
      row.style.width = "700px"
      if (n > 5){
        row.style.height = "110px"
      } else {
        row.style.height = "190px";
      }
      
    // Within each row, create n col
    for(let j = 0; j < n; j++){
      // Add class and id
      var col = document.createElement('div');
      col.classList.add('col');
      col.id = "col-"+i+j;

      // Conditional rendering: if board has more than 5 rows, make each card smaller
      if(n < 5) {
        col.innerHTML = "<div class=\"flipper\"><div class=\"front\"><img src=\"Cards/cardBack_red5.png\"></img></div><div class=\"back\"></div></div>"
        col.style.height = "190px"
        col.style.width = "140px"
      } else {
        col.innerHTML = "<div class=\"flipper\"><div class=\"front\"><img height = \"100\" src=\"Cards/cardBack_red5.png\"></img></div><div class=\"back\"></div></div>"
        col.style.height = "100px";
        col.style.width = "73.68px"
      }
      
      // Append each column into the row
      row.appendChild(col);
    }
    // Append each row into the mainBoard
    mainBoard.appendChild(row);
  }

  // Append the mainBoard into the Body
  document.body.appendChild(mainBoard);

  //Re-adjusts the size of the .flipper in each col, when number of squares is greater than 5
  if (n > 5) {
    var allFlipperDiv = document.querySelectorAll(".flipper")
    var allFrontDiv = document.querySelectorAll(".front")
    var allBackDiv = document.querySelectorAll(".back")

    for(let i = 0; i < allFlipperDiv.length; i++){
      
      allFlipperDiv[i].style.height = "100px"
      allFlipperDiv[i].style.width = "73.68px"

      allFrontDiv[i].style.height = "100px"
      allFrontDiv[i].style.width = "73.68px"

      allBackDiv[i].style.height = "100px"
      allBackDiv[i].style.width = "73.68px"
    }
  }
};

let setTime = () => {
  if (stage == 1){
    time = STAGE1TIMER;
  } else if(stage == 2){
    time = STAGE2TIMER;
  }
}

// In a 4 * 4 board , you need 4 * 4 / 2 matches to win
// In a 6 * 6 board , you need 6 * 6 / 2 matches to win
let setMatchesToWin = () => {
  if (stage == 1){
    matchesToWin = (Math.pow(4,2)/2)
  } else if(stage == 2){
    matchesToWin = ((Math.pow(6,2)/2) + (Math.pow(4,2)/2))
  }
}

let generateFullBoard = (n) => {
  // Clear JavaScript Board
  JSBoard = [];
  // Generate the HTML DOMs for the board
  createDomElements(n);
  // Add query selectors
  addEventListener();
  // Shuffle cards
  cards = shuffle(cards);
  // Choose the matching pairs
  transferStepOne(n);
  // Shuffle their position
  tempArray = shuffle(tempArray);
  // Make the board an n*n array 
  transferStepTwo(n);
  // Add in images of card when it is flipped over
  populateBackImages(n);
  // Define number of matches to win
  setMatchesToWin();
  // Set the time;
  setTime();
  // So that timer function will only be called on the first click
  hasGameStarted = false;   
}


// Object which tracks the game state
const gameState = {
  current: 0,
  inGame: 0,
  endGame: 1
}


//Board generated from the start
let changeState = () => {
  switch(gameState.current){
    case(0):
      //Reset Global Variables
      score = 0;
      let scoreDisplay = document.querySelector("#scoreDisplay");
      scoreDisplay.innerText = "Score: "+score

      stage = 1;
      generateFullBoard(4);
      
      //Populate past scores
      let pastScore = document.querySelector('#PastScore');
      pastScore.innerHTML = ""
      for(const eachScore of pastScores){
        var record = document.createElement('li')
        record.innerText = eachScore.name+" "+eachScore.yourScore
        var mainBoard = document.querySelector('#mainBoard');
        pastScore.appendChild(record)
      }
      break;

    case(1):
      showGameOverScreen();
      break;
  }
}

//Returns an array shuffled
let shuffle = (array) => {
  let shuffledArray = [], n = array.length, i;

  while (n) {
    //Randomly choses an integer between 0 to the number of cards remaining
    i = Math.floor(Math.random()*array.length)
    //So long the randomised i has not been deleted
    if (i in array) {
    shuffledArray.push(array[i]);
    delete array[i];
     n --;
    }
  }
  //cards array are reshuffled
  return shuffledArray;
}

let transferStepOne = (n) => {
  for(let i = 0; i < (Math.pow(n,2)/2) ; i++){
    //Pushes a matching pair of cards
    tempArray.push(cards[i].id);
    tempArray.push(cards[i].id);
  }
};

// Transforming JSBoard into an array of arrays
let transferStepTwo = (n) => { 
  while(tempArray.length) {
      JSBoard.push(tempArray.splice(0,n))
  }
  console.log(JSBoard)
}


let populateBackImages = (n) => {
  var allCol = document.querySelectorAll('.col');
  for(const currCol of allCol){

    //Each DOM element with the class "col" has an id which describes its position in the JSBoard array
    //col-00 means JSBoard[0][0]
    let r = currCol.id.charAt(4);
    let c = currCol.id.charAt(5);

    // Each card is represented by its unique number in the JSBoard
    // E.g. 5 Hearts is represented by 29
    let theId = JSBoard[r][c];

    // Find the card object in the cards array using the unique number
    let imgObj = cards.find(x => x.id === theId);

    // Get the image link of the card-face(the side which displays the nrank and suit)
    // from the card object
    let imgLink = imgObj.link

    // Create the image for the card-face with the image link.
    let imgContainer = currCol.childNodes[0].childNodes[1];
    let img = document.createElement('img')
    img.setAttribute('src',imgLink);

    if(n>5){
      img.setAttribute('height',"100px");
      img.setAttribute('width',"73.68px");  
    }
    imgContainer.appendChild(img)
  }
}

// Event listener. What happens upon clicking.
let addEventListener = () => { 
  let allCol = document.querySelectorAll('.col');

  for(const eachCol of allCol){
    eachCol.addEventListener('click',function(){    

      //Once you click, the timer starts
      if(hasGameStarted == false){
        timer();
        hasGameStarted = true;
      } 

      // Get the JSBoard position from the DOM id.
      let r = this.id.charAt(4);
      let c = this.id.charAt(5);

      // Get the unique identifier
      let theId = JSBoard[r][c];

      // Push it into the cardsInPlay array which verifies the match
      cardsInPlay.push({
        iden: theId,
        locationid: r+c
      });

      // The below code is to prevent the bug of being able to flip the same card over and over again.
      // If both cards are from the same location, clear the cardsInPlay array
      if(cardsInPlay.length == 2 && cardsInPlay[0].locationid == cardsInPlay[1].locationid){
        var deletedCard = cardsInPlay.pop();
        return;

      // >= Is to cater to accidental clicks, you can click more than 2 times, but the cards
      // won't be flipped over.
      } else if(cardsInPlay.length >= 2){
        //After two seconds, check if there is a match a respond accordingly. 
        setTimeout(checkResult,WAITTIME,theId,r,c); 
      }

      //Prevents the third card from getting flipped over.
      if(cardsInPlay.length < 3) {
        // 'this' refers to the DOM element
        this.classList.toggle('flipped');
        flip.play();
      }
    })
  }
}

//This function flips the card back if they are open
let flipCardBack = () => {
  let allCol = document.querySelectorAll('.col');
  for(const currCol of allCol){
    /* 
    if(!(allCol[i].hasChildNodes())){
      continue;
    }
    */ 
    if( currCol.classList.contains('flipped') === true ) {
      currCol.classList.remove('flipped');
      flip.play();
    }
  }
}

let checkResult = (theId,r,c) => {
  if(cardsInPlay[0].iden == cardsInPlay[1].iden){
    score++
    clearCards(theId,r,c);

    // Check if the game has ended.
    if(score >= matchesToWin){
      timer(); //stops the timer

      // If game has ended and game is at stage1
      if (stage == 1){
        // Destroy the mainboard 
        let mainBoard = document.querySelector('#mainBoard');
        mainBoard.parentNode.removeChild(mainBoard);
        
        stage++
        // And repopulate it with a new set of cards
        generateFullBoard(6);

        // Display Timer with correct time
        var timerDisplay = document.querySelector("#timerDisplay");
        timerDisplay.innerText = "Timer : "+time

      // If game has ended at game is at stage2
      } else if(stage == 2) {
        // If already in the second stage,
        // Declare a win, and end the game
        winOrLose = "Win";
        gameState.current = gameState.endGame;
        changeState();
      }
    }

  // If there isn't a match, flip card back
  } else {
    flipCardBack();
  }

  // After verifying if a match has occured, update the score
  var scoreDisplay = document.querySelector("#scoreDisplay");
  scoreDisplay.innerText = "Score: "+score
  // And reset the cardsInPlay array so we can check the next 2 cards.
  cardsInPlay.length = 0;
}

function clearCards(theId,r,c) {
  
  // The arguments: theId, r and c are the uniqueID, rowID and colID of
  // the first card respectively.
  // Thi 
  var rowOfMatchingID;
  var colOfMatchingID;

  // We need to keep track of the card
  var thisID = theId
  delete JSBoard[r][c];
  
  // Go through every row in the JS Board to see if we can find a card with the same unique ID.
  // Then identify the row and column of this card as rowOfMatchingID and colOfMatchingID respectively.
  for(let i = 0; i < JSBoard.length; i++){
    if(JSBoard[i].indexOf(thisID) >= 0) {
      rowOfMatchingID = i;
      colOfMatchingID = JSBoard[i].indexOf(thisID);
      break;
    }
  }

  var firstCardToRemove = document.querySelector('#col-'+r+c);
  var secondCardToRemove = document.querySelector('#col-'+rowOfMatchingID+colOfMatchingID);
  
  firstCardToRemove.removeChild(firstCardToRemove.childNodes[0]);
  secondCardToRemove.removeChild(secondCardToRemove.childNodes[0]);
  ding.play();

  delete JSBoard[rowOfMatchingID][colOfMatchingID]
}

function showGameOverScreen(){
  var mainBoard = document.querySelector('#mainBoard');
  mainBoard.innerHTML = "";

  var gameStatement = document.createElement('p');
  gameStatement.id = "gameStatement"
  gameStatement.innerText = "You "+winOrLose+".\n Your score is "+score+"\n Enter your name below to submit your score."
  mainBoard.appendChild(gameStatement)

  
  var nameInput = document.createElement('input');
  nameInput.id = "nameInput"
  nameInput.setAttribute("type", "text");
  nameInput.addEventListener('change',function(){
    
    var currentName = event.target.value;
    pastScores.push({name: currentName, yourScore: score})
    
    if(pastScores.length >= 5){
      pastScores.shift()
    }

    var mainBoard = document.querySelector('#mainBoard');
    mainBoard.parentNode.removeChild(mainBoard);
    
    gameState.current = gameState.inGame;
    changeState();
  })

  mainBoard.appendChild(gameStatement)
  mainBoard.appendChild(nameInput)
}

var timerStat = "off";
// Declared the timeout function as a global variable so we can call it outside
var timeoutFunction;

function timer() {
  
  // This if-else statement acts like a switch 
  // Call it once, it switches on, call it again it switches off
  if(timerStat == "off"){
    timerStat = "on";
  } else if(timerStat == "on"){
    timerStat = "off"
  }

  // The code which would run depending on the timerStat variable
  if(timerStat == "off"){
    clearInterval(timerInterval);
    clearTimeout(timeoutFunction);
  } else {
    var timerDisplay = document.querySelector("#timerDisplay");
    timerDisplay.innerText = "Timer : "+time

    // Interval function which counts down the time
    timerInterval = setInterval(function(){ 
      time--
      timerDisplay.innerText = "Timer : "+time  
    }, 1000);

    // Terminates game timer when it reaches zero
    timeoutFunction = setTimeout(function() {
    // This below is required so that when timer() calls again
    // It starts the timer rather than stops it.
    timerStat = "off";
    clearInterval(timerInterval)
    gameState.current = gameState.endGame;
    changeState();
    }, (time*1000));
  }
}

//This call starts the whole game :)
changeState();