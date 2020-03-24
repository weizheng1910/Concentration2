# Concentration

[Link to App](https://weizheng1910.github.io/Concentration/)

## Technologies
CSS, Javascript ES6, code was revamped recently

## Brief overview
Poker cards are lain face down in a 4 * 4 grid. The player flips over two poker cards. The cards are removed if they match, and flipped back if they don't. The player has to clear the board within the time limit given.

After the 4 * 4 is the 6 * 6 board, with a slightly longer time limit given. 

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
  * Timer and lagtime are made global variables, which are located at the beginning of the script, so that changes can be easily made, facilitating the testing process.
  
  If timer fo stage 1 has to be changed, I can easily locate the variable for stage1Timer on **Line 25**, which is at the very top of the script. </br>
    
 
``` javascript

var stage1Timer = 3;
var stage2Timer = 3;

// Lag time before card is flipped back 
var waitTime = 550;

```

 If I had not abstracted out the variable, I will have a troublesome time locating the actual variable at **line 472** 

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
* The cards seen on the page are Document Object Models - they are created and removed by a function call. 
* Every card has an id which identify its position in the backend Javascript board, represented as an array of arrays.</br>
A card with an id of col-11 means that the card is in row 1, col 1 of the Javascript board.
* Each element in the JS Board contains the attribute of each card, namely: the image link, a unique identifier, rank and suit. 
* The position of the cards in the backend Javascript board is randomly generated everytime a new game is created.
* Each DOM card has a click event listener, which contains all the logic that follows after the click i.e. checking if the cards match, removing cards when they match, checking win condition etc. 

#### CSS Flip Animation
```html
<div class="flipper">
  <div class="front">
    <img src="Cards/cardBack_red5.png"></img>
  </div>
  <div class="back">
    <img src="Cards/cardBack_Queen7.png"></img>
  </div>
</div>
```
A card has a 2 sides. As the card is faced down during the game, </br>
the side facing up shows the motif, </br> 
and the side facing down shows the number and suit. </br>
The side with the motif is contained within `div` with `class='front'`,</br>
while the side showing the number and suit is contained with the `div` with `class='back'`. </br> 
Both `div` are nested within the `.flipper` class.

Looking at the CSS, `class='front'` has a z-index of 2, meaning that it is on top of `class='back'`.</br>
`class='back'` is transformed 180 degrees away, meaning that it is facing down(opposite of where `div` with `class='front'` is facing).</br>

The CSS attribute `transform-style: preserve-3d` in `.flipper` allows the front and back div's 3d-position within the `.flipper` div to be preserved (i.e. `.front` being on top of `.back`), </br> such that a 180 degree rotation of `.flipper` along the y-axis will mimic the rotation of an actual flip, resulting in the `.back` side facing up after the flip(and `.front` side will face down).

```css
.flipper {
    transition: 0.5s;
    transform-style: preserve-3d;
    position: relative;
    margin: 0px;
}

.front, .back {
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
}

/* front pane, placed above back */
.front {
    z-index: 2;
    /* for firefox 31 */
    transform: rotateY(0deg);
}

/* back, initially hidden pane */
.back {
    transform: rotateY(180deg);
}

.col.flipped .flipper {
        transform: rotateY(180deg);
    }


```
## Conclusion

Overall, this project familiarised me with the Javascript language and CSS.
