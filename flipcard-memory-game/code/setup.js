// setup.js depends on filepaths.js and functions.js

// 1. set up references, variables and additional functions
let gameTable = document.getElementById("game-table");
let cards = []; // hold card DOM elements
let itemPool = [];
let itemsToFilepaths = new Map();

for (const filepath of filepaths) {
    itemsToFilepaths.set(extractName(filepath), filepath);
}

for (const key of itemsToFilepaths.keys()){
    itemPool.push(key);
    itemPool.push(key);
}

// 2. create card divs and add their back-faces (sides with numbers)
for (let i = 0; i < filepaths.length * 2; i++) {
    // i. create card and backside
    let card = document.createElement("div");
    card.className = "memory-card";

    let backSide = document.createElement("div");
    backSide.className = "back-side";
    backSide.textContent = i + 1;

    // ii. get random item from pool; create frontSide img and source it
    let randomPos = (Math.floor(Math.random() * itemPool.length));
    let randomItem = itemPool[randomPos];

    let frontSide = document.createElement("img");
    frontSide.className = "front-side";
    frontSide.src = itemsToFilepaths.get(randomItem);
    card.src = frontSide.src;

    // iii. update pool
    itemPool = (itemPool.slice(0, randomPos)).concat(itemPool.slice(randomPos + 1));
    
    // iv. put elements together and add to document
    card.appendChild(backSide);
    card.appendChild(frontSide);
    gameTable.appendChild(card);
    card.addEventListener("click", flipCard);
    cards.push(card);
}


