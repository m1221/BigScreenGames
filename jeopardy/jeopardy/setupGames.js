// 1. make categories; 
//    * here, we edit the categories map in-place
//    * raw data from the categories map is used to create a Category object
categories.forEach(function(value, key, map){
    map.set(key, new Category(key, value));
  });

// 2. make games from categories
/*
1. History: american history, basketball history, physics history, ancient civilizations, classical musicians
2. Science and Technology: physics, physics history, math, inventions, inventors
3. Geography: european countries, countries, capitals, geographical features, weather
4. Art, Music, Literature: authors, artists, music, classical musicians, Famous Books
5. Misc: sports, idioms, animals, food, clothes
6. random
*/

// i. american history, basketball history, physics history, ancient civilizations, classical musicians
let historyGame = new Game('History', [
  categories.get('American History'),
  categories.get('Basketball History'),
  categories.get('Physics History'),
  categories.get('Ancient Civilizations'),
  categories.get('Classical Musicians')
]);

// ii. physics, physics history, math, inventions, inventors
let sciTechGame = new Game('Science and Tech', [
  categories.get('Physics'),
  categories.get('Physics History'),
  categories.get('Math'),
  categories.get('Inventions'),
  categories.get('Inventors')
]);

// iii. european countries, countries, capitals, geographical features, weather
let geographyGame = new Game('Geography', [
  categories.get('European Countries'),
  categories.get('Countries'),
  categories.get('Capitals'),
  categories.get('Geographical Features'),
  categories.get('Weather')
]);

// iv. authors, artists, music, classical musicians, Famous Books
let musicLitArt = new Game('Music, Literature, and Art', [
  categories.get('Authors'),
  categories.get('Artists'),
  categories.get('Music'),
  categories.get('Classical Musicians'),
  categories.get('Famous Books')
]);

// v. sports, idioms, animals, food, clothes
let miscGame = new Game('Misc', [
  categories.get('Sports'),
  categories.get('Idioms'),
  categories.get('Animals'),
  categories.get('Food'),
  categories.get('Clothes')
]);

// vi. random
function GetRandomCats(){
  // 1. make bucket, an array of category names
  let keys = Array.from(categories.keys());
  let bucket = []
  for (let i = 0; i < categories.size; i++) {
    bucket.push(keys[i]);
  }

  // 2. select randomly from bucket
  function GetRandomKeyFromBucket(){
    var randomIndex = Math.floor(Math.random() * bucket.length);
    return bucket.splice(randomIndex, 1)[0];
  }

  let randomCats = [];
  for (let j = 0; j < 5; j++) {
    let randomKey = GetRandomKeyFromBucket();
    randomCats.push(categories.get(randomKey));
  }
  return randomCats;
}
let randomGame = new Game('Random', GetRandomCats());

// 3. add games to an array; this array will be used to generate buttons on the intro screen
const games = [historyGame, sciTechGame, geographyGame, musicLitArt, miscGame, randomGame];