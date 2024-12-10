// CLASSES: Game, Category, and Card

// new Game("game name", [])
class Game {
    constructor(name, categories){
        this.name = name;
        this.categories = categories;
    }
}

// Category("category name", "rawData")
class Category {
    constructor(name, rawData){
        this.name = name;
        this.cards = this.MakeCards(rawData); // see data.js for rawData format
    }

    MakeCards(rawData){
        let cards = {};
        let lines = rawData.trim().split('\n').map(function(e){return e.trim()});
        let line; //  <== I declare this here bc otherwise i get an error

        for (line of lines){
            const splitData = line.split(';').map(function(e){return e.trim()});

            if(splitData.length != 3){
                console.log('3 segments not found for: ', line)
            }
            const level = splitData[0];
            const prompt = splitData[1];
            const answer = splitData[2];
            cards[level] = new Card(prompt, answer);
        }

        return cards;
    }
}

// Card("prompt", "answer")
class Card {
    constructor(prompt, answer){
        this.prompt = prompt;
        this.answer = answer;
    }
}