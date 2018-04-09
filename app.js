"use strict";

var questions = [{
  "question": "What is the smallest soil particle?",
  "option1": "a. Clay",
  "option2": "b. Loam",
  "option3": "c. Sand",
  "option4": "d. Shale",
  "answer": "1"
}, {
  "question": "Which physical decomposer is related to the crayfish?",
  "option1": "a. Millipede",
  "option2": "b. Sowbug",
  "option3": "c. Springtail",
  "option4": "d. Nematode",
  "answer": "2"  
}, {
  "question": "What item below is classified as a carbon?",
  "option1": "a. Grass Clippings",
  "option2": "b. Coffee Grounds",
  "option3": "c. Green Leaves",
  "option4": "d. Straw",
  "answer": "4"  
}, {
  "question": "At what bacteria stage does the compost pile reach 140 degrees and above?",
  "option1": "a. Mesophilic",
  "option2": "b. Thermophilic",
  "option3": "c. Psychrophilic",
  "option4": "d. Carbophilic",
  "answer": "2" 
}, {
  "question": "At what soil temperature is it too cold for anything to grow?",
  "option1": "a. 40F",
  "option2": "b. 32F",
  "option3": "c. 45F",
  "option4": "d. 35F",
  "answer": "1" 
}, {
  "question": "What carbon to nitrogen ratio is ideal in a compost pile?",
  "option1": "a. 25 parts carbon to 1 part nitrogen",
  "option2": "b. 3 parts carbon to 2 parts nitrogen",
  "option3": "c. 1 part carbon to 1 part nitrogen",
  "option4": "d. 35 parts carbon to 1 part nitrogen",
  "answer": "1" 
}, {
  "question": "Which bacteria activates after the compost pile has been turned a few times?",
  "option1": "a. Micromonospora",
  "option2": "b. Actinomycetes",
  "option3": "c. Streptomyces",
  "option4": "d. Filamentous",
  "answer": "2" 
}, {
  "question": "What is necessary to create a healthy compost pile?",
  "option1": "a. Water",
  "option2": "b. Air",
  "option3": "c. Organic Material",
  "option4": "d. All of the Above",
  "answer": "4" 
}, {
  "question": "Organisms break carbon down into what?",
  "option1": "a. Simple Sugars",
  "option2": "b. Organic Acid",
  "option3": "c. Carbon Dioxide",
  "option4": "d. All of the Above",
  "answer": "4" 
}];


//contains the index of the question
var currentQuestion = 0;
//intial score set at 0
var score = 0;
//total questions count defined in questions.js
var totalQuestions = questions.length;

  var correct = document.getElementById('score');
  var questionElement = document.getElementById('questionsList');
  var opti1 = document.getElementById('opt1');
  var opti2 = document.getElementById('opt2');
  var opti3 = document.getElementById('opt3');
  var opti4 = document.getElementById('opt4');
  var next = document.getElementById('nextbtn');
  var result = document.getElementById('resultCont');



//method to load the question
function loadQuestion(questionIndex) {
  //load question form array index
  var q = questions[questionIndex];
  //set the text for the element
  questionElement.textContent = (questionIndex + 1) + '. ' + q.question;
  correct.textContent = 'Question ' + (questionIndex + 1) + ' of 9';
  opti1.textContent = q.option1;
  opti2.textContent = q.option2;
  opti3.textContent = q.option3;
  opti4.textContent = q.option4;
}



//method to load the next question
function loadNext() {
  //checking to see if a radio button was selected
  var selectedOption = document.querySelector('input[type=radio]:checked');
  //if it is not selected (undefined) then set an alert to select an answer
  if(!selectedOption){
    alert('Pick an answer!');
    return;
  }
  //if it is selected, take the value and compare to questions array
  var answer = selectedOption.value;
  if(questions[currentQuestion].answer == answer) {
    //if question is correct, add a point
    score += 1;
  }
   selectedOption.checked  = false;
   currentQuestion ++;
   //if this is the end show this
   if(currentQuestion == totalQuestions -1) {
    next.textContent = 'Done';
  }
  //once last question is done, hide the main container and show the result
  if(currentQuestion == totalQuestions){
    result.style.display = '';
    result.textContent = 'You got ' + score + ' out of 9 correct';
    return;
  }
  //load question
  loadQuestion(currentQuestion);
  document.getElementById('answer').innerHTML = 'You have ' + score + ' out of 9 questions correct';
}

//load first question
loadQuestion(currentQuestion);

