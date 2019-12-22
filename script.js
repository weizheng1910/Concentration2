/*
TO DO LIST: 

Coming up with a stopper for the event listener DONE
Check Match should be in the timeout. DONE
Adding game-ending condition DONE
3-Levels. DONE 2 Levels
Game over image, and Restart game state in 5 seconds. DONE


To add in Refresher Timer. DONE
Prevent clicking on the same card. DONE

*/


console.log("hello")

var cards = [
	{
	id: 0,
	link:"Cards/cardClubs2.png"
	},
	{
	id: 1,
	link: "Cards/cardClubs3.png"
	},
	{
	id: 2,
	link: "Cards/cardClubs4.png"
	},
	{
	id: 3,
	link: "Cards/cardClubs5.png"
	},
	{
	id: 4,
	link: "Cards/cardClubs6.png"
	},
	{
	id: 5,
	link: "Cards/cardClubs7.png"
	},
	{
	id: 6,
	link: "Cards/cardClubs8.png"
	},
	{
	id: 7,
	link: "Cards/cardClubs9.png"
	},
	{
	id: 8,
	link: "Cards/cardClubs10.png"
	},
	{
	id: 9,
	link: "Cards/cardClubsJ.png"
	},
	{
	id: 10,
	link: "Cards/cardClubsK.png"
	},
	{
	id: 11,
	link: "Cards/cardClubsQ.png"
	},
	{
	id: 12,
	link: "Cards/cardClubsA.png"
	},
	{
	id: 13,
	link: "Cards/cardDiamonds2.png"
	},
	{
	id: 14,
	link: "Cards/cardDiamonds3.png"
	},
	{
	id: 15,
	link: "Cards/cardDiamonds4.png"
	},
	{
	id: 16,
	link: "Cards/cardDiamonds5.png"
	},
	{
	id: 17,
	link: "Cards/cardDiamonds6.png"
	},
	{
	id: 18,
	link: "Cards/cardDiamonds7.png"
	},
	{
	id: 19,
	link: "Cards/cardDiamonds8.png"
	},
	{
	id: 20,
	link: "Cards/cardDiamonds9.png"
	},
	{
	id: 21,
	link: "Cards/cardDiamonds10.png"
	},
	{
	id: 22,
	link: "Cards/cardDiamondsJ.png"
	},
	{
	id: 23,
	link: "Cards/cardDiamondsQ.png"
	},
	{
	id: 24,
	link: "Cards/cardDiamondsK.png"
	},
	{
	id: 25,
	link: "Cards/cardDiamondsA.png"
	},
	{
	id: 26,
	link: "Cards/cardHearts2.png"
	},
	{
	id: 27,
	link: "Cards/cardHearts3.png"
	},
	{
	id: 28,
	link: "Cards/cardHearts4.png"
	},
	{
	id: 29,
	link: "Cards/cardHearts5.png"
	},
	{
	id: 30,
	link: "Cards/cardHearts6.png"
	},
	{
	id: 31,
	link: "Cards/cardHearts7.png"
	},
	{
	id: 32,
	link: "Cards/cardHearts8.png"
	},
	{
	id: 33,
	link: "Cards/cardHearts9.png"
	},
	{
	id: 34,
	link: "Cards/cardHearts10.png"
	},
	{
	id: 35,
	link: "Cards/cardHeartsJ.png"
	},
	{
	id: 36,
	link: "Cards/cardHeartsQ.png"
	},
	{
	id: 37,
	link: "Cards/cardHeartsK.png"
	},
	{
	id: 38,
	link: "Cards/cardHeartsA.png"
	},
	{
	id: 39,
	link: "Cards/cardSpades2.png"
	},
	{
	id: 40,
	link: "Cards/cardSpades3.png"
	},
	{
	id: 41,
	link: "Cards/cardSpades4.png"
	},
	{
	id: 42,
	link: "Cards/cardSpades5.png"
	},
	{
	id: 43,
	link: "Cards/cardSpades6.png"
	},
	{
	id: 44,
	link: "Cards/cardSpades7.png"
	},
	{
	id: 45,
	link: "Cards/cardSpades8.png"
	},
	{
	id: 46,
	link: "Cards/cardSpades9.png"
	},
	{
	id: 47,
	link: "Cards/cardSpades10.png"
	},
	{
	id: 48,
	link: "Cards/cardSpadesJ.png"
	},
	{
	id: 49,
	link: "Cards/cardSpadesQ.png"
	},
	{
	id: 50,
	link: "Cards/cardSpadesK.png"
	},
	{
	id: 51,	
	link: "Cards/cardSpadesA.png"
	}
]

var mySound = new sound("ding.mp3");

var boardCards = [];

var score = 0;
var time = 300;

var stage = 1;

var hasGameStarted = false;
  

var matchesToWin;

//Declared this timerInterval as a global variable so that we can use it in different functions.
var timerInterval;

//Countdown to new Game
var refreshCount = 5;


var shuffledCards;

// resultBoard is the board in which the check for match will be done. 
var resultBoard = [];

var cardsInPlay = [];

//Create a board which makes n * n squares


function makeBoard(n) {
	//Make a main div to contain the board first
	var mainBoard = document.createElement('div');
	//Because we are using Bootstrap, we will use container class.
	mainBoard.classList.add('mainblock')
	mainBoard.classList.add('container');
	mainBoard.id = "mainBoard";

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
			
		//Within each row, create n col
		for(let j = 0; j < n; j++){
			var col = document.createElement('div');
			col.classList.add('col');
			col.classList.add('col-'+(12/(n+1)));
			col.id = "col-"+i+j;

			if(n < 5) {
				col.innerHTML = "<div class=\"flipper\"><div class=\"front\"><img src=\"Cards/cardBack_red5.png\"></img></div><div class=\"back\"></div></div>"
				col.style.height = "190px"
				col.style.width = "140px"
			} else {
				col.innerHTML = "<div class=\"flipper\"><div class=\"front\"><img height = \"100\" src=\"Cards/cardBack_red5.png\"></img></div><div class=\"back\"></div></div>"
				col.style.height = "100px";
				col.style.width = "73.68px"
				}
			

			
			
			row.appendChild(col);
		}
		mainBoard.appendChild(row);
	}
	document.body.appendChild(mainBoard);

	//Readjusts DOM sizes when number of squares is greater than 5
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


function generateFullBoard(n){
	//Generate the HTML DOMs for the board
	makeBoard(n);
	//Add query selectors
	addQS();
	//Shuffle cards
	cards = shuffle(cards);
	// Choose the matching pairs
	pushBoard(n);
	// Shuffle their position
	boardCards = shuffle(boardCards);
	// Make the board an n*n array 
	createBoard(n);
	// Add in images of card when it is flipped over
	populateBackImages(n);
	//Define number of matches to win
	matchesToWin = (Math.pow(n,2)/2)
}

//Board generated from the start
generateFullBoard(4)


//Returns an array shuffled
function shuffle(array) {
	var shuffledArray = [], n = array.length, i;
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


function pushBoard(n) {
	for(let i = 0; i < (Math.pow(n,2)/2) ; i++){
		//Pushes a matching pair of cards
		boardCards.push(cards[i].id);
		boardCards.push(cards[i].id);
	}
};

function createBoard(n) { 
	while(boardCards.length) {
	    resultBoard.push(boardCards.splice(0,n))
	}
	console.log(resultBoard)
}



function populateBackImages(n){
	var allCol = document.querySelectorAll('.col');
	for(let i = 0; i < allCol.length; i++){
				
		var currCol = allCol[i]

		//Each "col" has an id which describes its position in the resultBoard array
		//col-00 means resultBoard[0][0]
		var r = currCol.id.charAt(4);
		var c = currCol.id.charAt(5);

		var theId = resultBoard[r][c];

		//Find the object which has theId as its id.
		var imgObj = cards.find(x => x.id === theId);

		//This is to get the faceup image of the card

		var imgLink = imgObj.link

		var imgContainer = currCol.childNodes[0].childNodes[1];
		var img = document.createElement('img')
		img.setAttribute('src',imgLink);

		if(n>5){
			img.setAttribute('height',"100px");
			img.setAttribute('width',"73.68px");	
		}
		imgContainer.appendChild(img)
	}
}

// Event listener. What happens upon clicking.
function addQS() { 
	var allCol = document.querySelectorAll('.col');

	for(let i = 0; i < allCol.length; i++){
		allCol[i].addEventListener('click',function(){		
		console.log("click")
		

		//Once you click, the timer starts
		if(hasGameStarted == false){
			timer();
			hasGameStarted = true;
		} 

		
		var r = this.id.charAt(4);
		var c = this.id.charAt(5);

		var theId = resultBoard[r][c];

		cardsInPlay.push({
			iden: theId,
			locationid: r+c
		});

		console.log(cardsInPlay)

		//The below code is to prevent the bug of being able to flip the same card over and over again.
		if(cardsInPlay.length == 2 && cardsInPlay[0].locationid == cardsInPlay[1].locationid){
			var deletedCard = cardsInPlay.pop();
			console.log(deletedCard)
			console.log(cardsInPlay)
			return;
		} else if(cardsInPlay.length >= 2){
			//After two seconds, check if there is a match a respond accordingly. 
			// ">=" is used so that the code continues to run even if there are accidental clicks
			setTimeout(checkResult,2000,theId,r,c);	
		}

		//Prevents the third card from getting flipped over.
		if(cardsInPlay.length < 3) {
			this.classList.toggle('flipped');
		}

		
		
		})
	}
}



//This function flips the card back if they are open
function flipCardBack() {
	var allCol = document.querySelectorAll('.col');
	for(let i = 0; i<allCol.length; i++){
		if(!(allCol[i].hasChildNodes())){
			console.log("hey")
			continue;
		}

		if( allCol[i].classList.contains('flipped') === true ) {
			allCol[i].classList.remove('flipped');
		}

	}
}


function checkResult(theId,r,c) {
	//This code prevents a bug where the computer reads a match when you click at the same card twice.
	if(cardsInPlay[0].iden == cardsInPlay[1].iden && cardsInPlay[0].locationid != cardsInPlay[1].locationid){
		score++
		clearCards(theId,r,c);

		//Check if the game has ended.
		if(score >= matchesToWin){
			if (stage == 1){
				var mainBoard = document.querySelector('#mainBoard');
				mainBoard.parentNode.removeChild(mainBoard);
				resultBoard = [];
				score = 0;
				time = 300;
				generateFullBoard(6);
				stage++

			} else if(stage == 2) {

				//Display game over 
				var mainBoard = document.querySelector('#mainBoard');
				mainBoard.innerHTML = "";

				var displayGameOver = document.createElement("p");
				displayGameOver.id = "gameOver";
				displayGameOver.innerText = "Game Over !\n You Win !";
				mainBoard.appendChild(displayGameOver);
				
				//Stop in-game timer
				clearInterval(timerInterval)
				
				//New Game starts after 5 seconds.
				var refreshInterval = setInterval( function(){
					refreshCount--
					var displayGameOver = document.querySelector("#gameOver")
					displayGameOver.innerText = "Game Over !\n You Win !\n Restarting in : "+refreshCount;
				}, 1000)


				setTimeout(function(){ 
					//Stop the countdown when game restarts.
					clearInterval(refreshInterval);

					//Reset all game variables
					refreshCount = 5;
					resultBoard = [];
					score = 0;
					time = 300;
					stage = 1;
					
					//Remove mainBoard to make space when board is regenerated.
					var mainBoard = document.querySelector('#mainBoard');
					mainBoard.parentNode.removeChild(mainBoard);

					//Redisplay time
					var timerDisplay = document.querySelector("#timerDisplay");
					timerDisplay.innerText = "Timer : "+time

					//Redisplay score
					var scoreDisplay = document.querySelector("#scoreDisplay");
					scoreDisplay.innerText = "Score: "+score

					//Reset counter so timer can run again
					hasGameStarted = false;

					//Regenerate 4*4 board
					generateFullBoard(4);

				},5000)

			}
		}

	} else {
		flipCardBack();
	}

	var scoreDisplay = document.querySelector("#scoreDisplay");
	scoreDisplay.innerText = "Score: "+score
	
	
	//Reset the cardsInPlay array so we can check the next 2 cards.
	cardsInPlay.length = 0;
	

}






function timer() {

	var timerDisplay = document.querySelector("#timerDisplay");
	timerDisplay.innerText = "Timer : "+time

	//Countdown function
	timerInterval = setInterval(function(){ 
		time--
		timerDisplay.innerText = "Timer : "+time
		
	}, 1000);

	//Terminates game timer when it reaches zero
	setTimeout(function() {
		//Stops timer
		clearInterval(timerInterval)
		//Game ending condition
	loop1:
		for(let i = 0; resultBoard.length; i++) {
		loop2:
			for(let j = 0; resultBoard.length; j++) {
				if(isNaN(resultBoard[i][j]) == false){
					console.log(i,j)
					//Destroy mainboard
					var mainBoard = document.querySelector('#mainBoard');
					mainBoard.innerHTML = "";

					var youLose = document.createElement('p');
					youLose.id = "youLose"
					youLose.innerText = "YOU LOSE"

					mainBoard.appendChild(youLose)
					break loop1;
				}
			}
		}

		console.log("IM HERE")
		//Need to start the refresh
		var refreshInterval = setInterval( function(){
			refreshCount--
			var youLose = document.querySelector("#youLose")
			youLose.innerText = "YOU LOSE \n Restarting in : "+refreshCount;
		}, 1000)

		//Restart game after 5 seconds 

		setTimeout(function(){ 
						//Stop the countdown when game restarts.
						clearInterval(refreshInterval);

						//Reset all game variables
						refreshCount = 5
						resultBoard = [];
						score = 0;
						time = 300;
						stage = 1;
						
						//Remove mainBoard to make space when board is regenerated.
						var mainBoard = document.querySelector('#mainBoard');
						mainBoard.parentNode.removeChild(mainBoard);

						//Redisplay time
						var timerDisplay = document.querySelector("#timerDisplay");
						timerDisplay.innerText = "Timer : "+time

						//Redisplay score
						var scoreDisplay = document.querySelector("#scoreDisplay");
						scoreDisplay.innerText = "Score: "+score

						//Reset counter so timer can run again
						hasGameStarted = false;

						//Regenerate 4*4 board
						generateFullBoard(4);

					},5000)

	}, (time*1000));

}

function clearCards(theId,r,c) {
	//Find the cards[].id of the card clicked.
	
	var rowOfMatchingID;
	var colOfMatchingID;

	
	//We need to keep track of the card
	var thisID = theId
	delete resultBoard[r][c];
	

	for(let i = 0; i < resultBoard.length; i++){
		if(resultBoard[i].indexOf(thisID) >= 0) {
			rowOfMatchingID = i;
			colOfMatchingID = resultBoard[i].indexOf(thisID);
			
			break;
		}
	}

	console.log(rowOfMatchingID,colOfMatchingID)

	var firstCardToRemove = document.querySelector('#col-'+r+c);
	var secondCardToRemove = document.querySelector('#col-'+rowOfMatchingID+colOfMatchingID);
	console.log(firstCardToRemove);
	console.log(secondCardToRemove);
	firstCardToRemove.removeChild(firstCardToRemove.childNodes[0]);
	secondCardToRemove.removeChild(secondCardToRemove.childNodes[0]);
	mySound.play();

	delete resultBoard[rowOfMatchingID][colOfMatchingID]
}

	//Look through the resultBoard array for the card with same id.

	//Remove the img of both card with the same id.

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