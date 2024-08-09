# 1. About **'Jeopardy'**

I created this game when I was an oral English teacher for high school students in China. It's based off the popular American TV game show "Jeopardy." In Jeopardy, contestants compete each other to see who can win the most money. Money is won by answering trivia questions the fastest.

When playing this game with a large class, you can divide the class into teams.

I recommend you watch at least part of a Jeopardy episode before continuing.

This project comes pre-loaded with some games. You can edit these or even add some games yourself.

# 2. Requirements

  * A classroom computer connected to a large screen that all students can see.
  * An internet browser. (Note: I haven't tested different browsers, but I've never had any issues.)

# 3. Setup and Configuration

This section is optional. However the game is better if you add sound and customize it for your class.
  * to add sound, you'll need to know how to:
    - open files with text editors 
    - rename files
    - move files into different directories (aka folders)
  * to customize the game, you'll need basic knowledge of javascript.

## I. Adding Sound

You should provide your own audio files for game sound effects. There are many types of sound you'll need:
  1. a positive sound (to indicate a correct answer)
  1. a negative sound (to indicate an incorrect answer)
  1. a click sound
  1. a game entry sound (to be played when a new game starts)
  1. a card flip sound
  1. a power-up sound (for the daily double)

  Follow the steps below to add sound to your game.

1. Get audio files
    - If you don't have such audio files, you can browse through opengameart.org and download some for free. 
1. Move the audio files to `/jeopardy/audio/` directory.
1. Rename the files
    - Open `/jeopardy/setup.js` with a text editor.
    - Throughout `setup.js` you should see lines like this:
        ```
        let powerup = new Audio('./audio/daily-double.wav');
        ```
    - Each 'Audio' object corresponds to a sound.
    - You can either:
      * rename your audio files to match the file names in setup.js 
      * OR rename the file names in the setup.js file, e.g. 
        - if `downloaded-click.mp3` is the audio file name, edit the code.
           ```
           let clickSound = new Audio('./audio/downloaded-click.mp3');           ```

## II. Customize the Game

This project comes pre-loaded with some 'categories,' but you can also add your own data and make your own games.

### a. How to Set Up Categories

1. Open 'data.js' with a text editor.
1. See the example for 'DATA FORMAT'
1. Add your own variable with its data in that format.
    ```
    let rawYourCategory = `...`; // note: use backticks (`), NOT single quotes
    ```
1. Scroll to the bottom. You should see code like this:
    ```
    categories.set('American History', rawAmericanHistory);
    ...
    categories.set('Clothes', rawClothes);
    ```
1. Add your own sub-category:
    - `categories.set('CategoryName', rawYourCategory);`


### b. How to Set Up New Games

Games are composed of categories. You can use the categories you've added to make games. You can also mix and match with pre-loaded categories. To make a new game:

1. Open 'setupGames.js' with a text editor.
1. Make a new Game object by copying the syntax of the already established games.
1. Scroll to the bottom of the file and modify the 'games' array to include your newly created game. 

# 4. How to Play

You can play however you want. This is how I play.

## I. Setup the Classroom and the Game
* Double-click on 'jeopardy.html' to open the game.
* Divide the classroom into three to five teams.
* Explain the rules of the game in *general terms*.
  - **win condition:** get the most money by the end of the game
  - **game mechanics:**
    - a student choose questions from the game board
    - if a student answers correctly, their team gets the money
    - if a student answers incorrecty, another team can 'steal' the question
      - (**note**: the 'steal' mechanic is an important mechanic, as it will keep the students of all teams interested even when it's not their team's turn) 
* Choose a game or have the students choose a game.
* Employ a mechanism to determine the order in which teams will play (who's first, second, third, etc.).
  - I usually just go from one side of the classroom to the other.

## II. Play the First Round
* Pick a volunteer from a team. The volunteer chooses a card by indicating a sub-category and a dollar amount.
  - e.g. "American History for $300"
* If the student answers correctly:
  - award the team the dollar amount on the card
  - allow the student to pick another card (max card total: 3)
* If the student anwers incorrectly:
  - allow another team to attempt a 'steal'; if the steal attempt is successful, award the money to the team that answered the question correctly
* After a team has answered incorrectly OR they answer 3 questions correctly, move onto the next team.
* Continue in this manner until most of the cards are gone from the board. Then, continue play.

**Side Note:** A 'Double Jeopardy' screen will randomly pop up during the latter half of a game. When it pops up, I tell the students to ignore the dollar amount on the card they chose and instead make a wager of 0 to however much money their team has.

## III. Play the Second Round - Play Faster
* Refresh the web page to return to the intro menu.
* Have the next team choose a game and play first.
* Keep a fast tempo for this round. Don't give the students too much time to think about the questions. 

## IV. Play the Third Round - Double Rewards!
* Refresh the web page to return to the intro menu.
* Click on the button in the bottom right-hand corner of the screen.
  - All dollar rewards have been doubled.
* Have the team in last place choose a game and play first.

## V. Play the Final Round - Big Wager
* In the final round, teams can wager as much money as they have.
* Give all teams the same question.
* Instruct them to write their answer and a dollar amount on a small piece of paper.
* Give them about 30 seconds to a minute to turn in their papers.
