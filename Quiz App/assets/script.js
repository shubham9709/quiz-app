const questions = [
  {
    questionText: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    questionText: "Arrays in JavaScript can be used to store ______.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
  {
    questionText:
      "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    options: ["1. break", "2. stop", "3. halt", "4. exit"],
    answer: "1. break",
  },
];
var players = [];
let seconds = 60;

const timer = () => {
  if (seconds > 0) {
    document.getElementById("Timer").innerHTML = seconds;
    seconds -= 1;
    setTimeout(timer, 1000); // 1 second waiting
  } else {
    document.getElementById("Timer").innerHTML = "0";
    Submit();
  }
};

var index = 0;
const displayQuestions = () => {
  setTimeout(timer, 1000);
  document.getElementById("questions").innerHTML =
    questions[index].questionText;
  document.getElementById("option1").innerHTML = questions[index].options[0];
  document.getElementById("option2").innerHTML = questions[index].options[1];
  document.getElementById("option3").innerHTML = questions[index].options[2];
  document.getElementById("option4").innerHTML = questions[index].options[3];
  if (index == 0) {
    document.getElementById("previous").style.visibility = "hidden";
  } else {
    document.getElementById("previous").style.visibility = "visible";
  }
  if (index + 1 == questions.length) {
    document.getElementById("next").style.visibility = "hidden";
  } else {
    document.getElementById("next").style.visibility = "visible";
  }
};
var ID;
var highscores = 0;
const checkAns = (e) => {
  ID = document.getElementById(`${e.target.id}`);
  if (e.target.innerHTML == questions[index].answer) {
    ID.style.border = "5px solid green";
    highscores++;
  } else {
    seconds -= 10;
    ID.style.border = "5px solid red";
  }
};

const next = () => {
  index++;
  ID.style.border = "none";
  displayQuestions();
  document.getElementById("highscore").innerHTML = highscores;
};
const prev = () => {
  index--;
  ID.style.border = "none";
  displayQuestions();
  document.getElementById("highscore").innerHTML = highscores;
};
var score;
const Submit = () => {
  document.getElementById("Timer").style.display = "none";
  document.getElementById("AllQuestions").style.display = "none";
  document.getElementById("Result-div").style.display = "block";
  document.getElementById("score").innerHTML = highscores;
};
var player = "";
function addUser(event) {
  document.getElementById("user").innerHTML = event.target.value;
}
