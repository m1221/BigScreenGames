/* 
1. LIST OF GAMES

i. History: american history, basketball history, physics history, ancient civilizations, classical musicians
ii. Science and Technology: physics, physics history, math, inventions, inventors
iii. Geography: european countries, countries, capitals, geographical features, weather
iv. Art, Music, Literature: authors, artists, music, classical musicians, Famous Books
v. Misc: sports, idioms, animals, food, clothes
vi. random
vii. school game
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

// vi. random game from "categories" object
let randomGame = new Game('Random', GetRandomCategories(categories));

// vii. random game from the "categoriesForSchool" object
let schoolGame = new Game('From our School Subjects', GetRandomCategories(categoriesForSchool));

/* *************************************************************** */

// games in the "games" array are accessible via the web app 
const games = [historyGame, geographyGame, schoolGame];

/* *************************************************************** */
// helper function
function GetRandomCategories(categoriesObj){
  // 1. make bucket, an array of category names
  let keys = Array.from(categoriesObj.keys());
  let bucket = []
  for (let i = 0; i < categoriesObj.size; i++) {
    bucket.push(keys[i]);
  }

  // 2. select randomly from bucket
  function GetRandomKeyFromBucket(){
    var randomIndex = Math.floor(Math.random() * bucket.length);
    return bucket.splice(randomIndex, 1)[0];
  }

  let randomCategories = [];
  for (let j = 0; j < 5; j++) {
    let randomKey = GetRandomKeyFromBucket();
    randomCategories.push(categoriesObj.get(randomKey));
  }

  //console.log(categoriesObj);
  return randomCategories;
}