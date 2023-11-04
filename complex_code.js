/*
  Filename: complex_code.js

  This code demonstrates a complex and elaborate JavaScript program.
  It implements an interactive quiz game with multiple levels and scoring mechanisms.

  Note: This code assumes the presence of an HTML page with appropriate elements
  in which it can be embedded or linked to, like button, div, etc.

  Author: Your Name
  Date: Today's Date
*/

// Global variables
let currentLevel = 1;
let score = 0;

// Levels data
const levels = {
  1: {
    question: 'What is the capital of France?',
    options: ['Paris', 'Madrid', 'Rome', 'Berlin'],
    correctAnswer: 0,
    points: 10,
  },
  2: {
    question: 'What is the largest planet in our solar system?',
    options: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
    correctAnswer: 1,
    points: 15,
  },
  // Add more levels here
};

// Display question and options for current level
function displayLevelQuestion() {
  const level = levels[currentLevel];
  const questionElem = document.getElementById('question');
  const optionsElem = document.getElementById('options');
  
  questionElem.textContent = level.question;
  optionsElem.innerHTML = ''; // Clear previous options
  
  level.options.forEach((option, index) => {
    const optionElem = document.createElement('div');
    optionElem.textContent = option;
    optionElem.classList.add('option');
    
    // Add click event listener to the option
    optionElem.addEventListener('click', () => {
      checkAnswer(index);
    });

    optionsElem.appendChild(optionElem);
  });
}

// Check if the selected answer is correct
function checkAnswer(selectedIndex) {
  const level = levels[currentLevel];
  if (selectedIndex === level.correctAnswer) {
    // Increment score
    score += level.points;
    // Proceed to next level
    currentLevel++;
    // Display the next question
    displayLevelQuestion();
  } else {
    // Failed. Show an alert and reset game
    alert('Incorrect answer! Game Over.');
    resetGame();
  }
}

// Reset game state
function resetGame() {
  currentLevel = 1;
  score = 0;
  displayLevelQuestion();
}

// Initialize the game
function initGame() {
  displayLevelQuestion();
}

// Start the game when the page loads
document.addEventListener('DOMContentLoaded', initGame);