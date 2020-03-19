# Concentration

## Technologies
CSS, Javascript

## Brief overview
Poker cards are lain face down in 4 rows, with 4 cards on each row. At every turn, the player flips over two poker cards. If it matches(same suit and rank), the cards are removed from the board.
If it doesn't, the cards are flipped back. And the next turn begins. The player has to clear the board within the time limit given.

After the 4 * 4 board, the next and last level is the 6 * 6, with a slightly longer time limit given. 

## Process 

1. Obtain the card Images. Credits to [Stuart Myers](https://github.com/LaustinSpayce) for providing the card images, without which this game wouldn't be possible. 

2. Coming up with the array of card objects.
  {
    id:
    suit:
    rank:
    img_link:
  }
3. Writing the loop which populates the images on a 4 * 4 or 6 * 6 grid.
4. Learning the flip animation from Google.
5. Coming up with match condition.
6. Coming up with logic which prevents the player from gaming the system.
   i.e. A match resulting simply from double-clicking, flipping more than 2 cards, 
7. Adding sounds and colours.

## Key Takeaways

## Things I have learnt 

#### Modularisation. Abstracting out variables frequently used.
  * Timer and lagtime are made global variables, which are located at the beginning of the script. This is so that changes can be easily implemented, facilitating the testing process.
  If I wanted change the timer for stage1, all I have to do is to change the value for stage1Timer, which is conveniently located on Line 25(at the very top where the actual code starts after the comments). </br>
    
 
``` javascript

var stage1Timer = 3;
var stage2Timer = 3;

// Lag time before card is flipped back 
var waitTime = 550;

```

 If I had not done this, I will have a troublesome time locating the stage1Timer variablee which is located on line 472 

``` javascript 
function setTime(){
	if (stage == 1){
		time = stage1Timer;
	} else if(stage == 2){
		time = stage2Timer;
	}
}
```





* Abstracting out blocks of code to their individual functions adheres to the Single Responsibility Principle. This makes each function easier to test and troubleshoot.

``` javascript
function generateFullBoard(n){
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
```
#### State design pattern. 
I learnt this from a Youtube Tutorial on Flappy Bird which also tracks the game state using a similar method.

``` javascript
// Object which tracks the game state
const gameState = {
	current: 0,
	inGame: 0,
	endGame: 1
}

//Board generated from the start
function changeState(){
	switch(gameState.current){
		case(0):
			//Reset Global Variables
			score = 0;
			var scoreDisplay = document.querySelector("#scoreDisplay");
			scoreDisplay.innerText = "Score: "+score

			stage = 1;
			generateFullBoard(4);
			
			//Populate past scores
			var pastScore = document.querySelector('#PastScore');
			pastScore.innerHTML = ""
			for(let i = 0; i < pastScores.length; i++){
				var record = document.createElement('li')
				record.innerText = pastScores[i].name+" "+pastScores[i].yourScore
				var mainBoard = document.querySelector('#mainBoard');
				pastScore.appendChild(record)
			}
			break;

		case(1):
			showGameOverScreen();
			break;
	}
}

```

#### HTML DOM Manipulation
