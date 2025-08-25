# memory-project-game

As a user, I want to flip two cards at a time to find matching pairs so that I can challenge my memory and complete the game efficiently. AS a user the game should display a shuffled grid of face-down cards, As a user with each image appearing exactly twice. As a user when I flip two cards, they stay face-up if they match or flip back after a short delay if they don’t. As a user the game should track my number of moves, and end when all pairs are matched. As a user after completion, I should see a “Play Again” button to reset and start a new round with shuffled cards.

// Initialize the game:
// - Create a list of card images, with each image appearing exactly twice
// - Shuffle the list of cards randomly
// - Display all cards face-down in a grid layout
// On card click:
// - If the card is already matched or already face-up, ignore the click
// - If they do not match:
// - Wait a short delay (1 second)
// - Flip both cards back face-down
// - Reset firstCard and secondCard to null
// On "Play Again" button click:
// - Reset game state (matched pair count, score)
// - Shuffle and reinitialize the grid of cards
// - Start a new game

![image alt](https://github.com/Khalid-Altamimi/memory-project-game/blob/05486d253bc17dcd46f2d6459d0367f9071c4f19/Project-Pic.png)


My link game:
https://khalid-altamimi.github.io/memory-project-game/

Technologies Used:
https://www.youtube.com/watch?v=xWdkt6KSirw
https://www.youtube.com/watch?v=DABkhfsBAWw
https://www.youtube.com/watch?v=M0egyNvsN-Y
https://www.youtube.com/watch?v=ADwdef6vXZU
https://www.youtube.com/watch?v=ZniVgo8U7ek
https://www.tekeye.uk/playing_cards/svg-playing-cards

Next steps:
Actually if I have more time to develop in this project, i will change 3 things.
first is to add a start button
second after clicking on start button, I will let the cards faced up for 5 second then they get flipped again to start matching
third, After clicking play again i will change all of the ten cards into another 10 cards(5 pairs of cards), because what I have done now is only putting 10 cards in the html and they only get shuffled after restarting the game, So later on i will put all 52 cards on html so they can change later and get shuffled.


