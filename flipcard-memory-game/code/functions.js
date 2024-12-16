let bFirstCardIsFlipped = false;
let lockBoard = false;
let firstCard, secondCard;
let flip = new Audio('../audio/flip-card.wav');
let dingSounds = [new Audio('../audio/ding.mp3'), new Audio('../audio/ding-ding.mp3')];
let wrongSounds = [new Audio('../audio/wrong-1.wav'), new Audio('../audio/wrong-2.wav')];

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    let toPlay = dingSounds[Math.floor(Math.random()*2)];
    setTimeout(function(){
        toPlay.play();
    }, 800);
    
    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    let buzzSound = wrongSounds[Math.floor(Math.random()*2)];
  
    setTimeout(function(){
		buzzSound.play();
	}, 800);

  setTimeout(function() {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 1500);
}

function resetBoard() {
  [bFirstCardIsFlipped, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function extractName(filepath){
    let temp = filepath.split('/');
    let name = (temp[temp.length - 1].split('.')[0]).replace('-', ' ');
    return name.toUpperCase();
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');
    flip.play();

    if (bFirstCardIsFlipped) {
        secondCard = this;
        checkForMatch();
        return;
    }
    bFirstCardIsFlipped = true;
    firstCard = this;
}

function checkForMatch() {
    console.log(firstCard.src);
    console.log(secondCard.src);
    let bIsMatch = firstCard.src == secondCard.src;
    bIsMatch ? disableCards() : unflipCards();
}