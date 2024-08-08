class Game {
    constructor(data){
        this.name = data[0];
        this.question = data[1];
        this.answers = this._ExtractDataAtIndex(data[2], 1);
        this.rewards = this._ExtractDataAtIndex(data[2], 2);
        this.statuses = this._PopulateStatuses(data[2]);
    }

    _ExtractDataAtIndex(rawData, index){
        let dataArray = rawData.trim().split('\n').map(function(e){return e.trim()});
        let formattedData = new Map();
        let item;
        let splitData;
        for (item of dataArray){
            splitData = item.split(';');
            let key = Number(splitData[0]);
            let value = splitData[index];
            formattedData.set(key, value)
        }
        return formattedData;
    }

    _PopulateStatuses(rawData){
        let dataArray = rawData.trim().split('\n');
        let formattedData = new Map();

        for (let index = 0; index < 8; index++) {
            if(dataArray[index]){
                formattedData.set(index + 1, 'hidden');
                continue;
            }
            formattedData.set(index + 1, 'empty')      ;      
        }
        return formattedData;
    }
}

var fruitGame = new Game(fruitData);
var vegetableGame = new Game(vegetableData);
var sportGame = new Game(sportData);
var animalGame = new Game(animalData);
var courseGame = new Game(courseData);
var musicGame = new Game(musicData);
var familyGame = new Game(familyData);
var campingGame = new Game(campingData);
var avengersGame = new Game(avengersData);
var hauntedHouseGame = new Game(hauntedHouseData);

var games = [fruitGame, vegetableGame, sportGame, animalGame, musicGame, courseGame, familyGame, campingGame, avengersGame, hauntedHouseGame];