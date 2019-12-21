/*
Coming up with a stopper for the event listener
Check Match should be in the timeout.
Adding game-ending condition 
3-Levels. 
Game Modes?
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

//The size of the board
var n = 4;

var boardCards = [];

var score = 0;
var time = 5; 


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
			row.style.height = "190px"
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
				col.innerHTML = "<img height = \"100\" src=\"Cards/cardBack_red5.png\"></img>"
				col.style.height = "100px";
				col.style.width = "73.68px"
			}
			
			row.appendChild(col);
		}
		mainBoard.appendChild(row);
	}
	document.body.appendChild(mainBoard);
};




makeBoard(n);
addQS();


/*
Splitting an array to get an array you want 

var a = YOUR_ARRAY;
while(a.length) {
    console.log(a.splice(0,10));
}
*/

function shuffle(array) {
	var shuffledCards = [], n = array.length, i;
	while (n) {
		//Randomly choses an integer between 0 to the number of cards remaining
		i = Math.floor(Math.random()*array.length)
		//So long the randomised i has not been deleted
		if (i in array) {
		shuffledCards.push(array[i]);
		delete array[i];
		 n --;
		}
	}
	//cards array are reshuffled
	return shuffledCards;
}


cards = shuffle(cards);

function pushBoard() {
	for(let i = 0; i < (Math.pow(n,2)/2) ; i++){
		//Push two of the same cards so it matches
		boardCards.push(cards[i].id);
		boardCards.push(cards[i].id);
	}
};

pushBoard();

boardCards = shuffle(boardCards);

//permutate

function createBoard() { 
	while(boardCards.length) {
	    resultBoard.push(boardCards.splice(0,n))
	}
	console.log(resultBoard)
}



createBoard();
populateBackImages();

//

function populateBackImages(){
	var allCol = document.querySelectorAll('.col');
	for(let i = 0; i < allCol.length; i++){
				
		var currCol = allCol[i]
		//Add flip card function too

		//their id is actually the coordinates for the result board
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
		imgContainer.appendChild(img)
	}
}















//

function addQS(){ 
	var allCol = document.querySelectorAll('.col');

	for(let i = 0; i < allCol.length; i++){
		allCol[i].addEventListener('click',function(){		
			this.classList.toggle('flipped');

			var r = this.id.charAt(4);
			var c = this.id.charAt(5);

			var theId = resultBoard[r][c];

			cardsInPlay.push(theId);

			if(cardsInPlay.length == 2){
				
				//* Clear block
				//If match increase score count

				if(cardsInPlay[0] == cardsInPlay[1]){
					score++
					clearCards(theId,r,c);

				} else {
					console.log("the r c "+r+" "+c)
					console.log("fail");
				}

				var scoreDisplay = document.querySelector("#scoreDisplay");
				scoreDisplay.innerText = "Score: "+score
				
				setTimeout(flipCardBack,1000);
				//Reset the cardsInPlay array so we can check the next 2 cards.
				cardsInPlay.length = 0;
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






function timer() {

	var timerDisplay = document.querySelector("#timerDisplay");
	timerDisplay.innerText = "Timer : "+time

	var timerInterval = setInterval(function(){ 
		time--
		timerDisplay.innerText = "Timer : "+time
		
	}, 1000);

	setTimeout(function() {
		
		clearInterval(timerInterval)
		console.log("done")
	}, (time*1000));

	//do a set timeOut
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

	
	delete resultBoard[rowOfMatchingID][colOfMatchingID]
}

	//Look through the resultBoard array for the card with same id.

	//Remove the img of both card with the same id.










var x = [[1,2,3],[1,2,3],[1,2,3]]
var y = JSON.parse(JSON.stringify(x))
delete x[0][0]
