const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 500 meters ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];
let passed = false;
let status = "FAILED";


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("What is your name? ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

for (let i = 0; i < questions.length; i++){
  tempAnswer = input.question(questions[i]);
  candidateAnswers.push(tempAnswer);
}

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

let grade = 0;

console.log("Candidate Name: " + candidateName);

  for (let i = 1; i < questions.length + 1; i++){
    let printout = `${i}) ${questions[i - 1]}
Your Answer: ${candidateAnswers[i - 1]}
Correct Answer: ${correctAnswers[i - 1]}
`;
    console.log(printout);
  if (candidateAnswers[i - 1].toUpperCase() === correctAnswers[i - 1].toUpperCase()){
    grade++;
    } 
  }

  if (grade > 3){
    passed = true;
    status = "PASSED";
  }

  let gradeQuiz = (grade / questions.length) * 100;

  let conclusion =`>>> Overall Grade: ${gradeQuiz}% (${grade} of 5 responses corerect)
>>> Status: ${status}`
  console.log(conclusion);

}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};