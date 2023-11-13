# javaScript_project

## Overview

---->>> welcome to shrugman<<<----
a simple console-based-word guessing game. in this game, you will be presented with random word and your task is to guess the correct word before running out of attempts.

## How to Play

1. You will be presented with a word initially displayed with underscores for each letters
2. Guess a word by entering your guess when prompted.
3. if you guess is correct, the display will be updated with the revealed word.
4. You only have 5 attempts to guess the word. If you run out of attempts, you lose the game
5. if you successfully guess the entire word, you win the game.

## Features

1. Random Words - The game selects a random word from a predefined array.
2. Chalk Colors - Words are displayed in random chalk colors for a visually appealing experience.
3. Interactive Interface - The game prompts the user for input and provides feedback on each guess.
4. Win/loss Condition - The game ends when the player correctly guesses the word or runs out of attempts.

## Code

1. Chalk - the code uses "Chalk" library to add colors to console output.
2. getRandomWord - the getRandomWord function retrieves a random word from an array.
3. Playgame - The game loop is established using the playGame function, which continues until the player wins or loses.

## first typescript project

"I've developed a console-based word-guessing game named Shrugman. The core logic is encapsulated in the ShrugmanGame class, which initializes the game state, handles user input, and evaluates win/loss conditions. The game loop, implemented in the playGame function, utilizes the readline interface for continuous user interaction. To enhance the visual experience, I've employed the chalk library to display words in random colors. The game provides feedback on each guess, updating the display and informing the player about the remaining attempts. Overall, Shrugman is an engaging and interactive game that challenges players to guess words within a limited number of attempts."
