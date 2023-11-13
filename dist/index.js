"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
fs;
const chalk = require("chalk");
// Define the ShrugmanGame class
class ShrugmanGame {
    secretWord;
    guesses;
    attemptsLeft;
    wordDisplay;
    constructor(secretWord) {
        this.secretWord = secretWord.toLowerCase();
        this.guesses = new Set();
        this.attemptsLeft = 5;
        this.wordDisplay = this.initializeWordDisplay(secretWord);
    }
    // Initialize the word display with underscores for letters and keep other characters as is
    initializeWordDisplay(secretWord) {
        return secretWord.replace(/[a-z]/g, "_");
    }
    // Implement the guessLetter function
    guessLetter(letter) {
        const lowercaseLetter = letter.toLowerCase();
        if (this.guesses.has(lowercaseLetter)) {
            console.log(chalk.green.bgGreen(`You already guessed '${lowercaseLetter}'. Please guess another Word.`));
            return;
        }
        this.guesses.add(lowercaseLetter);
        if (this.secretWord.includes(lowercaseLetter)) {
            this.updateDisplayWord(lowercaseLetter);
            if (!this.wordDisplay.includes("_")) {
                console.log(chalk.green(`Congratulations! You guessed the word: '${this.secretWord}'`));
                return "win";
            }
        }
        else {
            this.attemptsLeft--;
            console.log(chalk.red.bgRed(`Attempts Left: ${this.attemptsLeft} ¯\\_(:/)_/¯`));
            if (this.attemptsLeft === 0) {
                console.log(chalk.red(`You're a Loser My Friend! The Correct Word was: '${this.secretWord}'.`));
                return "loss";
            }
        }
        return "continue";
    }
    // Update the word display with correctly guessed letters
    updateDisplayWord(letter) {
        this.wordDisplay = letter;
        // .split("")
        // .map((char, index) =>
        //   char === letter || this.wordDisplay[index] === letter
        //     ? char
        //     : this.wordDisplay[index]
        // )
        // .join("");
    }
}
// Define an array of words
const words = [
    "javascript",
    "programming",
    "computer",
    "developer",
    "nodejs",
    "web developer",
    "application",
    "interface",
    "algorithm",
    "function",
];
// Function to get a random word from the array
function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}
// Function to get a random color from chalk for words
function getRandomChalkColor() {
    const colors = [
        "red",
        "green",
        "yellow",
        "blue",
        "magenta",
        "cyan",
        "white",
        "gray",
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return chalk[randomColor];
}
// Loop through the words and print them with random chalk colors
for (const word of words) {
    const randomColor = getRandomChalkColor();
    console.log(randomColor(word));
}
// Create a game instance with a random word
const game = new ShrugmanGame(getRandomWord());
console.log("this is the secret word", game.secretWord);
// Display a welcome message with chalk
console.log(chalk.bold.blue.bgGreen("Welcome to Shrugman"));
// Set up the readline interface for user input
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
// Function to play the game
const playGame = () => {
    console.log(chalk.bold.red(`Attempts Left: ${game.attemptsLeft}`));
    console.log(chalk.bold.black(`Word: ${game.wordDisplay}`));
    readline.question("Guess a letter: ", (letter) => {
        const result = game.guessLetter(letter);
        if (result === "win") {
            console.log(chalk.green.bgGreen("You won!"));
            readline.close();
        }
        else if (result === "loss") {
            console.log(chalk.red.bgRed("Your a loser!"));
            readline.close();
        }
        else {
            playGame();
        }
    });
};
// Start playing the game
playGame();
