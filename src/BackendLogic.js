import { Cards } from "./Cards.js";
import  Interface  from "./Interface.js";
import { Timer } from "./Timer.js";

export default class BackendLogic {
  constructor(main){
    // CONSTANTS
    this.mapLevelToSize = {
      1: 4,
      2: 6,
    };

    // GAME STATS
    this.allPlayingCards = Cards;
    this.jsBoard = [];
    this.cardsInPlay = [];
    
    // ACCESSING OTHER OBJECTS
    this.mainObject = main;
    this.frontEnd = null;
  }

  clearJsBoard() {
    this.jsBoard = [];
  }

  startGame(level){
    this.frontEnd = new Interface(level,this.mainObject,this);
    this.initializeBoard(level)
    this.frontEnd.grantAccessToMain();
  }

  initializeBoard(level){
    this.ensureCleanSlate();
    this.formJsBoard(level);
    this.frontEnd.createMainBoard(level);
    this.frontEnd.populateCards(this);
    this.frontEnd.addEventListener(this)
    this.frontEnd.displayCurrentScore();
  }

  ensureCleanSlate(){
    this.clearJsBoard();
    this.frontEnd.destroyMainBoard();
  } 

  formJsBoard(level) {
    let size = this.mapLevelToSize[level.toString()];
    let chosenCards = this.selectMatchingPairsOfCards(size);
    chosenCards = this.shuffleCards(chosenCards);

    while (chosenCards.length) {
      this.jsBoard.push(chosenCards.splice(0, size));
    }
  };


  shuffleCards(array) {
    let shuffledArray = [], n = array.length, i;

    while (n) {
      i = Math.floor(Math.random() * array.length);
      if (i in array) {
        shuffledArray.push(array[i]);
        delete array[i];
        n--;
      }
    }
    
    return shuffledArray;
  };

  selectMatchingPairsOfCards(n) {
    this.allPlayingCards = this.shuffleCards(this.allPlayingCards);
    let array = [];
    for (let i = 0; i < Math.pow(n, 2) / 2; i++) {
      //Pushes a matching pair of cards
      array.push(this.allPlayingCards[i]);
      array.push(this.allPlayingCards[i]);
    }
    return array;
  };

  accessJsBoard() {
    return this.jsBoard;
  };

  addCardIntoPlay(row,col) {
    let location = row + col;
    let card = this.jsBoard[row][col];
    this.cardsInPlay.push({
      card: card,
      location: location
    });
  }

  currCardIsNotTheThirdCard(){
    return this.cardsInPlay.length < 3
  }

  twoCardsInTheArray(){
    return (this.cardsInPlay.length >= 2)
  }

  clickingSameCardTwiceShouldNotMatch(){
    if(this.cardsInPlay.length == 2 && this.cardsInPlay[0].location == this.cardsInPlay[1].location){
      this.cardsInPlay.pop();
    }
  }

  checkMatch(){
    let firstCard = this.cardsInPlay[0];
    let secondCard = this.cardsInPlay[1];
    if(firstCard.card == secondCard.card){
      this.mainObject.increaseScore();
      this.frontEnd.displayCurrentScore();
      this.clearCards(firstCard,secondCard);
      this.clearCardsInPlay();
      this.mainObject.checkScore(this.mainObject.getLevel());
    } else {
      this.frontEnd.flipCardBack();
    }
  }

  clearCard(cardObject){
    let location = cardObject.location.split("");
    let row = location[0];
    let col = location[1];
    delete this.jsBoard[row][col];
    this.frontEnd.clearCard(row,col);
  }

  clearCards(firstCard,secondCard){
    this.clearCard(firstCard);
    this.clearCard(secondCard);
  }

  clearCardsInPlay(){
    this.cardsInPlay = [];
  }

}


