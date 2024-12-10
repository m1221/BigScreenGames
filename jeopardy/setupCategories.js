var categories = new Map();
categories.set('American History', rawAmericanHistory);
categories.set('Sports', rawSports);
categories.set('Basketball History', rawBasketballHistory);
categories.set('Physics', rawPhysics);
categories.set('Physics History', rawPhysicsHistory);
categories.set('Ancient Civilizations', rawAncientCivilizations);
categories.set('Math', rawMath);
categories.set('Inventions', rawInventions);
categories.set('Inventors', rawInventors);
categories.set('Countries', rawCountries);
categories.set('European Countries', rawEuropeanCountries,);
categories.set('Capitals',rawCapitals);
categories.set('Geographical Features', rawGeographicalFeatures);
categories.set('Authors',rawAuthors);
categories.set('Artists',rawArtists);
categories.set('Music',rawMusic);
categories.set('Idioms', rawIdioms);
categories.set('Classical Musicians', rawClassicalMusicians);
categories.set('Weather', rawWeather);
categories.set('Famous Books', rawFamousBooks);
categories.set('Animals', rawAnimals);
categories.set('Food', rawFood);
categories.set('Clothes', rawClothes);

categories.forEach(function(value, key, map){
    map.set(key, new Category(key, value));
});

var categoriesForSchool = new Map();
categoriesForSchool.set('School Physics', rawSchoolPhysics);
categoriesForSchool.set('School History', rawSchoolHistory);
categoriesForSchool.set('School Biology', rawSchoolBiology);
categoriesForSchool.set('School Chinese', rawSchoolChinese);
categoriesForSchool.set('School Math', rawSchoolMath);
categoriesForSchool.set('School Chemistry', rawSchoolChemistry);

categoriesForSchool.forEach(function(value, key, map){
    map.set(key, new Category(key, value));
});