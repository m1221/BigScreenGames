/* data.js holds data for game

DATA FORMAT: 

var rawCategoryName =
` // <-- these are backticks (`), NOT quotes!
1; prompt; answer
2; prompt; answer
3; prompt; answer
4; prompt; answer
5; prompt; answer
`;
*/

/*
SUMMARY OF CATEGORIES AND THEIR SUBCATEGORIES

1. History: 
    american history, basketball history, physics history, ancient civilizations, classical musicians
2. Science and Technology:
    physics, physics history, math, inventions, inventors
3. Geography:
    european countries, countries, capitals, geographical features, weather
4. Art, Music, Literature:
    authors, artists, music, classical musicians, Famous Books
5. Misc:
    sports, idioms, animals, food, clothes
6. random

*/

var rawAmericanHistory =
`
1; He was the first president of the US.; Who was George Washington?
2; After the Civil War came to an end, he was assassinated in a theater.; Who was Abraham Lincoln?
3; This document was signed in 1776.; What is the Declaration of Independence?
4; The USA is made up of this number of states.; What is 50?
5; In the August of 1945, the USA used this type of weapon twice against Japan.; What is the atomic bomb?
`;

var rawSports =
`1; Two teams of 11 play this sport on a field of grass.; What is soccer?
2; In this sport, two players use rackets to hit a ball with feathers.; What is badminton?
3; In this sport, you can drive a cart between swings.; What is golf?
4; In this sport, players wear protective equipment and try to score touchdowns.; What is American football?
5; Its players wear ice skates and use sticks to hit a small puck into a goal.; What is hockey?
`;

var rawBasketballHistory =
`
1; Another name for this player was "The Black Mamba."; Who was Kobe Bryant?
2; Some people refer to this player as "His Airness".; Who is Michael Jordan?
3; This player has scored more than 40,000 points in all regular season games.; Who is Lebron James?
4; This NBA player holds the record for the most three-pointers made in a single season.; Who is Steph Curry?
5; He is known as "the Dream".; Who is Hakeem Abdul Olajuwon?
`;

var rawPhysics =
`
1; ROYGBIV (Red, Orange, Yellow, Green, Blue, Indigo, Violet) are the colors of this beautiful thing.; What is a rainbow?
2; This phrase is represented by 'c' in the equation E = mc^2.; What is the speed of light?
3; Once upon a time it shined light. Now, not even light can escape it.; What is a black hole.
4; This word is represented by 'a' in the equation f = ma.; What is acceleration?
5; This is the flow of electrons (e-) through something.; What is electricity?
`;

var rawPhysicsHistory =
`1; This scientist came up with the formula f=ma.; Who was Isaac Newton?
2; This scientist came up with E = mc^2.; Who was Albert Einstein?"
3; He was the director of the Manhattan Project, the American effort to develop the nuclear bomb.; Who was J. Robert Oppenheimer?
4; He challenged the Church when he said that the earth rotated around the sun.; Who was Galileo?
5; This ancient scientist was given the job of determining if a crown was made of pure gold.; Who was Archimedes?
`;

var rawAncientCivilizations =
`
1; This ancient civilization developed paper, gunpowder, and the compass.; What is Ancient China?
2; This ancient civilization developed along the banks of the Nile River and is famous for its pyramids, pharaohs (god-kings), and hieroglyphics (symbols for writing).; What is Ancient Egypt?
3; This ancient civilization is credited with laying the foundations of Western civilization and is known for its mythology.; What is Ancient Greece?
4; This ancient civilization is known for its vast empire, aqueducts, roads, and its adoption of Christianity.; What is Ancient Rome?
5; The arrival of Columbus in the Americas was the beginning of the end for this central American civilization.; What is the Maya civilization?
`;

/*
rates problems(distance traveled; building a house)

*/
var rawMath=
`
1; 2, 5, 10, 17, 26, ?; What is 37?
2; Bob can build a house in 4 hours. Charlie can build one in 12. Together, they can build one in this number of hours.; What is 3?
3; In a right triangle, this is the ratio given by [opposite / adjacent].; What is tangent?
4; This is the volume of a cone with height=1/pi m, radius=3m.; What is 3m^3?
5; If you put a triangle on this shape, the sum of the triangle's angles will be greater than 180 degrees.; What is a sphere?
`;

var rawInventions =
`
1; This invention, developed by the Wright brothers in the early 1900s, made human flight possible.; What is the airplane?
2; Steve Jobs and his team revolutionized the way we interact with technology with this invention.; What is the iPhone?
3; Alexander Graham Bell brought this invention to the world in 1876 and it revolutionized communication.; What is the telephone?
4; '.... ..' - This type of message was sent over telegraphs.; What is morse code? 
5; In 1928 Alexander Flemming developed this live-saving medicine.; What is penicillin?
`;

var rawInventors =
`1; He is the father of hybrid rice.; Who is Dr. Yuan Longping?
2; The electric light bulb was developed by this hard-working inventor.; Who is Thomas Edison?
3; He invented alternating current (ac) power systems. Today, many cars have his surname.; Who is Nikola Tesla?
4; This 18th century Scottish engineer greatly improved steam engines and now his surname is used to measure 'power' (J/s) ; Who is James Watt?
5; Born in America, this scientist, inventor, writer, diplomat, and statesman, was born to a poor family but went on to dine with kings.; Who is Benjamin Franklin?
`;

var rawCountries =
`
1; This country is known for its pyramids and Sphinx.; What is Egypt?
2; It is the largest country in South America and home to the Amazon rainforest.; What is Brazil?
3; This country is home to the ruins of Machu Picchu and Inca civilization.; What is Peru?
4; It is the second-largest by area (m^2) and is known for maple syrup and hockey.; What is Canada?
5; In 2013 this country became the first country to succesfully send a spacecraft to Mars on its first attempt.; What is India?
`;

var rawEuropeanCountries =
`
1; In this country, the Eiffel tower stands.; What is France?
2; Pizza and pasta come from this boot-shaped country.; What is Italy?
3; This country is famous for its tulips, windmills, and wooden shoes.; What is the Netherlands?
4; This Scandinavian country is known for its stunning landscapes, Nobel Prizes, and the home of IKEA.; What is Sweden?
5; This potato-loving country is the birthplace of Chopin (musician) and Marie Curie (scientist).; What is Poland?
`;
var rawCapitals =
`
1; This is the capital of South Korea. ; What is Seoul?
2; This is the capital of Germany.; What is Berlin?
3; This is the capital of Spain.; What is Madrid?
4; This is the capital of Vietnam.; What is Hanoi?
5; This is the capital of Argentina. ; What is Buenos Aires?
`;

var rawGeographicalFeatures =
`
1; It carries water into oceans, seas, and lakes.; What is a river?
2; It shoots lava and hot rocks!; What is a volcano?
3; This is a naturally formed hole in a mountain.; What is a cave?
4; This is a large area of flat land.; What is a plain?
5; This geographical feature is a large, circular or oval-shaped hole in the ground formed by a volcanic eruption.; What is a crater?
`;

var rawAuthors =
`
1; He is credited with revolutionizing the English lanugage. Also, he wrote Romeo and Juliet.; Who is William Shakespeare?
2; Oliver Twist, David Copperfield, and Great Expectations.; Who is Charles Dickens?
3; This Russian author wrote many great works, including "War and Peace" and "Anna Karenina".; Who is Leo Tolstoy?
4; This British author wrote "The Hobbit" and "The Lord of the Rings".; Who is J.R.R. Tolkien?
5; This Columbian author wrote "One Hundred Years of Solitude." ; Who is Gabriel Garcia Marquez?
`;

var rawArtists =
`
1; He painted the Mona Lisa.; Who is da Vinci?
2; This French artist painted many paintings with flowers and water.; Who is Claude Monet?
3; He made a painting with melting clocks.; Who is Salvador Dali?
4; This French sculptor created "The Thinker."; Who is August Rodin?
5; She's from Mexico. She's framous for her self-portraits. She has a unibrow.; Who is Frida Kahlo?
`;

var rawMusic =
`
1; This song has the same tune as the ABC song and is about the lights in the night sky.; What is a "Twinkle-Twinkle Little Star"?
2; This instrument is long and thin. You play it by blowing air.; What is a flute?
3; This type of guitar is used to produce deep, low-pitched sounds.; What is a bass guitar?
4; This term describes the way music flows and feels.; What is rhythm?
5; This device is used by musicians to keep a steady tempo and is often marked with numbers representing beats per minute. ; What is a metronome?

`;

var rawIdioms =
`
1; The story of the shepherd boy who told lies.; What is "to cry wolf"?
2; Your stomach feels strange because you are nervous or in love.; What is "to have butterflies in your stomach"?
3; To do something "all the time."; What is "24/7"?
4; To regret something you said.; What is "put your foot in your mouth."?
5; To have a short fuse means ...; What is "to get angry easily"?
`;

var rawClassicalMusicians =
`
1; Nah-nah-nah-nah. Nah-nah-nah-nah.; Who is Beethoven?
2; His father trained him from an early age. This musical genius died at the age of 35.; Who is Mozart?
3; This Russian composer is known for his ballets, such as "Swan Lake" and "The Nutcracker".; Who is Tchaikovsky?
4; This Italian composer is famous for his "Four Seasons" violin concertos.; Who is Vivaldi?
5; This Polish composer and pianist is known as the "Poet of the Piano."; Who is Chopin?
`;

var rawWeather =
`
1; This event is a sudden, violent shaking of the ground.; What is an earthquake? 
2; This is electricity between clouds and the ground.; What is lightning?
3; This is like a typhoon, but forms on the other side of the world.; What is a hurricane?
4; This weather event is a long period of low rainfall, leading to a shortage of water.; What is a drought?
5; These tall columns of rapidly rotating air can destroy houses.; What are tornados?
`;

var rawFamousBooks =
`
1; Liu Cixin wrote this sci-fi novel, the first in a trilogy, about human encounters with an alien civilization.; What is "The Three-Body Problem"?
2; This book series follows the magical adventures of a young wizard who was orphaned by the greatest dark wizard in history.; What is "Harry Potter"?
3; This novel by Mary Shelley tells the story of a scientist who creates a monster.; What is "Frankenstein"?
4;  Albert Camus wrote this book about someone you don't know.; What is "The Stranger"?
5; This epic novel by Victor Hugo is set against the backdrop of the French Revolution.; What is "Les Miserables"?
`;

var rawAnimals =
`
1; You can keep this animal in a bowl full of water. It brings good luck.; What is a goldfish?
2; This mammal can hang upside down from trees. It has a long tongue for drinking from flowers.; What is a bat?
3; This bird of the night can rotate its head almost 360 degrees.; What is an owl?
4; This bird is famous for its ability sound like a human.; What is a parrot?
5; This lizard-like animal can change its skin color.; What is a chameleon?
`;

// 1. finish raw food
var rawFood =
`
1; This food typically has sliced meats and cheese and vegetables between two pieces of bread.; What is a sandwich?
2; This popular Japanese dish is made of rice with seafood, vegetables, and sometimes seaweed.; What is sushi?
3; This popular Mexican dish consists of a tortilla filled with meat, cheese, and other ingredients.; What is a taco?
4; This tasty Italian dessert is made of layers of wet sponge cake.; What is a tiramasu?
5; In Korean culture, this cabbage dish is served with almost every meal.; What is kimchi?
`;

var rawClothes =
`
1; This clothing item is worn around the neck for warmth.; What is a scarf?
2; This formal attire for men consists of a matching jacket and trousers, often worn with a tie.; What is a suit?
3; This clothing item is worn around the waist to hold up pants or skirts.; What is a belt?
4; This clothing item is typically worn by women and covers the upper body, often with buttons.; What is a blouse?
5; This garment is worn over other clothes to protect them from spills and stains while cooking.; What is an apron?
`;

// the code below MUST be at the end
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
