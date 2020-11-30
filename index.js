var readLineSync = require("readline-sync");

var userName = readLineSync.question("Please let us know your name ? ");
console.log("") //for new line break

console.log("Hi " + userName  + "  Welcome to Know Me Quiz !");
console.log("")

console.log("Lets see how much you know about this me");
console.log("")

console.log("Plase Use First letter of Answer Capital. " + "     Example : 'Chetan' ")
console.log(" ")
console.log(" ")

var highScores =[
  {
    name : "Chetan",
    score : 10
  },
  {
    name : "Tanay sir",
    score : 9.9
  }
]

var score = 0;

function footBallQuiz (question , answer){
    var footanswer = readLineSync.question(question);

    if(footanswer.toString() === answer.toString()){
      console.log("You are right ");
      score++
    }
    else {
      console.log("You are wrong!");
      console.log("But No problem ! No negative Marking");
    }

    console.log("Your current score is : " + score);
    console.log("*********");
}

var footQuestionList = [
  {
    question : "What is my Current Age ? ",
    answer : "21"
  },
  {
    question : "Which i like the most Cricket or Football ? ",
    answer : "Cricket" 
  },
  {
    question : "Where Do i live ? ",
    answer : "Mumbai"
  },
  {
    question : "Who is my Favorite Football Player ? ",
    answer : "Ronaldo"
  },
  {
    question : "Which is my favorite Tv Show? ",
    answer : "Kapil Sharma Show"
  },
  {
    question : "Which is my favorite Ipl Team ? ",
    answer : "Mumbai Indians"
  },
  {
    question : "What is my current College name  ? ",
    answer : "Rait"
  },
  {
    question : "Whether im a Batsman or a Bolwer ? ",
    answer : "Batsman"
  },
  {
    question : "What is my nickname ? ",
    answer : "Master"
  },
  {
    question : "What is my height ? ",
    answer : '5.7'
  }
]

for(var i = 0; i <  footQuestionList.length ; i++) {
  var footquestion = footQuestionList[i];
  footBallQuiz(footquestion.question, footquestion.answer);
}

console.log(" ")
console.log("Yessss ! You have completed the quiz");
console.log(" ");
console.log("Your final Score is : " + score);
console.log(" ")

console.log("Check Other High Scores : " );
for(var i = 0 ; i<highScores.length; i++){
  var highscoresit = highScores[i]
  console.log("Name :" + highscoresit.name + " "+ "  "+" Score : " + highscoresit.score);
}
