// HTML INTERACTION CODE

/*  variables  */
let sentenceText = document.getElementById('sentence-text');
let currentSentence; // will hold an object of type Sentence
let game_over_man = new Audio('../audio/game-over-man.wav');
let ding1 = new Audio('../audio/ding-ding.mp3');
let ding2 = new Audio('../audio/ding-ding.mp3');
let buzz1 = new Audio('../audio/wrong-1.wav');
let buzz2 = new Audio('../audio/wrong-2.wav');
let tick1 = new Audio('../audio/tick-1.wav');
let tick2 = new Audio('../audio/tick-2.wav');
let tick3 = new Audio('../audio/tick-3.wav');
let tick4 = new Audio('../audio/tick-4.wav');
let tick5 = new Audio('../audio/tick-5.wav');
let ticks = [tick1, tick2, tick3, tick4, tick5];
let cardflip = new Audio('../audio/flip-card.wav');
let check_mark = '../img/check-mark.png';
let x_mark = '../img/x-mark.png';

/*	AUDIO FUNCTIONS  */
{
function PlayAudioDing()
{
	randAudio = Math.random() <= 0.5 ? ding1 : ding2;
	randAudio.play();
}

function PlayAudioCardFlip()
{
	cardflip.play();
}

function PlayAudioBuzz()
{
	randAudio = Math.random() <= 0.5 ? buzz1 : buzz2;
	randAudio.play();
}

function PlayAudioClockTick()
{
	ticks[Math.floor(Math.random()*ticks.length)].play();
}
}

/*	INTERACTION FUNCTIONS  */

function ListenerRevealClicked(){
  if (currentSentence.bRevealed) return;
  currentSentence.bRevealed = true;
  counter = 3;

  // button response
  const buttonResponse = setTimeout(function(){
	PlayAudioClockTick();
	UpdateCounterDisplayValue(counter);
	SetElementVisibility('counter', true);

	// continue Countdown
	let timer = setInterval(function(){
		counter -= 1;

		if (counter > 0)
		{
			PlayAudioClockTick();
			UpdateCounterDisplayValue(counter);
		} 
		else
		{
			clearInterval(timer);
			let to_play = currentSentence.bCorrect ? PlayAudioDing : PlayAudioBuzz;
			to_play();

			// update DOM
			SetElementVisibility('counter', false);
			SetElementVisibility('marker', true);
		}
	}, 1200);

  }, 150);

}

function ListenerNextClicked()
{
  currentSentence = PopRandom(SentenceCollection);

  if(!CanContinue()){
	GameOver();
	return;
  }

  UpdateSentenceInfo();
  PlayAudioCardFlip();
  SetElementVisibility('marker', false);
  SetElementVisibility('counter', false);
}

/* FUNCTIONAL FUNCTIONS */

function CanContinue()
{
	if(currentSentence == -1) return false;
	if(question_count > question_limit) return false;
	return true;
}

function UpdateSentenceInfo()
{
	// 1. update text to show how many sentences have been completed
	document.getElementById("notification-text").textContent = String(question_count) + "/" + String(question_limit);

	// 2. update sentence text
	SetSentenceText(currentSentence.text);

	// 3. update marker image
	let img_path = currentSentence.bCorrect ? check_mark : x_mark;
  	SetMarkerImage(img_path)
}

function GameOver()
{
	game_over_man.play();
	SetSentenceText('Game Over, Man!');
}

function SetElementVisibility(element_name, bVisible)
{
	let visibility = bVisible ? 'visible' : 'hidden';
	document.getElementById(element_name).style.visibility = visibility;
}

function SetMarkerImage(filepath)
{
	document.getElementById('marker').src = filepath;
}

function UpdateCounterDisplayValue(text)
{
	document.getElementById('counter').textContent = text;
}

function SetSentenceText(text)
{
	sentenceText.textContent = text;
}

/*	INIT  */

(function(){
	currentSentence = PopRandom(SentenceCollection);
	UpdateSentenceInfo();
})()

