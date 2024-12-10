/*
  This code depends on:
    * data.js
    * setupClasses.js
    * setupCategories.js
    * setupGames.js
*/

// 1. set up references to dom elements
const startScreen = document.getElementById('start-screen');
const gameBoardScreen = document.getElementById('game-board-screen');
const promptScreen = document.getElementById('prompt-screen');
const answerScreen = document.getElementById('answer-screen');
const endScreen = document.getElementById('end-screen');
const dailyDoubleScreen = document.getElementById('daily-double-screen');

const gameBoard = document.getElementById('game-board');
const gameInitButtons = document.getElementById('game-init-buttons');
const prompt = document.getElementById('prompt');
const answer = document.getElementById('answer');
const revealButton = document.getElementById('reveal-answer-button');
const returnButton = document.getElementById('return-button');
const continuePromptButton = document.getElementById('continue-to-prompt-button');
const doubleSwitch = document.getElementById('double-switch');
doubleSwitch.checked = false;

// 2. set up main buttons and variables for game
CreateSelectGameButtons(games);

revealButton.addEventListener('click', function(){
    clickSound.play();
    ShowScreen(answerScreen);
    answer.style.opacity = '0.0';
    const opacityTimer = setTimeout(function(){answer.style.opacity = '1.0';},   100);
});

returnButton.addEventListener('click', function(){
    clickSound.play();
    ShowScreen(gameBoardScreen);
    bCardFlipDisabled = false
});

continuePromptButton.addEventListener('click', function(){
    clickSound.play();
    FadeInPromptScreen(350);
});

var dailyDoubleIndex = 12 + Math.floor(Math.random() * 10);
var flippedCardCount = 0;
var totalCardCount = 0;
var clickSound = new Audio('./audio/click.wav');
var bCardFlipDisabled = false;

// 3. show start screen
ShowScreen(startScreen);


/* ******************************************* */

// FUNCTIONS that manipulate dom

function ShowScreen (domElement){
  startScreen.style.display = 'none';
  gameBoardScreen.style.display = 'none';
  promptScreen.style.display = 'none';
  answerScreen.style.display = 'none';
  endScreen.style.display = 'none';
  dailyDoubleScreen.style.display = 'none';

  if(domElement){
    domElement.style.display = 'block';
  }
}

function FadeInPromptScreen(delay){
    const timer = setTimeout(function(){
        ShowScreen(promptScreen);
        prompt.style.opacity = '0.0';
        const opacityTimer = setTimeout(function(){prompt.style.opacity = '1.0';}, 100);
    }, delay);
}

function CreateSelectGameButtons(gameObjectsArray){
    gameObjectsArray.forEach(gameObj => {
        let button = document.createElement('div');
        button.setAttribute('class', 'button');
        button.textContent = gameObj.name;
        gameInitButtons.appendChild(button);

        // 2. add button functionality
        button.addEventListener('click', function(){
          if (!gameObj.categories){
            console.log('uh-oh, this theme doesn\'t have any categories');
            return;
          }

          clickSound.play();
          PopulateGameBoard(gameObj);
          gameInitButtons.style.visibility = 'hidden';
          document.getElementById('start-screen-panel').style.opacity = 0.0;

          const timer = setTimeout(function(){
            let enterGameAudio = new Audio('./audio/enter-game.wav');
            enterGameAudio.play();
            ShowScreen(gameBoardScreen);
            gameBoardScreen.style.opacity = 0.0;
            const opacityTimer = setTimeout(function(){gameBoardScreen.style.opacity = '1.0';}, 30);
          }, 1700);
    });
  });
}


function PopulateGameBoard(gameObject){
    const domElements = gameBoard.children; // <-- DOM references!
    let index = 0;
  
    for (categoryObject of gameObject.categories) {
        // <div class="category"> <h2>Category 1</h2> ...
        const domElement = domElements[index];
        domElement.children[0].textContent = categoryObject.name;

        _AddAllCardsToCategory(domElement, categoryObject)
        index ++;
    }
}

function _AddAllCardsToCategory(domElement, categoryObject){
    for(level in categoryObject.cards){
        const cardObject = categoryObject.cards[level];
        _AddCardDiv(level, domElement, cardObject);
    }
}


function _AddCardDiv(level, domElement, cardObject){
    totalCardCount++;

    // 1. create div element
    const divElement = document.createElement('div');
    divElement.setAttribute('class', 'question-card')

    // 2. create p element for text
    const pElement = document.createElement('p');
    let multiplier = doubleSwitch.checked ? 2 : 1;
    pElement.textContent = "$" + 100 * level * multiplier;

    // 3. append to DOM
    divElement.appendChild(pElement);
    domElement.appendChild(divElement);

    // 4. add event listener
    divElement.addEventListener('click', () => {
        if (bCardFlipDisabled == true) return;
      
        bCardFlipDisabled = true;

        // i. play flip sound and update DOM text
        let flip = new Audio('./audio/flip-card.wav');
        flip.play();
        prompt.textContent = cardObject.prompt; 
        answer.textContent = cardObject.answer;
        divElement.classList.add('flip');

        // ii. transition to next screen
        const delay = 800;
        const hideCardTimer = setTimeout(function(){
          divElement.style.visibility = 'hidden';
        }, delay);

        flippedCardCount++;
        if(flippedCardCount == dailyDoubleIndex){
            let timer = setTimeout(function(){
              let powerup = new Audio('./audio/daily-double.wav');
              powerup.play();
              ShowScreen(dailyDoubleScreen);
              dailyDoubleScreen.style.opacity = '0.0';
              const opacityTimer = setTimeout(function(){dailyDoubleScreen.style.opacity = '1.0';}, 30);
            }, delay);
        return;
        }

        FadeInPromptScreen(delay); 
    });
}

/* ******************************************* */
// MISC FUNCTIONS

function PlayCorrectSound(){
    let ding = new Audio('./audio/ding.mp3');
    ding.play();
}

function PlayWrongSound(){
    let negative = new Audio('./audio/negative.wav');
    negative.play();
}