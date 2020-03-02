# Concentration

Poker cards are lain face down, 4 rows, with 4 cards on each row. At every turn, the player flips over two poker cards. If it matches(same suit and rank), the cards are removed from the board.
If it doesn't, the cards are flipped back. And the next turn begins. The player has to clear the board within the time limit given.

After the 4 * 4 board, the next and last level is the 6 * 6, with a slightly longer time limit given. 

# Process 

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
6. Coming up with logic which prevents the player from gaming the system. i.e. A match resulting simply from double-clicking, flipping more than 2 cards, 
7. 


