
const menuScreen = document.getElementById('menu-screen');
const menuButtonContainer = document.getElementById('menu-buttons-container');

const gameScreen = document.getElementById('game-screen');
const boardHeader = document.getElementById('board-header');
const xButton = document.getElementById('x-button-container');

var currentGame;

let clickSound = new Audio('./audio/click.wav');
let positiveSound = new Audio('./audio/positive-sound.wav'); // reveal card sound
let wrongSound = new Audio('./audio/buzz-sound.wav');

xButton.addEventListener('click', function(){
  wrongSound.play();
});


/*  */

function Init(){

    ShowScreen(menuScreen);
    CreateGameButtons();
}

function ShowScreen(domElement){
    menuScreen.style.display = 'none';
    gameScreen.style.display = 'none';

    if(domElement) domElement.style.display = 'block';
}

function PopulateGameBoard(gameObject){
    boardHeader.textContent = gameObject.question;

    let keys = Array.from(gameObject.answers.keys());
    for(key of keys){
        let answer = gameObject.answers.get(key);
        let reward = gameObject.rewards.get(key);
        let status = gameObject.statuses.get(key);
        _PopulateCard(key, answer, reward, status);
    }
}

function _PopulateCard(id, answer, reward, status){
    let slot = document.getElementById('slot-0' + id);

    let numberTag = document.createElement('div');
    numberTag.setAttribute('class', 'number-tag');
    numberTag.textContent = id;
    
    let answerText = document.createElement('div');
    answerText.setAttribute('class', 'answer-text');
    answerText.textContent = answer;
    answerText.style.visibility = 'hidden';
    
    let rewardText = document.createElement('div');
    rewardText.setAttribute('class', 'reward-text');
    rewardText.textContent = reward;
    rewardText.style.visibility = 'hidden';
    
    slot.appendChild(numberTag);
    slot.appendChild(answerText);
    slot.appendChild(rewardText);

    slot.addEventListener('click', function(){
      let bCardStatus = currentGame.statuses.get(id);
      if(bCardStatus != 'hidden') return;
      currentGame.statuses.set(id, 'revealed');
      positiveSound.play();

      // toggle visibilities
      numberTag.style.visibility = 'hidden';
      answerText.style.visibility = 'visible';
      rewardText.style.visibility = 'visible';
    });
}

function CreateGameButtons(){
    games.forEach(gameObj => {
        let button = document.createElement('div');
        button.setAttribute('class', 'button');
        button.textContent = gameObj.name;
        menuButtonContainer.appendChild(button);
    
        // 2. add button functionality
        button.addEventListener('click', function(){
          if (!gameObj.answers){
            console.log('uh-oh, this object has no answers?');
            return;
          }
    
          clickSound.play();
          currentGame = gameObj;
          PopulateGameBoard(gameObj);
          ShowScreen(gameScreen);
          // TODO: anim out menu screen
          // TODO: anim in game screen
    
          const timer = setTimeout(function(){
            // maybe use this for effects?
          }, 1700);
    
          
        });
      });
}

Init();