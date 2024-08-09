// THIS FILE IS FOR SETTING UP SENTENCES


let question_count = 0; // the current # of sentences that have been displayed
let question_limit = 25; // the # of sentences in the game

/*
  You can modify the sentences that will be displayed through the sourceText variable. Enter a correct sentence, a semi-colon, and finally an incorrect version of that sentence. 

  FORMAT:
    correct sentence; incorrect version
  
  The sentence that is used in the game (right vs wrong) is randomly picked each game. The order in which sentences are displayed is also random.

  Note 1: the sourceText variable uses backticks (`), NOT single quotes.  
  
  Note 2: Editing and managing sentences in a text editor is difficult.
  Instead, I keep my sentences in a spreadsheet (sentences.ods) and copy & paste them here.
*/

let sourceText = `
The place that interested me the most was the Children’s Palace.	;	The place where interested me the most was the Children’s Palace.
Do you know the man I spoke to?	;	Do you know the man whom I spoke?
This is the hotel where they stayed.	;	This is the hotel where they stayed at.
Do you know the year that the airplane was invented?	;	Do you know the year on which the airplane was invented?
That is a day I’ll never forget.	;	That is a day on which I’ll never forget.
The factory that we’ll visit next week is not far from here.	;	The factory where we’ll visit next week is not far from here.
He talked a lot about things and persons that they remembered from school.	;	He talked a lot about things and persons which they remembered from school.
This is one of the best novels that has been released this year.	;	This is one of the best novels that have been released this year.
Can you lend me the book about which you talked the other day?	;	Can you lend me the book which you talked the other day?
The pen with which he is writing is mine.	;	The pen by which he is writing is mine.
They arrived at a farmhouse, in front of which sat a small boy.	;	They arrived at a farmhouse, in front of sat a small boy.
The engineer with whom my father works is about 50 years old.	;	The engineer with which my father works is about 50 years old.
Is there anyone in your class whose family is from Malaysia?	;	Is there anyone in your class who’s family is from Malaysia?
I’m interested in all that you have said.	;	I’m interested in all what you have said.
I want to use the same dictionary as was used yesterday.	;	I want to use the same dictionary which was used yesterday.
He isn’t the man he used to be.	;	He isn’t the man which he used to be.
He is good at English, as we all know.	;	He is good at English, that we all know.
Li Ming, with whom I went to the concert, enjoyed it very much.	;	Li Ming, with who I went to the concert, enjoyed it very much.
I don’t like the novels you read.	;	I don’t like the such novels you read.
You’re the only person I’ve ever met who could do it.	;	You’re the only person whom I’ve ever met who could do it.
I lost a book whose title I can’t remember now.	;	I lost a book the title of that I can’t remember now.
Last summer, we visited Hangzhou, which is famous for West Lake.	;	Last summer, we visited Hangzhou, for that West Lake is famous.
I have bought such a watch as was advertised on TV.	;	I have bought such a watch which was advertised on TV.
I can never forget the day that we worked together.	;	I can never forget the day on what we worked together.
The way he looks at problems is wrong.	;	The way which he looks at problems is wrong.
This is the reason that he didn’t come to the meeting.	;	This is the reason for which he didn’t come to the meeting.
This machine, which I have looked after for many years, is still working perfectly.	;	This machine, I have looked after for many years, is not working anymore.
All work and no play makes Jack a dull boy.	;	All work and no play makes Jack dull boy.
Actions speak louder than words.	;	Actions speak louder than word.
Going from junior high school to senior high school is a really big challenge.	;	Going from junior high school to senior high school a really big challenge.
Distance tests a horse’s strength. Time reveals a person’s character.	;	Distance tests a horses’ strength. Time reveals a person’s character.
Look at this mess! Who’s going to clean it up?	;	Look at this mess! Whose going to clean it up?
Excuse me, I’m looking for the train station. Can you give me directions?	;	Have you prepared for the meeting tomorrow morning?
You haven’t prepared for the meeting next week, have you?	;	You haven’t prepared for the meeting next week, did you?
Next summer, I will take computer programming courses at the school.	;	Next summer, I will take computer programming course at the school.
I’m very sorry you didn’t make the football team.	;	I’m very sorry about you didn’t make the football team.
In the end, who will make the decision?	;	In the end, who will make decision?
Jerry is amazing. He can pat his head and rub his stomach at the same time.	;	Jerry is amazing. He can pat his head and rub stomach at the same time.
Did Nancy try out for our school’s badminton team last year?	;	Did Nancy try out at our school’s badminton team last year?
What do you plan to do after you finish the gao kao?	;	What do you plan do after you finish the gao kao?
In the future, people will have robot wives and robot husbands.	;	In the future, people will have robot wife and robot husband.
Quit doing your homework in my class!	;	Quit do your homework in my class!
I’m sorry you feel that way. I wish you all the best.	;	I’m sorry you feel that way. I wish all the best.
Is written English more important than spoken English?	;	Is written English more important then spoken English?
People who drop out of school make less money.	;	People who drop out school make less money.
You are not the only one who feels lonely.	;	You are not the only one who feel lonely.
`;

/*
  CLASS AND FUNCTION DEFINITIONS
*/

class Sentence{
  constructor(line){
    let split_line = line.split(';');
    let index = Math.floor(Math.random()*2);
    this.text = split_line[index];
    this.bCorrect = index == 0 ? true : false;
    this.bRevealed = false;
  }
}

function PopRandom(a){
  if(! Array.isArray(a)) return;
  if(a.length == 0) return -1;

  question_count += 1;
  return a.splice(Math.floor(Math.random()*a.length), 1)[0];
}

/*
  MAKING THE ARRAY
*/

let lines = sourceText.trim().split('\n');
let SentenceCollection = [];

for (let index = 0; index < lines.length; index++) {
  SentenceCollection.push(new Sentence(lines[index]));
}

